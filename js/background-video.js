/* Script criado para alterar o background de acordo com a hora e o dia da semana */

let video = document.querySelector('#video-viewport video')
let source = document.querySelector('#video-viewport source')
const Today = new Date();
var H = Today.getHours();
var D = Today.getDay();

// Validando os dias da semana
if (D >= 1 && D <= 5) {
    console.log("Durante a Semana");

    // Trabalhando
    if (H >= 9 && H < 18) {
        video.muted = true
        video.autoplay = true
        video.controls = false;
        video.load()
        video.play();
        source.src = "video/working.mp4"
        console.log("Working");
        console.log(source.src)
    }
    // Estudando
    else if (H >= 18 && H < 23) {
        video.muted = true;
        video.autoplay = true;
        video.controls = false;
        video.load();
        video.play();
        source.src = "video/working.mp4"
        console.log("studying");
        console.log(source.src)
    }
    // Dormindo
    else if (H >= 23 && H < 9) {
        video.muted = true;
        video.autoplay = true;
        video.controls = false;
        video.load();
        video.play();
        source.src = "video/working.mp4"
        console.log("sleeping");
        console.log(source.src)
    }
}
else {
    console.log("Durante o Fim de Semana");

    // Jogando
    video.muted = true;
    video.autoplay = true;
    video.controls = false;
    video.load();
    video.play();
    source.src = "video/working.mp4"
    console.log("Playing");
    console.log(source.src)
}