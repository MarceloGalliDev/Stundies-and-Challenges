const Database = require('../db/config')

module.exports = {
    async index(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password
        
        /* Verificar se a senha está correta */
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        //get traz somente um elemento da databasa, ou um elemento do array
        if(verifyRoom.pass == password){
            if(action == "delete"){

                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            }else if(action == "check"){
            //atualizando a read, alterando o campo dentro do database para 1
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)

            }
            res.redirect(`/room/${roomId}`)
        } else{
            res.render('passincorrect', {roomId: roomId})
        }


    },

    async create(req, res){
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )VALUES(
            "${question}",
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)
    }
}

//index(req, res) - esta vindo lá da rota do route.js
//req.params.room - está pegando o parâmetro vindo da rota
//password está sendo capturado pelo input, o password correspondente na linha const password = req.body.password = este aqui é o id="password", do input

//console.log(`room = ${roomId}, question = ${questionId}, action = ${action}, password = ${password}`)

//quando incluir text em um banco de dados, é necessário que esse esteja envolto de aspas duplas (" ")