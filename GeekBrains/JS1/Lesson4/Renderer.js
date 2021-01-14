/**
 * Отрисовка карты
 */
let renderer = {
    map: '',
    render (){
        for(let row = 0; row<config.rowsCount; row++){
            for(let col = 0; col<config.colsCount; col++){
                this.map += (player.x === col && player.y === row) ? player.symb:'x';
            }
            this.map += '\n';
        }
        console.log(this.map);
    },
    clear (){
        console.clear();
        this.map = '';
    }
};