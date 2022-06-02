const sqlite3 = require("sqlite3");
const { open } = require("sqlite")//quando utilizado {}, o JS vai dentro do sqlite e busca somente a função open, e salva em uma variável

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',//criando o banco de dados com nome de rocketq.sqlite
        driver: sqlite3.Database,//driver é quem comanda a database
    });
