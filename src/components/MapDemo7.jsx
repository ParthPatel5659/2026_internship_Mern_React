import React from 'react'

export const MapDemo7 = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "abc.jpg"
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image: "def.jpg"
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image: "hij.jpg"
    }
  ];

  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <img src={item.image} alt={item.name} width="50" />
            </td>
            <td>{item.name}</td>
            <td>₹{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
