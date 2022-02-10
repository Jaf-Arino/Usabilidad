/////  FUNCIÓN AÑADIR CANTIDAD EN FICHA PRODUCTOS

var up = document.getElementsByClassName('p-button-up')[0],
down = document.getElementsByClassName('p-button-down')[0],
input = document.getElementsByClassName('numbers')[0];

function getValue() {
return parseInt(input.value);
}

up.onclick = function (event) {
input.value = getValue() + 1;
};
down.onclick = function (event) {
if (input.value <= 1) {
    return 1;
} else {
    input.value = getValue() - 1;
}

}