import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeProductQuantity } from "../services/changeProductQuantity";
import { removeProduct } from "../services/removeProduct";
import { totalProductsValue } from "../services/totalProductsValue";
import { HeaderContext } from "../contexts/headerContext";

export function Cart() {
  const { setChangeBagAmount } = useContext(HeaderContext);
  const [cartStorage, setCartStorage] = useState([]);
  const [totalProductsValueHook, setTotalProductsValueHook] = useState(
    totalProductsValue()
  );
  const navigate = useNavigate();

  useEffect(() => {
    setCartStorage(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <div>
      <div className="page-info">
        <p>Carrinho</p>
      </div>
      {cartStorage?.length > 0 ? (
        <div>
          <div className="products">
            {cartStorage.map((product) => (
              <div className="product" key={"product-" + product.id}>
                <div className="product-info">
                  <div>
                    <img src={product.image} alt="teclado razer" />
                  </div>
                  <div className="product-text">
                    <p className="product-title">{product.name}</p>
                    <p className="product-price">R${product.value}</p>
                  </div>
                </div>
                <div className="cart-buy">
                  <div>
                    <input
                      id={"product-input-value-" + product.id}
                      type="number"
                      defaultValue={product.user_quantity}
                    />
                  </div>
                  <div
                    className="change-quantity"
                    onClick={() => {
                      changeProductQuantity(
                        product.id,
                        "product-input-value-" + product.id
                      );
                      setTotalProductsValueHook(totalProductsValue());
                    }}
                  >
                    <span>Alterar Quantidade</span>
                  </div>
                  <div
                    className="remove-item"
                    onClick={() => {
                      removeProduct(product);
                      setCartStorage(JSON.parse(localStorage.getItem("cart")));
                      setChangeBagAmount(true);
                      setTotalProductsValueHook(totalProductsValue());
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
            <p className="total-value">R${totalProductsValueHook}</p>
            <div
              className="btn-finish-purchase"
              onClick={() => navigate("/address")}
            >
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
