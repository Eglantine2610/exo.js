const firstli = document.querySelector('li')
console.log(firstli)
const secondli = document.querySelector('.super-title')
console.log(secondli)
const lastli = document.querySelector('#last-title')
console.log(lastli)

const allli = document.querySelectorAll('li')
console.log(allli)

allli.forEach(titre => {
    console.log(titre.textContent)
})

firstli.addEventListener('mouseover', () => {
    firstli.textContent = "Nouveau titre !!!"
    firstli.classList.toggle('colorRed')
})

