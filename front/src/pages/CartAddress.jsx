import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { totalProductsValue } from "../services/totalProductsValue";
import { finishPurchase } from "../services/finishPurchase";

export function CartAddress() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [complement, setComplement] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-info">
        <p>Endereço</p>
      </div>

      <div className="address">
        <p>Estado</p>
        <input
          type="text"
          onChange={(el) => setState(el.currentTarget.value)}
        />
        <p>Cidade</p>
        <input type="text" onChange={(el) => setCity(el.currentTarget.value)} />
        <p>Rua</p>
        <input
          type="text"
          onChange={(el) => setStreet(el.currentTarget.value)}
        />
        <p>Complemento</p>
        <input
          type="text"
          onChange={(el) => setComplement(el.currentTarget.value)}
        />
      </div>

      <hr className="white-line" color="white"></hr>

      <div className="finish-purchase">
        <p className="total-title">Valor total:</p>
        <p className="total-value">R${totalProductsValue()}</p>
        <div
          className="btn-finish-purchase"
          onClick={() => {
            if (finishPurchase(state, city, street, complement)) {
              navigate("/sucess");
            }
          }}
        >
          <span>Finalizar Compra</span>
        </div>
      </div>
    </div>
  );
}
