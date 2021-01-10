let renderer = {
    renderBoard(){
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderUserPosition(player);
        let i=0;
        do {
            this.renderUnableSquare();
            i++;
        }while(i<5)
        
        
        
    },
    generateBoard(){
        let board = '';
        for( let y = 0; y<config.rowsCount; y++){
            board += '<tr>';
        for(let x=0; x<config.colsCount; x++){
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</tbody></table>`;
        
    },
    getSquare(position){
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`)
    },

    renderUserPosition(player){
        let square = this.getSquare(player);
        square.classList.add('user');
    },

    clearUserPosition(){
        document.querySelector('.user').classList.remove('user');
    },
     
    renderUnableSquare(){
        let square = this.getUnableSquare();
        square.classList.add('black');
    },
    getUnableSquare(){
        let unableSquare = {
            x:getRandomInRange(1, 9),
            y:getRandomInRange(1, 9),
        };
        return document.querySelector(`[data-x="${unableSquare.x}"][data-y="${unableSquare.y}"]`);
    }
    
}
