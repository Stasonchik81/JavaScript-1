let renderer = {
    div1: document.querySelector(".main_div"),
    renderProduct(goodList){
        if(goodList.length !== 0){
            for (let prod of goodList){
                var div = document.createElement("div");
                div.className = "product";
                div.innerHTML = `${prod.name} <br>Цена: ${prod.price}`;
                this.div1.appendChild(div);
            }
            var p = document.createElement("p");
            p.innerHTML = `"В корзине: ${all_count} товаров на сумму ${all_price} рублей"`;
            this.div1.appendChild(p);
        }
        else{
            var p = document.createElement("p");
            p.innerHTML = "Корзина пуста!";
            this.div1.appendChild(p);
        }
        
        
    }
}