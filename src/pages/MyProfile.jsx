import { combineReducers } from "redux";
import "../styling/DatabaseInput1.css"
import "../styling/MyProfile.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import countryList from "react-select-country-list";

export default function Myprofile() {
  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAdress, setCompanyAdress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');


  useEffect(() => {
    // Get the updated data from localStorage and set it to the state
    const updatedFirstName = localStorage.getItem('firstName');
    const updatedLastName = localStorage.getItem('lastName');
    const savedEmail = localStorage.getItem('email');
    const savedCompanyName = localStorage.getItem('companyName');
    const savedCompanyAdress = localStorage.getItem('companyAdress');
    const savedZipCode = localStorage.getItem('zipCode');
    const savedState = localStorage.getItem('state');
    const savedCity = localStorage.getItem('city');
    const savedCountry = localStorage.getItem('selectedCountry');
    setFirstName(updatedFirstName);
    setLastName(updatedLastName);
    setEmail(savedEmail);
    setCompanyName(savedCompanyName);
    setCompanyAdress(savedCompanyAdress); 
    setZipCode(savedZipCode); 
    setState(savedState);
    setCity(savedCity);
    setSelectedCountry(savedCountry);
  }, []);

    return(
        <>   
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
      <div class="main-navigation">
          <div class="overlap-group1">
            <div class="group-184">
              <div class="overlap-group">
                <div class="witt-gen-portal oxygen-bold-white-21px">
                  <span class="oxygen-bold-white-21px" style={{ fontSize: '21px' }}>WittGen</span><span class="oxygen-light-white-21px" style={{ fontSize: '21px' }}>Portal</span>
                </div>
              </div>
              {/*<img class="line-79" src="img/line-79-12.svg" alt="Line 79" />*/}
            </div>
            <div class="frame-185">
            <a href="dashboard">
              <div class="frame-185-item">
                <img
                  class="home_fill0_wght400_grad0_opsz48-1"
                  src="home-fill0-wght400-grad0-opsz48-1.svg"
                  alt="home_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="dashboard inter-normal-white-12px" style={{ fontSize: '12px' }}>Dashboard</div>
              </div></a>
              <a href="my_files_1">
              <div class="frame-185-item">
                <img
                  class="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="my-files inter-semi-bold-white-16px" style={{ fontSize: '12px' , fontWeight: 400 }}>My files</div>
              </div>
              </a>
              <a href="CostUsage">
              <div class="frame-185-item">
                <img
                  class="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="cost-usage inter-normal-white-12px" style={{ fontSize: '12px' }}>Cost &amp; Usage</div>
              </div></a>
              <a href="my_profile">
              <div class="frame-185-item">
                <img
                  class="settings_fill0_wght400_grad0_opsz48-1"
                  src="settings-fill0-wght400-grad0-opsz48-1.svg"
                  alt="settings_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="settings inter-normal-white-12px" style={{ fontSize: '12px' ,  fontWeight: 600 }}>Settings</div>
              </div></a>
              <a href="support">
              <div class="frame-185-item">
                <img
                  class="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="faq-support inter-normal-white-12px" style={{ fontSize: '12px'}}>FAQ / Support</div>
              </div></a>
            </div>
            <div class="logout">
              <img
                class="logout_fill0_wght400_grad0_opsz48-1"
                src="logout-fill0-wght400-grad0-opsz48-1.svg"
                alt="logout_FILL0_wght400_GRAD0_opsz48 1"
              />
              <div class="logout-1 inter-normal-white-12px" style={{ fontSize: '12px' }}>Logout</div>
            </div>
          </div>
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
              <a href="change_password">
                <div class="frame-466">
                  <img class="icon-1" src="/image/icon-5.svg" alt="icon" />
                  <div class="change-password11 inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>Change password</div>
                </div></a>
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
                <a href="edit_profile">
                  <div class="frame-292">
                    <div class="edit-my-profile inter-semi-bold-white-12px" style={{ fontSize: '12px' }}>Edit my profile</div>
                  </div></a
                >
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
                            <div class="frame-290"><div class="name inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{firstName}</div></div>
                          </div>
                        </div>
                      </div>
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-301">
                          <div class="last-name inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Last name</div>
                            <div class="frame-290"><div class="color inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{LastName}</div></div>
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
                                {email}
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
                                <div class="randomscience inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{companyName}</div>
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
                              <div class="frame-290"><div class="place1 inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{selectedCountry}</div></div>
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
                                <p class="address inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{companyAdress}</p>
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
                                  <div class="place-1 inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{state}</div>
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
                                  <div class="san-fransisco inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{city}</div>
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
                                <div class="h3-j-1-g9 inter-semi-bold-black-12px" style={{ fontSize: '12px' }}>{zipCode}</div>
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
