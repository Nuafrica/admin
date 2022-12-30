import React,{useEffect,useState} from 'react';
import './detailts.scss';
import {MdDelete} from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';


import axios from 'axios';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Detailts = () => {

const [product,setProduct] = useState([]);
const location = useLocation();
const navigate = useNavigate();
const postId = location.pathname.split("/")[2];


useEffect(() => {
    const datafecth = async () => {
     try{
       const res = await axios.get(`/posts/${postId}}`)
       setProduct(res.data)
       console.log('console data ',res.data)
     } catch(err){
       console.log('here it is',err);
     }
    };
    datafecth();
   },[postId]);


   const handleDelete = async ()=>{
    try {
      await axios.delete(`/products/${postId}`);
      navigate("/manage-products")
    } catch (err) {
      console.log(err);
    }
  }


return (

    <div className="product-detail-container"
    key={product.id}>
    <div>
      <div className="image-container">
        <img src={product?.product_image} className="product-detail-image" />
      </div>
      <div className="small-images-container">
     
      <MdDelete className='delete-iconn' size={35} onClick={handleDelete}  />
      
      <Link to={`/form?edit=2`} state={product}>
      <FiEdit className='edit-icon' size={35}/>
      </Link>

      </div> 
    </div>

    <div className="product-detail-desc">
      <h1 className='product-descript'>{product.product_name}</h1>

      <div className="reviews">
        <h3 className='product-reviews'>{product.product_availability}</h3>
      </div>
     
      <h4 className='product-descript'>Details: </h4>
      <div className='descriptionn-container'>
      <p className='product-descript-p'>{product.product_description}</p>
      </div>
     
      <p className="price ">E{product.product_price}</p>
      <div className="quantity">

      </div>
     
    </div>
  </div>

 
  )
}

export default Detailts