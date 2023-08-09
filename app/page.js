'use client'
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from '../app/components/data/Data'



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Home() {
  const [products, setProducts] = useState(data);

  console.log("data", data);

  const onDeleteHandler = (id) => {
    // alert("work");

    let filterHandler = products.filter((item) => item.id !== id);
    setProducts(filterHandler);
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <h1>Add New Products</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ padding: "20px" }}>ID</th>
            <th style={{ padding: "20px" }}>Title</th>
            <th style={{ padding: "20px" }}>Category</th>
            <th style={{ padding: "30px" }}>Description</th>
            <th style={{ padding: "20px" }}>Price</th>
            <th style={{ padding: "20px" }}>Image</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td><img src={item.image} alt="" style={{ width: "30px" }} /></td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  onClick={() => onDeleteHandler(item.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  class="btn btn-outline-warning"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={true}
        onAfterOpen={()=>null}
        onRequestClose={()=>null}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div style={{display : "flex", justifyContent : "space-between"}}>
        <h2>Add More Products</h2>
        <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <form>
          <input />
          <button>Submit</button>
        </form>
      </Modal>

    </div>
  );
}
