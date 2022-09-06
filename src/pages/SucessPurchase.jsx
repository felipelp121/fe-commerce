import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SucessPurchase() {
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
        <p>Produtos Comprados</p>
      </div>

      {cartStorage?.length > 0 ? (
        <div className="purchased-products">
          {cartStorage.map((product, index) => (
            <div className="purchased-product" key={"product-" + index}>
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
            <span>Voltar à página principal</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
