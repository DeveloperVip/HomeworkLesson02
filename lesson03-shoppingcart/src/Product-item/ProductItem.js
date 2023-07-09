import "./ProductItem.css";
import Tagaside from "./Tagaside/Tagaside";
import { useContext, useEffect, useState } from "react";
import { ContextItems } from "./Context/Context";
import CardList from "./Card/CardList";

function ProductItem() {
  const { Contain } = useContext(ContextItems);

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
            <input type="text" placeholder="Search Items" />
            <img src="./SearchIcon.png" alt="" />
          </div>
        </div>
        <a href="">
          <img src="./Cart-vector.png" alt="" />
          <p>{Contain.length}</p>
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
        <div>
          <CardList />
        </div>
      </section>
    </div>
  );
}

export default ProductItem;
