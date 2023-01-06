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
const [featured, setFeatured] = useState(state?.featured ||""); 

const [backgoundColor, setBackgoundColor] = useState(""); 

const [textmedium, setTextmedium] = useState(""); 
const [textSmall, setTextSmall] = useState(""); 
const [textPrice, setTextPrice] = useState(""); 
const [productImage, setProductImage] = useState(""); 

const [backgoundColor1, setBackgoundColor1] = useState("");
const [textmedium1, setTextmedium1] = useState(""); 
const [productImage1, setProductImage1] = useState(""); 
const [textSmall1, setTextSmall1] = useState(""); 
const [textPrice1, setTextPrice1] = useState(""); 

const [backgoundColor2, setBackgoundColor2] = useState("");
const [textmedium2, setTextmedium2] = useState(""); 
const [productImage2, setProductImage2] = useState(""); 
const [textSmall2, setTextSmall2] = useState(""); 
const [textPrice2, setTextPrice2] = useState(""); 

 
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
        featured,
        file,
        })
       
   : await axios.post(`/products/`,{
      productpost,
      productprice,
      value,
      productdiscount,
      productavailibility,
      cat,
      featured,
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


  const eClick1 = async (e) => {
    e.preventDefault();
  
    try {
    await axios.post(`/posts/styles1`,{
      backgoundColor1,
      textmedium1,
      textSmall1,
      textPrice1,
      productImage1,
      });
      navigate("/")
          
    } catch (error) {
      navigate("/form")
      console.error(error.response.data);
    }
  };

  const eClick2 = async (e) => {
    e.preventDefault();
  
    try {
    await axios.post(`/posts/styles2`,{
      backgoundColor2,
      textmedium2,
      textSmall2,
      textPrice2,
      productImage2,
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
<input type="text" value={featured} placeholder="Featured or not (optional)"   onChange={e=>setFeatured(e.target.value)}/>
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
<Header title="Customizer portal" subtitle="Meant to  publish producs on promotion" />
<div className="customizer-main">

<div className="customizer1-container">

<div className="customizer1-form">
<form   className="form-container"  action="">
<Header title="Daily Deal Customizer"/>
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
</div>
<div className="customizer1-categories">

</div>
</div>






<div className="customizer1-container">
<div className="customizer1-form">
<form   className="form-container"  action="">
<Header title="Daily Deal Customizer"/>
<input type="text" value={backgoundColor1} placeholder="BackgoundColor"   onChange={e=>setBackgoundColor1(e.target.value)}/>
<input type="text" value={textmedium1} placeholder="TextMedium"  onChange={e=>setTextmedium1(e.target.value)}/>

<input type="text"value={textSmall1}  placeholder="TextSmall" onChange={e=>setTextSmall1(e.target.value)}/>
<input type="text"value={textPrice1}  placeholder="textPrice"  onChange={e=>setTextPrice1(e.target.value)}/>
<input type="text" value={productImage1} placeholder="productImage"  onChange={e=>setProductImage1(e.target.value)}/>


<button className="productsbtn"
onClick={eClick1}>
  Save
</button>

</form>
</div>
<div className="customizer1-categories">


</div>
</div>



<div className="customizer1-container">
<div className="customizer1-form">
<form   className="form-container"  action="">
<Header title="Best selling Customizer"/>
<input type="text" value={backgoundColor2} placeholder="BackgoundColor"   onChange={e=>setBackgoundColor2(e.target.value)}/>
<input type="text" value={textmedium2} placeholder="TextMedium"  onChange={e=>setTextmedium2(e.target.value)}/>

<input type="text"value={textSmall2}  placeholder="TextSmall" onChange={e=>setTextSmall2(e.target.value)}/>
<input type="text"value={textPrice2}  placeholder="textPrice"  onChange={e=>setTextPrice2(e.target.value)}/>
<input type="text" value={productImage2} placeholder="productImage"  onChange={e=>setProductImage2(e.target.value)}/>


<button className="productsbtn"
onClick={eClick2}>
  Save
</button>

</form>
</div>
<div className="customizer1-categories">


</div>
</div>

</div>

</Box>
</>
   
  );
};

export default Form;
