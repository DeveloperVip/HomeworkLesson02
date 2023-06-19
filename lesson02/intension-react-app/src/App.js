import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your task here..."
        className="header"
      />
      <div className="listItems">
        <input type="radio" name="yourChoose"></input>
        <p>Clean up the bedroom</p>
      </div>
      <div className="listItems">
        <input type="radio" name="yourChoose"></input>
        <p>Buy some milk</p>
      </div>
      <div className="listItems">
        <input type="radio" name="yourChoose"></input>
        <p>Jogging</p>
      </div>
      <div className="listItems">
        <input type="radio" name="yourChoose"></input>
        <p>Learn React</p>
      </div>
      <div className="listItems">
        <input type="radio" name="yourChoose"></input>
        <p>Doing Exercises</p>
      </div>
      <div className="foot">
        <span>5 tasks left!</span>
        <span>Mindx todolist</span>
      </div>
    </div>
  );
}

export default App;
