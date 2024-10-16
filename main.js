let container = document.getElementById('container')
let body = document.querySelector('body')

container.addEventListener('click', ()=> {
    container.classList.toggle('dark')
    body.classList.toggle('dark')
})