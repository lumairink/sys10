import React from "react";
import "./styles.css";
import Card from "../../../Card";

const ProductCard = ({ product, onClick }) => (
  <div className="product-list-tile">
    <div onClick={() => onClick(product)}>
      <Card img={product.imagem} width={169} height={169} />
    </div>
    <div className="product-name">{product.nome}</div>
    <div className="product-price">
      {Number(product.preco).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </div>
  </div>
);

export default ProductCard;
