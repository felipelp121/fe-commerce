export function changeProductQuantity(productId, elementId) {
  const quantity = document.getElementById(elementId).value;
  const storage = JSON.parse(localStorage.getItem("cart"));
  const newCart = storage.map((product) => {
    if (product.id === productId) {
      product.user_quantity = quantity;
      return product;
    }
    return product;
  });
  localStorage.setItem("cart", JSON.stringify(newCart));
}
