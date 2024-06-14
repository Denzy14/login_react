import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

function App() {
  const [category, setCategory] = useState("");

  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList />
    </div>
  );
}
export default App;
