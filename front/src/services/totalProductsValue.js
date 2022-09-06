export function totalProductsValue() {
  const storage = JSON.parse(localStorage.getItem("cart"));
  let totalValue = 0;
  storage?.forEach((element) => {
    totalValue += element.value * element.user_quantity;
  });
  return totalValue;
}
