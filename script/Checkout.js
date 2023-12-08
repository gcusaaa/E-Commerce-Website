// checkout content 

let addCart = JSON.parse(localStorage.getItem('cart'))
let cartValues = document.querySelector('addCart')

function disCheckProducts() {
    cartBody.innerHTML += '';
        addCart.forEach(product => {
            let row = document.createElement('tr');
            row.innerHTML = `
            <td class="productIdentity">${product.id}</td>
            <td class="productPrice">${product.price}</td>
            <td class="productImage"><img src="${product.image}" width="100"></td>
            <td class="productDescribtion">${product.description}</td>
            <td><button onclick="deleteProduct(${product.id})">Delete</button>
            <button onclick="editProduct(${product.id})">Edit</button></td>`;

        }
    );
}