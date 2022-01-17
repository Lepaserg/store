fetch('http://localhost:8080/products')
    .then(response => response.json())
    .then(result => buildResultTable(result));

let productCounter = document.getElementById("productCounter");

function buildResultTable(productList){
    let productTable = document.getElementById("productTable");
    productList.forEach(product => {
        let nameDiv = document.createElement("div");
        nameDiv.textContent = product.name;
        let descriptionDiv = document.createElement("div");
        descriptionDiv.textContent = product.description;
        let priceDiv = document.createElement("div");
        priceDiv.textContent = product.price;
        let photoImg = document.createElement("img");
        photoImg.setAttribute("width", "50");
        photoImg.setAttribute("height", "60");
        photoImg.setAttribute("src", "/images/1.jpg")

        let productDiv = document.createElement("div");
        productDiv.appendChild(nameDiv);
        productDiv.appendChild(descriptionDiv);
        productDiv.appendChild(priceDiv);
        productDiv.appendChild(photoImg);
        productDiv.appendChild(buildAddToBasketBtn(product.id));
        productTable.appendChild(productDiv);
    });
}

function buildAddToBasketBtn(id){
    let addToBasketBtn = document.createElement("button");
    addToBasketBtn.textContent = "Добавить в корзину";
    addToBasketBtn.addEventListener("click", function (){
        fetch('http://localhost:8080/addToBasket?productId=' + id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                let counter = productCounter.textContent || 0;
                productCounter.textContent = +counter + 1;
            });
    })
    return addToBasketBtn;
}

let goToBasketBtn = document.getElementById("goToBasket");
goToBasketBtn.addEventListener("click", function (){
    location.href = "/basket"
})
