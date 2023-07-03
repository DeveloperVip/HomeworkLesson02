import "./Tagaside.css";

function Tagaside(props) {
  let { name } = props;
  return (
    <div>
      <a href="" className="tagAside">
        <p className="my-0">{name}</p>
        <img src="./Vector (1).png" alt="" />
      </a>
    </div>
  );
}

export default Tagaside;
