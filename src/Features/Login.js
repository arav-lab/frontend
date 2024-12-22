import React, { useState,useEffect } from "react";
import "../Cssfile/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const Navigate = useNavigate();
  const user = localStorage.getItem('userid')
  useEffect(()=>{
    if(user){
      Navigate(`/home/${user}`)
    }
  },[user])
  // const [logedin, setLogedin] = useState(null);

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const res = await axios.post("https://backend-five-drab-13.vercel.app/user/login", { email },{ timeout: 5000 } // Timeout set to 5 seconds);
      localStorage.setItem("userid",res.data._id)
      // console.log(res.data);
      Navigate(`/home/${res.data._id}`);
      window.location.reload();
    } catch (error) {
    if (error.code === "ECONNABORTED") {
      // Handle timeout error
      alert("The request timed out. Please check your internet connection and try again.");
    } else if (error.response && error.response.status === 400) {
      // Handle invalid email case (based on backend response status)
      alert("Invalid Email: This user is not registered. Please sign up first.");
    } else {
      // Handle other errors
      console.error(error);
      alert("An unexpected error occurred. Please try again later.");
    }
  }
  }

  return (
    <>
      <div className="loginmain">
        <div className="loginbox">
            <div className='loginform'>
              <form className="lform">
                <div className='liform'>
                <label className="llable">Email:</label>
                <input
                  type="email"
                  className="lemail"
                  value={email}
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <button className="lbtn" onClick={handleSubmit}>
                  Login
                </button>
                <div className="forsignup">
                  <p>Create new Account <Link to={'/signup'}>Click on Signup</Link> </p>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
