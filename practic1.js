//расчёт температуры по Фаренгейту 
alert("расчёт температуры по Фаренгейту");
var tc = parseInt(prompt("Введите температуру в градусах Цельсия"));
var tf = (9 / 5) * tc + 32;
alert("Температура в градусах Фаренгейта: " + tf);

// Переменные
alert("Переменные");
var admin; var name;
name = "Василий";
admin = name;
console.log(admin);
document.write(admin + "<br>");

//Вывод значений выражений
alert("Вывод значений выражений");
var a = 10 + 10 + "10";
document.write('10 + 10 + "10" = ' + a + " - тип данных " + typeof(a) + "<br>");
document.write("сначала сложение числовых значений (10+10), а потом сложение со строкой - результат строка <br>")
a = 10 + "10" + 10;
document.write('10 + "10" + 10 = ' + a + " - тип данных " + typeof(a) + "<br>");
document.write("число + строка = строка и снова число + строка = строка <br>");
a = 10 + 10 + +"10";
document.write('10 + 10 + +"10" = '+ a + " - тип данных " + typeof(a) + "<br>");
document.write("сначала преобразование строки в число с помощью префиксного инкремента и затем сложение чисел <br>");
a = 10 / -"";
document.write('10 / -"" = ' + a + " - тип данных " + typeof(a) + "<br>");
document.write("префиксный декремент пустой строки даёт минус 0, а деление на ноль даёт минус бесконечность <br>");
a = 10 / +"2,5";
document.write('10 / +"2,5" = ' + a + " - тип данных " + typeof(a) + "<br>");
document.write("из-за запятой невозможно привести строку к числу с помощью инкремента - получаем 'не число' <br>");

// Имена переменных
alert("Имена переменных");
let	mode = "normal";
document.write(mode + "<br>");
let	my_valu3	=	102;
document.write(my_valu3 + "<br>");
/*let	3my_value3	=	"102";
document.write(3my_value3 + "<br>");*/
// Переменная (3my_value3) выдаёт ошибку - некорректная
let	__hello__	=	"world";
document.write(__hello__ + "<br>");
let	$$$	=	"money";
document.write($$$ + "<br>");
/*let	!0_world	=	true;
document.write(!0_world + "<br>");*/
// Переменная (!0_world) выдаёт ошибку - некорректная