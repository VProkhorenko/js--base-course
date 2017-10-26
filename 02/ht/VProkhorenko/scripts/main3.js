//var name = prompt('Как Ваше имя?', 'Имя');
//var years = prompt('Сколько вам лет?', 100);

var namex = null;
var yearsx = 0;

function fname() {
    var name = prompt('Как Ваше имя?', 'Имя');
    return name;
}

function fyears() {
    var years = prompt('Сколько вам лет?', 100);
    return years;
}

//var name = fname();
while (namex===null || namex ==="") {
    namex = fname();
}

//var years = fyears();
while (yearsx<1 ) {
    yearsx = fyears();
}

var myHeading = document.querySelector('#Hello');

if (yearsx<18)
{myHeading.textContent = 'Здарова, '+namex+'. Как твои '+yearsx+'?';}
else
{myHeading.textContent = 'Привествую, '+namex+'. Уж '+yearsx+' лет прошло';}



//var year = 2017;
//var month = 10;

function drawCalendar(year, month, htmlEl) {
    var htmlEl2 = document.querySelector(htmlEl);

    var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);

    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    htmlEl2.innerHTML = table;


}
// получить номер дня недели, от 0(пн) до 6(вс)
function getDay(date) {
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}


window.onload = drawCalendar(2017, 9, '.calendar') ;