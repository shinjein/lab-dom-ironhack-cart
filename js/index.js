// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span'); 
  //price.value = "25"; 
  const value1 = price.innerText;
  console.log(price.value);

  const quantity = product.querySelector('.quantity input');
  const value2 = quantity.value;

  const multiply = value1 * value2;
  const subtotal = product.querySelector('.subtotal');
  console.log(subtotal.innerText = `${multiply}`);
  return multiply;

}

function calculateAll() {

const allProducts = document.getElementsByClassName('product');
const allProductsArr = [...allProducts];
let total = 0;
allProductsArr.forEach(product => {
  total += updateSubtotal(product);
});
const sum = document.querySelector('#total-value span');
console.log(sum.innerText = `${total}`);


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
