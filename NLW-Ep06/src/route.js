
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

//direcionamento da rota no navegador, após a / será iniciado o index
//estamos renderizando a mesma page index, porém com páginas diferentes
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

//Formato que o formulário de dentro da modal tem que passar a informação
//Estamos passando o question controller para a nossa rota POST
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route

//req e res = requisição e resposta
//:room - passando variáveis para a rota é necessário o uso do ':' para executar
//route.post('/room/:room/2:question/:action') - está falando para o express que a gente não sabe o que será inserido no ':'
//GET = pegar o conteúdo
//POST = enviar o conteúdo
//req e res é recebido implicitamente pelo Node dentro do express