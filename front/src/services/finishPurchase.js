export function finishPurchase(state, city, street, complement) {
  if (!(state && city && street && complement)) {
    return false;
  }
  const address = {
    state: state,
    city: city,
    street: street,
    complement: complement,
  };

  localStorage.setItem("address", JSON.stringify(address));
  const cart = JSON.parse(localStorage.getItem("cart"));
  localStorage.setItem("purchasedProducts", JSON.stringify(cart));
  localStorage.removeItem("cart");

  return true;
}
