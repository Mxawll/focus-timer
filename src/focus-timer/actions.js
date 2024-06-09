import state from "./state.js"
import * as timer from "./timer.js"
import * as element from "./elements.js"
import * as sounds from "./sounds.js"

function toggleRunnig() {
   state.isRunning = !state.isRunning
   document.documentElement.classList.toggle("running")
   timer.countDown()

   sounds.buttonPress.play()
}

function setTimer() {
   element.minutes.setAttribute("contenteditable", true)
   element.minutes.focus()
}

function resetTimer() {
   state.isRunning = false
   document.documentElement.classList.remove("running")
   timer.updateDisplay()

   sounds.buttonPress.play()
}

function toggleMusic() {
   state.isMuted = !state.isMuted
   document.documentElement.classList.toggle("music-on")

   if (!state.isMuted) {
      sounds.bgAudio.play()
      return;
   }

   sounds.bgAudio.pause()
}

export { toggleRunnig, setTimer, resetTimer, toggleMusic }