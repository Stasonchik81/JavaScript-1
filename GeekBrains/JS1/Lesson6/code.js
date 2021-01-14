let ticTacToe = {
    gameTableElement: document.getElementById('game'),
    size: 3,
    phase: 'X',
    mapValue: [],
    status: "playing",
    init(){
        ticTacToe.renderMap();
        this.initEventHandler();
    },
    renderMap(){
        for(let row=0; row<this.size; row++){
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            this.mapValue[row] = new Array(this.size).fill('');
            for(let col=0; col<this.size; col++){
                const td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    },

    initEventHandler(){
        this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
    },

    cellClickHandler(event){
        if(!this.isCorrectClick(event)){
            return;
        }
        this.fillCell(event);
            if (this.hasWon()){
                this.setStatusStopped();
                alert("winner!!!");
                return;
            }
        this.togglePhase();
    },

    fillCell(event){
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
         if (this.mapValue[row][col] === ''){
            this.mapValue[row][col] = this.phase;
            event.target.textContent = this.phase;
         }
         else return;   
    },

    togglePhase(){
        this.phase = this.phase === 'X' ? 'O' : 'X';
    },

    hasWon(){
        // return this.isLineWon({x:0, y:0}, {x:0, y:1}, {x:0, y:2})|| // Проверка в лоб
        // this.isLineWon({x:1, y:0}, {x:1, y:1}, {x:1, y:2})||
        // this.isLineWon({x:2, y:0}, {x:2, y:1}, {x:2, y:2})||
        // this.isLineWon({x:0, y:0}, {x:1, y:0}, {x:2, y:0})||
        // this.isLineWon({x:0, y:1}, {x:1, y:1}, {x:2, y:1})||
        // this.isLineWon({x:0, y:2}, {x:1, y:2}, {x:2, y:2})||
        // this.isLineWon({x:2, y:0}, {x:1, y:1}, {x:0, y:2})||
        // this.isLineWon({x:0, y:0}, {x:1, y:1}, {x:2, y:2});

        // Проверка в цикле
        let rows = new Array(this.size).fill('');
        let cols = new Array(this.size).fill('');
        let cross = new Array(2).fill('');
        for(let i=0; i<this.size; i++){
            cross[0] +=this.mapValue[i][i];
            cross[1] += this.mapValue[this.size-1 - i][i];
            for(let j = 0; j<this.size; j++){
                rows[i] += this.mapValue[i][j];
                cols[i] += this.mapValue[j][i];
            }
        }
        return rows.some(this.isLineWon)||cols.some(this.isLineWon)||cross.some(this.isLineWon);
    },

    isLineWon(str){ 
        let winX = '';
        let winO = '';
        for (let i=0; i<ticTacToe.size; i++){
            winX += 'X';
            winO += 'O';
        }
        return winX === str || winO === str;
    },

    isStatusPlaying(status){
        return status === "playing";
    },

    setStatusStopped(){
        this.status = "stopped";
    },

    isClickByCell(event){
        return event.target.tagName === 'TD';
    },

    isCorrectClick(event){
        return this.isClickByCell(event) && this.isStatusPlaying(this.status);
    }
}

window.addEventListener("load", ticTacToe.init());