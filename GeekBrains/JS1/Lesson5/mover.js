let mover = {
    makeStep(event){
        let newPosition = this.getNewPosition(event);
        if (this.isPositionEqual(player, newPosition)){
            return;
        }
        //if(this.isPositionUnable(newPosition,))

        if (! this.canPlayerMakeStep(newPosition)){
            return;
        }
        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(newPosition);
    },
    isPositionEqual(currentPos, newPos){
        return currentPos.x === newPos.x && currentPos.y === newPos.y;
    },
    isPositionUnable(){
        let unableSquares = document.querySelectorAll(".black");
        let unableSquare = {x:null, y:null}
        for (let element of unableSquares) {
            unableSquare.x  = element.getAttribute("data-x");
            unableSquare.y = element.getAttribute("data-y");// доработать данную функцию!!!
        //return newPos.x === unPos.x && newPos.y === unPos.y;
        }
    },

    canPlayerMakeStep(newPosition){
        return renderer.getSquare(newPosition) !== null;
    },

    getNewPosition(event){
        switch(event.key){
            case "1":
                return {x: player.x - 1, y: player.y + 1};
            case "2": 
                return {x: player.x, y: player.y + 1};
            case "3": 
                return {x: player.x + 1, y: player.y + 1};
            case "4": 
                return {x: player.x - 1, y: player.y};
            case "6": 
                return {x: player.x + 1, y: player.y};
            case "7": 
                return {x: player.x - 1, y: player.y - 1};
            case "8": 
                return {x: player.x, y: player.y - 1};
            case "9": 
                return {x: player.x + 1, y: player.y - 1};
            default: return {x: player.x, y: player.y};
        }
    }
}