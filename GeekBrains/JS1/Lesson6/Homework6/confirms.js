let confirms = {
    validLength(id, min, max){
        let inputId = document.getElementById(id);
        let messageSpan = inputId.parentNode.lastChild;
        if(inputId.value.length >= min && inputId.value.length <= max){
            inputId.classList.remove('invalid');
            messageSpan.innerText = '';
            return true;
        }
        else {
            inputId.classList.add('invalid');
            messageSpan.innerText = `Поле должно содержать ${min} - ${max}  символов`;
            return false;
        }
    },
    validEquals(id1, id2){
        let input1 = document.getElementById(id1);
        let input2 = document.getElementById(id2);
        let messageSpan = input2.parentNode.lastChild;
        if (input1.value === input2.value){
            input2.classList.remove('invalid');
            messageSpan.innerText = '';
            return true;
        }
        else{
            input2.classList.add('invalid');
            messageSpan.innerText = 'Пароли не совпадают';
            return false;
        }
    }
    
}


