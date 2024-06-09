const toggleMode = document.getElementById("toggle-mode")
const html = document.documentElement
const span = toggleMode.querySelector("span")

toggleMode.addEventListener("click", () => {
   const isLight = html.classList.contains("light")
   const mode = isLight ? "Light" : "Dark"
   
   span.textContent = `Ativar ${mode} mode`

   html.classList.toggle("light")   
})