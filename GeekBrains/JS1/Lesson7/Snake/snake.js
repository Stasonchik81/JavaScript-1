let snake = {
    body: null,
    direction: null,
    lastStepDirection: null,
    
    init(startPoint, direction){
        this.body = [startPoint];
        this.direction = direction;
        this.lastStepDirection = direction;
    },
    makeStep(){
        this.lastStepDirection = this.direction;
        this.body.unshift(this.getNextStepHeadPoint());
        this.body.pop();
    },

    isBodyPoint(point){
        return this.body.some(snakePoint => snakePoint.x === point.x && snakePoint.y === point.y);
    },

    getNextStepHeadPoint(){
        let firstPoint = this.body[0];
        switch(this.direction){
            case 'up':
                return{x: firstPoint.x, y: firstPoint.y !==0 ? firstPoint.y-1 : settings.rowsCount-1}
            case 'down':
                return{x: firstPoint.x, y: firstPoint.y !== settings.rowsCount ? firstPoint.y+1 : 0}
            case 'left':
                return{x: firstPoint.x !==0 ? firstPoint.x - 1 : settings.colsCount-1, y: firstPoint.y}
            case 'right':
                return{x: firstPoint.x !== settings.colsCount ? firstPoint.x + 1 : 0, y: firstPoint.y}
        }
    },

    changeNextStepHeadPoint(point){
        if(point.x === settings.rowsCount){
            return point.x = 0;
        }
        if(point.x < 0){
            return point.x = settings.rowsCount;
        }
        if (point.y === settings.colsCount){
            return point.y = 0;
        }
        if (point.y < 0){
            return point.y = settings.colsCount;
        }
    },

    incrementBody(){
        let lastPointBodyIdx = snake.body.length - 1;
        let lastPointBody = snake.body[lastPointBodyIdx];
        let lastPointBodyClone = Object.assign({}, lastPointBody);
        this.body.push(lastPointBodyClone);
    },

    setDirection(direction){
        this.direction = direction;
    },

}