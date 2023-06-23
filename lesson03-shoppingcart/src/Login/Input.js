function Input(Props) {
  const { text, placeholder } = Props;
  return (
    <div>
      <input type={text} placeholder={placeholder} />
    </div>
  );
}

export default Input;
