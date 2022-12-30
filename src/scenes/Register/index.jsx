import  React,{ useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
  const navigate = useNavigate();

  const [inputs,setInputs] = useState({
  username:"",
  images:"",
  email:"",
  password:"",
  });
  const [err, setError] = useState(null);

  
   const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/adminauth", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
      navigate("/");
    }
  };


return (
<div className="auth">
<h1>Register</h1>
<form>
  <input
    required
    type="text"
    placeholder="username"
    name="username"
    onChange={handleChange}
  />

  <input
    required
    type="text"
    placeholder="Image url"
    name="images"
    onChange={handleChange}
  />

  <input
    required
    type="email"
    placeholder="email"
    name="email"
    onChange={handleChange}
  />

  <input
    required
    type="password"
    placeholder="password"
    name="password"
    onChange={handleChange}
  />

 <button onClick={handleSubmit}>register</button>
 {err && <p>{err}</p>}

</form>
</div>

)}

export default Register;