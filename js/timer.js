export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls,
  minutes
}) {
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function resetDisplay() {
    clearTimeout(timerTimeOut)
    updateDisplay(minutes, 0)
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0) {
        resetControls()
        return
      }

      if (seconds <= 0) {
        seconds = 2
        --minutes
      }
      updateDisplay(minutes, seconds - 1)

      countDown()
    }, 1000)
  }

  return { countDown, resetDisplay, updateDisplay}
}
