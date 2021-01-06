let game = {
    startGame(){
        while(true){
            const direction = mover.getDirection();
            console.log(direction);
            break;
        }
    },

    init(){
        console.log("Ваше положение на поле в виде о");
        renderer.render();
        console.log("Для начала игры наберите startGame() и нажмите enter");
    }
}
game.init();
