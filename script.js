const painel = document.querySelectorAll('.painel')

painel.forEach(painel => {
    painel.addEventListener('click', () => {
        removeClasseAtivo()
        painel.classList.add('ativo')
    })
})

function removeClasseAtivo() {
    painel.forEach(painel => {
        painel.classList.remove('ativo')
    })
}