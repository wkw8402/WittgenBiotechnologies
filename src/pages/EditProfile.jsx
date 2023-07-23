import "../styling/DatabaseInput1.css"
import "../styling/EditProfile.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect } from 'react';

export default function Sample() {
    const usStates = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ];
      
      
        useEffect(() => {
          const stateSelect = document.getElementById("stateSelect");
          usStates.forEach((state) => {
            const option = document.createElement("option");
            option.textContent = state;
            stateSelect.appendChild(option);
          });
        }, []); // 두 번째 인자에 빈 배열을 넣어 처음 마운트될 때만 실행되도록 합니다.
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
                    <span class="oxygen-bold-white-21px">WittGen</span><span class="oxygen-light-white-21px">Portal</span>
                </div>
              </div>
              {/*<img class="line-79" src="line-79-12.svg" alt="Line 79" />*/}
            </div>
            <div class="frame-185">
              <div class="frame-185-item">
                <img
                  class="home_fill0_wght400_grad0_opsz48-1"
                  src="home-fill0-wght400-grad0-opsz48-1.svg"
                  alt="home_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="dashboard inter-normal-white-12px">Dashboard</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="my-files inter-semi-bold-white-16px">My files</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="cost-usage inter-normal-white-12px">Cost &amp; Usage</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="settings_fill0_wght400_grad0_opsz48-1"
                  src="settings-fill0-wght400-grad0-opsz48-1.svg"
                  alt="settings_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="settings inter-normal-white-12px">Settings</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="faq-support inter-normal-white-12px">FAQ / Support</div>
              </div>
            </div>
            <div class="logout">
              <img
                class="logout_fill0_wght400_grad0_opsz48-1"
                src="logout-fill0-wght400-grad0-opsz48-1.svg"
                alt="logout_FILL0_wght400_GRAD0_opsz48 1"
              />
              <div class="logout-1 inter-normal-white-12px">Logout</div>
            </div>
          </div>
        </div>  
        <div class="frame-695">
          <div class="frame-693">
            <div class="frame">
              <div class="frame-496"><h1 class="title inter-semi-bold-blue-dianne-27px">Settings</h1></div>
            </div>
            <div class="frame-682">
              <div class="frame-468">
                <img class="icon" src="icon-4.svg" alt="icon" />
                <div class="my-profile-3 inter-semi-bold-white-15px">My profile</div>
              </div>
              <a href="change-password.html">
                <div class="frame-466">
                  <img class="icon-1" src="icon-5.svg" alt="icon" />
                  <div class="change-password11 inter-semi-bold-blue-dianne-15px">Change password</div>
                </div></a
              >
              <div class="frame-469">
                <img
                  class="credit_card_fill0_wg"
                  src="credit-card-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="credit_card_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <p class="payment-information-to-be-updated inter-semi-bold-slate-gray-15px">
                  Payment Information (To be Updated)
                </p>
              </div>
            </div>
          </div>
          <img class="line-131" src="line-131-2.svg" alt="Line 131" />
          <div class="application">
            <div class="component-85">
              <div class="frame">
                <div class="frame-496">
                  <div class="my-profile-3 my-profile-4 inter-semi-bold-blue-dianne-27px">My Profile</div>
                </div>
                <a href="my-profile.html">
                  <div class="frame-467">
                    <div class="frame-292"><div class="save-changes inter-semi-bold-white-12px">Save changes</div></div>
                    <div class="frame-497"><div class="cancel inter-semi-bold-blue-dianne-12px">Cancel</div></div>
                  </div></a
                >
              </div>
              <div class="frame-464-1">
                <div class="frame-4">
                  <div class="frame-291">
                    <div class="password inter-semi-bold-blue-dianne-15px">Personal Information</div>
                  </div>
                  <div class="frame-464">
                    <div class="frame-4-1">
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-1">
                            <div class="first-name inter-normal-slate-gray-10-5px">First name</div>
                            <div class="frame-290"><div class="name inter-normal-tundora-10-5px">John</div></div>
                          </div>
                        </div>
                      </div>
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-1">
                            <div class="last-name inter-normal-slate-gray-10-5px">Last name</div>
                            <div class="frame-290"><div class="color inter-normal-tundora-10-5px">Snow</div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="group-317">
                      <div class="group-298">
                        <div class="frame-1">
                          <div class="frame-407">
                            <div class="send-notifications-to inter-normal-slate-gray-10-5px">
                              Send notifications to
                            </div>
                            <p class="for-receiving-updates-to-your-file-only inter-semi-bold-tahiti-gold-8-2px">
                              For receiving updates to your file ONLY
                            </p>
                          </div>
                          <div class="frame-290-1 frame-290-4">
                            <div class="group-234-1 group-234-3">
                              <div class="johnsnowscienceco inter-normal-tundora-10-5px">Johnsnow@science.co</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-4">
                  <div class="frame-291">
                    <div class="password inter-semi-bold-blue-dianne-15px">Company Information</div>
                  </div>
                  <div class="frame-464">
                    <div class="frame-4-1">
                      <div class="frame">
                        <div class="frame-1">
                          <div class="company inter-normal-slate-gray-10-5px">Company name</div>
                          <div class="frame-290">
                            <div class="randomscienceco inter-normal-tundora-10-5px">Randomscienceco</div>
                          </div>
                        </div>
                      </div>
                      <div class="frame-1">
                        <div class="country inter-normal-slate-gray-10-5px">Country</div>
                        <div class="frame-29">
                        <select class = "custom-select">
                        <option selected disabled>Choose country</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Germany</option>
                        </select>
                        </div>
                      </div>
                    </div>
                    <div class="group">
                      <div class="frame">
                        <div class="group">
                          <div class="group-298-1">
                            <div class="frame-1">
                              <div class="company inter-normal-slate-gray-10-5px">Company address</div>
                              <div class="frame-290-2 frame-290-4">
                                <div class="broke-maple-st-2234 inter-normal-tundora-10-5px">Broke Maple st 2234</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-4-1">
                      <div class="frame-1">
                        <div class="state-province inter-normal-slate-gray-10-5px">State/ province</div>
                        <div class="frame-29">
                        <select class="custom-select" id="stateSelect">
                        <option selected disabled>Choose state</option>
                        </select>
                        </div>
                      </div>
                      <div class="group-298-2">
                        <div class="frame-1">
                          <div class="city inter-normal-slate-gray-10-5px">City</div>
                          <div class="frame-29">
                          <select class="custom-select" >
                        <option selected disabled>Choose city</option>
                        </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="group-299">
                      <div class="frame-1">
                        <div class="zip-postal-code inter-normal-slate-gray-10-5px">Zip/ Postal code</div>
                        <div class="frame-290-3 frame-290-4">
                          <div class="x4-h3-189 inter-normal-tundora-10-5px">4H3 189</div>
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
