import "../styling/ChangePassword.css"
import "../styling/MyProfile.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React, { useState, useEffect, useContext, useRef } from "react";
import { NavigationType, useNavigate } from "react-router-dom";
import AWS, { SecretsManager } from "aws-sdk";
import "../config";
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";
import { AuthenticationDetails} from 'amazon-cognito-identity-js';

export default function Sample() {

  const navigate = useNavigate();

  const compRef = useRef();

  const logout = (event) => {
      compRef.current.logout();
      navigate("/")
  }

  const [currentPassword, setCurrentPassword] = useState('');
  const [nextPassword, setNextPassword] = useState('');
  const [passwordConditionsMet, setPasswordConditionsMet] = useState(false);
  const [nextPasswordCheck, setNextPasswordCheck] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNextPasswordChange = (event) => {
    setNextPassword(event.target.value);
  };

  const handleNextPasswordCheckChange = (event) => {
    setNextPasswordCheck(event.target.value);
  };

  useEffect(() => {
    // Check if password meets the specified conditions
    const checkPasswordConditions = () => {
      const hasMinimumLength = nextPassword.length >= 8;
      const hasLetterAndNumber = /[a-zA-Z]/.test(nextPassword) && /\d/.test(nextPassword);
      const hasUpperCaseAndLowerCase = /[a-z]/.test(nextPassword) && /[A-Z]/.test(nextPassword);
      const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(nextPassword);

      setPasswordConditionsMet(
        hasMinimumLength &&
        hasLetterAndNumber &&
        hasUpperCaseAndLowerCase &&
        hasSpecialCharacter
      );
    };

    checkPasswordConditions();
  }, [nextPassword]);

  useEffect(() => {
    // Check if passwords match (excluding empty strings)
    setPasswordsMatch(nextPassword !== '' && nextPassword === nextPasswordCheck);
  }, [nextPassword, nextPasswordCheck]);

  const updatePassword = (cognitoUser, currentPassword, passwordMatch, newPassword) => {
    // Check if currentPassword matches the user's actual password and passwordMatch is true
    if (passwordMatch) {
      const authenticationData = {
        Username: cognitoUser.username,
        Password: currentPassword,
      };
  
      const authenticationDetails = new AuthenticationDetails(authenticationData);
  
      // Authenticate the user and obtain a session
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
          // Use the obtained session to update the password
          cognitoUser.changePassword(currentPassword, newPassword, (err, result) => {
            if (err) {
              console.error('Error updating password:', err);
              alert('Password update failed. Please try again.');
            } else {
              console.log('Password updated successfully:', result);
              alert('Password updated successfully!');
              setTimeout(() => {
                navigate('/my_profile');
              }, 2000);
            }
          });
        },
        onFailure: (err) => {
          console.error('Authentication failed:', err);
          alert('Authentication failed. Please check your credentials.');
        },
      });
    } else {
      console.error('Password match is false.');
      alert('Password match is false.');
    }
  };

    return(
    <>   
    <Account ref={compRef} />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1440, maximum-scale=1.0" />
    <link rel="shortcut icon" type="image/png" href="https://animaproject.s3.amazonaws.com/home/favicon.png" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="photo" />
    <link rel="stylesheet" type="text/css" href="css/change-password.css" />
    <link rel="stylesheet" type="text/css" href="css/styleguide.css" />
    <link rel="stylesheet" type="text/css" href="css/globals.css" />
    <input type="hidden" id="anPageName" name="page" value="change-password" />
    <div class="container-center-horizontal">
      <div class="change-password screen">
      <div className="main-navigation">
        <div className="logo-box">
        <button className="witt-gen-portal bold-portal-logo" onClick={()=>navigate("/")}>
            <span className="bold-portal-logo">
            WittGen
            </span>
            <span className="light-portal-logo">
            Portal
            </span>
        </button>
        </div>
        <div className="navigation-box">
        <button className="navigation-box-1" onClick={()=>{ navigate('/dashboard') }}>
            <img
            className="dashboard-icon"
            src="/image/home-icon.svg"
            alt="home-icon"
            />
            <div className="light-font">Dashboard</div>
        </button>
        <button className="navigation-box-1" onClick={()=>{ navigate('/my_files_1') }} style={{ marginLeft: '-3px' }}>
            <img
            className="myfiles-icon"
            src="/image/myfiles-icon2.svg"
            alt="myfiles-icon"
            />
            <div className="light-font">My files</div>
        </button>
        <button className="navigation-box-1" onClick={()=>{  navigate('/CostUsage')  }}>
            <img
            className="cost-usage-icon"
            src="/image/cost-usage-icon.svg"
            alt="cost-usage-icon"
            />
            <div className="light-font">Cost &amp; Usage</div>
        </button>
        <button className="navigation-box-1" onClick={()=>{  navigate('/my_profile')  }}>
            <img
            className="setting-icon"
            src="/image/settings-icon2.svg"
            alt="setting-icon"
            style={{ width: '15px', height: '15px'}}
            />
            <div className="my-files-font">Settings</div>
        </button>
        <div className="navigation-box-1" onClick={()=>{  navigate('/support')  }}>
            <img
            className="faq-support-ion"
            src="/image/faq-support-icon.svg"
            alt="faq-support-icon"
            />
            <div className="light-font">FAQ / Support</div>
        </div>
        </div>
        <button className="logout" onClick={()=>{   logout()    }}>
        <img
            className="logout-icon"
            src="/image/logout-icon.png"
            alt="logout-icon"
        />
        <div className="light-font">Logout</div>
        </button>
      </div>

        <div class="frame-695">
          <div class="frame-693">
            <div class="frame">
              <div class="frame-496"><h1 class="title inter-semi-bold-blue-dianne-27px" style={{ fontSize: '27px' }}>Settings</h1></div>
            </div>
            <div class="frame-683">
              <button class="frame-468" onClick={()=>{  navigate("/my_profile")   }}>
                <img class="icon" src="/image/icon-13.svg" alt="icon" />
                <div class="my-profile-2 my-profile-3 inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>My profile</div>
              </button>
              <div class="frame-466">
                <img class="icon-1" src="/image/icon-14.svg" alt="icon" />
                <div class="change-password-1 change-password-3 inter-semi-bold-white-15px" style={{ fontSize: '15px' }}>Change password</div>
              </div>
              <div class="frame-469">
                <img
                  class="credit_card_fill0_wg"
                  src="/image/credit-card-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="credit_card_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <p class="payment-information-to-be-updated inter-semi-bold-slate-gray-15px" style={{ fontSize: '15px' }}>
                  Payment Information (To be Updated)
                </p>
              </div>
            </div>
          </div>
          <img class="line-131" src="/image/line-131.svg" alt="Line 131" />
          <div class="application">
            <div class="component-85">
              <div class="frame">
                <div class="frame-496">
                  <div class="change-password-2 change-password-3 inter-semi-bold-blue-dianne-27px" style={{ fontSize: '27px' }}>
                    Change password
                  </div>
                </div>
                <button class="frame-467" onClick={()=>{  updatePassword(compRef.current.getUser(), currentPassword, passwordsMatch, nextPassword);  }}>
                  <div class="frame-292"><div class="save-changes inter-semi-bold-white-12px" style={{ fontSize: '12px' }}>Save changes</div></div>
                </button >
              </div>
              <div class="frame-464">
                <div class="frame-464-1 frame-464-3">
                  <div class="frame-464-2 frame-464-3">
                    <div class="group">
                      <div class="frame">
                        <div class="group">
                          <div class="group-298">
                            <div class="frame-301">
                              <div class="x-password inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Current password</div>
                                <input
                                  type="password"
                                  class="frame-290"
                                  value={currentPassword}
                                  onChange={handleCurrentPasswordChange}
                                  style={{  paddingLeft: '10px' }}
                                />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="group">
                      <div class="frame">
                        <div class="group">
                          <div class="group-298">
                            <div class="frame-301">
                              <div class="x-password inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>New password</div>
                                <input
                                  type="password"
                                  class="frame-290"
                                  value={nextPassword}
                                  onChange={handleNextPasswordChange}
                                  style={{  paddingLeft: '10px' }}
                                />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="group">
                      <div class="frame">
                        <div class="group">
                          <div class="group-298">
                            <div class="frame-301">
                              <div class="x-password inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Re-enter new password</div>
                                <input
                                  type="password"
                                  class="frame-290"
                                  value={nextPasswordCheck}
                                  onChange={handleNextPasswordCheckChange}
                                  style={{  paddingLeft: '10px' }}
                                />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-640">
          <div class="overlap-group1">
            <div class="frame-546">
              <div class="frame-551">
                <div class="frame-438">
                  <div class="frame-445" style={{ paddingTop: '5px' }}>
                    {passwordConditionsMet?
                    <>
                      <img
                        class="error_fill0_wght400_grad0_opsz48-1"
                        src="/image/error-fill0-wght400-grad0-opsz48-1-5.svg"
                        alt="error_FILL0_wght400_GRAD0_opsz48 1"
                        />
                      <div class="password-security inter-semi-bold-milano-red-8-2px" style={{ fontSize: '9px', color: 'green' }}>Password security</div>
                    </>
                    : 
                    <>
                      <img
                        class="error_fill0_wght400_grad0_opsz48-1"
                        src="/image/error-fill0-wght400-grad0-opsz48-1-4.svg"
                        alt="error_FILL0_wght400_GRAD0_opsz48 1"
                        />
                      <div class="password-security inter-semi-bold-milano-red-8-2px" style={{ fontSize: '9px' }}>Password security</div>
                    </>}
                  </div>
                  <p class="your-password-must-b inter-normal-black-10-5px" style={{ fontSize: '10.5px', whiteSpace: 'normal' }}>
                    Your password must be classified as at least Strong. A good password consists of:
                  </p>
                </div>
              </div>
              <div class="frame-551-1">
                <div class="frame-438-1">
                  <div class="password">
                    <div class="frame-63">
                      <div class="done_fill0_wght400_grad0_opsz48-1-2">
                        <div class="ellipse-25"></div>
                      </div>
                      <div class="address inter-semi-bold-black-14px" style={{ fontSize: '14px' }}>8 or more characters</div>
                    </div>
                    <div class="frame-63">
                      <div class="done_fill0_wght400_grad0_opsz48-1-2">
                        <div class="ellipse-25"></div>
                      </div>
                      <p class="mixture-of-letters-and-numbers inter-semi-bold-black-14px" style={{ fontSize: '14px' }}>
                        Mixture of letters and numbers
                      </p>
                    </div>
                    <div class="frame-63">
                      <div class="done_fill0_wght400_grad0_opsz48-1-2">
                        <div class="ellipse-25"></div>
                      </div>
                      <p class="mixture-of-upper-and-lowercase inter-semi-bold-black-14px" style={{ fontSize: '14px' }}>
                        Mixture of upper and lowercase
                      </p>
                    </div>
                    <div class="frame-63">
                      <div class="done_fill0_wght400_grad0_opsz48-1-2">
                        <div class="ellipse-25"></div>
                      </div>
                      <div class="special-characters inter-semi-bold-black-14px" style={{ fontSize: '14px' }}>Special characters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="group-462">
              <div class="overlap-group-2">
                <img class="polygon-1" src="/image/polygon-1-1.svg" alt="Polygon 1" />
                <div class="rectangle-256"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
