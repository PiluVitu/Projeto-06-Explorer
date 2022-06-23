export default function Sounds() {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const bgAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
  )

  

  function pressButton() {
    buttonPressAudio.play()
    buttonPressAudio.volume = 0.3
  }
  function timeEnd() {
    kitchenTimer.play()
    buttonPressAudio.volume = 0.5
  }
  function bgAudioPressOn() {
    bgAudio.pause()
  }
  function bgAudioPressOff() {
    bgAudio.play()
    bgAudio.loop = true
    buttonPressAudio.volume = 0.5
  }


  return {
    pressButton,
    timeEnd,
    bgAudioPressOn,
    bgAudioPressOff
  }
}
