
let buttonSub = document.getElementById("submit");
buttonSub.addEventListener('click', function(event){
    if(confirm()){
        console.log(event);
    }
    else{
        event.preventDefault();
    }
});

function confirm(){
    return validloggin() && validpassword();
}

function validloggin(){
    return confirms.validLength('login', 1, 50);
}

function validpassword(){
    return confirms.validLength('password', 5, 50) && confirms.validEquals('password', 'confirmpassword');
}
