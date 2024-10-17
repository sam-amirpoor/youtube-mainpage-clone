const menuButton = document.querySelectorAll(".menu-button")
const screenOverlay = document.querySelector(".screen-overlay")
const themeButton = document.querySelector(".theme-button i")

// initialize dark mode
if(localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark")
  themeButton.classList.replace("uil-moon", "uil-sun")
}

// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark")
  localStorage.setItem("darkMode", isDark ? "enabled" : "desabled")
  themeButton.classList.toggle("uil-sun", isDark)
  themeButton.classList.toggle("uil-moon", !isDark)
})

// Toggle sidebar visiblility when menus button are clicked
menuButton.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden")
  })
})

screenOverlay.addEventListener("click", () => {
  document.body.classList.add("sidebar-hidden")
})

// Show side bar in large screen
if(window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden")
}