import axios from "axios";
import React, { useState } from "react";

export const ApiDemo3 = () => {
  const [products, setproduct] = useState([]);

  const getproduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setproduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo3- table formate</h1>

      <button onClick={() => getproduct()}>Get Product</button>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tital</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
