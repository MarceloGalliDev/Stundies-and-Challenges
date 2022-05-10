import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimerUp,
  buttonTimerDown,
  buttonSoundOn,
  buttonSoundOff,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay,
  modeDark,
  modeLight,
  mainPage,
  boxAnimatedBorderControls1,
  boxAnimatedBorderControls2,
  boxAnimatedBorderControls3,
  boxAnimatedBorderCards,
  boxCornerControls,
  boxCornerButtons,
  boxContentControls1,
  boxContentControls2,
  boxContentControls3,
  boxContentCards,
  boxContentControls,
} from "./elements.js"

export default function Events({timer,sounds}) {

  function resetColors1() {
    var i
    for (i = 0; i < boxContentControls1.length; i++) {
      boxContentControls1[i].style.background = "var(--sun1)"
    }
    for (i = 0; i < boxContentControls2.length; i++) {
      boxContentControls2[i].style.background = "var(--sun1)"
    }
    for (i = 0; i < boxContentControls3.length; i++) {
      boxContentControls3[i].style.background = "var(--sun1)"
    }
  }
  function resetColors2() {
    var i
    for (i = 0; i < boxContentControls1.length; i++) {
      boxContentControls1[i].style.background = "var(--night1)"
    }
    for (i = 0; i < boxContentControls2.length; i++) {
      boxContentControls2[i].style.background = "var(--night1)"
    }
    for (i = 0; i < boxContentControls3.length; i++) {
      boxContentControls3[i].style.background = "var(--night1)"
    }
  }
  function eventBorder() {
    var i
    for (i = 0; i < boxAnimatedBorderCards.length; i++) {
      boxAnimatedBorderCards[i].style.background = "transparent"
      boxContentCards[i].style.border = "transparent"
    }
  }
  function eventBorderControls1() {
    var i
    for (i = 0; i < boxAnimatedBorderControls1.length; i++) {
      boxAnimatedBorderControls1[i].style.background = "transparent"
      boxContentControls1[i].style.border = "transparent"
    }
  }
  function eventBorderControls3() {
    var i
    for (i = 0; i < boxAnimatedBorderControls3.length; i++) {
      boxAnimatedBorderControls3[i].style.background = "transparent"
      boxContentControls3[i].style.border = "transparent"
    }
  }
  function cornerButtons1() {
    let i
    for (i = 0; i < boxCornerControls.length; i++) {
      boxCornerControls[i].style.background = "transparent"
      boxCornerControls[i].style.background = "var(--sun1)"
    }
  }
  function cornerCards1() {
    let i
    for (i = 0; i < boxCornerButtons.length; i++) {
      boxCornerButtons[i].style.background = "transparent"
      boxCornerButtons[i].style.background = "var(--sun1)"
    }
  }
  function cornerButtons2() {
    let i
    for (i = 0; i < boxCornerControls.length; i++) {
      boxCornerControls[i].style.background = "transparent"
      boxCornerControls[i].style.background = "var(--night1)"
    }
  }
  function cornerCards2() {
    let i
    for (i = 0; i < boxCornerButtons.length; i++) {
      boxCornerButtons[i].style.background = "transparent"
      boxCornerButtons[i].style.background = "var(--night1)"
    }
  }

  mainPage.style.background = "var(--sun1)"
    sounds.pressButton()
    cornerButtons1()
    cornerCards1()
    buttonPlay.addEventListener("click", () => {
      sounds.pressButton()
      timer.countdown()
      eventBorderControls1()
      setTimeout(() => boxAnimatedBorderControls1[0].style.background = "var(--animation1)")
      setTimeout(() => boxContentControls1[0].style.border = "2px solid var(--animation1)")
    })
    buttonPause.addEventListener("click", () => {
      sounds.pressButton()
      timer.countdown()
      eventBorderControls1()
      setTimeout(() => boxAnimatedBorderControls1[1].style.background = "var(--animation1)")
      setTimeout(() => boxContentControls1[1].style.border = "2px solid var(--animation1)")
    })
    buttonStop.onclick = function () {
      timer.reset()
      sounds.pressButton()
      eventBorderControls1()
      boxAnimatedBorderControls1[2].style.background = "var(--animation1)"
      boxContentControls1[2].style.border = "2px solid var(--animation1)"
      setTimeout(function () {
        boxAnimatedBorderControls1[2].style.background = "transparent"
        boxContentControls1[2].style.border = "transparent"
      }, 1000)
    }
    buttonTimerUp.onclick = function () {
      sounds.pressButton()
      boxAnimatedBorderControls2[0].style.background = "var(--animation1)"
      boxContentControls2[0].style.border = "2px solid var(--animation1)"
      setTimeout(function () {
        boxAnimatedBorderControls2[0].style.background = ""
        boxContentControls2[0].style.border = ""
      }, 1000)
  
      let newMinutes = Number(minutesDisplay.textContent)
      newMinutes += 5
      
      if (!newMinutes) {
        timer.reset()
        return
      }
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    }
    buttonTimerDown.onclick = function () {
      sounds.pressButton()
      boxAnimatedBorderControls2[1].style.background = "var(--animation1)"
      boxContentControls2[1].style.border = "2px solid var(--animation1)"
      setTimeout(function () {
        boxAnimatedBorderControls2[1].style.background = ""
        boxContentControls2[1].style.border = ""
      }, 1000)
  
      let newMinutes = Number(minutesDisplay.textContent)
      newMinutes -= 5
      
      if (!newMinutes) {
        timer.reset()
        return
      }
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    }
    buttonSoundOn.addEventListener('click', function () {
      sounds.pressButton()
      sounds.pressButtonOn()
      eventBorderControls3()
      setTimeout(() => boxAnimatedBorderControls3[0].style.background = "var(--animation1)")
      setTimeout(() => boxContentControls3[0].style.border = "2px solid var(--animation1)")
    })
    buttonSoundOff.addEventListener('click', function () {
      sounds.pressButton()
      sounds.pressButtonOff()
      eventBorderControls3()
      setTimeout(() => boxAnimatedBorderControls3[1].style.background = "var(--animation1)")
      setTimeout(() => boxContentControls3[1].style.border = "2px solid var(--animation1)")
    })
    buttonForest.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonForest()
      setTimeout(() => boxAnimatedBorderCards[0].style.background = "var(--animation1)")
      setTimeout(() => boxContentCards[0].style.border = "2px solid var(--animation1)")
    })
    buttonRain.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonRain()
      setTimeout(() => boxAnimatedBorderCards[1].style.background = "var(--animation1)")
      setTimeout(() => boxContentCards[1].style.border = "2px solid var(--animation1)")
    })
    buttonCoffeeShop.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonCoffeeShop()
      setTimeout(() => boxAnimatedBorderCards[2].style.background = "var(--animation1)")
      setTimeout(() => boxContentCards[2].style.border = "2px solid var(--animation1)")
    })
    buttonFireplace.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonFireplace()
      setTimeout(() => boxAnimatedBorderCards[3].style.background = "var(--animation1)")
      setTimeout(() => boxContentCards[3].style.border = "2px solid var(--animation1)")
    })

  modeLight.addEventListener('click', () => {
    mainPage.style.background = "var(--sun1)"
    sounds.pressButton()
    cornerButtons1()
    cornerCards1()
    resetColors1()

    buttonPlay.addEventListener("click", () => {
      sounds.pressButton()
      timer.countdown()
      eventBorderControls1()
      setTimeout(() => boxAnimatedBorderControls1[0].style.background = "var(--animation1)")
      setTimeout(() => boxContentControls1[0].style.background = "var(--sun1)")
      setTimeout(() => boxContentControls1[0].style.border = "2px solid var(--animation1)")
      boxContentControls1[0].style.background = "var(--sun1)"
    })
    buttonPause.addEventListener("click", () => {
      sounds.pressButton()
      timer.countdown()
      eventBorderControls1()
      setTimeout(() => boxAnimatedBorderControls1[1].style.background = "var(--animation1)")
      setTimeout(() => boxContentControls1[1].style.background = "var(--sun1)")
      setTimeout(() => boxContentControls1[1].style.border = "2px solid var(--animation1)")
    })
    buttonStop.onclick = function () {
      timer.reset()
      sounds.pressButton()
      eventBorderControls1()
      boxAnimatedBorderControls1[2].style.background = "var(--animation1)"
      boxContentControls1[2].style.background = "var(--sun1)"
      boxContentControls1[2].style.border = "2px solid var(--animation1)"
      setTimeout(function () {
        boxAnimatedBorderControls1[2].style.background = "transparent"
        boxContentControls1[2].style.background = "transparent"
        boxContentControls1[2].style.border = "transparent"
      }, 1000)
    }
    buttonTimerUp.onclick = function () {
      sounds.pressButton()
      boxAnimatedBorderControls2[0].style.background = "var(--animation1)"
      boxContentControls2[0].style.background = "var(--sun1)"
      boxContentControls2[0].style.border = "2px solid var(--animation1)"
      setTimeout(function () {
        boxAnimatedBorderControls2[0].style.background = "transparent"
        boxContentControls2[0].style.background = "transparent"
        boxContentControls2[0].style.border = "transparent"
      }, 1000)
  
      let newMinutes = Number(minutesDisplay.textContent)
      newMinutes += 5
      
      if (!newMinutes) {
        timer.reset()
        return
      }
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    }
    buttonTimerDown.onclick = function () {
      sounds.pressButton()
      boxAnimatedBorderControls2[1].style.background = "var(--animation1)"
      boxContentControls2[1].style.background = "var(--sun1)"
      boxContentControls2[1].style.border = "2px solid var(--animation1)"
      setTimeout(function () {
        boxAnimatedBorderControls2[1].style.background = "transparent"
        boxContentControls2[1].style.background = "transparent"
        boxContentControls2[1].style.border = "transparent"
      }, 1000)
  
      let newMinutes = Number(minutesDisplay.textContent)
      newMinutes -= 5
      
      if (!newMinutes) {
        timer.reset()
        return
      }
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    }
    buttonSoundOn.addEventListener('click', function () {
      sounds.pressButton()
      sounds.pressButtonOn()
      eventBorderControls3()
      setTimeout(() => boxAnimatedBorderControls3[0].style.background = "var(--animation1)")
      setTimeout(() => boxContentControls3[0].style.background = "var(--sun1)")
      setTimeout(() => boxContentControls3[0].style.border = "2px solid var(--animation1)")
    })
    buttonSoundOff.addEventListener('click', function () {
      sounds.pressButton()
      sounds.pressButtonOff()
      eventBorderControls3()
      setTimeout(() => boxAnimatedBorderControls3[1].style.background = "var(--animation1)")
      setTimeout(() => boxContentControls3[1].style.background = "var(--sun1)")
      setTimeout(() => boxContentControls3[1].style.border = "2px solid var(--animation1)")
    })
    buttonForest.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonForest()
      setTimeout(() => boxAnimatedBorderCards[0].style.background = "var(--animation1)")
      setTimeout(() => boxContentCards[0].style.border = "2px solid var(--animation1)")
    })
    buttonRain.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonRain()
      setTimeout(() => boxAnimatedBorderCards[1].style.background = "var(--animation1)")
      setTimeout(() => boxContentCards[1].style.border = "2px solid var(--animation1)")
    })
    buttonCoffeeShop.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonCoffeeShop()
      setTimeout(() => boxAnimatedBorderCards[2].style.background = "var(--animation1)")
      setTimeout(() => boxContentCards[2].style.border = "2px solid var(--animation1)")
    })
    buttonFireplace.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonFireplace()
      setTimeout(() => boxAnimatedBorderCards[3].style.background = "var(--animation1)")
      setTimeout(() => boxContentCards[3].style.border = "2px solid var(--animation1)")
    })
  })


  modeDark.addEventListener('click', () => {
    mainPage.style.background = "var(--night1)"
    sounds.pressButton()
    cornerButtons2()
    cornerCards2()
    resetColors2()

    buttonPlay.addEventListener("click", () => {
      timer.countdown()
      sounds.pressButton()
      eventBorderControls1()
      setTimeout(() => boxAnimatedBorderControls1[0].style.background = "var(--animation2)")
      setTimeout(() => boxContentControls1[0].style.background = "var(--night1)")
      setTimeout(() => boxContentControls1[0].style.border = "2px solid var(--animation2)")
    })
    buttonPause.addEventListener("click", () => {
      timer.countdown()
      sounds.pressButton()
      eventBorderControls1()
      setTimeout(() => boxAnimatedBorderControls1[1].style.background = "var(--animation2)")
      setTimeout(() => boxContentControls1[1].style.background = "var(--night1)")
      setTimeout(() => boxContentControls1[1].style.border = "2px solid var(--animation2)")
    })
    buttonStop.onclick = function () {
      timer.reset()
      sounds.pressButton()
      eventBorderControls1()
      boxAnimatedBorderControls1[2].style.background = "var(--animation2)"
      boxContentControls1[2].style.background = "var(--night1)"
      boxContentControls1[2].style.border = "2px solid var(--animation2)"
      setTimeout(function () {
        boxAnimatedBorderControls1[2].style.background = "transparent"
        boxContentControls1[2].style.background = "transparent"
        boxContentControls1[2].style.border = "transparent"
      }, 1000)
    }
    buttonTimerUp.onclick = function () {
      sounds.pressButton()
      boxAnimatedBorderControls2[0].style.background = "var(--animation2)"
      boxContentControls2[0].style.background = "var(--night1)"
      boxContentControls2[0].style.border = "2px solid var(--animation2)"
      setTimeout(function () {
        boxAnimatedBorderControls2[0].style.background = "transparent"
        boxContentControls2[0].style.background = "transparent"
        boxContentControls2[0].style.border = "transparent"
      }, 1000)
  
      let newMinutes = Number(minutesDisplay.textContent)
      newMinutes += 5
      
      if (!newMinutes) {
        timer.reset()
        return
      }
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    }
    buttonTimerDown.onclick = function () {
      sounds.pressButton()
      boxAnimatedBorderControls2[1].style.background = "var(--animation2)"
      boxContentControls2[1].style.background = "var(--night1)"
      boxContentControls2[1].style.border = "2px solid var(--animation2)"
      setTimeout(function () {
        boxAnimatedBorderControls2[1].style.background = "transparent"
        boxContentControls2[1].style.background = "transparent"
        boxContentControls2[1].style.border = "transparent"
      }, 1000)
  
      let newMinutes = Number(minutesDisplay.textContent)
      newMinutes -= 5
      
      if (!newMinutes) {
        timer.reset()
        return
      }
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    }
    buttonSoundOn.addEventListener('click', function() {
      sounds.pressButton()
      sounds.pressButtonOn()
      eventBorderControls3()
      setTimeout(() => boxAnimatedBorderControls3[0].style.background = "var(--animation2)")
      setTimeout(() => boxContentControls3[0].style.background = "var(--night1)")
      setTimeout(() => boxContentControls3[0].style.border = "2px solid var(--animation2)")
    })
    buttonSoundOff.addEventListener('click', function () {
      sounds.pressButton()
      sounds.pressButtonOff()
      eventBorderControls3()
      setTimeout(() => boxAnimatedBorderControls3[1].style.background = "var(--animation2)")
      setTimeout(() => boxContentControls3[1].style.background = "var(--night1)")
      setTimeout(() => boxContentControls3[1].style.border = "2px solid var(--animation2)")
    })
    buttonForest.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonForest()
      setTimeout(() => boxAnimatedBorderCards[0].style.background = "var(--animation2)")
      setTimeout(() => boxContentCards[0].style.border = "2px solid var(--animation2)")
    })
    buttonRain.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonRain() 
      setTimeout(() => boxAnimatedBorderCards[1].style.background = "var(--animation2)")
      setTimeout(() => boxContentCards[1].style.border = "2px solid var(--animation2)")
    })
    buttonCoffeeShop.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonCoffeeShop()
      setTimeout(() => boxAnimatedBorderCards[2].style.background = "var(--animation2)")
      setTimeout(() => boxContentCards[2].style.border = "2px solid var(--animation2)")
    })
    buttonFireplace.addEventListener("click", () => {
      eventBorder()
      sounds.pressButton()
      sounds.pressButtonFireplace()
      setTimeout(() => boxAnimatedBorderCards[3].style.background = "var(--animation2)")
      setTimeout(() => boxContentCards[3].style.border = "2px solid var(--animation2)")
    })
  })
}
