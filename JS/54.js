/** ЗАДАЧА 54 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */
const sumNumbers = (...numbers) => {
    let sum = 0
    for (el in numbers) {
        sum += numbers[el]
    }
    console.log(sum)
    return sum
}
sumNumbers(1, 3)
    // 4

sumNumbers(10, 20, 5)
    // 35

sumNumbers(2, 5, 80, 1, 10, 12)
    // 110