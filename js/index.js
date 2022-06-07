// ITERATION 1

function updateSubtotal(product) {
  // alert('Calculating subtotal, yey!');
  //... your code goes here
  const priceElement = product.querySelector('.price span');
  let price = priceElement.innerHTML;
  const quantityElement = product.querySelector('.quantity input');
  let quantity = quantityElement.value;
  const subtotal = product.querySelector('.subtotal span');
  // console.log(price, quantity);
  let numeroSubtotal = price * quantity;
  subtotal.innerHTML = numeroSubtotal;
  return numeroSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let total = 0;
  const products = document.querySelectorAll('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // console.log(singleProduct);

  // ITERATION 2
  products.forEach((productElem) => {
    let subtotal = updateSubtotal(productElem);
    total += subtotal;
  });

  //... your code goes here

  // ITERATION 3
  const totalInner = document.querySelector('#total-value span');
  totalInner.innerHTML = total;
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  console.log(event);
  const removeFather = console.log('The target in remove is:', target);
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
  window.addEventListener('click', () => {
    const removeItemButton = document.querySelector('.btn-remove');
    removeItemButton.addEventListener('click', removeProduct);
  });
});
