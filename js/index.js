import Events from './events.js'
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

Events({ timer, sound, controls })
