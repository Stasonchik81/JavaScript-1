let game = {
    snake, 
    food, 
    settings,
    renderer,
    ticInterval: null,
    init(userSettings = {}){
        Object.assign(settings, userSettings); // вводим пользовательские установки для игры
        renderer.renderMap(settings.rowsCount, settings.colsCount); // отрисовываем карту
        this.setEventHandlers();
        snake.init(this.getStartSnakePoint(), 'up'); // определяем начальную точку для змеи и направление
        this.food.setFoodCoordinates(this.getRandomCoordinates()); // назначаем координаты еды как random
        renderer.render(this.snake.body, this.food.getFoodCoordinates()); // отрисовываем змею и еду
    },

    setEventHandlers(){
        document.getElementById('playButton').onclick = function(){
            game.playClickHendler();
        }
        document.addEventListener('keydown', (event) => this.keyDownHendler(event))
    },

    keyDownHendler(event){
        let direction = this.getDirectionByCode(event.code);
        snake.setDirection(direction);
    },

    getDirectionByCode(code){
        switch(code){
            case 'ArrowUp':
            case 'KeyW':{
                return 'up'; 
            }
            case 'ArrowDown':
            case 'KeyS':{
                return 'down'; 
            }
            case 'ArrowLeft':
            case 'KeyA':{
                return 'left'; 
            }
            case 'ArrowRight':
            case 'KeyD':{
                return 'right'; 
            }
        }
    },

    playClickHendler(){
        this.play();
    },
    
    play(){
        this.ticInterval = setInterval(() => game.tickHandler(), 1000/settings.speed);
    },

    tickHandler(){
        if(this.food.isFoodPoint(this.snake.getNextStepHeadPoint())){ // проверка встречи с едой
            snake.incrementBody();                                     // увеличение тела змейки
            this.food.setFoodCoordinates(this.getRandomCoordinates());
        }
        snake.makeStep();
        renderer.render(this.snake.body, this.food.getFoodCoordinates());
    },

    // получение начальной точки для змеи
    getStartSnakePoint(){
        return{
            x: Math.floor(settings.colsCount/2),
            y: Math.floor(settings.rowsCount/2)
        }
    },
    // функция получения рандомных координат (учитывая координаты змеи и еды)
    getRandomCoordinates(){
        let exclude = [...this.snake.body, this.food.getFoodCoordinates()];
        // генерируем пока не выполним условие
        while(true){
            let rndPoint = {
                x: Math.floor(Math.random() * this.settings.colsCount),
                y: Math.floor(Math.random() * this.settings.rowsCount),
            };
            let excludeContainsRndPoint = exclude.some(function(el){ // получаем true если не попадём в координату змеи и еды
                return el.x === rndPoint.x && el.y === rndPoint.y;
            });
            // условие окончания генерации
            if(!excludeContainsRndPoint){
                return rndPoint;
            }
        }
    }
}
// запускаем init после загрузки страницы с пользовательскими настройками
window.onload = function (){
    game.init({speed: 3, winLength: 25});
}