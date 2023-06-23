import "./Login.css";
import Input from "./Input.js";
import Show from "./Show";

const Login = () => {
  return (
    <div className="main">
      <button className="close">X</button>
      <div className="logo">
        <h2>
          <strong>Shop App</strong>
        </h2>
        <img src="./Vector.png" alt="" className="picture" />
      </div>
      <div className="register">
        <h3>
          <strong>Welcome to Shop App</strong>
        </h3>
        <Input text="text" placeholder="User Name" />
        <Input text="email" placeholder="Email@gmail.com" />
        <div className="psw">
          <input type="password" placeholder="Password" id="mk" />
          <button onClick={Show}>show</button>
        </div>
        <Input text="password" placeholder="Confirm Password" />
        <button className="b-register">Registor</button>
        <button className="b-login">login</button>
      </div>
    </div>
  );
};

export default Login;
