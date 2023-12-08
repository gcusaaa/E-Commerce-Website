let adPros = JSON.parse(localStorage.getItem('products')) || [];
let productsWrapper = document.querySelector('[data-products]');
let adminBody = document.getElementById('adminBody');
let productModal = new bootstrap.Modal(document.getElementById('adminBody'));

let products = JSON.parse( localStorage.getItem('products'))?
JSON.parse( localStorage.getItem('products')):
    localStorage.setItem('products',
        JSON.stringify(
            [
                {
                    "id": 1,
                    "price": "R2 999.99",
                    "describtion": "Nike Sneakers",
                    "amount": 2999.99,
                    "image": "https://i.postimg.cc/TPbShZcq/kd16-basketball-shoes-H3gc-DG-removebg-preview.png"
                },
                {
                    "id": 2,
                    "price": "R1 999.99",
                    "describtion": "Chicago Bulls Jersey",
                    "amount": 1999.99,
                    "image": "https://i.postimg.cc/1XXrVFQh/BULLMZ0861-D-removebg-preview.png"
                },
                {
                    "id": 3,
                    "price": "R999.99",
                    "describtion": "Nike NBA Shorts",
                    "amount": 999.99,
                    "image": "https://i.postimg.cc/yYBSG95V/milwaukee-bucks-icon-edition-nba-swingman-shorts-SZq-PVC-removebg-preview-1.png"
                },
                {
                    "id": 4,
                    "price": "R499.99",
                    "describtion": "OKC Edition NBA Cap",
                    "amount": 499.99,
                    "image": "https://i.postimg.cc/1XfLkVhR/nba-jersey-los-angeles-lakers-socks-removebg-preview.png"
                },
                {
                    "id": 5,
                    "price": "R449.99",
                    "describtion": "Swoosh Cap",
                    "amount": 449.99,
                    "image": "https://i.postimg.cc/66DNXKf5/oklahoma-city-thunder-city-edition-nba-swoosh-flex-cap-fp8mm3-removebg-preview.png"
                }
            ]
            )
    );  
     
function displayProducts() {
    productsWrapper.innerHTML = "";
    if (products) {
        products.forEach( product => {
            productsWrapper.innerHTML += `
            <div class="card" style="background-color: rgba(255, 255, 255, 0.4);">
                <img src="${product.image}" class="card-img-top" alt="${product.id}">
                <div class="card-body">
                    <p class="card-text"> ${product.describtion}</p>
                    <h5 class="card-title">${product.price}</h5>
                    <button class="btn btn-primary">Cart</button>
                </div>
            </div>`
        });
    }else{
        productsWrapper.innerHTML = "No product"
    }      
}

function disPros() {
    adminBody.innerHTML = '';
        adPros.forEach(product => {
            let row = document.createElement('tr');
            row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.price}</td>
            <td><img src="${product.image}" width="100"></td>
            <td>${product.description}</td>
            <td><button onclick="deleteProduct(${product.id})">Delete</button>
            <button onclick="editProduct(${product.id})">Edit</button></td>`;

            adminBody.appendChild(row);
        }
    );
}

function addPros() {
    let insert = {
        id: adPros.length + 1,
        price: "New Price",
        description: "New Description",
        amount: 0
    };

    adPros.push(insert);
    localStorage.setItem('products', JSON.stringify(adPros));
    disPros();

}

// this is a delete function that gets product by its id in the local storage
function deleteProduct(productId) {
    adPros = adPros.filter(product => product.id !== productId);
    localStorage.setItem('products', JSON.stringify(adPros));
    disPros();
}

// this is the function to edit my products
function editPros(productId) {
    alert(`Edit product with ID ${productId}`);
    // disPros();
}
disPros();


