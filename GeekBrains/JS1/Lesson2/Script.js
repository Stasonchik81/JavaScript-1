/*// Задание №1
// пример 1
let a = 1, b =1, c, d;
c = ++a;
alert(c); // сначала инкремент, потом присваивание ( с = 2 )
// пример 2
d = b++;
alert(d); // сначала присваивание потом икремент ( d = 1 )
// пример 3
c = ( 2 + ++a );
alert(c); // a = 2 => инкремент => a = 3 => 2 + 3 = 5 => присваивание ( с = 5 )
// пример 4
d = ( 2 + b++ );
alert(d); // b = 2 => 2 + 2 = 4 => b = 3 => присваивание ( d = 4 )
alert(a); // a = 3
alert(b); // b = 3
*/
/*
// Задание №2
let a = 2;
let x = 1 + ( a *= 2 );
console.log(x);
*/
// Задание №3
/*let a = +prompt("Введите первое число", "любое целое число");
let b = +prompt("Введите второе число", "любое целое число");
if (a >= 0 && b >= 0){
    if ( a > b ){
        alert ("Разность чисел равна " + (a - b));
    }
    else alert("Разность чисел равна " + (b - a));
}
else {
    if (a < 0 && b < 0 ){
        alert ("Произведение чисел равно " + ( a * b));
    }
    else alert("Сумма чисел равна " + ( a + b));
}*/
// Задание №4
function add(arg1, arg2){
    return arg1+arg2;
}
function subt(arg1, arg2){
    return arg1-arg2;
}
function mult(arg1, arg2){
    return arg1*arg2;
}
function div(arg1, arg2){
    return arg1/arg2;
}
// Вызов функций
/*console.log(add(5,6));
console.log(subt(8,6));
console.log(mult(5,6));
console.log(div(10,6));*/
// Задание №5
/*
let arg1 = +prompt("Введите первый аргумент", "число");
let arg2 = +prompt("Введите второй аргумент", "число");
let oper = prompt("Введите операцию", "+");
alert(mathOperation(arg1, arg2, oper)); // вызов функции
alert(mathOperation(6, 6, "*")); // проверка вызова с параметрами
function mathOperation(arg1, arg2, oper){
    switch(oper){
        case "+": return add(arg1, arg2);
        break;
        case "-": return subt(arg1, arg2);
        break;
        case "*": return mult(arg1, arg2);
        break;
        case "/": return div(arg1, arg2);
        break;
        default: alert("Incorrect arguments or function");
    }
}*/
// Задание №6 (Функция возведения числа в степень)
let a = +prompt("Введите число", "2");
let b = +prompt("Введите степень", "2");
// цикл do - while
function power(val, pow){
    var result = 1;
    var count = 1;
    do {
        result *= val;
        count++;
    }
    while(pow >= count)
    return result;
}
// с помощью рекурсии
function power(val, pow){
    if (val == 1) {
        return 1;
    }
    else{
        if (pow == 1){
            return val;
        }
        return power(val,pow-1)*val;
    }   
}
var result = power(a, b);
alert(result);
// Задание №7 (Функция проверки пароля)
let path = prompt("Введите пароль", "пароль 3-12 символов");
let lenth_path = path.length;
confirm(path);
function confirm(path){
    if (lenth_path >= 3 && lenth_path <= 12){
        if (findSymbol("&") || findSymbol("$") || findSymbol("%") || findSymbol("*")){
            if (path.startsWith("q", 0) || path.startsWith("z", lenth_path-1)){
                alert ("Пароль " + path + " соответствует требованиям. Привет!!!");
            }
            else{
                alert("Пароль " + path + " не соответствует требованиям !");
            }  
        }
        else {
            alert("Пароль " + path + " не соответствует требованиям !");
        }
    }
    else{
        alert("Длинна пароля " + path + " не соответствует требованиям длинны!");
    }
}
function findSymbol(symbol){
    if (path.indexOf(symbol) != -1){
        return true;
    }
    else {
        return false;
    }
}
