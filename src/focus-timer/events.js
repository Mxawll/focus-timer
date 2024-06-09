import state from "./state.js";
import { controls } from "./elements.js";
import { updateDisplay } from "./timer.js";
import * as actions from "./actions.js"
import * as element from "./elements.js"

function registerControls() {
   controls.addEventListener("click", event => {
      const action = event.target.dataset.action
      if (typeof actions[action] != "function") {
         return;
      }

      actions[action]()
   })
}

function setMinutes() {
   const minutes = element.minutes

   minutes.addEventListener("focus", () => {
      minutes.textContent = ""
   })

   minutes.onkeypress = event => /\d/.test(event.key)

   minutes.addEventListener("blur", event => {
      let time = event.currentTarget.textContent
      // time = time > 60 ? 60 : time
      time = Math.min(60, time)

      state.minutes = time
      state.seconds = 0

      updateDisplay()

      minutes.removeAttribute("contenteditable")
   })
}

export { registerControls, setMinutes }