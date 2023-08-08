import "../styling/DatabaseInput1.css"
import "../styling/EditProfile.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function EditProfile() {
    
      const navigate = useNavigate();
      const [lastName, setLastName] = useState(''); 
      const [firstName, setFirstName] = useState('');
      const [email, setEmail] = useState('');
      const [companyName, setCompanyName] = useState('');
      const [companyAdress, setCompanyAdress] = useState('');
      const [zipCode, setZipCode] = useState('');
      const [state, setState] = useState('');
      const [city, setCity] = useState('');
      const [selectedCountry, setSelectedCountry] = useState('');

      useEffect(() => {
        // Get the data from localStorage and set it to the state
        const savedFirstName = localStorage.getItem('firstName');
        const savedLastName = localStorage.getItem('lastName');
        const savedEmail = localStorage.getItem('email');
        const savedCompanyName = localStorage.getItem('companyName');
        const savedCompanyAdress = localStorage.getItem('companyAdress');
        const savedZipCode = localStorage.getItem('zipCode');
        const savedState = localStorage.getItem('state');
        const savedCity = localStorage.getItem('city');
        const savedCountry = localStorage.getItem('selectedCountry');
        setFirstName(savedFirstName || ''); // Use an empty string as the default value if no data is found
        setLastName(savedLastName || '');   
        setEmail(savedEmail || ''); 
        setCompanyName(savedCompanyName || ''); 
        setCompanyAdress(savedCompanyAdress || ''); 
        setZipCode(savedZipCode || ''); 
        setState(savedState || '');
        setCity(savedCity || '');
        setSelectedCountry(savedCountry || '');
      }, []);


      // 입력값 달라지는 함수
      const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };
      const handleFirsttNameChange = (event) => {
        setFirstName(event.target.value);
      };
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
      const handlecompanyNameChange = (event) => {
        setCompanyName(event.target.value);
      }
      const handlecompanyAdressChange = (event) => {
        setCompanyAdress(event.target.value);
      }
      const handlezipCodeChange = (event) => {
        setZipCode(event.target.value);
      }
      const handlestateChange = (event) => {
        setState(event.target.value);
      }
      const handleCityChange = (event) => {
        setCity(event.target.value);
      }
      const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
      };
    
      const handleSaveChanges = () => {
        // localStorage에 변한값을 저장하기
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('companyName', companyName);
        localStorage.setItem('companyAdress', companyAdress);
        localStorage.setItem('zipCode', zipCode);
        localStorage.setItem('state', state);
        localStorage.setItem('city', city);
        localStorage.setItem('selectedCountry', selectedCountry);
        // myprofile페이지로 변한값 이동
        navigate('/my_profile');
      };
      
      
      
    return(
        <>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1440, maximum-scale=1.0" />
    <link rel="shortcut icon" type="image/png" href="https://animaproject.s3.amazonaws.com/home/favicon.png" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="photo" />
    <link rel="stylesheet" type="text/css" href="css/my-profile-edit-my-profile.css" />
    <link rel="stylesheet" type="text/css" href="css/styleguide.css" />
    <link rel="stylesheet" type="text/css" href="css/globals.css" />
    <input type="hidden" id="anPageName" name="page" value="my-profile-edit-my-profile" />
    <div class="container-center-horizontal">
      <div class="my-profile-edit-my-profile screen">
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
              <div class="frame-185-item">
                <img
                  class="home_fill0_wght400_grad0_opsz48-1"
                  src="home-fill0-wght400-grad0-opsz48-1.svg"
                  alt="home_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="dashboard inter-normal-white-12px" style={{ fontSize: '12px' }}>Dashboard</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="my-files inter-semi-bold-white-16px" style={{ fontSize: '12px' , fontWeight: 400 }}>My files</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="cost-usage inter-normal-white-12px" style={{ fontSize: '12px' }}>Cost &amp; Usage</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="settings_fill0_wght400_grad0_opsz48-1"
                  src="settings-fill0-wght400-grad0-opsz48-1.svg"
                  alt="settings_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="settings inter-normal-white-12px" style={{ fontSize: '12px' , fontWeight: 600 }}>Settings</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="faq-support inter-normal-white-12px" style={{ fontSize: '12px' }}>FAQ / Support</div>
              </div>
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
              <a href="changepassword">
                <div class="frame-466">
                  <img class="icon-1" src="/image/icon-5.svg" alt="icon" />
                  <div class="change-password11 inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>Change password</div>
                </div></a
              >
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
          <img class="line-131" src="/image/line-131-2.svg" alt="Line 131" />
          <div class="application">
            <div class="component-85">
              <div class="frame">
                <div class="frame-496">
                  <div class="my-profile-3 my-profile-4 inter-semi-bold-blue-dianne-27px" style={{ fontSize: '27px' }}>My Profile</div>
                </div>
                <a href="my_profile">
                  <div class="frame-467">
                    <button class="frame-292"><div class="save-changes inter-semi-bold-white-12px" style={{ fontSize: '12px' }} onClick={handleSaveChanges}>Save changes</div></button>
                    <div class="frame-497"><div class="cancel inter-semi-bold-blue-dianne-12px" style={{ fontSize: '12px' }}>Cancel</div></div>
                  </div></a
                >
              </div>
              <div class="frame-464-1">
                <div class="frame-4">
                  <div class="frame-291">
                    <div class="password inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>Personal Information</div>
                  </div>
                  <div class="frame-464">
                    <div class="frame-4-1">
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-1">
                            <div class="first-name inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>First name</div>
                            <div class="frame-290"><input
                            class="name inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}
                            type="text"
                            value={firstName}
                            onChange={handleFirsttNameChange}
                            placeholder="Enter your first name"
                          /></div>
                          </div>
                        </div>
                      </div>
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-1">
                            <div class="last-name inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Last name</div>
                            <div class="frame-290"> <input
                            class="color inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                            placeholder="Enter your last name"
                          /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="group-317">
                      <div class="group-298">
                        <div class="frame-1">
                          <div class="frame-407">
                            <div class="send-notifications-to inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>
                              Send notifications to
                            </div>
                            <p class="for-receiving-updates-to-your-file-only inter-semi-bold-tahiti-gold-8-2px" style={{ fontSize: '9px' }}>
                              For receiving updates to your file ONLY
                            </p>
                          </div>
                          <div class="frame-290-1 frame-290-4">
                            <div class="group-234-1 group-234-3">
                            <input type="email"
                            class="johnsnowscienceco inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email address"
                          />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-4">
                  <div class="frame-291">
                    <div class="password inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>Company Information</div>
                  </div>
                  <div class="frame-464">
                    <div class="frame-4-1">
                      <div class="frame">
                        <div class="frame-1">
                          <div class="company inter-normal-slate-gray-10-5px" style={{ fontSize: '15px' }}>Company name</div>
                          <div class="frame-290">
                          <input
                            class="randomscienceco inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}
                            type="text"
                            value={companyName}
                            onChange={handlecompanyNameChange}
                            placeholder="Enter the name"
                          />
                          </div>
                        </div>
                      </div>
                      <div class="frame-1">
                        <div class="country inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Country</div>
                        <div class="frame-29">
                        <select class = "custom-select" value={selectedCountry} onChange={handleCountryChange}>
                        <option value='disabled'>Choose country</option>
                        <option value='United States'>United States</option>
                        <option value='Canada'>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>Spain</option>
                        <option>Italy</option>
                        <option>Japan</option>
                        <option>Canada</option>
                        <option>China</option>
                        <option>India</option>
                        <option>Brazil</option>
                        <option>Mexico</option>
                        <option>South Africa</option>
                        <option>Nigeria</option>
                        <option>Saudi Arabia</option>
                        <option>United Arab Emirates</option>
                        <option>Russia</option>
                        <option>South Korea</option>
                        <option>Singapore</option>
                        </select>
                        </div>
                      </div>
                    </div>
                    <div class="group">
                      <div class="frame">
                        <div class="group">
                          <div class="group-298-1">
                            <div class="frame-1">
                              <div class="company inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Company address</div>
                              <div class="frame-290-2 frame-290-4">
                              <input
                              class="broke-maple-st-2234 inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}
                              type="text"
                              value={companyAdress}
                              onChange={handlecompanyAdressChange}
                              placeholder="Enter Address"
                              />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-4-1">
                      <div class="frame-1">
                        <div class="state-province inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>State/ province</div>
                        <div class="frame-29">
                        <div class="group-234"><input class="place-3 inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}
                        type="text"
                        value={state}
                        onChange={handlestateChange}
                        placeholder="Enter State/Province"></input></div>
                        </div>
                      </div>
                      <div class="group-298-2">
                        <div class="frame-1">
                          <div class="city inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>City</div>
                          <div class="frame-29">
                          <div class="group-234"><input class="place-3 inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}
                          type="text"
                          value={city}
                          onChange={handleCityChange}
                          placeholder="Enter City"></input></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="group-299">
                      <div class="frame-1">
                        <div class="zip-postal-code inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Zip/ Postal code</div>
                        <div class="frame-290-3 frame-290-4">
                        <input
                              class="x4-h3-189 inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}
                              type="text"
                              value={zipCode}
                              onChange={handlezipCodeChange}
                              placeholder="Enter zip code"
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
        </>
    )
}
