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

    setDirection(direction){
        this.direction = direction;
    },
    eat(){

    }

}