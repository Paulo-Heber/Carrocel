// quando apertar nas setas a imagem de fundo tem que mudar
// quando chegar ao fim das fotos para ambos os lados a seta deve ganhar um opacidade e perder o click
// a cor do botao saiba mais tambem deve mudar de acordo com a foto

//quando clicado na seta esquerda tem q diminuir o numero do contador até o 0
// quando clicado na seta direita tem q almentar o numero do contador até o 3

const setas = document.getElementsByClassName('seta')
let setaEsquerda = setas[0]
let setaDireita = setas[1]
var setaClicada

if (setaEsquerda) {
    setaEsquerda.addEventListener('click', function () {
        setaClicada = setaEsquerda
        numeroSlide--
    })
}
if (setaDireita) {
    setaDireita.addEventListener('click', function () {
        setaClicada = setaDireita
        numeroSlide++
    })
}

var numeroSlide = [0, 1, 2, 3]
var i = 0

setaEsquerda.addEventListener('click', function () {


    switch (numeroSlide[i--]) {
        case 0:
            console.log('caso 0');
            setaEsquerda.classList.add('desativa')
            break; case 1:
            console.log('caso 1');
            break;
        case 2:
            console.log('caso 2');
            setaDireita.classList.remove('desativa')
            break;
        case 3:
            console.log('caso 3');
            break;

        default:
            break;
    }
})
