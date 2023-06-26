import "./ProductItem.css";
import Tagaside from "./Tagaside/Tagaside";
import Cardproduct from "./Card/Card";

function ProductItem({ name, price }) {
  return (
    <div className="home">
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

          <p>Categories</p>
          <div className="top-bar">
            <input type="text" placeHolder="Search Items" />
            <img src="./SearchIcon.png" alt="" />
          </div>
        </div>
        <a href="">
          <img src="./Cart-vector.png" alt="" />
        </a>
        <a href="">
          <img src="./UserItem.png" alt="" />
        </a>
      </div>
      <div className="main_home">
        <aside>
          <div>
            <img src="./menu.png" alt="" />
            <p>Categories</p>
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
        <section>
          <img src="./Photos.png" alt="" />
          <div className="carousal">
            <img src="./Photos.png" alt="" />
            <img src="./Photos.png" alt="" />
            <img src="./Photos.png" alt="" />
          </div>
          <div>
            <Cardproduct />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductItem;
