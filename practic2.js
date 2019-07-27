//Почему код даёт именно такие результаты? 

alert("Почему код даёт именно такие результаты?");
var a = 1, b = 1, c, d;
c = ++a; // 2
document.write("var a = 1, b = 1, c, d <br>c = ++a результат a=2 с=2 <br>");
alert("сначала инкремент 'a=2' потом 'c=a=2'");
d = b++; // 1
document.write("d = b++ результат d=1 b=2<br>");
alert("сначала 'd=b=1' потом инкремент 'b=2'");           
c = (2 + ++a); // 5
document.write("c = (2+ ++a) результат c=5 a=3<br>");
alert("сначала инкремент 'a=3', потом сложение '2+3'");      
d = (2 + b++); // 4
document.write("d = (2 + b++) результат d=4 b=3 <br>")
alert("сначала сложение 'd=2+b=2+2=4', потом инкремент 'b=3'");      

// Чему будет равен x в примере ниже?
alert("Чему будет равен x в примере ниже?");
var a = 2;
var x = 1 + (a *= 2);
document.write("x = 1 + (a *= 2) <br> если a=2 <b>X</b> = " + x + "<br>");
alert("сначала умножение с последующим присваиванием 'a=4', потом сложение '1+4'");

//Задание №3
alert("Задание №3");
var a = parseInt(prompt("Введите значение для 'a'", "0"));
var b = parseInt(prompt("Введите значение для 'b'", "0"));
if (isNaN(a)||isNaN(b)){
    alert("Вы ввели не число");
}
else{
    var result;
    if (a>=0&&b>=0){
        subtraction(a, b);
        alert("а и b положительные, поэтому вычитаем!");
    }
    else if (a<0&&b<0){
        multiplication(a, b);
        alert("а и b отрицательные, поэтому складываем!");
    }
    else{
        addition(a, b);
        alert("а и b разных знаков, поэтому складываем!");
    }
    alert("Результат вычислений = " + result)
}
function addition(a, b){
    result = a + b;
    return result;
}
function subtraction (a, b){
    result = a - b;
    return result;
}
function multiplication (a, b){
    result= a * b;
   return result;
}

//Задание №4 (Мне понравился такой вариант решения, по крайней мере он короче)
alert("Задание №4");
var myArray=[];
var a=parseInt(prompt("Введите значение для 'a' от 0 до 15", "0"));
for (var i = 0; i <= 15 - a; i++){
    myArray[i]=a+i;
}
//Цикл для вывода значений без запятых
for (var j = 0; j < myArray.length; j++){
    document.write(myArray[j] + "<br>");
}
//Задание №5 (3 основных функуии уже реализованы в задании №3)
alert("Задание №5");
document.write("Реализуем функцию деления а / b <br>")
function dividing (a, b){
    result = a / b;
    return result;
}
document.write("результат - " + dividing(5, 10));

//Задание №6
alert("Задание №6");
var arg1 = parseFloat(prompt("Введите значение для 'arg1'", "0"));
var arg2 = parseFloat(prompt("Введите значение для 'arg2'", "0"));
var operation = prompt("Введите тип операци", "+");
mathOperation(arg1, arg2, operation);
function mathOperation (arg1, arg2, operation){
    switch(operation){
            case("+"):
            addition(arg1, arg2);
            break;
            case("-"):
            subtraction(arg1, arg2);
            break;
            case("*"):
            multiplication(arg1, arg2);
            break;
            case("/"):
            dividing(arg1, arg2);
            break;
            default: 
        console.log("Данные неизвестной величины");
        break;
    }
    document.write("<br>" + result);
}
// Задание №7
/*значение null означает, что переменная имеет некоторое неопределенное значение (не число, не строка, не логическое значение), но все-таки имеет значение, а ноль это число.*/
// Задание №8
alert("Задание №8");
var val = parseFloat(prompt("Введите число", "1"));
var pow = parseInt(prompt("Введите степень", "1"));
document.write("<br> Результат возведения " + val + " в степень " + pow + " равен " +  power(val, pow));
function power(val, pow){
    if (pow == 1){
        return val;
    }
    return power(val, pow-1) * val;
}