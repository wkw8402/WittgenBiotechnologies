import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import "../config";
import { useContext, useState, useEffect } from "react";
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
// import { Account, AccountContext, cogGroup } from "../components/Account";
import { ToastContainer, toast } from "react-toastify";
// reactstrap components

configParams();

const AccountContext = createContext();
var cogGroup, NewJWTTOKEN;
const authenticate = async (Username, Password) => {
  await new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username,
      Password,
    });

    console.log("AUTH DETIALS - ", authDetails);

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log("login success", result);

        NewJWTTOKEN = result.getAccessToken().getJwtToken();
        localStorage.setItem("persist-crs-token", JSON.stringify(NewJWTTOKEN));
        console.log("access token + " + result.getAccessToken().getJwtToken());
        cogGroup = result.getIdToken().payload["cognito:groups"];
        console.log("Cognito Group Name is ----", cogGroup);
        //alert(cogGroup);
        localStorage.setItem("UsedGroup", JSON.stringify(cogGroup));

        resolve(result);
      },
      onFailure: (err) => {
        console.log("login failure", err);
        reject(err);
        alert("Login failed!")
      },
      newPasswordRequired: (data) => {
        console.log("new password required", data);
        resolve(data);
      },
    });
  });
};

export default function () {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  const { innerWidth: width, innerHeight: height } = window;
  // console.log(width, height);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(loginData);
    await localStorage.setItem("username", JSON.stringify(username));
    authenticate(username, password)
      .then((data) => {
        console.log(data);

        toast("🦄 ou are successfully logged in!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        navigate("/dashboard");
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

  return (
    <>
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <link rel="stylesheet" type="text/css" href="portal-login.css" />
      <link rel="stylesheet" type="text/css" href="styleguide.css" />
      <link rel="stylesheet" type="text/css" href="globals.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="portal-login"
      />
      <div className="container-center-horizontal-login">
        <div className="portal-login screen-login">
          <div className="witt-gen-portal oxygen-bold-blue-dianne-28px">
            <span className="oxygen-bold-blue-dianne-28px">WittGen</span>
            <span className="oxygen-light-blue-dianne-28px">Portal</span>
          </div>
          <div className="login-form">
            <div className="frame-203">
              <h1 className="title inter-semi-bold-blue-dianne-36px">LOGIN</h1>
              <form onSubmit={handleSubmit}>
                <div className="frame">
                  <div className="frame-19">
                    <div className="username inter-semi-bold-blue-dianne-16px">
                      Username
                    </div>
                    <input
                      className="rectangle-211"
                      value={username}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </div>
                  <div className="frame">
                    <div className="frame-19">
                      <div className="password inter-semi-bold-blue-dianne-16px">
                        Password
                      </div>
                      <input
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        type="password"
                        className="rectangle-211"
                      />
                    </div>
                    <div className="frame-201">
                      <div className="remember-me">
                        <div className="checkbox" />
                        <div className="remember-me-1 inter-normal-blue-dianne-16px">
                          Remember me
                        </div>
                      </div>
                      <div className="forgot-password inter-normal-tundora-16px">
                        Forgot password?
                      </div>
                    </div>
                  </div>
                </div>
                <button className="login-1">
                  <div className="login">
                    LOGIN
                  </div>
                </button>
              </form>
              <div className="frame-204">
                <div className="group-201">
                  <div className="overlap-group">
                    <img
                      className="line-90"
                      src="img/line-90@2x.svg"
                      alt="Line 90"
                    />
                    <div className="frame-204-1">
                      <div className="not-a-member-yet inter-normal-blue-dianne-16px">
                        Not a member yet?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sign-up" onClick={openModal}>
                  <div className="sign-up-1">SIGN UP</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="icbaseline-download"
            src="img/ic-baseline-download@2x.png"
            alt="ic:baseline-download"
          />
        </div>
      </div>
      
    </>
  );
}
