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
