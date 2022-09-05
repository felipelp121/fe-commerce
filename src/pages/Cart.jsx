import { useEffect, useState } from "react";

function changeQuantity(name, elementId) {
  const value = document.getElementById(elementId).value;
  const storage = JSON.parse(localStorage.getItem("cart"));
  const newCart = storage.map((data) => {
    if (data.name.common === name) {
      data.name.common = "Felipe";
      return data;
    }
    return data;
  });
  localStorage.setItem("cart", JSON.stringify(newCart));
}

function removeItem(item) {
  const storage = JSON.parse(localStorage.getItem("cart"));
  const newCart = storage.filter(
    (data) => data.name.common !== item.name.common
  );
  localStorage.setItem("cart", JSON.stringify(newCart));
}

export function Cart() {
  const [cartStorage, setCartStorage] = useState([]);

  useEffect(() => {
    setCartStorage(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <div>
      <header className="bg-dark-blue">
        <div className="brand">Fe-commerce</div>
        <div className="bag">
          <svg viewBox="0 0 208.955 208.955" className="bag-svg">
            <path
              d="M190.85,200.227L178.135,58.626c-0.347-3.867-3.588-6.829-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971
	C82.437,0,64.509,17.931,64.509,39.971v11.826H38.27c-3.882,0-7.123,2.962-7.47,6.829L18.035,200.784
	c-0.188,2.098,0.514,4.177,1.935,5.731s3.43,2.439,5.535,2.439h157.926c0.006,0,0.014,0,0.02,0c4.143,0,7.5-3.358,7.5-7.5
	C190.95,201.037,190.916,200.626,190.85,200.227z M79.509,39.971c0-13.769,11.2-24.971,24.967-24.971
	c13.768,0,24.969,11.202,24.969,24.971v11.826H79.509V39.971z M33.709,193.955L45.127,66.797h19.382v13.412
	c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V66.797h49.936v13.412c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5
	V66.797h19.364l11.418,127.158H33.709z"
            />
          </svg>
          <div className="bag-circle-amount">
            <div className="bag-amount">1</div>
          </div>
        </div>
      </header>

      <div className="page-info">
        <p>Carrinho</p>
      </div>
      {cartStorage?.length > 0 ? (
        <div>
          <div className="products">
            {cartStorage.map((product, index) => (
              <div className="product" key={"product-" + index}>
                <div className="product-info">
                  <div>
                    <img
                      src="./images/teclado-mecanico-gamer-razer-blackwidow-v3-tenkeyless-chroma-razer-switch-razer-green-us-rz03-03490200-r3u1_1597347096_m.jpg"
                      alt="teclado razer"
                    />
                  </div>
                  <div className="product-text">
                    <p className="product-title">{product.name.common}</p>
                    <p className="product-price">R$749,99</p>
                  </div>
                </div>
                <div className="cart-buy">
                  <div>
                    <input
                      id={"product-input-value-" + index}
                      type="number"
                      defaultValue={1}
                    />
                  </div>
                  <div
                    className="change-quantity"
                    onClick={() =>
                      changeQuantity(
                        product.name.common,
                        "product-input-value-" + index
                      )
                    }
                  >
                    <span>Alterar Quantidade</span>
                  </div>
                  <div
                    className="remove-item"
                    onClick={() => {
                      removeItem(product);
                      setCartStorage(JSON.parse(localStorage.getItem("cart")));
                    }}
                  >
                    <span>Remover</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="white-line" color="white"></hr>

          <div className="finish-purchase">
            <p className="total-title">Valor total:</p>
            <p className="total-value">R$749,99</p>
            <div className="btn-finish-purchase">
              <span>Finalizar Compra</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Nenhum produto no carrinho</h2>
        </div>
      )}
    </div>
  );
}
