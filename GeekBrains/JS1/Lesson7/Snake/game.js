let game = {
    snake, 
    food, 
    settings,
    renderer,
    status,
    score,
    ticInterval: null,
    init(userSettings = {}){
        Object.assign(settings, userSettings); // вводим пользовательские установки для игры
        this.score.init();
        renderer.renderMap(settings.rowsCount, settings.colsCount); // отрисовываем карту
        renderer.renderCounter();
        this.setEventHandlers();    // устанавливаем обработчик событий
        snake.init(this.getStartSnakePoint(), 'up'); // определяем начальную точку для змеи и направление
        this.food.setFoodCoordinates(this.getRandomCoordinates()); // назначаем координаты еды как random
        renderer.render(this.snake.body, this.food.getFoodCoordinates()); // отрисовываем змею и еду
    },

    setEventHandlers(){
        document.getElementById('playButton').onclick = function(){ // обработчик нажатия кнопки Старт\стоп
            game.playClickHendler();
        }
        document.addEventListener('keydown', (event) => this.keyDownHendler(event)); // обработчик управляющих клавиш
        // обработчик нажатия кнопки Новая игра
        document.getElementById('newGameButton').addEventListener('click', () => this.newGameClickHendler()); 
    },

    keyDownHendler(event){
        if(!this.status.isPlaying()){
            return;
        }
        let direction = this.getDirectionByCode(event.code);
        if(this.canSetDirection(direction)){
            snake.setDirection(direction);
        }
        
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
        if(this.status.isPlaying()){
            this.stop();
        }
        else{
            this.play();
        }
        
    },
    
    play(){
        this.status.setPlaying();
        this.ticInterval = setInterval(() => game.tickHandler(), 1000/settings.speed);
        this.changePlayButton('Стоп');
    },

    finish(){
        this.status.setFinished();
        clearInterval(this.ticInterval); // Остановка таймера
        this.changePlayButton('Игра окончена', true);
    },

    stop(){
        this.status.setStopped();
        clearInterval(this.ticInterval);
        this.changePlayButton('Старт');
    },

    reset(){
        this.stop();
        this.score.drop();
        snake.init(this.getStartSnakePoint(), 'up');
        this.food.setFoodCoordinates(this.getRandomCoordinates());
        renderer.render(this.snake.body, this.food.getFoodCoordinates());
    },

    changePlayButton(text, isDisabled = false){
        let playButton = document.getElementById('playButton');
        playButton.textContent = text;
        isDisabled ? playButton.classList.add('disabled') : playButton.classList.remove('disabled');
    },

    isGameWon(){
        return this.snake.body.length === this.settings.winLength;
    },
    canSnakeMakeStep(){
        let nextSnakeHeadPoint = this.snake.getNextStepHeadPoint();
        return !this.snake.isBodyPoint(nextSnakeHeadPoint); 
        /*&& 
        nextSnakeHeadPoint.x < this.settings.colsCount &&
        nextSnakeHeadPoint.y < this.settings.rowsCount &&
        nextSnakeHeadPoint.x >= 0 && nextSnakeHeadPoint.y >= 0;*/
    },
/*
    canChangeNextHeadPoint(){
        let nextSnakeHeadPoint = this.snake.getNextStepHeadPoint();
        return nextSnakeHeadPoint.x < this.settings.colsCount ||
        nextSnakeHeadPoint.y < this.settings.rowsCount ||
        nextSnakeHeadPoint.x >= 0 || nextSnakeHeadPoint.y >= 0;
    },
*/
    canSetDirection(direction){
        return direction === 'up' && this.snake.lastStepDirection !== 'down' || 
        direction === 'down' && this.snake.lastStepDirection !== 'up' ||
        direction === 'left' && this.snake.lastStepDirection !== 'right' || 
        direction === 'right' && this.snake.lastStepDirection !== 'left';
    },

    tickHandler(){
        if(!this.canSnakeMakeStep()){
            this.finish();
            return;
            
        }
        if(this.food.isFoodPoint(this.snake.getNextStepHeadPoint())){ // проверка встречи с едой
            snake.incrementBody();                                     // увеличение тела змейки
            this.score.increment();
            this.food.setFoodCoordinates(this.getRandomCoordinates());
            if(this.isGameWon()){
                this.finish();
            }
        }
        snake.makeStep();
        renderer.render(this.snake.body, this.food.getFoodCoordinates());
        // меняем счёт 
        renderer.renderCount(this.snake.body.length-1);
    },

    newGameClickHendler(){
        this.reset();
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
    game.init({speed: 3, winLength: 10});
}