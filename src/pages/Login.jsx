/* eslint-disable */

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import "../config";
import { useContext, useState, useEffect, useRef } from "react";
import { createContext } from "react";
// import "../index.css";
import "../styling/Login.css";
import React from "react";
import Modal from './Popup';
import {
  configTableName,
  configParams,
  configUploadGroup,
  configDownloadGroup,
  UserPool,
} from "../config";
import { useHistory } from "react-router-dom";
import { Account, AccountContext, cogGroup } from "../components/Account";
import { ToastContainer, toast } from "react-toastify";
// reactstrap components

configParams();

export default function () {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };
  const closeModal = (event) => {
    event.preventDefault();
    setModalOpen(false);
  };

  const compRef = useRef();
  const authenticate = (Username, Password) => {
    return compRef.current.authenticate(Username, Password);
  }

  const { innerWidth: width, innerHeight: height } = window;
  // console.log(width, height);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(loginData);
    await localStorage.setItem("username", JSON.stringify(username));
    authenticate(username, password)
      .then((data) => {
        // console.log(data);

        toast("🦄 you are successfully logged in!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        
        console.log("to dashboard");
        navigate("/dashboard");
        console.log("after wards")
        // history.replace("/dashboard");
        //else if (cogGroup == configDownloadGroup) {
      })
      .catch((err) => {
        toast("🦄 Please enter the correct information!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Account ref={compRef} />
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
      <link rel="stylesheet" type="text/css" href="portal-login.css" />
      <link rel="stylesheet" type="text/css" href="styleguide.css" />
      <link rel="stylesheet" type="text/css" href="globals.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="portal-login"
      />
      <div className="portal-login">
        <div className="group-185">
          <img className="line-79" src="line-79.png" alt="Line 79" />
          <div className="overlap-group1">
            <div className="witt-gen-portal oxygen-bold-blue-dianne-21px">
              <span className="oxygen-bold-white-21px">WittGen</span>
              <span className="oxygen-light-white-21px">Portal</span>
            </div>
          </div>
        </div>
        <div className="thank-you-for-your-i">
          Thank you for your interest!<br />
          We have our alpha version demo, which is not ready for customers.<br />
          Please sign up for demo if you want the next version as soon as possible!
        </div>
        <div className="login-form login-2">
          <div className="frame-203 frame-1">
            <h1 className="title">LOGIN</h1>
            <form onSubmit={handleSubmit}>  
            <div className="frame">
              <div className="frame-19 frame-1">
                <div className="username inter-semi-bold-blue-dianne-12px">
                  Username
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="rectangle-211"
                  placeholder="Enter your username"
                />
              </div>
              <div className="frame">
                <div className="frame-19 frame-1">
                  <div className="password inter-semi-bold-blue-dianne-12px">
                    Password
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="rectangle-211"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="login">
              <div className="login-1 login-2">
                Login
              </div>
            </button>
            </form>
            <div className="frame-204 frame-1">
              <div className="group-201">
                <div className="overlap-group">
                  {/* <img
                    className="line-90"
                    src="line-90.svg"
                    alt="Line 90"
                  /> */}
                  <div className="frame-204-1">
                    <p className="not-a-member-yet valign-text-middle">
                      Want to be the first to get our product?
                    </p>
                  </div>
                </div>
              </div>
                <button className="sign-up" onClick={openModal}>
                  <div className="sign-up-1">Sign Up for Demo</div>
                </button>
                <Modal open={modalOpen} close={closeModal} header="">
                    </Modal>
            </div>
          </div>
        </div>
        <img
          className="icbaseline-download"
          src="ic-baseline-download@2x.png"
          alt="ic:baseline-download"
        />
      </div>
      
    </>
  );
}
