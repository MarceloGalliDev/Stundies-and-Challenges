const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true
        while(isRoom){
            /* Gera o numero da sala */
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()
            }//criando números de id random, toString faz com que os números não se somem, eles se concatenam via string

            /* Verificar se esse numero ja existi */
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)
            //ele traz todos os dados, posso colocar a chave que conte o DB e usar , caso queira mais de um
            //some, função que percorre um array, se a condição foi confirmada ele retorna um TRUE
            if(!isRoom){
                /* Inseri a sala no banco */
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VAlUES (
                    ${parseInt(roomId)},
                    "${pass}"
                )`)
            }
        }         

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        //trazendo questoes que seja igual ao id da room
        //WHERE room, é para trazer somente as perguntas daquele ID para a sala
        //esse comando abaixo cria um array com as questôes = tabela do database
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions

        if(questions.length ==0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }

        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})
    },

    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}

//let roomId = ''

//async open,abre o banco de dados e coleta todas informações e traz para o front-end