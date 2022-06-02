<<Pacotes de instalações>>
- npm init -y = para criar arquivo package.json, iniciando 
- npm i cors = forma de fazer um controle de segurança no back-end, para que front-end não permitidos tenham acesso ao back
- npm i @types/cors -D

- npm i typescript @types/node ts-node-dev = usado para trazer a tipagem do node, e o pacote ts-node-dev é o mosmo que nodemoon(live reloader)

- npx tsc --init = para criar arquivo typescript.json

<<Express biblioteca>>
- Lida com diferentes rotas:
- npm i express
- npm i -D @types/express = para incluir junto com TypeScript é necessário

<<SQLite biblioteca>>
- Não é necessário instalar nada, salva como arquivo


<<Prisma ORM>>
- npm i prisma -D (quando utilizamos o -D é como dependencia de desenvolvimento, ou seja, quando for para produção não será necessário)
- npm i @prisma/client
- npx prisma init = para criar o arquivo .env (variaveis de ambiente) e pasta prisma
- Facilitao trabalho com banco de dados, ele nos ajuda a fazer comandos para o back-end dentro do database, ele converte código SQL para JavaScript
- Faz o meio de campo entre SQLite e aplicação

- npx prisma migrate dev = para rodar o servidor no ambiente de dev
- npx prisma studio = para abrir o db em ambiente de viewer

- métodos de desenvolver dados - post, get, delete, put, patch...

//GET = Buscar informações
//POST = Cadastrar informações
//PUT = Atualizar informações de uma entidade
//PATCH = Atualizar uma informação única de uma entidade
//DELETE = Deletar  informação

<<nodemailer>>
- npm install nodemailer = para envio de emails
- npm install @types/nodemailer -D = dependencia de dev

<<Migrations>>
- Seu conceito é uma forma de manter um versionamento do banco de dados, sempre que atualizar a versão cria-se um novo migration

<<SOLID>>
- 5 principios de test:

 1 - Single responsibility principle
 2 - Open/Closed principle
 3 - Liskov substitution principle
 4 - Interface segregation principle
 5 - Dependency inversion principle

 1 = Cada classe tem uma responsabilidade única, não devemos ter classes ou funções que executam mais de uma regra de negócio
 2 = Basicamente as classes da nossa aplicação devem ser abertas para extensão mais fechadas para modificação
 3 = Liskov determina que nos devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando
 4 = Devido a tipagem, tentar separar as interfaces o máximo possível
 5 = Uma forma de inverter as dependências, tratativa de dependências ao contexto externo

<<JEST>><<SWC>>
- npm install jest -D = para testes
- npm install ts-node -D
- npm i -D jest @swc/core @swc/jest
- npm i @types/jest -D = tipagem do jest
- coverage = relatório do que ja foi testado e o que não foi
- clear mock = limpar memória antes de cada teste
- JEST por padrão so entende arquivos JS
- submit-feedback-use-case.spec = nome do arquivo pode ser .spec ou .test.
- os testes tem a função para ter confiança e segurança na funcionalidade do app.
- o Jest cria uma pasta de coverage, onde dentro possui um arquivo index.html, abrindo esse link podemos observar que nele há pontos citados onde o teste nunca foi tocado.