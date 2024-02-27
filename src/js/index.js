var numeroSlide = 0
const pagina = document.getElementsByClassName('comum')
const setas = document.getElementsByClassName('setas')
const setaEsquerda = setas[0]
const setaDireita = setas[1]
let larguraTela = window.innerWidth

if (larguraTela > 950) {
    if (setaEsquerda) {
        setaEsquerda.addEventListener('click', function () {
            if (numeroSlide === 0) {
                mudarSlide()
            } else if (numeroSlide > 0) {
                numeroSlide--
                mudarSlide()
            }
    
        })
    
    }
    if (setaDireita) {
        setaDireita.addEventListener('click', function () {
            if (numeroSlide === 3) {
                mudarSlide()
            } else if (numeroSlide < 3) {
                numeroSlide++
                mudarSlide()
            }
    
        })
    
    }
}

//----------FUNÇÕES----------FUNÇÕES----------FUNÇÕES----------FUNÇÕES----------FUNÇÕES----------FUNÇÕES----------

function mudarSlide() {
    switch (numeroSlide) {
        case 0:
            setaEsquerda.classList.add('desativa')
            passarSlide()
            break;
        case 1:
            setaEsquerda.classList.remove('desativa')
            passarSlide()
            break;
        case 2:
            setaDireita.classList.remove('desativa')
            passarSlide()
            break;
        case 3:
            setaDireita.classList.add('desativa')
            passarSlide()
            break;
    }
}

function passarSlide() {
    pagina[0].classList.add('slideInativo')
    pagina[1].classList.add('slideInativo')
    pagina[2].classList.add('slideInativo')
    pagina[3].classList.add('slideInativo')
    pagina[`${numeroSlide}`].classList.remove('slideInativo')
}