import React from "react";
import Card from "../../Card";
import NumericInput from "react-numeric-input";

import "./styles.css";
import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../../../store/cart/actions";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => dispatch(removeItem(item.product.id));

  const handleChange = (value) => {
    if (value === item.amount) return;
    
    if (item.amount > value) {
      dispatch(addItem({ ...item, amount: -(item.amount - value) }));
    } else {
      dispatch(addItem({ ...item, amount: value - item.amount }));
    }
  };

  return (
    <div className="item-grid">
      <div className="item-card">
        <Card img={item.product.imagem} width={55} height={55} />
      </div>
      <div className="item-name">{item.product.nome}</div>
      <div className="item-price">
        {Number(item.product.preco).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="item-input">
        <NumericInput
          min={1}
          mobile
          className="form-control"
          value={item.amount}
          onChange={handleChange}
        />
      </div>
      <b className="remove" onClick={removeItemFromCart}>
        REMOVER
      </b>
    </div>
  );
};

export default Item;
