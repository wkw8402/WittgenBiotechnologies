import "../styling/DatabaseInput1.css"
import "../styling/EditProfile.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";



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

      const compRef = useRef();

      const logout = (event) => {
          compRef.current.logout();
          navigate("/")
      }
      
      
      
    return(
        <>
    <Account ref={compRef} />
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
              <div class="frame-466" onClick={()=>{navigate('/change_password')}}>
                <img class="icon-1" src="/image/icon-5.svg" alt="icon" />
                <div class="change-password11 inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>Change password</div>
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
          <img class="line-131" src="/image/line-131-2.svg" alt="Line 131" />
          <div class="application">
            <div class="component-85">
              <div class="frame">
                <div class="frame-496">
                  <div class="my-profile-3 my-profile-4 inter-semi-bold-blue-dianne-27px" style={{ fontSize: '27px' }}>My Profile</div>
                </div>   
                <div class="frame-467">
                  <button class="frame-292"><div class="save-changes inter-semi-bold-white-12px" style={{ fontSize: '12px' }} onClick={handleSaveChanges}>Save changes</div></button>
                  <div class="frame-497"><div class="cancel inter-semi-bold-blue-dianne-12px" style={{ fontSize: '12px' }}>Cancel</div></div>
                </div>
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
                            <input
                            class="frame-290"
                            type="text"
                            value={firstName}
                            onChange={handleFirsttNameChange}
                            placeholder="Enter your first name"
                          />
                          </div>
                        </div>
                      </div>
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-1">
                            <div class="last-name inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Last name</div>
                            <input
                            class="frame-290"
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                            placeholder="Enter your last name"
                          />
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
                            <input type="email"
                            class="frame-290-1 frame-290-4" 
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email address"
                            />
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
                          <input
                            class="frame-290"
                            type="text"
                            value={companyName}
                            onChange={handlecompanyNameChange}
                            placeholder="Enter the name"
                          />
                        </div>
                      </div>
                      <div class="frame-1">
                        <div class="country inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Country</div>
                        <select class = "frame-29 custom-select" value={selectedCountry} onChange={handleCountryChange}>
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
                    <div class="group">
                      <div class="frame">
                        <div class="group">
                          <div class="group-298-1">
                            <div class="frame-1">
                              <div class="company inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Company address</div>
                              <input
                              class="frame-290-2 frame-290-4"
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
                    <div class="frame-4-1">
                      <div class="frame-1">
                        <div class="state-province inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>State/ province</div>
                        <input class="frame-29"
                        type="text"
                        value={state}
                        onChange={handlestateChange}
                        placeholder="Enter State/Province"></input>
                      </div>
                      <div class="group-298-2">
                        <div class="frame-1">
                          <div class="city inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>City</div>
                          <input class="frame-29"
                          type="text"
                          value={city}
                          onChange={handleCityChange}
                          placeholder="Enter City"></input>
                        </div>
                      </div>
                    </div>
                    <div class="group-299">
                      <div class="frame-1">
                        <div class="zip-postal-code inter-normal-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Zip/ Postal code</div>
                        <input
                              class="frame-290-3 frame-290-4" 
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
        </>
    )
}
