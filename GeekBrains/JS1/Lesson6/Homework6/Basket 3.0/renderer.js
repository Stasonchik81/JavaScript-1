let renderer = {
    div1: document.querySelector(".main_div"),
    div2: document.querySelector(".basket_div"),
    div_total: document.querySelector(".total"),
    renderProducts(productList){
        if(productList.length !== 0){
            for (let prod of productList){
                var div = document.createElement("div");
                div.className = "product";
                div.innerHTML = `${prod.name} <br>Цена: ${prod.price} <br>`;
                this.div1.appendChild(div);
                var button = document.createElement("button");
                button.innerHTML = "купить";
                button.setAttribute("buy", `${prod.name}`)
                div.appendChild(button);
            }
        }
        else{
            var p = document.createElement("p");
            p.innerHTML = "Товары временно отсутствуют!";
            this.div1.appendChild(p);
        }
    },
// отрисовываем итог в корзине
    renderTotal(goodList){
        this.div_total.innerHTML = `В корзине: ${basket.countTotalNumber(goodList)} товаров на сумму ${basket.countTotalPrice(goodList)} рублей`;  
    },
// отрисовываем продукт
    renderProduct(product){
        if(product.count === 1){
            var div = document.createElement("div");
            div.setAttribute("product", `${product.name}`);
            div.className = "product";
            div.innerHTML = product.name + '<br>кол-во: ' + product.count;
            this.div2.appendChild(div);
        }
        else{
            let prod = document.querySelector(`[product = "${product.name}"]`);
            console.log(prod);
            prod.innerHTML = product.name + '<br>кол-во: ' + product.count;
        }
    },
}