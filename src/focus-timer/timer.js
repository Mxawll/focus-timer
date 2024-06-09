import state from "./state.js";
import * as element from "./elements.js"
import { resetTimer } from "./actions.js";
import { kichenTimer } from "./sounds.js";

function countDown() {
   clearTimeout(state.countDownId)
   if (!state.isRunning) {
      return
   }
   
   let minutes = Number(element.minutes.textContent)
   let seconds = Number(element.seconds.textContent)

   seconds--

   if (seconds < 0) {
      seconds = 59
      minutes--
   }

   if (minutes < 0) {
      resetTimer()
      kichenTimer.play()
      return
   }

   updateDisplay(minutes, seconds)
   state.countDownId = setTimeout(countDown, 1000)
}

function updateDisplay(minutes, seconds) {
   minutes = minutes ?? state.minutes
   seconds = seconds ?? state.seconds

   element.minutes.textContent = String(minutes).padStart(2, "0")
   element.seconds.textContent = String(seconds).padStart(2, "0")
}

export { countDown, updateDisplay }