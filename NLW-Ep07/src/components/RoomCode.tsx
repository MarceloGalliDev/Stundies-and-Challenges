import { useParams } from "react-router-dom";
import { CopySvg } from "../assets/CopySvg";
import '../style/room-code.scss';



type RoomParams = {
  id: string;
}

export function RoomCode() {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText('code')
  }
  const params = useParams<RoomParams>();

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <CopySvg />
      </div>
      <span>{params.id}</span>
    </button>
  )
}