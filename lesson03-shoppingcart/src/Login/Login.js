import "./Login.css";
import Input from "./Input.js";
import Show from "./Show";
const Login = () => {
  return (
    <div classname="main">
      <button classname="close">X</button>
      <div classname="logo">
        <h2>
          <strong>Shop App</strong>
        </h2>
        <img src="./Vector.png" alt classname="picture" />
      </div>
      <div classname="register">
        <h3>
          <strong>Welcome to Shop App</strong>
        </h3>
        <input text="text" placeholder="User Name" />
        <input text="email" placeholder="Email@gmail.com" />
        <div classname="psw">
          <input type="password" placeholder="Password" id="mk" />
          <button onclick="{Show}">show</button>
        </div>
        <input text="password" placeholder="Confirm Password" />
        <button classname="b-register">Registor</button>
        <button classname="b-login">login</button>
      </div>
    </div>
  );
};
export default Login;
