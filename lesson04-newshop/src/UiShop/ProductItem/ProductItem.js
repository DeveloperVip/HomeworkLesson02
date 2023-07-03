import "./ProductItem.css";

const ProductItem = (props) => {
  const { name, price, self } = props;
  return (
    <div className="item">
      <img src="https://source.unsplash.com/random/?Cryptocurrency" alt="" />
      <h3>{name}</h3>
      <div>
        <span>{price}</span>
        <span>{self} off</span>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductItem;
