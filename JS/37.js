/** ЗАДАЧА 37 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3]
const b = [1, 2, 3]
const areArraysEqual = (firstArray, secondArray) => {
    let a = 0
    let s = true
    if (firstArray.length == secondArray.length) {
        firstArray.forEach(element => {
            if (element == secondArray[a]) {
                a++
            } else {
                s = false
                return s
            }
        });
        return s
    } else
        return false

}

console.log(a === b) // false (Почему?)
    //Потому что они лежат в разных ячейках памяти,
    //может быть значения в них индентичны но переменные не равны

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false