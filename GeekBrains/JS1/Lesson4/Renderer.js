let renderer = {
    map: '',
    render (){
        for(let row = 0; row<config.rowsCount; row++){
            for(let col = 0; col<config.colsCount; col++){
                this.map += 'x';
            }
            this.map = '\n';
        }
    }
}