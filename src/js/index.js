// quando apertar nas setas a imagem de fundo tem que mudar
// quando chegar ao fim das fotos para ambos os lados a seta deve ganhar um opacidade e perder o click
// a cor do botao saiba mais tambem deve mudar de acordo com a foto

//quando clicado na seta esquerda tem q diminuir o numero do contador até o 0
// quando clicado na seta direita tem q almentar o numero do contador até o 3

const setas = document.getElementsByClassName('seta')
const botao = document.getElementsByClassName('botao')
let saibaMais = botao[0]
let setaEsquerda = setas[0]
let setaDireita = setas[1]
var slide = 0

if (setaEsquerda) {
    setaEsquerda.addEventListener('click', function () {
        if (slide === 0) {
            mudarSlide()
            console.log('slide é igual a ' + slide);
        } else if (slide > 0) {
            slide--
            console.log(slide);
            mudarSlide()
        }
    })
}
if (setaDireita) {
    setaDireita.addEventListener('click', function () {
        if (slide === 3) {
            mudarSlide()
        } else if (slide < 3) {
            slide++
            mudarSlide()
        }
    })
}

function mudarSlide() {
    switch (slide) {
        case 0:
            console.log('caso 0');
            setaEsquerda.classList.add('desativa')
            saibaMais.classList.add('botao1')
            saibaMais.classList.remove('botao2')
            saibaMais.classList.remove('botao3')
            saibaMais.classList.remove('botao4')

            break;
        case 1:
            console.log('caso 1');
            setaEsquerda.classList.remove('desativa')
            saibaMais.classList.remove('botao1')
            saibaMais.classList.add('botao2')
            saibaMais.classList.remove('botao3')
            saibaMais.classList.remove('botao4')
            break;
        case 2:
            console.log('caso 2');
            setaDireita.classList.remove('desativa')
            saibaMais.classList.remove('botao1')
            saibaMais.classList.remove('botao2')
            saibaMais.classList.add('botao3')
            saibaMais.classList.remove('botao4')
            break;
        case 3:
            console.log('caso 3');
            setaDireita.classList.add('desativa')
            saibaMais.classList.remove('botao1')
            saibaMais.classList.remove('botao2')
            saibaMais.classList.remove('botao3')
            saibaMais.classList.add('botao4')
            break;

        default:
            break;
    }
}


function  mudarClasseBotao(saibaMais) {
    
}
// ------------CRIAR UMA FUNCAO PARA ADICIONAR E REMOVER AS CLASSES DO BOTAO--------------
//adicionar a classe de acordo com o numero do caso
//remover todas as outras classes