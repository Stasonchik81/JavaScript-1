function confirmPass(path){
    if (path.length >= 5 && path.length <= 50){
        if ("пароли совпадают"){
            return true;
        }
        else {
            alert("Пароли не совпадают!");
        }
    }
    else{
        alert("Длинна пароля должна быть в диапазоне 5-50 символов");
    }
}
let login = document.querySelector("[name = 'login']")
function confirmLoggin(loggin){
    if(loggin.length >= 1 && loggin.length <=50){
        return true;
    }
    else{
        alert("Логин не соответствует требованиям");
    }
}
