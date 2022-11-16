document.querySelectorAll('.menuToggle').forEach(btt => {
    btt.addEventListener('click', (e) => {
        document.querySelector('.footerMenu').classList.toggle('hidden')
        document.querySelector('.footerOptions').classList.toggle('hidden')
    })
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.add("sticky", window.scrollY > 0)

    const introElement = document.querySelector('#inicio .fundoTexto')
    introElement.classList.add('introFx', window.scrollY > 0)
    introElement.parentElement.classList.add('introFx', window.scrollY > 0)// colocar efeito no #inicio tbm
    introElement.children[0].classList.add('introFx', window.scrollY > 0)// colocar efeito no #inicio tbm
})

document.querySelectorAll('.lerBtt').forEach(btt => {
    btt.addEventListener('click', () => {
        let id = btt.parentElement.parentElement.parentElement.id
        document.querySelector(`#${id} .textoCard > p`).classList.toggle('hidden')
        document.querySelector(`#${id} .descricaoCard`).classList.toggle('hidden')
        document.querySelector(`#${id} .btnCard > #b1`).classList.toggle('hidden')
        document.querySelector(`#${id} .btnCard > #b2`).classList.toggle('hidden')
        document.querySelector(`#${id}`).classList.toggle('expandido')
        
    })
})

document.querySelector('.saibaBtt').addEventListener('click', () => {
    document.querySelector('#cursos').scrollIntoView()
})

document.querySelector('.enviarBtt').addEventListener('click', (e) => {
    e.preventDefault()
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();