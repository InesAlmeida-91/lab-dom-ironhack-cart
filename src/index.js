// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotalElement = product.querySelector('.subtotal span');
  const subTotal = subTotalElement.innerHTML = price.innerHTML * quantity.value;
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product')
  const multiply = multipleProducts.forEach(products => {
    return updateSubtotal(products)
})
  // ITERATION 3
  //target subtotal class
  const subTotalClass = document.querySelectorAll('.subtotal span');
  const sumSubTotal = subTotalClass.forEach(subtotal => {
  let totalValue = document.querySelector('#total-value span');
  totalValue = totalValue.innerHTML + subtotal
  return totalValue
  })

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
