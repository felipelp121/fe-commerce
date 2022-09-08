import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { addToCart } from "../services/addToCart";
// import teclado from "../assets/images/teclado-razer.jpg";

export function Home() {
  const [bagAmount, setBagAmount] = useState(0);
  const [changeBagAmount, setChangeBagAmount] = useState(false);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [endpoint, setEndpoint] = useState("/products");

  useEffect(() => {
    api(endpoint).then((data) => {
      setProducts(data);
    });
  }, [endpoint]);

  useEffect(() => {
    const amount = JSON.parse(localStorage.getItem("cart"))?.length;
    setBagAmount(amount ? amount : 0);
    setChangeBagAmount(false);
  }, [changeBagAmount]);

  return (
    <div>
      <header className="bg-dark-blue">
        <Link to="/">
          <div className="brand" onClick={() => setEndpoint("/products")}>
            Fe-commerce
          </div>
        </Link>
        <Link to="/cart">
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
              <div className="bag-amount">{bagAmount}</div>
            </div>
          </div>
        </Link>
      </header>

      <div className="categories">
        <div
          className="category-type"
          onClick={() => setEndpoint("/products/hardware")}
        >
          <p>hardware</p>
        </div>
        <div
          className="category-type"
          onClick={() => setEndpoint("/products/device")}
        >
          <p>periféricos</p>
        </div>
        <div
          className="category-type"
          onClick={() => setEndpoint("/products/pc")}
        >
          <p>pc</p>
        </div>
      </div>

      <div className="products">
        {products.length > 0 ? (
          products
            .slice((pagination - 1) * 5, pagination * 5)
            .map((product) => (
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
                <div
                  className="buy"
                  onClick={() => {
                    if (bagAmount < 59) {
                      setChangeBagAmount(true);
                      addToCart(product);
                    }
                  }}
                >
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
                  <p className="buy-title">COMPRAR</p>
                </div>
              </div>
            ))
        ) : (
          <div></div>
        )}
      </div>

      <div className="pagination">
        <span
          id="left-arrow"
          onClick={() => {
            if (pagination > 1) {
              setPagination(pagination - 1);
            }
          }}
        >
          &lt;
        </span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span
          onClick={() => {
            if (pagination * 5 < products.length) {
              setPagination(pagination + 1);
            }
          }}
        >
          &gt;
        </span>
      </div>
    </div>
  );
}
