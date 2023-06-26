import "./Card.css";

const Cardproduct = () => {
  return (
    <div className="card-product">
      <img src="./Product Photo.png" className="img-product" />
      <div className="infor-product">
        <p>Adidas Shoes</p>
        <h1>ID: 123 </h1>
        <div className="evaluate-benifit">
          <img src="./Rating.png" className="img-star" />
          <h2>50% Off</h2>
        </div>
      </div>
      <div className="price">
        <h3>$ 120.00</h3>
        <img src="./Add Cart (1).png" className="img-cart" />
      </div>
      <h4>
        <a href="#">Available</a>
      </h4>
    </div>
  );
};
export default Cardproduct;
