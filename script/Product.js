
let products = JSON.parse( localStorage.getItem('products'))?
JSON.parse( localStorage.getItem('products')):
    localStorage.setItem('products',
        JSON.stringify(
            [
                {
                    "id": 1,
                    "make": "R2 999.99",
                    "spec": "Nike Sneakers",
                    "amount": 2999.99,
                    "image": "https://i.postimg.cc/TPbShZcq/kd16-basketball-shoes-H3gc-DG-removebg-preview.png"
                },
                {
                    "id": 2,
                    "make": "R1 999.99",
                    "spec": "Chicago Bulls Jersey",
                    "amount": 1999.99,
                    "image": "https://i.postimg.cc/1XXrVFQh/BULLMZ0861-D-removebg-preview.png"
                },
                {
                    "id": 3,
                    "make": "R999.99",
                    "spec": "Nike NBA Shorts",
                    "amount": 999.99,
                    "image": "https://i.postimg.cc/yYBSG95V/milwaukee-bucks-icon-edition-nba-swingman-shorts-SZq-PVC-removebg-preview-1.png"
                },
                {
                    "id": 4,
                    "make": "R499.99",
                    "spec": "OKC Edition NBA Cap",
                    "amount": 499.99,
                    "image": "https://i.postimg.cc/1XfLkVhR/nba-jersey-los-angeles-lakers-socks-removebg-preview.png"
                },
                {
                    "id": 5,
                    "make": "R449.99",
                    "spec": "Swoosh Cap",
                    "amount": 449.99,
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
                    <p class="card-text"> ${product.spec}</p>
                    <h5 class="card-title">${product.make}</h5>
                    <button class="btn btn-primary">Shop now</button> <button class="btn btn-primary">Cart</button>
                </div>
            </div>`
        });
    }else{
        productsWrapper.innerHTML = "No product"
    }      
}

displayProducts()

// addEventListener
// keyup
// addup
// get the indexed
// use splice 
// let skills = [
//     {
//         "id": 1,
//         "make": "R2 999.99",
//         "spec": "Nike Sneakers",
//         "amount": 25000,
//         "image": "https://i.postimg.cc/TPbShZcq/kd16-basketball-shoes-H3gc-DG-removebg-preview.png"
//     },
//     {
//         "id": 2,
//         "make": "R1 999.99",
//         "spec": "Chicago Bulls Jersey",
//         "amount": 25000,
//         "image": "https://i.postimg.cc/1XXrVFQh/BULLMZ0861-D-removebg-preview.png"
//     },
//     {
//         "id": 3,
//         "make": "R999.99",
//         "spec": "Nike NBA Shorts",
//         "amount": 25000,
//         "image": "https://i.postimg.cc/yYBSG95V/milwaukee-bucks-icon-edition-nba-swingman-shorts-SZq-PVC-removebg-preview-1.png"
//     },
// ]

let skillsWrapper = document.querySelector('[data-products]')
let searchItem = document.querySelector('[data-search-product]')
let sorting = document.querySelector('[data-products-sort]')

function displaySkills(data) {
    skillsWrapper.innerHTML = "";
    if (data.length > 0) {
        data.forEach( product => {
            skillsWrapper.innerHTML += `
            <div class="card" style="background-color: rgba(255, 255, 255, 0.4);">
                <img src="${product.image}" class="card-img-top" width="250" height="300" alt="${product.id}">
                <div class="card-body">
                    <p class="card-text"> ${product.spec}</p>
                    <h5 class="card-title">${product.make}</h5>
                    <button class="btn btn-primary">Shop now</button> <button class="btn btn-primary" onclick= addToCart($)>Cart</button>
                </div>
            </div>`
        });
    } else {
        skillsWrapper.innerHTML = "Skills not found";
    }
}

displaySkills(products)

searchItem.addEventListener('keyup', () => {
    try {
        let searchValue = searchItem.value;
        let itemFound = products.filter ( item => {
            return item.spec.toLowerCase().includes
            (searchValue.toLowerCase());
        });
        if (itemFound.length > 0) {
            displaySkills(itemFound);
        } else {
            skillsWrapper.innerHTML = "Skills not found"
        }
    } catch (e) {
        skillsWrapper.innerHTML = "Try again later"
    }
});


sorting.addEventListener('click', () => {
    try {
        let sortedProducts = products.slice().sort( (a, b) => {
            return a.amount - b.amount
        })
        displaySkills(sortedProducts);
    } catch (e) {
        console.error(e);
    }
});

let addCart = [];


