import "../styling/ChangePassword.css"
import "../styling/MyProfile.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect } from 'react';

export default function Sample() {
    return(
        <>   
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
                <div class="settings inter-normal-white-12px" style={{ fontSize: '12px' ,  fontWeight: 600 }}>Settings</div>
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
            <div class="frame-683">
              <a href="myprofile">
                <div class="frame-468">
                  <img class="icon" src="icon-13.svg" alt="icon" />
                  <div class="my-profile-2 my-profile-3 inter-semi-bold-blue-dianne-15px" style={{ fontSize: '15px' }}>My profile</div>
                </div></a
              >
              <div class="frame-466">
                <img class="icon-1" src="icon-14.svg" alt="icon" />
                <div class="change-password-1 change-password-3 inter-semi-bold-white-15px" style={{ fontSize: '15px' }}>Change password</div>
              </div>
              <div class="frame-469">
                <img
                  class="credit_card_fill0_wg"
                  src="credit-card-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="credit_card_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <p class="payment-information-to-be-updated inter-semi-bold-slate-gray-15px" style={{ fontSize: '15px' }}>
                  Payment Information (To be Updated)
                </p>
              </div>
            </div>
          </div>
          <img class="line-131" src="line-131.svg" alt="Line 131" />
          <div class="application">
            <div class="component-85">
              <div class="frame">
                <div class="frame-496">
                  <div class="change-password-2 change-password-3 inter-semi-bold-blue-dianne-27px" style={{ fontSize: '27px' }}>
                    Change password
                  </div>
                </div>
                <a href="myprofile">
                  <div class="frame-467">
                    <div class="frame-292"><div class="save-changes inter-semi-bold-white-12px" style={{ fontSize: '12px' }}>Save changes</div></div>
                  </div></a
                >
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
                              <div class="frame-290"></div>
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
                              <div class="frame-290"></div>
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
                              <div class="frame-290"></div>
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
                  <div class="frame-445">
                    <img
                      class="error_fill0_wght400_grad0_opsz48-1"
                      src="error-fill0-wght400-grad0-opsz48-1-4.svg"
                      alt="error_FILL0_wght400_GRAD0_opsz48 1"
                    />
                    <div class="password-security inter-semi-bold-milano-red-8-2px" style={{ fontSize: '9px' }}>Password security</div>
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
                <img class="polygon-1" src="polygon-1-1.svg" alt="Polygon 1" />
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
