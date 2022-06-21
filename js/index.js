import Timer from './timer.js'
import Controls from './controls.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonTimer = document.querySelector('.timer')
const buttonSoundOn = document.querySelector('.volume')
const buttonSoundOff = document.querySelector('.mute')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonTimer,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset,
  minutes
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countDown()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.resetDisplay()
})

buttonSoundOff.addEventListener('click', function () {
  controls.soundOff()
})

buttonSoundOn.addEventListener('click', function () {
  controls.soundOn()
})

buttonTimer.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.resetDisplay()
  }

  minutes = newMinutes
  timer.updateDisplay(minutes, 0)
})
