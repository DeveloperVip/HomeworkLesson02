import ProductItem from "./ProductItem/ProductItem";
import SearchBar from "./SearchBar/SearchBar";
import "./UiShop.css";

const UiShop = () => {
  const product = [
    {
      name: "Iphone",
      price: "150$",
      self: "10%",
    },
    {
      name: "Samsung",
      price: "80$",
      self: "20%",
    },
    {
      name: "Bphone",
      price: "50$",
      self: "10%",
    },
    {
      name: "Ipad",
      price: "200$",
      self: "5%",
    },
  ];
  const studentDataHandle = product.map((student) => {
    const { name, price, self } = student;
    <ProductItem name={name} price={price} self={self} />;
  });
  return (
    <div>
      <SearchBar />
      <section>{studentDataHandle}</section>
    </div>
  );
};

export default UiShop;
