import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://64a7c188dca581464b84b830.mockapi.io/mockData/product`)
      .then((response) => response.json())
      .then((reps) => setData(reps));
  }, []);
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: "calc(150px/4)",
        flexWrap: "wrap",
      }}
    >
      {Data.map(({ id, imgSrc, productName, price, discount }, index) => {
        return (
          <Card
            key={index}
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

export default CardList;
