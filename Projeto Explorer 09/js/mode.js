export class Mode {
  toggle = document.getElementById('toggle');

  modeTheme1() {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('lightHome')
    })
  }

  modeTheme2() {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('universe')
      document.body.classList.toggle('lightUniverse')
    })
  }

  modeTheme3() {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('exploration')
      document.body.classList.toggle('lightExploration')
    })
  }

  changeBg() {
    const { pathname } = window.location;
    const { body } = document;

    switch (pathname) {
      case '/universe':
        body.className = 'universe'
        this.modeTheme2()
        break
      case '/exploration':
        body.className = 'exploration'
        this.modeTheme3()
        break
      default:
        body.className = ''
        break
    }
  }
}

