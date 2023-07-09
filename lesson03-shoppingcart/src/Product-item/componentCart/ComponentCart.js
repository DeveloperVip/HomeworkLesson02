import React, { useContext } from "react";
import { ContextItems } from "../Context/Context";
import Card from "../Card/Card";
import "./ComponentCart.css";

const ComponentCart = () => {
  const { Contain } = useContext(ContextItems);
  return (
    <div className="contain">
      {Contain.map(({ id, imgSrc, productName, price, discount }, index) => {
        return (
          <Card
            id={id}
            imgSrc={imgSrc}
            name={productName}
            price={price}
            discount={discount}
          />
        );
      })}
    </div>
  );
};

export default ComponentCart;
