import { Link, useNavigate } from "react-router-dom";
import { IllustrationSvg } from "../assets/IllustrationSvg";
import { LogoSvg } from "../assets/LogoSvg";
import { Button } from "../components/Button";
import '../style/auth.scss';
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { push, ref, set } from "firebase/database";
import { database } from "../services/firebase";



export function NewRoom() {
  const { user } = useAuth();
  const navigate = useNavigate()
  const [newRoom, setNewRoom] = useState('') //sempre inicializar o useState com a tipagem que a newRoom será utilizada, ele ja reconhece.

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;//.trim() elimina os espaços a direita e esquerda da palavra
    }

    const firebaseRoomsId = ref(database, 'rooms');
    const firebaseRoom = await push(firebaseRoomsId);
    set(firebaseRoom, { 
      authorId: user?.id,
      title: newRoom,
    })

    navigate(`/rooms/${firebaseRoom.key}`)

  }

  return (
    <div id="page-auth">
      <aside>
        <IllustrationSvg />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <LogoSvg className="logo-svg" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

//user?.name = é pelo motivo dele também ser undefined