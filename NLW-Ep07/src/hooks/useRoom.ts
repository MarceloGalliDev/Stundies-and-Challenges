import { ref, onValue, off } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type RoomParams = {
  id: string;
}

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighLighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

type FirebaseQuestions = Record<string, { 
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighLighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>

export function useRoom() {
  const { user } = useAuth();
  const [question, setQuestion] = useState<Question[]>([])
  const [title, setTitle] = useState('')
  
  const params = useParams<RoomParams>()
  const roomId = params.id

  useEffect(() => {
    const roomRef = ref(database, `rooms/${roomId}`)

    //return onValue(roomRef, room => {
    onValue(roomRef, room => {
      const databaseRoom = room.val();
      
      const firebaseQuestions: FirebaseQuestions = databaseRoom.question ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighLighted: value.isHighLighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,//podem haver likes vazios.
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId == user?.id)?.[0]//?.[0] significa que se não satisfazer a ação voltar nulo, ele não vai acessar nem a posição [0]
          //vai percorrer o array ate que seja satisfeito a situação que eu indicar, e retorna um boleano.(find() retorna o objeto que foi encontrado).
          //user?.id é uma dependência do useEffect.
        }
      });
      setTitle(databaseRoom.title)
      setQuestion(parsedQuestions)
    });
    return () => {
      off(roomRef)
    }
  }, [roomId, user?.id]);//carrega a página toda vez que é alterado o valor dessas propriedades.
  
  return { title, question }
}