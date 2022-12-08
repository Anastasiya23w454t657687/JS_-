/** ЗАДАЧА 31 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function addMass(mass, numb) {
    let count = 0
    while (true) {
        let s = false
        for (let elem in mass) {
            if (mass[elem] == numb) {
                s = true
            } else {
                count++;
            }
            if (s == true) {
                numb = rand(MIN, MAX)
                s = false
            }
        }
        if (count == mass.length) {
            mass.push(Math.ceil(numb))
            return mass
        } else
            count = 0
    }
}
const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
const MIN = 1000
const MAX = 9999
let number = rand(MIN, MAX)
console.log(myNumbers)
addMass(myNumbers, number)
console.log(myNumbers)