/** переменная для доступа к пользовательского ввода*/
const userInput =  document.querySelector("#user_input");
/** */
var expression = "";
/** функция которвя считывает число и знак которые ввел ползователь*/
/** также она добавит этот элемент на" экран"*/
press = (num) => {
  expression += num;
  userInput.value = expression;/**передаст результат"экрану" */
}
/**фенкщия считает введенное выражение с помощью встроеной функции evel*/
equal = () => {
  userInput.value = eval(expression);
  expression = "";/** очистка поля ввода*/
}
/** Функция очистки поля */
erase = () => {
  expression = "";
  userInput.value = expression;
}
/** */