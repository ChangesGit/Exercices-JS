function addition(x,y) {
    return x + y;
}

function multiply(x,y) {
    return x * y
}

function divide(x,y) {
    return x / y
}

function substract(x,y) {
    return x - y;
}


function toNumber(array, start, limit) {
    let number = []
    for(let i = start; i < limit; i++) {
        number = number + array[i]
        console.log(number)
    }
    return number
}

function arrayToInt(array) {
    let number = 0
    for (let i = 0; i < array.length; i++) {
        number = number + Math.pow(array[i], (array.length + 1) - i)
    }
    return number
}