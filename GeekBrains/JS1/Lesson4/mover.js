let mover = {
    getDirection(){
        let aviableDirection = [2, 4, 8, 6];
        while(true){
            let direction = parseInt(prompt("Введите число (2, 4, 8, 6) для выбора направления, 'отмена' для выхода."));
            if (isNaN(direction)){
                return null;
            }
            if(!aviableDirection.includes(direction)){
                alert('Error!');
                continue;
            }
            return direction;
        }
    }
};