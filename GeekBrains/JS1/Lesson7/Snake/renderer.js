let renderer = {
    cells: {},
// отрисовка карты
    renderMap(rowsCount, colsCount){
        let table = document.getElementById('game');
        table.innerText = '';
        for(let row=0; row < rowsCount; row++){
            let tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);
            for(let col=0; col < colsCount; col++){
                let td = document.createElement('td');
                td.classList.add('cell');
                tr.appendChild(td);
                this.cells[`x${col}_y${row}`] = td;
            }
        }
    },
    // отрисовка тела змеи и еды
    render(snakePointArray, foodPoint){
        for(let key of Object.getOwnPropertyNames(this.cells)){
            this.cells[key].className = 'cell';
        }
        snakePointArray.forEach( (point, index)=> {
            this.cells[`x${point.x}_y${point.y}`].classList.add(index === 0 ? "snakeHead" : "snakeBody");
        });
        this.cells[`x${foodPoint.x}_y${foodPoint.y}`].className = 'food';
    },

    renderCounter(){
        let div = document.getElementById('counter');
        div.innerHTML = '<p>Счёт игры: <span></span>';
    }
}