import { combineReducers } from "redux";
import "../styling/DatabaseInput1.css"
import "../styling/MyProfile.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import countryList from "react-select-country-list";
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";
import AWS, { SecretsManager } from "aws-sdk";

export default function Myprofile() {

  const navigate = useNavigate();

  const compRef = useRef();

  const logout = (event) => {
      compRef.current.logout();
      navigate("/")

  }
  const [userAttributes, setUserAttributes] = useState(null);

  useEffect(() => {
    fetchUserAttributes();
    console.log(userAttributes);
  }, [userAttributes]);

  const fetchUserAttributes = async () => {
    try {
      const attributes = await getUserAttributes();
      setUserAttributes(attributes);
    } catch (error) {
      console.log('Error fetching user attributes:', error);
    }
  };

  const getUserAttributes = async () => {
    const cognitoISP = new AWS.CognitoIdentityServiceProvider();
    const currentUser = await cognitoISP.getUser({ AccessToken: NewJWTTOKEN }).promise();
    const userAttributes = currentUser.UserAttributes.reduce((attributes, attribute) => {
      attributes[attribute.Name] = attribute.Value;
      return attributes;
    }, {});
    return userAttributes;
  };

    return(
        <>   
    <Account ref={compRef} />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1440, maximum-scale=1.0" />
    <link rel="shortcut icon" type="image/png" href="https://animaproject.s3.amazonaws.com/home/favicon.png" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="photo" />
    <link rel="stylesheet" type="text/css" href="css/my-profile.css" />
    <link rel="stylesheet" type="text/css" href="css/styleguide.css" />
    <link rel="stylesheet" type="text/css" href="css/globals.css" />
    <input type="hidden" id="anPageName" name="page" value="my-profile" />
    <div class="container-center-horizontal">
      <div class="my-profile screen">
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
            <div class="frame-682">
              <div class="frame-468">
                <img class="icon" src="/image/icon-4.svg" alt="icon" />
                <div class="my-profile-3 inter-semi-bold-white-15px" style={{ fontSize: '15px' }}>My profile</div>
              </div>
              <button class="frame-466" onClick={()=>{navigate("/change_password")}}>
                <img class="icon-1" src="/image/icon-5.svg" alt="icon" />
                <div class="change-password11 inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>Change password</div>
              </button>
              <div class="frame-467">
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
                <div class="frame-496"><div class="my-profile-4 inter-semi-bold-blue-dianne-27px" style={{ fontSize: '27px' }}>My Profile</div></div>
                <div class="frame-292" onClick={()=>{navigate('/edit_profile')}}>
                  <div class="edit-my-profile inter-semi-bold-white-12px" style={{ fontSize: '12px' }}>Edit my profile</div>
                </div>
              </div>
              <div class="frame-464">
                <div class="frame-464-1 frame-464-4">
                  <div class="frame-291">
                    <div class="password inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>Personal Information</div>
                  </div>
                  <div class="frame-464-2 frame-464-4">
                    <div class="frame-449">
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-301">
                            <div class="first-name inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>First name</div>
                            <div class="frame-290"><div class="name inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{userAttributes? userAttributes['custom:firstname'] : ""}</div></div>
                          </div>
                        </div>
                      </div>
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-301">
                          <div class="last-name inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Last name</div>
                            <div class="frame-290"><div class="color inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{userAttributes? userAttributes['custom:lastname'] : ""}</div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-450a">
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-301">
                            <div class="send-notifications-to inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>
                              Send notifications to
                            </div>
                            <div class="frame-290">
                              <div class="johnsnowrandomscienceco inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>
                              {userAttributes ? userAttributes['email'] : ""}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="wrapper">
                      <input type="checkbox" class="switch" id="switch"></input>
                      <label for="switch" class="switch_label">
                        <span class="onf_btn"></span>
                      </label>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="frame-497">
                  <div class="frame-291">
                    <div class="password inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>Company Information</div>
                  </div>
                  <div class="frame-464-3 frame-464-4">
                    <div class="frame-4">
                      <div class="frame">
                        <div class="frame-40">
                          <div class="frame">
                            <div class="frame-301">
                              <div class="company inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Company name</div>
                              <div class="frame-290">
                                <div class="randomscience inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{userAttributes? userAttributes['custom:company_name'] : ""}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="frame">
                        <div class="frame-40">
                          <div class="frame">
                            <div class="frame-301">
                              <div class="country inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Country</div>
                              <div class="frame-290"><div class="place1 inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{userAttributes? userAttributes['custom:country'] : ""}</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-4">
                      <div class="frame">
                        <div class="frame-40">
                          <div class="frame">
                            <div class="frame-301">
                              <div class="company inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Company address</div>
                              <div class="frame-290">
                                <p class="address inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{userAttributes? userAttributes['custom:address'] : ""}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-4">
                      <div class="frame-4">
                        <div class="frame">
                          <div class="frame-40">
                            <div class="frame">
                              <div class="frame-301">
                                <div class="state-province inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>State/Province</div>
                                <div class="frame-290">
                                  <div class="place-1 inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{userAttributes? userAttributes['custom:state'] : ""}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="frame-4">
                        <div class="frame">
                          <div class="frame-40">
                            <div class="frame">
                              <div class="frame-301">
                                <div class="city inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>City</div>
                                <div class="frame-290">
                                  <div class="san-fransisco inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{userAttributes? userAttributes['custom:city'] : ""}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-4">
                      <div class="frame">
                        <div class="frame-40">
                          <div class="frame">
                            <div class="frame-301">
                              <div class="zip-postal-code inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Zip/Postal Code</div>
                              <div class="frame-290">
                                <div class="h3-j-1-g9 inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{userAttributes? userAttributes['custom:zipcode'] : ""}</div>
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
        </div>
      </div>
    </div>
        </>
    )
}
