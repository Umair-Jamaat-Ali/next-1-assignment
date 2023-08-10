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
    width: '50%',
  },
};

export default function Home() {
  const [products, setProducts] = useState(data);

  // console.log("data", data);

  const onDeleteHandler = (id) => {
    // alert("work");

    let filterHandler = products.filter((item) => item.id !== id);
    setProducts(filterHandler);
  }

  const [addModelVisiable, setAddModelVisiable] = useState(false);

  const [addtitle, setAddtitle] = useState(null);
  const [addCategory, setAddCategory] = useState(null);
  const [addDescription, setAddDescription] = useState(null);
  const [addPrice, setAddPrice] = useState(0);
  const [addImageURL, setAddImageURL] = useState(null);

  const onAddProductHandler = () => {

    if (!(addtitle && addCategory && addDescription && addPrice && addImageURL)) {
      alert("Add all values !");
    }

    let newProductAdd = {
      id: Math.round(Math.random() * 100),
      title: addtitle,
      price: addCategory,
      description: addDescription,
      category: addPrice,
      image: addImageURL,
    }
    setProducts([newProductAdd, ...products]);
    setAddModelVisiable(false);
  }

  return (

    <div style={{ backgroundColor: "white" }}>
      <div className="container " style={{ margin: "15px" }} >
        <div className="row">
          <div className="col" style={{ display: "flex", justifyContent: "space-around" }}>
            <h1>Lists Of Products</h1>
            <button type="button" className="btn btn-success btn-lg" onClick={() => setAddModelVisiable(true)} >Add More Products</button>
          </div>
        </div>
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
        isOpen={addModelVisiable}
        onAfterOpen={() => null}
        onRequestClose={() => setAddModelVisiable(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="row">
          <div className="col-md-10">
            <h4 >Add New Product</h4>
          </div>
          <div className="col-md-2">
            <button type='button' className='btn-close' aria-label='Close' onClick={() => setAddModelVisiable(false)} ></button>
          </div>
        </div>
        <div className='mb-3'>
          <label for="" className='form-label' >Title:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Title'
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Title:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Title'
            onChange={(e)=>setAddtitle(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Category:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Category'
            onChange={(e)=>setAddCategory(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Description:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Description'
            onChange={(e)=>setAddDescription(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Price:</label>
          <input
            type="number"
            className='form-control'
            id=''
            placeholder='Enter Price'
            onChange={(e)=>setAddPrice(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Image:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Image'
            onChange={(e)=>setAddtitle(e.target.value)}
          />
        </div>


        <button type="button" class="btn btn-success" onClick={onAddProductHandler} >Submit</button>

      </Modal>

    </div>
  );
}
