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
    },
    getNextPosition (direction) {
        let nextPosition = {
            x: player.x,
            y: player.y,
        },
        switch (direction) {
            case 2:
                nextPosition.y--;
                break;
            case 8:
                    nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            default:
                break;
        }
        return nextPosition;
    }
};