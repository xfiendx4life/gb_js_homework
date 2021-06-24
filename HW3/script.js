// Задание 1
function isPrime(n) {
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n !== 1 && n !== 0;
}

function firstPrimes() {
    let i = 0;
    while (i <= 100) {
        if (isPrime(i)) console.log(i);
        i++;
    }
}

// Задание 2
// структура корзины - массив [nameOfItem, price, count]
// const testBasket = [
//     ['soap', 156, 2],
//     ['bread', 56, 1],
//     ['milk', 89, 2]
// ]

function countItemPrice(item) {
    return item[1] * item[2]
}
function countBasketPrice(basket) {
    let s = 0;
    for(const value of basket) {
        s += countItemPrice(value);
    }
    return s;
}


// Задание 4
function only4() {
    for(let i = 0; i < 10; console.log(i++)) {}
}

//Задание 5
function dymarip(){
    for(let i = 1; i <= 20; i++) {
        console.log('*'.repeat(i));
    }
}
