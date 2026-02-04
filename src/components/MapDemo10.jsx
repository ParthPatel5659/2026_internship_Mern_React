import React from 'react'

export const MapDemo10 = () => {
 
  const data = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 40 },
    { id: 3, name: "Mango", price: 80 }
  ];

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) =>
          item.price > 50 ? (     
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
}


