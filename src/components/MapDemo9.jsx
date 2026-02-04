import React from 'react'

export const MapDemo9 = () => {
 const items= [
    {
      id: 1,
      name: "Shoes",
      image: "abc.jpg"
    },
    {
      id: 2,
      name: "Watch",
      image: "def.jpg"
    }
  ]

  return (
    <>
      <table border="1" cellPadding="10" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt="product" />
              </td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
