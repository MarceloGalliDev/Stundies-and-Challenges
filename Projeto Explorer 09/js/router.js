export class Router {
  routes = {};
//identificação que é um objeto e não um array
  add(routeName, page) {
    this.routes[routeName] = page
  }
  //vindo la do main.js
  //adicionando o caminho do router

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.handle()
  }
  //captura do evento da tela
  //desativa as funções padrões automáticas
  //captura do histórico e direciona a página

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {document.querySelector('#app').innerHTML = html})
  }
}