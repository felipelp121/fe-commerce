import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../contexts/headerContext";

export function SucessPurchase() {
  const [cartStorage, setCartStorage] = useState([]);
  const { setChangeBagAmount } = useContext(HeaderContext);

  useEffect(() => {
    setCartStorage(JSON.parse(localStorage.getItem("purchasedProducts")));
    setChangeBagAmount(true);
  }, []);

  return (
    <div>
      <div className="page-info">
        <p>Produtos Comprados</p>
      </div>

      {cartStorage?.length > 0 ? (
        <div className="purchased-products">
          {cartStorage.map((product) => (
            <div className="purchased-product" key={"product-" + product.id}>
              <div className="product-info">
                <div>
                  <img src={product.image} alt="teclado razer" />
                </div>
                <div className="product-text">
                  <p className="product-title">{product.name}</p>
                  <p className="product-price">R${product.value}</p>
                  <p>Quantidade: {product.user_quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      <div className="sucessful-purchase">
        <svg viewBox="0 0 442.533 442.533" className="sucess-icon">
          <path
            d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248
		l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852
		C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828
		c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33
		c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"
          />
        </svg>
        <p className="total-title">COMPRA REALIZADA COM SUCESSO!</p>
        <Link to={"/"}>
          <div className="btn-finish-purchase">
            <span>Voltar ?? p??gina principal</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
