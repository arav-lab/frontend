import React, { useEffect,useState } from "react";
import "../Cssfile/Profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const [userdata, setUserdata] = useState(null);
  const navigate = useNavigate();
  // const userdetails = localStorage.getItem("userid");
  // console.log(userdetails);
  const userid = localStorage.getItem('userid')
  // const user = JSON.parse(userdetails);
  // const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user);

  if (!userid) {
    navigate("/");
  }
  useEffect(() => {
    const fatchdata = async () => {
      try {
      const res  = await axios.get(`http://localhost:5000/users/${userid}`);
      setUserdata(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }}
    fatchdata();
  }, []);
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      {userid && (
        <>
          <div className="profilebox">
            <div className="profile-container">
              <header className="profile-header">
                <h1>User Profile</h1>
              </header>
              <section className="profile-details">
                <div className="profile-picture">
                  <img src="path_to_profile_picture" alt="Profile" />
                </div>
                <div className="profile-info">
                  <h2>{userdata?.username}</h2>
                  <p>Email: {userdata?.email}</p>
                  <p>Points: {userdata?.points}</p>
                  <p>Videos Watched: {userdata?.videosWatched}</p>
                  <p>Location: City, India</p>
                  <p>Bio: I am A studant </p>
                </div>
              </section>
              <section className="profile-actions">
                {/* <button>Edit Profile</button> */}
                <button onClick={logout}>Logout</button>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
