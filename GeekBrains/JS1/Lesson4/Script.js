/**
 * Запуск игры
 */
let game = {
    startGame(){
        while(true){
            const direction = mover.getDirection();
            if(direction === null){
                alert("Игра окончена!");
                return;
            }
            let nextPoint = mover.getNextPosition(direction);
            if(nextPoint.x < 0 || nextPoint.x >= config.colsCount){
                nextPoint.x = player.x;
                alert("Движение за пределы поля недопустимо!");
            }
            if(nextPoint.y < 0 || nextPoint.y >= config.rowsCount){
                nextPoint.y = player.y;
                alert("Движение за пределы поля недопустимо!");
            }
            player.move(nextPoint);
            renderer.clear();
            renderer.render();
            
        }
    },

    init(){
        console.log("Ваше положение на поле в виде о");
        renderer.render();
        console.log("Для начала игры наберите game.startGame() и нажмите enter");
    }
}
game.init();
