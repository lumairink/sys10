import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useModal from "react-hooks-use-modal";

import ProductCard from "./ProductCard";
import { productsRequest } from "../../../store/product/actions";
import Button from "../../Button";
import NumericInput from "react-numeric-input";
import Card from "../../Card";
import "./styles.css";
import { addItem } from "../../../store/cart/actions";

const Category = ({ category, filter = "" }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });

  useEffect(() => {
    dispatch(productsRequest(category.id));
  }, []);

  const openModal = (product) => {
    setProduct(product);
    open();
  };

  const addItemToCart = () => {
    dispatch(addItem({ product, amount }));
    setAmount(1);
    close();
  };

  return (
    <>
      {products.length ? (
        <div className="categories-container">
          {products
            .filter((product) =>
              product.nome.toLowerCase().includes(filter.toLowerCase())
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={openModal}
              />
            ))}
        </div>
      ) : (
        "Carregando"
      )}
      <Modal>
        <div className="modal">
          <div className="modal-header">
            <h2>Detalhes do Produto</h2>
            <span onClick={close}>X</span>
          </div>
          <Card img={product.imagem} width="100%" height={300} />
          <h4 className="product-name">{product.nome}</h4>
          <span className="product-description">{product.descricao}</span>
          <h3 className="product-price">
            {Number(product.preco || 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <div className="modal-footer">
            <NumericInput
              min={1}
              value={amount}
              mobile
              className="form-control"
              onChange={(value) => setAmount(value)}
            />
            <Button text="Adicionar ao Carrinho" onClick={addItemToCart} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Category;
