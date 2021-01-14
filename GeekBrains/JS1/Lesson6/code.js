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
            let mapRow = [];
            for(let col=0; col<this.size; col++){
                const td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
                mapRow.push('');
            }
            this.mapValue.push(mapRow);
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
        let value = [];
        let stringZ = '';
        let stringG = '';
        for(let x=0; x<this.size; x++){
            stringZ +=this.mapValue[x][x];
            stringG += this.mapValue[x][this.size-1 - x];
        }
        value.push(stringZ);
        value.push(stringG);
        for(let x=0; x<this.size; x++){
            let stringX = '';
            let stringY = ''; 
            for(let y = 0; y<this.size; y++){
                stringX += this.mapValue[x][y];
                stringY += this.mapValue[y][x];
            }
            value.push(stringX);
            value.push(stringY);
        }
        

        for(let el = 0; el<value.length; el++){
            if (this.isLineWon(el, value)){
                return true;
            }
            
            
    

        }
        
        // if(stringX === 'XXX' || stringX === 'OOO')
        //     return true;

    },
    isLineWon(el, array){ 
        return array[el] === this.setLine(this.phase, this.size); // не работает!!! проверить
    },
    setLine(phase, size){
        let lineX = '';
        for(let i=1; i<=size; i++){
            lineX += lineX;
        } 
    },

    // isLineWon(a, b, c){
    //     let value = this.mapValue[a.x][a.y]+this.mapValue[b.x][b.y]+this.mapValue[c.x][c.y];
    //     return value === 'XXX' || value === 'OOO';
    // },

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