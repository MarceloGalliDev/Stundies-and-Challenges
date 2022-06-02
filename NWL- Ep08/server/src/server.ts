import express from 'express'
import { routes } from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running!')
});

//GET = Buscar informações
//POST = Cadastrar informações
//PUT = Atualizar informações de uma entidade
//PATCH = Atualizar uma informação única de uma entidade
//DELETE = Deletar  informação

/* Para acessos permitidos é necessário o código abaixo
app.use(cors({
  origin: 'http://localhost:3000
}));
*/