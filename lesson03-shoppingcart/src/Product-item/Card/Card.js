import { useEffect, useState } from "react";
import Button from "../Button/Button";
import ButtonCart from "../Button/ButtonCart";
import "./Card.css";

const Card = ({ id, imgSrc, productName, price, discount }) => {
  return (
    <div className="Card border-radius-10px ">
      <img src={imgSrc} alt="" />
      <div>
        <p style={{ fontSize: "xx-large", margin: "0px" }}>
          <strong>{productName}</strong>
        </p>
        <p className="m-0">ID:{id}</p>
        <div className="d-flex justify-content-between ">
          <div>
            <img src="./star-fill.png" alt="" />
            <img src="./star-fill.png" alt="" />
            <img src="./star-fill.png" alt="" />
            <img src="./star-fill.png" alt="" />
            <img src="./star-fill.png" alt="" />
          </div>
          <p className="justify-self-end">Sale {discount}%</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <p>
          <strong>$ {price}</strong>
        </p>

        <ButtonCart
          id={id}
          imgSrc={imgSrc}
          productName={productName}
          discount={discount}
          price={price}
        />
      </div>
      <Button />
    </div>
  );
};

export default Card;
