let init = {
    button: document.getElementsByTagName('button'),
    initPage(){
        renderer.renderProducts(allProducts);
        this.initButtonEventHandler();
    },

    initButtonEventHandler(){
        for(var i =0; i<this.button.length; i++){
            this.button[i].addEventListener('click', event => this.buttonClickHandler(event))
        }
    },

    buttonClickHandler(event){
        basket.putProduct(this.getProduct(event, allProducts));
        renderer.renderProduct(this.getProduct(event, basket.goodList));
        renderer.renderTotal(basket.goodList);
    },

    getProdName(event){
        return event.target.getAttribute("buy");
    },

    getProduct(event, list){
        let productName = this.getProdName(event);
        for(let i =0; i<list.length; i++){
            let thisProdName = list[i].name;
            if (thisProdName === productName){
                return list[i];
            }
        }
    },
}
