const mario = document.getElementById("mario");
const tube = document.getElementById("tube");

document.addEventListener("keydown", function (event) {
    jump();

});

function jump() {
    if (mario.classList != "jump") {
        mario.classList.add("jump")
    }
    setTimeout(function () {
        mario.classList.remove("jump")
    }, 500)
}
/каждые 500 млс у персонажа обнуляется класс, значение не должно быть короче, чем продолжительность анимации прыжка/

let isAlive = setInterval(function () {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"))
    let tubeLeft = parseInt(window.getComputedStyle(tube).getPropertyValue("left"))

    if (tubeLeft < 60 && tubeLeft > 0 && marioTop >= 110) {
        alert("GAME OVER!")
    }
}, 10);
/ с интервалом в 10 мс выполняется функция, которая проверяет условие столкновения объектов/