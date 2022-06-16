import { useNavigate } from "react-router-dom";
import { GoogleIncoSvg } from "../assets/GoogleIconSvg";
import { IllustrationSvg } from "../assets/IllustrationSvg";
import { LogoSvg } from "../assets/LogoSvg";
import { Button } from "../components/Button";
import '../style/auth.scss';
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { child, get, onValue, ref } from "firebase/database";
import { database } from "../services/firebase";


export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
     await signInWithGoogle();
    }//so vai executar o código abaixo se o async/await tiver uma resposta de sucess.
    navigate('/rooms/new')
  };

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    };

    const roomRef = await get(ref(database, `rooms/${roomCode}`))
    
    if (!roomRef.exists()) {
      alert('Room does not exists.')
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.')
      return;
    }
    navigate(`rooms/${roomCode}`)
    
    // onValue(ref(database, `rooms/${roomCode}`), (room) => {
    //   if (!room.exists()) {
    //     alert('Room does not exists.')
    //   } else {
    //     navigate(`/rooms/${roomCode}`)
    //   }
    //   return;
    // })
    
    // onValue(ref(database, `rooms/${roomCode}`), (room) => {
    //   if (room.val(endedAt)) {
    //     alert('Room already closed.')
    //   }
    //   return;
    // })
  }//em qualquer formulario é necessário o uso do preventDefault, para tirar o padrão de envio dos formulários

  return (
    <div id="page-auth">
      <aside>
        <IllustrationSvg />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <LogoSvg className="logo-svg"/>
          <button className="create-room" onClick={handleCreateRoom}>
            <GoogleIncoSvg className="create-room-google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}