import React, { useContext } from "react";
import { ContextItems } from "../Context/Context";
import Card from "../Card/Card";
// import AddProductHandle from "./AddProductHandle";

const ButtonCart = (props) => {
  const { setContain } = useContext(ContextItems);
  const AddProductHandle = (props) => () => {
    setContain((things) => [...things, props]);
  };
  return (
    <button
      style={{ border: "none", background: "none", paddingRight: "10px" }}
      onClick={AddProductHandle(props)}
    >
      <img
        src="./Add Cart.png"
        alt=""
        style={{
          height: "100%",
          objectFit: "none",
        }}
      />
    </button>
  );
};

export default ButtonCart;
