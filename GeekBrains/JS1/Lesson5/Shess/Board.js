let Board = {
    renderChessBoard(){
        let result = this.generateChessBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
    },
    generateChessBoard(){
        let board = '';
        for( let x = 0; x<8; x++){
            board += '<tr>';
        for(let y=0; y<8; y++){
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
}