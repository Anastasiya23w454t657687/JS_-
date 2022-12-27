function getDay(date){
    let day = date.getDay()
    if(day==0){day=7}
    return day-1
}

function createCalendar(elem, year, month){
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}


createCalendar(calendar, 2023, 1)
createCalendar(calendar1, 2023, 2)
createCalendar(calendar2, 2023, 3)
createCalendar(calendar3, 2023, 4)
createCalendar(calendar4, 2023, 5)
createCalendar(calendar5, 2023, 6)
createCalendar(calendar6, 2023, 7)
createCalendar(calendar7, 2023, 8)
createCalendar(calendar8, 2023, 9)
createCalendar(calendar9, 2023, 10)
createCalendar(calendar10, 2023, 11)
createCalendar(calendar11, 2023, 12)