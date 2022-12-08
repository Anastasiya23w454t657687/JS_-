/** ЗАДАЧА 58 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
    if (a === undefined)
        console.log('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
    else
        console.log(a * a)
}

square(10)
    // 100

square()
    // ДО: NaN
    // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента