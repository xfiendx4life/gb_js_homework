'use strict';

// Задание 1
// Для д.р.7 замыкания точно можно использовать и они используются для добавления ивентЛистнеров и передачи им методов 
// объектов

// initEventHandlers() {
//     document.getElementById('playButton').addEventListener('click', () => {
//       this.playClickHandler();
//     });
//     document.getElementById('newGameButton').addEventListener('click', () => {
//       this.newGameClickHandler();
//     });
//     document.addEventListener('keydown', (event) => {
//       this.keyDownHandler(event);
//     })
//   },

//Задание 2
// undefined. Описание a поднимется, переменная будет, но не инициализированная
if (!("a" in window)) {
    var a = 1;
}
alert(a);

// undefined. Не очень понял почему.
var b = function a(x) {
    x && a(--x);
};
alert(a);

// function a. Объяление функций поднимаются над объявлением переменных. 
// Но при описании функции происходит также присвоение значения переменной, а инициализация будет позже описания переменной.
function a(x) {
    return x * 2;
}
var a;
alert(a);

// 3. В arguments хранится в виде массива копия всех аргументов функции
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

//null. В функцию call мы передаем окружение для которого вызваем данную функцию. Вызываем для null, его функция и вернет.
function a() {
    alert(this);
}
a.call(null);
