import {volumeControl} from "./elements.js"

export default function Sounds() {
  
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestAudio = new Audio("sounds/forest.wav")
  const rainAudio = new Audio("sounds/rain.wav")
  const coffeeShopAudio = new Audio("sounds/coffeeshop.wav")
  const fireplaceAudio = new Audio("sounds/fireplace.wav")


  forestAudio.loop = true
  rainAudio.loop = true
  coffeeShopAudio.loop = true
  fireplaceAudio.loop = true

  function volumeSet() {
    let i
    for (i = 0; i < volumeControl.length; i++) {
      volumeControl[i].addEventListener("mousemove", () => {
        forestAudio.volume = volumeControl[0].value / 100
        rainAudio.volume = volumeControl[1].value / 100
        coffeeShopAudio.volume = volumeControl[2].value / 100
        fireplaceAudio.volume = volumeControl[3].value / 100
      })
    }
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }
  
  function pressButtonForest() {
    forestAudio.play()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()
  }
  
  function pressButtonRain() {
    forestAudio.pause()
    rainAudio.play()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()
  }
  
  function pressButtonCoffeeShop() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.play()
    fireplaceAudio.pause()
  }
  
  function pressButtonFireplace() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.play()
  }

  function pressButtonOff() {
    forestAudio.muted = true
    rainAudio.muted = true
    coffeeShopAudio.muted = true
    fireplaceAudio.muted = true
  }

  function pressButtonOn() {
    forestAudio.muted = false
    rainAudio.muted = false
    coffeeShopAudio.muted = false
    fireplaceAudio.muted = false
  }

  return {
    volumeSet,
    pressButton,
    timeEnd,
    pressButtonForest,
    pressButtonRain,
    pressButtonCoffeeShop,
    pressButtonFireplace,
    pressButtonOff,
    pressButtonOn,
  }
}