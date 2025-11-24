var productcontainer;
if (localStorage.getItem('prodects') == null) {
    productcontainer = [];
} else {
    productcontainer = JSON.parse(localStorage.getItem('prodects'));
    displayProducts();
}

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDescription");


function addProduct() {
    var product={
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescInput.value
    }
    productcontainer.push(product);
    localStorage.setItem('prodects',JSON.stringify(productcontainer));
    clearForm();
    displayProducts();

}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}

function displayProducts() {
    var cartoona = "";
    for (var i = 0; i < productcontainer.length; i++) {
        cartoona += `<tr>
        <th scope="row">${i+1}</th>
        <td>${productcontainer[i].name}</td>
        <td>${productcontainer[i].price}</td>
        <td>${productcontainer[i].category}</td>
        <td>${productcontainer[i].description}</td>
        <td><button class="btn btn-outline-danger">Delete</button></td>
        <td><button class="btn btn-outline-warning">Update</button></td>
      </tr>`;
    }
document.getElementById("productTableBody").innerHTML = cartoona;
}
localStorage.clear();