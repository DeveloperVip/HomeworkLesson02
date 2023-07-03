import "./SearchBar.css";
// import ProductItem from "./ProductItem.js";
const SearchBar = () => {
  //   let number = ProductItem.length;
  return (
    <div className="headerBar">
      <h1>
        <strong>shop app</strong>
      </h1>
      <div className="search">
        <img
          src="./SearchIcon.png"
          alt=""
          style={{
            height: "50%",
          }}
        />
        <input
          type="text"
          placeholder="nhập tên sản phẩm ..."
          style={{
            width: "700px",
            height: "40px",
            border: "none",
          }}
        />
      </div>
      <img src="./Cart-vector.png" alt="" />
      <img src="./UserItem.png" alt="" />
    </div>
  );
};

export default SearchBar;
