let counterVal = 0;
let easteregg = document.getElementById("easteregg"); // Div com o EasterEgg
let intro = document.getElementById("intro"); // Div com as informações da intro

// Função para contar os clicks e iniciar o easter egg
function abrir() {
    console.log('Tentativa ' + counterVal)
    counterVal++;

    if (counterVal >= 7) {
        console.log('iniciando função...')
        if (easteregg.style.display != 'flex'){
            console.log('Terminal Ativado');
            easteregg.style.display = 'flex';
            intro.style.display = 'none';
        }
    }
}
// Função para finalizar o easter egg
function fechar() {
    if(easteregg.style.display == 'flex'){
        console.log('Terminal Encerrado');
        easteregg.style.display = 'none';
        intro.style.display = 'flex';
    }
}