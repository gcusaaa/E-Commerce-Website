
let products = JSON.parse( localStorage.getItem('products'))?
JSON.parse( localStorage.getItem('products')):
    localStorage.setItem('products',
        JSON.stringify(
            [
                {
                    "id": 1,
                    "make": "Dell",
                    "spec": "Latitude lorem8",
                    "amount": 25000,
                    "image": "https://i.postimg.cc/TPbShZcq/kd16-basketball-shoes-H3gc-DG-removebg-preview.png"
                },
                {
                    "id": 2,
                    "make": "Dell",
                    "spec": "Latitude lorem8",
                    "amount": 25000,
                    "image": "https://i.postimg.cc/1XXrVFQh/BULLMZ0861-D-removebg-preview.png"
                },
                {
                    "id": 3,
                    "make": "Dell",
                    "spec": "Latitude lorem8",
                    "amount": 25000,
                    "image": "https://i.postimg.cc/yYBSG95V/milwaukee-bucks-icon-edition-nba-swingman-shorts-SZq-PVC-removebg-preview-1.png"
                },
                {
                    "id": 4,
                    "make": "Dell",
                    "spec": "Latitude lorem8",
                    "amount": 25000,
                    "image": "https://i.postimg.cc/66DNXKf5/oklahoma-city-thunder-city-edition-nba-swoosh-flex-cap-fp8mm3-removebg-preview.png"
                },
                {
                    "id": 5,
                    "make": "Dell",
                    "spec": "Latitude lorem8",
                    "amount": 25000,
                    "image": "https://i.postimg.cc/66DNXKf5/oklahoma-city-thunder-city-edition-nba-swoosh-flex-cap-fp8mm3-removebg-preview.png"
                }
            ]
            )
    );  
            
        
let productsWrapper = document.querySelector('[data-products]')  

function displayProducts() {
    productsWrapper.innerHTML = "";
    if (products) {
        products.forEach( product => {
            productsWrapper.innerHTML += `
            <div class="card" style="background-color: rgba(255, 255, 255, 0.4);">
                <img src="${product.image}" class="card-img-top" alt="${product.id}">
                <div class="card-body">
                    <h5 class="card-title">${product.make}</h5>
                    <p class="card-text"> ${product.spec}</p>
                    <button class="btn btn-primary">Cart</button>
                </div>
            </div>`
        });
    }else{
        productsWrapper.innerHTML = "No product"
    }      
}

displayProducts()