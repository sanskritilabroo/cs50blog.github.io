
const themeButton = document.getElementById("theme-button")
const darkTheme = 'dark-theme'
const iconTheme = 'fas fa-sun'

const SelectedTheme = localstorage.getitem('selected-theme')
const SelectedIcon = localstorage.getitem('selected-icon')

const getCurrentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = themeButton.body.classList.contains(iconTheme) ? 'fas fa-moon' : 'fas fa-sun'

if(selectedTheme){
  document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon == 'fas fa-moon' ? 'add':'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localstorage.setitem('selected-theme',getCurrentTheme())
  localstorage.setitem('selected-icon',getCurrentIcon())
  })
