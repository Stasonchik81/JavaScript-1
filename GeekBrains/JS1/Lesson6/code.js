let ticTacToe = {
    gameTableElement: document.getElementById('game'),
    size: 3,
    init(){
        ticTacToe.renderMap();
        this.initEventHandler();
    },
    renderMap(){
        for(let row=0; row<this.size; row++){
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
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
    cellClickHandler(){
        alert('wrr');
    }
}

window.addEventListener("load", ticTacToe.init());