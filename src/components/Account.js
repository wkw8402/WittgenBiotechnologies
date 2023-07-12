import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { createContext } from "react";
import { UserPool } from "../config";
import "../config";
import { Discovery } from "aws-sdk";

const AccountContext = createContext();
var cogGroup, NewJWTTOKEN;

const Account = (props) => {
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
    // alert("LOGOUT CALLED")

    const user = UserPool.getCurrentUser();
    user.signOut();

    window.location.href = "/";
    // window.location.href = "/login";
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext, cogGroup, NewJWTTOKEN };
