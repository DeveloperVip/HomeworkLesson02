import { useEffect, useState } from "react";

const MockData = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://64a7c188dca581464b84b830.mockapi.io/mockData/product`)
      .then((response) => response.json())
      .then((reps) => setData(reps));
  }, []);
  return Data;
};

export default MockData;
