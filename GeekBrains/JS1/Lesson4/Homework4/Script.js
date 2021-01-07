// Функция преобразования числа в обьект
function converterToOject(string_numbers){
    if (string_numbers.length <= 3){
        let result = converter.convertNumberToObject(string_numbers);
        return result;
    }
    else{
        console.log("Число не соответствует требованиям!");
        return {};
    }
}

let converter = {
    units: 0,
    dozens: 0,
    hundreds: 0,
    convertNumberToObject(string_numbers){
        let x = string_numbers.split('');
        switch (x.length){
            case 1: 
            this.units = +x[x.length-1];
            break;
            case 2:
            this.dozens = +x[x.length-2];
            this.units = +x[x.length-1];
            break;
            default:
            this.hundreds = +x[x.length-3];
            this.dozens = +x[x.length-2];
            this.units = +x[x.length-1];
        }
        return Object.assign({'единицы': this.units, 'десятки': this.dozens, 'сотни': this.hundreds});
    }
}
let string_numbers = prompt("Введите трехзначное число от 0 до 999", "0");
console.log(converterToOject(string_numbers));


