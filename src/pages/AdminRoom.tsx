import { ref, remove, update } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { AnswerSvg } from "../assets/AnswerSvg";
import { CheckSvg } from "../assets/CheckSvg";
import { DeleteSvg } from "../assets/DeleteSvg";
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

export function AdminRoom() {
  const navigateRoom = useNavigate();
  const params = useParams<RoomParams>()
  const roomId = params.id
  const { question, title } = useRoom()

  async function handleEndRoom(endedAt: string) {
    await update(ref(database, `rooms/${roomId}`), { endedAt: new Date() });
    navigateRoom('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (confirm('Tem certeza que deseja excluir esta pergunta?')) {
      await remove(ref(database, `rooms/${roomId}/question/${questionId}`))
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await update(ref(database, `rooms/${roomId}/question/${questionId}`), { isAnswered: true });
  }

  async function handleHighlightQuestion(questionId: string) {
    await update(ref(database, `rooms/${roomId}/question/${questionId}`), { isHighLighted: true });
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <LogoSvg className="logoRoom"/>
          <div>
            <RoomCode />
            <Button isOutlined onClick={() => handleEndRoom}>Encerrar Sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {question.length > 0 && <span>{question.length} {question.length == 1 ? 'Pergunta' : 'Perguntas'}</span>}
        </div>

        
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
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <CheckSvg />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <AnswerSvg />
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <DeleteSvg />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  );
};

function useNavigation() {
  throw new Error("Function not implemented.");
}

//instalar pacote hoisting, npm install -g firebase-tools