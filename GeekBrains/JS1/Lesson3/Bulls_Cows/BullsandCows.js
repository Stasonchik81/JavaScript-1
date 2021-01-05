function getRandomNumberAsArray(){
let generated = String(Math.random()*10000000000000000);
let result = [];
for (let value of generated){
    if(!result.includes(value)){
        result.push(value);
    }
    if (result.length === 4){
        return result;
    }
}
}
function startGame(){
let reedle = getRandomNumberAsArray();
while(true){
    let answer = prompt("Угадайте 4-х значное число").split('');
    let bulls = getBullsCount(reedle, answer);
    let cows = getCowsCount(reedle, answer) - bulls;
    console.log(`Ваш ответ ${answer}, содержит \n быков ${bulls}\n коров ${cows}`);
    if (reedle.toString === answer.toString){
        console.log("ВЫ победили!");
        break;
        }
    }
}
function getBullsCount(reedle, answer){
    let count = 0;
    for (let i = 0; i<reedle.length; i++){
        if(answer[i] === reedle[i]){
            count++;
        }
    }
    return count;
}
function getCowsCount(reedle, answer){
    let count = 0;
    for (let val of reedle){
        if (answer.includes(val)){
            count++;
        }
    }
    return count;
}

startGame();