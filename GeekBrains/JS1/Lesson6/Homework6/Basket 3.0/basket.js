let basket = {
    goodList: [],
    putProduct(prod){
        let idx = this.goodList.findIndex(function(el){
            return el.name === prod.name;
        });
        if(idx === -1){
            basket.goodList.push(Object.assign({}, prod));
            this.goodList[this.goodList.length-1].count = 1;
        }
        else{
            basket.goodList[idx].count++;
        }     
    },
    countTotalNumber(productList){
        let result = 0;
        productList.forEach(function(el){
            result += el.count;
        });
        return result;
    },
    countTotalPrice(productList){
        let result = 0;
        productList.forEach(function(el){
            result += el.price * el.count;
        });
        return result;
    },

}