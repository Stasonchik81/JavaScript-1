// function myFunc(){
//     console.log('Hellow World!');
// }
//myFunc();

// Сочетание 
/*let b=10;
let myFunc = function a(){
    console.log(b);
    if(b>0){
        b--;
        a();
        myFunc();
    }
}
myFunc();
*/
// Самовызывающая функция
/*(function(){
    console.log("Hello");
    console.log("Привет");
    console.log("Halo!")
})(); 
*/
// Строгий режим
//"use strict";
// неявная привязка контекста
/*
function foo(){
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo, // функция передаётся в объект
};
obj.foo(); // функция вызывается из контекста
*/
// Потеря контекста при передаче функции в глобальную переменную
/*
let calc = {
    num1: 6,
    num2: 4,
    getSum(){ console.log(this);
    return this.num1 + this.num2;
    }
};
console.log(calc.getSum());
var sum = calc.getSum; // передача
console.log(sum());     // получаем NaN
*/
// Игнорирование контекста
/*
function foo(){
    console.log(this.a);
}
var obj2 = {
    a: 2,
    foo: foo,
}
var obj1 = {
    a: 42,
    obj2: obj2,
}
obj1.obj2.foo(); // Контекст obj1 игнорируется
*/
/*
let user = {
    firstName: "John",
    sayHello(){
        console.log(this);
        console.log(this.firstName);
    }
}
setTimeout(user.sayHello, 3000);
setTimeout(function(){user.sayHello()}, 3000);
*/
// метод Call() apply() (одноразовый вызов в рамках нужного контекста)
/*
let obj = {
    myFunc(a,b,c){
        console.log(a,b,c);
        console.log(this);
    }
};
obj.myFunc(2,3,4);
let newFunk = obj.myFunc;
newFunk(1,2,3);
newFunk.call(obj, 5,6,7);

newFunk.apply(obj, [1,2,3]);
*/
// Привязка контекста - метод Bind() - создаёт новую функцию с новым контекстом
/*
let user = {
    firstName: "John",
    sayHello(){
        console.log(this);
        console.log(this.firstName);
    }
}
setTimeout(user.sayHello, 2000);
setTimeout(user.sayHello.bind(user), 2000);
*/
//Сохранили контекст с помощью стрелочной функции (setTimeout обычно принимает контекст window)
/*
let user = {
    firstName: "John",
    sayUsual(){
        setTimeout(function() {
            console.log(this);
            console.log(this.firstName);
        }, 2000);
        
    },
    sayArrow(){
        setTimeout(() => {
            console.log(this);
            console.log(this.firstName);
        }, 2000);
    }
}
user.sayUsual();
user.sayArrow();
*/
//Цепочки вызовов с помощью контекста
/*
let tank = {
    positionX: 0,
    positionY: 0,
    power: 0,
    setPositionX(x){
        this.positionX = x;
        return this; // за счёт этого снова можем вызывать следующего
    },
    setPositionY(y){
        this.positionY = y;
        return this;
    },
    setPower(p){
        this.power = p;
        return this;
    },
    show(){
        console.log('Танк появился на поле');
        console.dir(this);
    }
}
tank.setPositionX(5).setPositionY(4).setPower(2).show();
*/
// Замыкания
/*
function foo(){
    var a = 2;
    function bar(){ // функция замыкается на переменную а, которая находится вне функции
        console.log(a);
    }
    bar();
}
foo();
*/
// Модуль (фабрика)
/*
function snakeModule(color, speed){
    let snakeColor = color;
    let snakeSpeed = speed;
    let snakeWinLength = 50;
    let snakeCurrentLength = 1;
    function checkWin(){
        return snakeCurrentLength > snakeWinLength;
    }
    function changeSpeed(){
        snakeSpeed = speed;
    }
    function getSpeed(){
        return snakeSpeed;
    }
    return {
        isWin: checkWin,
        changeSpeed: changeSpeed,
        getSpeed: getSpeed,
    }
}
let snake = snakeModule('yellow', 10);
*/
