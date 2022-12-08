/** ЗАДАЧА 52 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */
class ExtendedArray extends Array {
    sum() {
        let retsum = 0
        for (let i = 0; i < this.length; i++) {
            retsum += this[i]
        }
        return retsum
    }
    onlyNumbers() {
        let some = []
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] === "number")
                some.push(this[i])
        }
        return some
    }
}
let a = new ExtendedArray(3, 3, 3, 3)
console.log(a.sum())
let b = new ExtendedArray(3, 5, "23", "23d")
let c = b.onlyNumbers()
console.log(c)