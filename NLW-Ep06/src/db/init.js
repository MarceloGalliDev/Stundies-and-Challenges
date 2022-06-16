const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}

initDb.init();

//vai rodar fora do projeto, somente para gerenciar o banco de dados
//async e await - funções assíncronas, await esta comunicando o JS que rode completamente a função e aguarde a resposta para passar para próxima linha do código

//comandos SQL sempre em maiúscula
//INTERGER = inteiro no SQL
//TEXT = caracter no SQL
//PRIMARY KEY = um único elemento nessa tabela pode ter um ID, único ID na tabela
//AUTOINCREMENT = sempre que existir um número, ele incrementa automaticamente, para não repetir o ID de uma mesma sala