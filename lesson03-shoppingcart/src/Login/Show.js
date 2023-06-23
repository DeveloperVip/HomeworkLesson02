function Show() {
  const x = document.getElementById("mk");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default Show;
