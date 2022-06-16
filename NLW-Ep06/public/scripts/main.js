import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check") 

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})
//captura dos botões com a class check dentro da classe actions
//percorrer todos os botões um a um, usando o forEach
//adicionando a escuta usando o addEventListener
//ele adiciona cada rodada que encontra um button no paramêtro da arrow function
//pegar quando o marcar como lido for clicado

/*Quando o botão delete for clicado ele abre a modal */
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})
//criamos a variável check que recebe o false
//abrir modal quando for clicado o excluir
//como nesse pedaço de código existe um handleClick com passagem de parâmetro, é necessário a inclusão de uma arrow function recebendo o parâmetro

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    
    //abrir modal
    modal.open()
}

//adicionado no lugar do arrow function do addEventListener
//event passado como parâmetro, vem do arrow function do addEventListener
//usamos template strings para concatenar os texto, e o toLowerCase() para deixar minúscula a palavra que difere o texto do modalDescription
//na linha check ?..., realizamos a troca da cor do botão adicionando o classList e removendo caso seja verdadeiro
//event.preventDefault() usado para remover a função de alteração de URL da tag a
//dataset.id - para capturar o dado do HTML em string
//form.setAttribute('action', `/room/${roomId}/:question/${slug}`) - está atribuindo ao atributo action do form a linha de comando para o POST do formulário ser enviado para o back-end

//o parâmetro event, ele carrega todo evento ocorrido com o click, por exemplo na tag <a>, ele vai carregar todo evento dentro do <a>, como img os id, class, ai nesse momento é só lançar um target para selecionar o que deseja
