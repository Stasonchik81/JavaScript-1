let snake = {
    body: null,
    direction: null,
    
    init(startPoint, direction){
        this.body = [startPoint];
        this.direction = direction;
    },
    makeStep(){
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
                return{x: firstPoint.x, y: firstPoint.y-1}
            case 'down':
                return{x: firstPoint.x, y: firstPoint.y+1}
            case 'left':
                return{x: firstPoint.x - 1, y: firstPoint.y}
            case 'right':
                return{x: firstPoint.x + 1, y: firstPoint.y}
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
    eat(){

    }

}