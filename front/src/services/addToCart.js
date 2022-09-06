export function addToCart(product) {
  const cartStorage = localStorage.getItem("cart");
  if (cartStorage) {
    const cartArray = JSON.parse(cartStorage);
    const found = cartArray.find((element) => {
      if (element.id === product.id) {
        element.user_quantity = element.user_quantity + 1;
        return true;
      }
    });
    if (!found) {
      product.user_quantity = 1;
      cartArray.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cartArray));
  } else {
    const { user_quantity, ...spreadProduct } = product;
    const addProduct = {
      ...spreadProduct,
      user_quantity: user_quantity + 1,
    };
    localStorage.setItem("cart", JSON.stringify([addProduct]));
  }
}
