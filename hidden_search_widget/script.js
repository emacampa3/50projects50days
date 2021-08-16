
const search = document.querySelector('.search')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

button.addEventListener('click', () => { 
    search.classList.toggle('active') /* toggle can add and remove a class of active from search */
    input.focus()
})
