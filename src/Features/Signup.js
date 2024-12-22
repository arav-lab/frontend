import React, { useEffect, useState } from "react";
import "../Cssfile/Register.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('userid')
  useEffect(()=>{
    if(user){
      navigate(`/home/${user}`)
    }
  },[user])
  const [username,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [cpassword,setCPassword]=useState('')

  const handleSubmit = async(e) => {
   e.preventDefault(); 
  //  if(username === '' && email === '' && password === '' && cpassword === ''){
  //     alert('Please fill all the fields')
  //     return
  //   }

    if(username === ''){
      alert('Please enter username, email,password and confirm password')
      return
    }
    if(email === ''){
      alert('Please enter email and password')
      return
    }
    if(password === ''){
      alert('Please enter password and confirm password')
      return
    }
    if(cpassword === ''){
      alert('Please enter confirm password')
      return
    }
    
    if(password === cpassword){
       const req = await axios.post("http://localhost:5000/users/register", { username, email, password});
        alert('Signup successfull')
        setUserName('')
        setEmail('')
        setPassword('')
        setCPassword('')
    }
    else{
      alert('Password does not match')
    }
  }
  return (
    <div className="signupbox">
      <div className="signup">
        <div className="head">Signup</div>
        <form className="form">
          <label className="lable">Name:</label>
          <input type="text" className="name" name="name" value={username} onChange={(e)=>setUserName(e.target.value)} required/>
          <label className="lable">Email:</label>
          <input type="email" className="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <label className="lable">Password:</label>
          <input type="password" className="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <label className="lable">Confirm Password:</label>
          <input type="password" className="password" name="cpassword" value={cpassword} onChange={(e)=>setCPassword(e.target.value)} required/>
          {/* <input type='submit' className='btn'/> */}
          <button className="btn" onClick={handleSubmit}>Submit</button>
          <div className="forlogin">
            <p>
              You have allready account then{" "}
              <Link to={"/"}>Click Login</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
