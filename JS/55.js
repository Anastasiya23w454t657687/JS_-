/** ЗАДАЧА 55 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

console.log(firstFunction(5, 3))
    //Вторая функция не сработает потому что переменная secondFunction в которой функция проинициализирована ниже чем её вызов
console.log(secondFunction(5, 3))

function firstFunction(a, b) {
    return a + b
}

const secondFunction = function(a, b) {
    return a + b
}

console.log(firstFunction(5, 3))
console.log(secondFunction(5, 3))