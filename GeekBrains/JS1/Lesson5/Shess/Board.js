let Board = {
    renderChessBoard(){
        let result = this.generateChessBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderFrameSquare();
        this.renderBlackSquare();
    },
    generateChessBoard(){
        let board = '';
        for( let x = 0; x<10; x++){
            board += '<tr>';
        for(let y=0; y<10; y++){
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
    renderFrameSquare(){
        let chr = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
        for (let i = 1; i<9; i++){
            for (let j=9; j >= 0; j=j-9){
                let square = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
                square.innerHTML = `${i}`;
                square = document.querySelector(`[data-x="${j}"][data-y="${i}"]`);
                square.innerHTML = chr[i-1];
            }    
        } 
    },
    renderBlackSquare(){
        for (let i = 1; i < 9; i=i+2){
            for (let j = 2; j < 9; j=j+2){
                let square = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
                square.classList.add("black");
                let square = document.querySelector(`[data-x="${j}"][data-y="${i}"]`);
                square.classList.add("black");
            }    
        } 
    },
}