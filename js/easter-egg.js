let counterVal = 0;
let easteregg = document.getElementById("easteregg");
let intro = document.getElementById("intro");

function incrementClick() {
    console.log('Passou por aqui')
    counterVal++;

    if (counterVal >= 7) {
        console.log('Passou por aqui também')
        if (easteregg.style.display == "flex") {
            easteregg.style.display = "none";
            intro.style.display = "flex";
        }
        else {
            easteregg.style.display = "flex";
            intro.style.display = "none";
        }
    }
}