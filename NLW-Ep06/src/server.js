const express = require('express')
const route = require('./route')//como foi um arquivo que foi criado, é necesario o uso do ./route.
const path = require('path')

const server = express()

//estamos direcionando ao ejs o view engine, responsavel pelo view sera o ejs
server.set('view engine', 'ejs')

//conteudo estático e a pasta que esta contido este conteúdo
server.use(express.static("public"))

//path pega o caminho da pasta do projeto no meu pc, join é o juntar, __dirname é para captura do nome da pasta que esta o projeto e o transforma-lo (.../src/views)
server.set('views', path.join(__dirname, 'views'))

//midwear - é o intermédio de tudo que entra de dados, ou seja, os dados passa pelo midwear e continua o tramite dos dados
//pega o conteúdo do formulário decodifica e passa para o controler
server.use(express.urlencoded({extended: true}))

server.use(route)

//de dentro do express
server.listen(3000, () => console.log('rodando'))


