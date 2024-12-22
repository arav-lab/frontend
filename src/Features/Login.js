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
      const res = await axios.post("https://backend-five-drab-13.vercel.app/user/login", { email });
      
      // const user = {
      //   id: res.data._id,
      // }
      localStorage.setItem("userid",res.data._id)
      // localStorage.setItem("email", res.data.email);
      // localStorage.setItem("id", res.data._id);
      // localStorage.setItem("points", res.data.points);
      // localStorage.setItem("videosWatched", res.data.videosWatched);
      // localStorage.setItem("isAuthenticated", true);
      // console.log(res.data);
      
      Navigate(`/home/${res.data._id}`);
      window.location.reload();

    } catch (error) {
      console.log(error);
      alert("Invalid Email: These User is not Registered. Please Signup First");
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
