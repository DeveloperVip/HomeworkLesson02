import "./ProductItem.css";
import Tagaside from "./Tagaside/Tagaside";

import { useState } from "react";
import Card from "./Card/Card";
// import { Items } from "./MockData/Product";

const Items = [
  {
    name: "Iphone",
    price: "150",
    self: "10%",
  },
  {
    name: "Samsung",
    price: "80",
    self: "20%",
  },
  {
    name: "Bphone",
    price: "50",
    self: "10%",
  },
  {
    name: "Ipad",
    price: "200",
    self: "5%",
  },
];

function ProductItem() {
  const [state, setState] = useState(0);
  const renderProduct = Items.map(({ name, price, self }) => {
    return <Card name={name} price={price} self={self} />;
  });
  return (
    <div className="home ">
      <div className="topBar">
        <a href="">About us</a>
        <a href="">Contacts</a>
        <a href="">Store</a>
        <a href="">Track Orders</a>
      </div>
      <div className="mainBar">
        <span>
          <strong>SHOP APP</strong>
        </span>
        <div className="categories">
          <img src="./menu (1).png" alt="" />

          <p className="my-0">Categories</p>
          <div className="top-bar">
            <input type="text" placeHolder="Search Items" />
            <img src="./SearchIcon.png" alt="" />
          </div>
        </div>
        <a href="">
          <img src="./Cart-vector.png" alt="" />
          <p>{state}</p>
        </a>
        <a href="">
          <img src="./UserItem.png" alt="" />
        </a>
      </div>
      <div className="main_home">
        <aside>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img src="./menu.png" alt="" />
            <p className="my-0">Categories</p>
          </div>
          <Tagaside name="Computer" />
          <Tagaside name="Hand Tools" />
          <Tagaside name="Machine Tools" />
          <Tagaside name="Power Tools" />
          <Tagaside name="Storage Tools" />
          <Tagaside name="Clothes && PPE" />
          <Tagaside name="Electrical" />
          <Tagaside name="Building Tools" />
          <Tagaside name="Foods" />
          <Tagaside name="Drinks" />
        </aside>
        <div
          className="container"
          style={{
            width: "862px",
          }}
        >
          <img src="./Photos.png" alt="" />
          <div className="carousal ">
            <img src="./Photos.png" alt="" />
            <img src="./Photos.png" alt="" />
            <img src="./Photos.png" alt="" />
          </div>
        </div>
      </div>
      <section>
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {renderProduct}
        </div>
      </section>
    </div>
  );
}

export default ProductItem;
