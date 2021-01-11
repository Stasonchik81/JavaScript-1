let basket = {
    goodList: [],
    putProduct(prod, count){
        let idx = this.goodList.findIndex(function(el){
            return el.name === prod.name;
        });
        if(idx === -1){
            basket.goodList.push(Object.assign({}, prod));
            this.goodList[this.goodList.length-1].count = count;
        }
        else{
            basket.goodList[idx].count += count;
        }     
    },
    countTotalNumber(){
        let result = 0;
        basket.goodList.forEach(function(el){
            result += el.count;
        });
        return result;
    },
    countTotalPrice(){
        let result = 0;
        basket.goodList.forEach(function(el){
            result += el.price * el.count;
        });
        return result;
    },

}