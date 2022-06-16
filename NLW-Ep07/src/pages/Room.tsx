import { push, ref, remove, set } from "firebase/database";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { LikeSvg } from "../assets/LikeSvg";
import { LogoSvg } from "../assets/LogoSvg";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";
import { database } from "../services/firebase";
import '../style/room.scss';

type RoomParams = {
  id: string;
}

export function Room() {
  const { user } = useAuth()
  const [newQuestion, setNewQuestion] = useState('')

  const params = useParams<RoomParams>()
  const roomId = params.id
  
  const { question, title } = useRoom()

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    
    if (newQuestion.trim() === '') {
      return;
    }
    
    if (!user) {
      throw new Error('You must be logged in')
    }
    
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighLighted: false, //mostra se a pergunta foi favoritada
      isAnswered: false, //determina se ja foi respondida
    }
    console.log(question)
    
    const questionRoomId = ref(database, `rooms/${roomId}/question`);
    const questionRoom = await push(questionRoomId);
    set(questionRoom, question)

    setNewQuestion('');
  }

  async function handleLikedQuestion(questionId: string, likeId: string | undefined) {
    if (likeId) {
      await remove(ref(database, `rooms/${roomId}/question/${questionId}/likes/${likeId}`))
    } else {
      await push(ref(database, `rooms/${roomId}/question/${questionId}/likes`), {
        authorId: user?.id,
      })
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <LogoSvg className="logoRoom"/>
          <RoomCode />
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {question.length > 0 && <span>{question.length} {question.length == 1 ? 'Pergunta' : 'Perguntas'}</span>}
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="Qual é a sua pergunta?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar uma pergunta, <button>faça seu login</button></span>
            ) }
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </div>
        </form>
        <div className="question-list">
          {question.map(question => {
            return (
              <Question
                key={question.id}//algoritmo de reconciliação
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighLighted={question.isHighLighted}
              >
                <button
                  className={`like-button ${question.likeId ? 'liked' : ''}`}
                  type="button"
                  aria-label="Marcar como gostei"
                  onClick={() => handleLikedQuestion(question.id, question.likeId)}
                >
                  {question.likeCount > 0 && <span>{question.likeCount}</span>}
                  <LikeSvg className="like-svg"/>
                </button>
              </Question>
            )//podemos enviar dentro de um componente um outro component que o chamamos de children
          })}
        </div>
      </main>
    </div>
  );
};