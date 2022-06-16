import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
export default App;


//primeira {} é para indicar a criação de um cód do JS, o segundo { } é para indicar a criação de um objeto
//se estou enviando um objeto de parametro, tenho que dindicar ele como objeto no const

//useEffect é um hook para efeitos colaterais, disparar uma função quando algo acontecer. Sempre que função será executada e quando será excutada = useEffect(() => []), sempre retornará um vetor, se nesse vetor [] eu deixar vazio, ele executa uma única vez

//onAuthStateChanged() é igual um EventListener, fica ouvindo o evento

//Toda vez que você tiver um EventListener em um useEffect para autenticação, é obrigatório que utilize unsubscribe, para não manter a procura pelos dados do usuário pelo useState e proclamar erros na aplicação