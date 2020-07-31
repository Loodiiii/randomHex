const hexLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const bodyBcg = document.querySelector("body");
const colorBtn = document.querySelector('.colorBtn');
const hex = document.querySelector("span");

colorBtn.addEventListener("click", generateHexColor);

function generateHexColor() {

    let hexStart = "#";

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexLetters.length);
        hexStart += hexLetters[random];
    }
    bodyBcg.style.backgroundColor = hexStart;
    hex.innerHTML = hexStart;
}
