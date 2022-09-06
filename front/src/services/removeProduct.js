export function removeProduct(product) {
  const storage = JSON.parse(localStorage.getItem("cart"));
  const newCart = storage.filter(
    (data) => data.id !== product.id,
  );
  localStorage.setItem("cart", JSON.stringify(newCart));
}
