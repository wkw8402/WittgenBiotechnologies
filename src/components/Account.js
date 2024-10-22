/* eslint-disable */

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import { createContext, forwardRef, useImperativeHandle, useState } from "react";
import UserPool  from "../config";
import "../config";
import { Discovery } from "aws-sdk";

const AccountContext = createContext();
var cogGroup, NewJWTTOKEN

const Account = forwardRef((props, ref) => {

  const getSession = async () => {
    await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser(); 
      // alert("Userpool.getCurrentUser = ", user);
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(err);
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

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
          localStorage.setItem(
            "persist-crs-token",
            JSON.stringify(NewJWTTOKEN)
          );
          console.log(
            "access token + " + result.getAccessToken().getJwtToken()
          );
        
          cogGroup = result.getIdToken().payload["cognito:groups"];
          console.log("Cognito Group Name is ----", cogGroup);
          //alert(cogGroup);
          localStorage.setItem("UsedGroup", JSON.stringify(cogGroup));

          resolve(result);
        },
        onFailure: (err) => {
          console.log("login failure", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("new password required", data);
          resolve(data);
        },
      });
    });
  };

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
    }
    localStorage.removeItem("persist-crs-token"); // Clear the token from localStorage
    window.location.href = "/";
  };
  

  const getUser = () => {
    return UserPool.getCurrentUser();
  }

  useImperativeHandle(ref, () => ({
    authenticate,
    logout,
    getUser,
  }))

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
});

export { Account, AccountContext, cogGroup, NewJWTTOKEN };