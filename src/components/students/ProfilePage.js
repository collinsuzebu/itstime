import React, { useState } from "react";
// import axiosAPI from "../../api/axios-instance";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../common/nav/NavBar";
import Footer from "../common/footer/Footer";
import { logout } from "../../redux/actions/auth";
import PrivateService from "../../api/private.service";

const ProfilePage = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [userProfileState, setUserProfileState] = useState({});

  const dispatch = useDispatch();

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const logOut = () => {
    dispatch(logout());
  };

  const handleClick = async () => {
    PrivateService.getUserBoard().then((response) => {
      setUserProfileState(response.data);
      alert(JSON.stringify(response.data));
    });
  };
  return (
    <>
      <NavBar />
      <div className="bootstrap__container" style={{ paddingBottom: "200px" }}>
        <h1 className="page__title">Profile page</h1>
        <button
          className="btn-join"
          style={{
            display: "inline-block",
            float: "right",
            background: "red",
            width: "120px",
            borderRadius: "50px",
          }}
          onClick={logOut}
        >
          LOGOUT
        </button>
        <p>View for only logged in users</p>
        <strong>Permissions:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <button onClick={handleClick}>GET protected</button>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
