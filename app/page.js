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

  const [addTitle, setAddTitle] = useState(null);
  const [addCategory, setAddCategory] = useState(null);
  const [addDescription, setAddDescription] = useState(null);
  const [addPrice, setAddPrice] = useState(0);
  const [addImageURL, setAddImageURL] = useState(null);

  const onAddProductHandler = () => {

    if (!(addTitle && addCategory && addDescription && addPrice && addImageURL)) {
      alert("Add all values !");
    }

    let newProductAdd = {
      id: Math.round(Math.random() * 100),
      title: addTitle,
      price: addPrice,
      description: addDescription,
      category: addCategory,
      image: addImageURL,
    }
    setProducts([newProductAdd, ...products]);
    setAddModelVisiable(false);
  }

  const [editModalVisiable, setEditModalVisiable] = useState(false);
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editImageURL, setEditImageURL] = useState("");

  const onEditHandler = (item) => {
    
    setEditModalVisiable(true);

    setEditId(item.id);
    console.log("item.id", item.id);
  setEditTitle(item.title);
  console.log("item.title", item.title);
  setEditCategory(item.category);
  setEditDescription(item.description);
  setEditPrice(item.price);
  setEditImageURL(item.image);
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
                  onClick={()=>onEditHandler(item.id)}
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
            onChange={(e)=>setAddTitle(e.target.value)}
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
            onChange={(e)=>setAddImageURL(e.target.value)}
          />
        </div>


        <button type="button" class="btn btn-success" onClick={onAddProductHandler} >Submit</button>

      </Modal>

            {/* eidt model */}

            <Modal
        isOpen={editModalVisiable}
        onAfterOpen={() => null}
        onRequestClose={() => setEditModalVisiable(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="row">
          <div className="col-md-10">
            <h4 >Edit Products</h4>
          </div>
          <div className="col-md-2">
            <button type='button' className='btn-close' aria-label='Close' onClick={() => setEditModalVisiable(false)} ></button>
          </div>
        </div>
        <div className='mb-3'>
          <label for="" className='form-label' >Title:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Title'
            onChange={(e)=>setEditTitle(e.target.value)}
            value={editTitle}
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Category:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Category'
            onChange={(e)=>setEditCategory(e.target.value)}
            value={editCategory}
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Description:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Description'
            onChange={(e)=>setEditDescription(e.target.value)}
            value={editDescription}
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Price:</label>
          <input
            type="number"
            className='form-control'
            id=''
            placeholder='Enter Price'
            onChange={(e)=>setEditPrice(e.target.value)}
            value={editPrice}
          />
        </div>

        <div className='mb-3'>
          <label for="" className='form-label' >Image:</label>
          <input
            type="text"
            className='form-control'
            id=''
            placeholder='Enter Image'
            onChange={(e)=>setEditImageURL(e.target.value)}
            value={editImageURL}
          />
        </div>


        <button type="button" class="btn btn-success"  >Update</button>

      </Modal>



    </div>
  );
}
