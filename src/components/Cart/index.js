import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Item from "./Item";
import Button from "../Button";
import "./styles.css";
import { finnishShopping } from "../../store/cart/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  let shipping = 0;

  useEffect(() => {
    let st = 0,
      ta = 0;
    items.forEach((item) => (ta += item.amount));
    items.forEach((item) => (st += item.product.preco * item.amount));

    setTotalAmount(ta);
    setSubtotal(st);
    setTotal(st + shipping);
  }, [items]);

  const finnish = () => dispatch(finnishShopping());

  return (
    <div>
      <div className="cart-header">
        <h3>Seu pedido</h3>
        <div className="cart-items-count">
          {items.length > 0 && (
            <div className="cart-counter">{totalAmount}</div>
          )}
          <img src="images/cart_icon.svg" />
        </div>
      </div>
      {items.length > 0 ? (
        <div>
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
          <div className="cart-grid-info-container">
            <div className="cart-grid-info">
              <div>Subtotal:</div>
              <div className="cart-value-column">
                {Number(subtotal).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
              <div>Frete:</div>
              <div className="cart-value-column cart-shipping">
                {shipping > 0
                  ? Number(shipping).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  : "Grátis"}
              </div>
              <h3>Total:</h3>
              <h3 className="cart-value-column">
                {Number(total).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
              <div className="cart-button">
                <Button text="Selecionar Pagamento" onClick={finnish} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <img src="images/cart_placeholder.svg" />
          <br />
          <span>Seu carrinho está vazio :(</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
