let score = {
    cout: 0,
    countElement: null,
    init(){
        this.countElement = document.querySelector('#counter span');
    },
    increment(){
        this.cout++;

    },
    render(){
        this.countElement.textContent = this.cout;
    },
    drop(){
        this.cout = 0;
        this.render();
    }
}