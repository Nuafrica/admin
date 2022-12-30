import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";


import './form.scss';

const Form = () => {

const state = useLocation().state;
const [value, setValue] = useState( state?.productpost || ""); 
const [productpost,setProductpost] = useState(state?.value || "");
const [file,setFile] = useState("");
const [cat,setCat] = useState( state?.cat || "");
const [productprice,setProductprice] = useState( state?.productprice ||"");
const [productdiscount, setProductdiscount] = useState (state?.productdiscount || ""); 
const [productavailibility, setProductavailibility] = useState(state?.productavailibility ||""); 

const [backgoundColor, setBackgoundColor] = useState(""); 
const [textmedium, setTextmedium] = useState(""); 
const [textSmall, setTextSmall] = useState(""); 
const [textPrice, setTextPrice] = useState(""); 
const [productImage, setProductImage] = useState(""); 

 
const navigate = useNavigate()



  const handleClick = async (e) => {
    e.preventDefault();
  
    try {

      state
      ? await axios.put(`/products/${state.id}`, {

        productpost,
        productprice,
        value,
        productdiscount,
        productavailibility,
        cat,
        file,
        })
       
   : await axios.post(`/products/`,{
      productpost,
      productprice,
      value,
      productdiscount,
      productavailibility,
      cat,
      file,
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      navigate("/manage-products")
          
    } catch (error) {
      navigate("/form")
      console.error(error.response.data);
    }
  };



  const eClick = async (e) => {
    e.preventDefault();
  
    try {
    await axios.post(`/posts/styles`,{
      backgoundColor,
      textmedium,
      textSmall,
      textPrice,
      productImage,
      });
      navigate("/")
          
    } catch (error) {
      navigate("/form")
      console.error(error.response.data);
    }
  };




  return (
    <>
<Box m="20px">
<Header title="ADD PRODUCT" subtitle="Add new products" />

<form   className="form-container"  action="">

<div className="inpuradiocat">
<h1>Categories</h1>
<div className="radios">
<input type="radio"  name="cat"  value= "Beer" id="Beer"   checked={cat === "Beer"}
onChange={(e) => setCat(e.target.value)}/>
<label htmlFor="Beer">Beer</label>
</div>


<div className="radios">
<input type="radio" name="cat" value= "Cigartes" id="Cigartes"   checked={cat === "Cigartes"}
onChange={(e) => setCat(e.target.value)}/>
<label htmlFor="Beer">Cigartes</label>
</div>

<div className="radios">
<input type="radio" name="cat" value= "Eletronics" id="Eletronics"   checked={cat === "Eletronics"}
onChange={(e) => setCat(e.target.value)}/>
<label htmlFor="Beer">Eletronics</label>
</div>

<div className="radios">
<input type="radio" name="cat" value= "Jewellery" id="Jewellery"   checked={cat === "Jewellery"}
onChange={(e) => setCat(e.target.value)}/>
<label htmlFor="Beer">Jewellery</label>
</div>

<div className="radios">
<input type="radio" name="cat" value= "Liqour" id="Liqour"   checked={cat === "Liqour"}
onChange={(e) => setCat(e.target.value)}/>
<label htmlFor="Beer">Liqour</label>
</div>

<div className="radios">
<input type="radio" name="cat" value= "Cosmetics" id="Cosmetics"   checked={cat === "Cosmetics"}
onChange={(e) => setCat(e.target.value)}/>
<label htmlFor="Beer">Cosmetics</label>
</div>

<div className="radios">
<input type="radio" name="cat" value= "Toiletries" id="Toiletries"   checked={cat === "Toiletries"}
onChange={(e) => setCat(e.target.value)}/>
<label htmlFor="Beer">Toiletries</label>
</div>

<div className="radios">
<input type="radio" name="cat" value= "Wacthes" id="Wacthes"   checked={cat === "Wacthes"}
onChange={(e) => setCat(e.target.value)}/>
<label htmlFor="Beer">Wacthes</label>
</div>

</div>

<input type="text" value={productpost} placeholder="product name"   onChange={e=>setProductpost(e.target.value)}/>
<input type="text" value={productprice} placeholder="product price"  onChange={e=>setProductprice(e.target.value)}/>

<input type="text"value={value}  placeholder="product description" onChange={e=>setValue(e.target.value)}/>
<input type="text"value={productdiscount}  placeholder="product discount"  onChange={e=>setProductdiscount(e.target.value)}/>

<input type="text" value={productavailibility} placeholder="product availability"  onChange={e=>setProductavailibility(e.target.value)}/>
<input type="text" value={file} placeholder="Paste image URL here:         https://example.com" name=""    onChange={e => setFile(e.target.value)} />

<button className="productsbtn"
onClick={handleClick}>
  publish
</button>

</form>

</Box>

<Box m="20px">
<Header title="Customizer - 1" subtitle="Customize" />

<form   className="form-container"  action="">

<input type="text" value={backgoundColor} placeholder="BackgoundColor"   onChange={e=>setBackgoundColor(e.target.value)}/>
<input type="text" value={textmedium} placeholder="TextMedium"  onChange={e=>setTextmedium(e.target.value)}/>

<input type="text"value={textSmall}  placeholder="TextSmall" onChange={e=>setTextSmall(e.target.value)}/>
<input type="text"value={textPrice}  placeholder="textPrice"  onChange={e=>setTextPrice(e.target.value)}/>
<input type="text" value={productImage} placeholder="productImage"  onChange={e=>setProductImage(e.target.value)}/>


<button className="productsbtn"
onClick={eClick}>
  Save
</button>

</form>
</Box>
</>
   
  );
};

export default Form;
