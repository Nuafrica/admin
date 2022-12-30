import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";


import {MdDelete} from 'react-icons/md';
import {AiOutlinePlus} from 'react-icons/ai';
import './products.css'

const Invoices = () => {

  const [productdata,setProductdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const datafecth = async () => {
     try{
       const res = await axios.get('/posts')
       setProductdata(res.data);
       console.log(res.data)
     } catch(err){
       console.log('here it is',err);
     }
    };
    datafecth();
   },[]);
 

  return (
    <Box m="20px">
      <Header title="Products" subtitle="List of Products" />


      <Link to = "/form">
      <button className="button-add"> <AiOutlinePlus/>  Add product</button>
      </Link>


      <div className="products-grid">
   
       {productdata.map((product) =>{
        return <div className="product-images" 
        key={product.id}
        >
          
          { <Link to = {`/detailts/${product.id}`}>
            <img className="pro-img" src={product.product_image}/>
          </Link>
          }
        <div className="options-container">
        <div className="name-price">
        <h2 className="name-of-product">E {product.product_price}</h2>
        <p className="price-of-product">{product.product_name}</p>
        </div>
        </div>
        </div>
  

       })}
       

      

      </div>

    </Box>
  );
};

export default Invoices;
