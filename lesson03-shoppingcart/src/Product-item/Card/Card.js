import "./Card.css";

const productList = [];
const onAddProductHandle = (e) => () => {
  e.preventdefault();
  productList.push(Card);
  console.log(productList);
};

const Card = ({ name, price, self }) => {
  return (
    <div
      className="Card border-radius-10px "
      style={{
        border: "1px solid black",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      <img
        src="https://source.unsplash.com/random/?Cryptocurrency"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          boxShadow: "0.5px 0.5px 12px 0px #00000040",
        }}
      />
      <div>
        <p style={{ fontSize: "xx-large", margin: "0px" }}>
          <strong>{name}</strong>
        </p>
        <p
          style={{
            margin: "0px",
          }}
        >
          ID:
        </p>
        <div className="d-flex justify-content-between ">
          <div>
            <img src="./star-fill.png" alt="" />
            <img src="./star-fill.png" alt="" />
            <img src="./star-fill.png" alt="" />
            <img src="./star-fill.png" alt="" />
            <img src="./star-fill.png" alt="" />
          </div>
          <p className="justify-self-end">{self} Off</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <p>
          <strong>$ {price}</strong>
        </p>
        <button
          style={{ border: "none", background: "none", paddingRight: "10px" }}
          onClick={onAddProductHandle}
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
      </div>
      <button className="btn btn-success border-radius-10px">Avaiable</button>
    </div>
  );
};

export default Card;
