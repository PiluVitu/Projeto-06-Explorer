import Timer from './timer.js'
import Controls from './controls.js'
import Sounds from './sounds.js'
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

const sound = Sounds()

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countDown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.resetDisplay()
  sound.pressButton()
})

buttonSoundOff.addEventListener('click', function () {
  controls.soundOff()
  sound.pressButton()
  sound.bgAudioPressOff()
})

buttonSoundOn.addEventListener('click', function () {
  controls.soundOn()
  sound.pressButton()
  sound.bgAudioPressOn()
})

buttonTimer.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.resetDisplay()
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateNewMinutes(newMinutes)
  sound.pressButton()
})
