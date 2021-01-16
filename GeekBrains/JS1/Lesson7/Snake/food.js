let food = {
    x: null,
    y: null,
    setFoodCoordinates(point){
        food.x = point.x;
        food.y = point.y;
    },
    getFoodCoordinates(){
        return {x: this.x, y: this.y}
    },
    isFoodPoint(point){
        return point.x === this.x && point.y === this.y;
    }
}