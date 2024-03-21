const btnEl = document.querySelectorAll(".button");
const body = document.querySelector("body");
let usedColors = [];

function randomColor() {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
}

function uniqueIDgenerated() {
    btnEl.forEach((item) => {
        let color;
        do {
            color = randomColor();
        } while (usedColors.includes(color));
        usedColors.push(color);
        item.style.backgroundColor = color;
        item.addEventListener("click", function (e) {
            body.style.backgroundColor = e.target.style.backgroundColor;
        });
    });
}

uniqueIDgenerated();
