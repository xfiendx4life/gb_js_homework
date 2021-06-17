'use strict';
// Задание 1
function tempConvertor() {
    let cel = prompt("Введите температуру по Цельсию");
    alert(`Температура по Фаренгейту ${(9 / 5) * cel + 32}`);
}

// задание 2
function checkVars() {
    let name, admin;
    name = "Василий";
    admin = name;
    console.log(admin);

}

tempConvertor()
checkVars()

// 1000 + "108" = 1000108

// Разница между async и defer: атрибут defer сохраняет относительную последовательность скриптов, а async – нет.
// defer всегда ждёт, пока весь HTML - документ будет готов, а async– нет.