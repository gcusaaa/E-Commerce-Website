// checkout content 

let addCart = JSON.parse(localStorage.getItem('cart')) || [];
let cartBody = document.getElementById('cartBody');
let productsWrapper = document.querySelector('[data-products]');

let products = [
    
]

function addToCart(product) {
    addCart.push(product);
    localStorage.setItem('cart', JSON.stringify(addCart));
    disCheckProducts();
}

function displayProducts() {
    productsWrapper.innerHTML = "";
    if (products) {
        products.forEach(product => {
            productsWrapper.innerHTML += `
            <div class="card" style="background-color: rgba(255, 255, 255, 0.4);">
                <img src="${product.image}" class="card-img-top" alt="${product.id}">
                <div class="card-body">
                    <p class="card-text"> ${product.describtion}</p>
                    <h5 class="card-title">${product.price}</h5>
                    <button class="btn btn-primary" onclick='addToCart(${JSON.stringify(product)})'>Cart</button>
                </div>
            </div>`;
        });
    } else {
        productsWrapper.innerHTML = "No product";
    }
}

function disCheckProducts() {
    cartBody.innerHTML = '';
        addCart.forEach(product => {
            let row = document.createElement('tr');
            row.innerHTML = `
            <td class="productIdentity">${product.id}</td>
            <td class="productPrice">${product.price}</td>
            <td class="productImage"><img src="${product.image}" width="100"></td>
            <td class="productDescribtion">${product.description}</td>
            <td><button onclick="deleteProduct(${product.id})">Delete</button>
            <button onclick="editProduct(${product.id})">Edit</button></td>`;
        cartBody.appendChild(row);
        }
    );
}

displayProducts();
disCheckProducts();