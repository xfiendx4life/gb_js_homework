'use strict';

// Задание 1
function firstTask() {
    var a = 1, b = 1, c, d;
    c = ++a; alert(c);           // 2 Возвращается значение а после увеличения 
    d = b++; alert(d);           // 1 Возвращается значение b до увеличения
                                 // в обоих случаях выше значение b и a изменятся a = 2, b = 2
    c = (2+ ++a); alert(c);      // 5 к двум прибавляем значение a после увеличения 2 + 3 = 5
    d = (2+ b++); alert(d);      // 4 к двум прибавляем значение b до увеличения 2 + 2 = 4
    alert(a);                    // 3
    alert(b);                    // 3
}

// Задание 2
function secondTask() {
    var a = 2;
    var x = 1 + (a *= 2); // 5
}

// Задание 3
function thirdTask() {
    let a = -5,
        b = 6;
    if (a >= 0 && b >= 0) console.log(a - b);
    else if (a < 0 && b < 0) console.log(a * b);
    else console.log(a + b);
}

// Задание 4
function fourthTask() {
    let a = parseInt(Math.random() * 15);
    console.log(`a = ${a}`);
    switch (a) {
        case 0:
            console.log(0);
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
        case 4:
            console.log(4);
        case 5:
            console.log(5);
        case 6:
            console.log(6);
        case 7:
            console.log(7);
        case 8:
            console.log(8);
        case 9:
            console.log(9);
        case 10:
            console.log(10);
        case 11:
            console.log(11);
        case 12:
            console.log(12);
        case 13:
            console.log(13);
        case 14:
            console.log(14);
        case 15:
            console.log(15);
    }
}

// Задание 5
function sum(a, b) {
    return a + b
}

function diff(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

// Задание 6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2)
        case '-':
            return diff(arg1, arg2)
        case '*':
            return mult(arg1, arg2)
        case '/':
            return div(arg1, arg2)
    }
}

// Задание 7
// Null используется для того, чтобы показать, что переменная не указывает на объект. С null нельзя выполнять 
// арифметические операции, а с 0 можно. null - "заглушка" для пустого объекта
// если переменная равна 0, то она "указывает" на числовое значение

// Задание 8
function power(val, pow) {
    if (pow === 0) return 1
    return power(val, pow - 1) * val
}
