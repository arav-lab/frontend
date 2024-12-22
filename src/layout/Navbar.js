import React, { useEffect, useState } from "react";
import "../Cssfile/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");
  const {id} = useParams();
  // console.log(id);
  
  const Navigate = useNavigate();

  useEffect(()=>{
    setName(localStorage.getItem('userid'))
  },[])

  const logout = () => {
    localStorage.clear();
    Navigate("/");
    window.location.reload();
  }
// console.log(name);

  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <ul className="lists">
        {name ? (
          <>
            <Link to={`/home/${name}`}>
              <li className="list">Home</li>
            </Link>
            {/* <Link to="/about">
              <li className="list">About</li>
            </Link> */}
            <Link to={`/${name}/profile`}>
              <li className="list">Profile</li>
            </Link>
              <button style={{backgroundColor:'red',color:'white',border:'none',cursor:'pointer',borderRadius:'5px'}} onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">
              <li className="list">Login</li>
            </Link>
            <Link to="/signup">
              <li className="list">Signup</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
