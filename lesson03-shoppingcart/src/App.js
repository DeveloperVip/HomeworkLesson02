// import logo from "./logo.svg";
// import "./Login/Login.css";
// import Login from "./Login/Login.js";
import ProductItem from "./Product-item/ProductItem";
import { Context } from "./Product-item/Context/Context";
import ComponentCart from "./Product-item/componentCart/ComponentCart";
import "./App.css";

function App() {
  return (
    <Context>
      <div className="App contain">
        <ProductItem />
        <ComponentCart />
      </div>
    </Context>
  );
}

export default App;
