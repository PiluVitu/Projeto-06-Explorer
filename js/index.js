import Timer from './timer.js'
import Controls from './controls.js'
import {
  buttonPlay,
  buttonPause,
  buttonTimer,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

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
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countDown()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
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

  timer.updateDisplay(newMinutes, 0)
  timer.updateNewMinutes(newMinutes)
})
