const moon = document.querySelector('.fa-moon')
const sun = document.querySelector('.fa-sun')
const github = document.querySelector('.fa-github')
const link = document.querySelector('.link')

moon.addEventListener('click', () => {
  localStorage.setItem('mode', 'dark')
  addClassList()
})

sun.addEventListener('click', () => {
  localStorage.setItem('mode', 'light')
  deleteClassList()
})

const checkMode = () => {
  const mode = localStorage.getItem('mode')

  if (mode === 'dark') {
    addClassList()
  }
}

const addClassList = () => {
  document.body.classList.add('dark-theme')
  github.classList.add('dark-theme')
  sun.classList.add('dark-theme')
  moon.classList.add('dark-theme')
  link.classList.add('dark-theme')
}

const deleteClassList = () => {
  document.body.classList.remove('dark-theme')
  github.classList.remove('dark-theme')
  sun.classList.remove('dark-theme')
  moon.classList.remove('dark-theme')
  link.classList.remove('dark-theme')
}

checkMode()
