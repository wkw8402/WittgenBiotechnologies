import "../styling/DatabaseInput1.css"
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
                    <span class="oxygen-bold-white-21px">WittGen</span><span class="oxygen-light-white-21px">Portal</span>
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
              <div class="frame-467">
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
          <img class="line-131" src="line-131.svg" alt="Line 131" />
          <div class="application">
            <div class="component-85">
              <div class="frame">
                <div class="frame-496"><div class="my-profile-4 inter-semi-bold-blue-dianne-27px">My Profile</div></div>
                <a href="my-profile-edit-my-profile.html">
                  <div class="frame-292">
                    <div class="edit-my-profile inter-semi-bold-white-12px">Edit my profile</div>
                  </div></a
                >
              </div>
              <div class="frame-464">
                <div class="frame-464-1 frame-464-4">
                  <div class="frame-291">
                    <div class="password inter-semi-bold-blue-dianne-15px">Personal Information</div>
                  </div>
                  <div class="frame-464-2 frame-464-4">
                    <div class="frame-449">
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-301">
                            <div class="first-name inter-normal-slate-gray-10-5px">First name</div>
                            <div class="frame-290"><div class="name inter-semi-bold-black-12px">John</div></div>
                          </div>
                        </div>
                      </div>
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-301">
                            <div class="last-name inter-normal-slate-gray-10-5px">Last name</div>
                            <div class="frame-290"><div class="color inter-semi-bold-black-12px">Snow</div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-450">
                      <div class="frame-40">
                        <div class="frame">
                          <div class="frame-301">
                            <div class="send-notifications-to inter-normal-slate-gray-10-5px">
                              Send notifications to
                            </div>
                            <div class="frame-290">
                              <div class="johnsnowrandomscienceco inter-semi-bold-black-12px">
                                Johnsnow@randomscience.co
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
                    <div class="password inter-semi-bold-blue-dianne-15px">Company Information</div>
                  </div>
                  <div class="frame-464-3 frame-464-4">
                    <div class="frame-4">
                      <div class="frame">
                        <div class="frame-40">
                          <div class="frame">
                            <div class="frame-301">
                              <div class="company inter-normal-slate-gray-10-5px">Company name</div>
                              <div class="frame-290">
                                <div class="randomscience inter-semi-bold-black-12px">Randomscience</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="frame">
                        <div class="frame-40">
                          <div class="frame">
                            <div class="frame-301">
                              <div class="country inter-normal-slate-gray-10-5px">Country</div>
                              <div class="frame-290"><div class="place1 inter-semi-bold-black-12px">USA</div></div>
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
                              <div class="company inter-normal-slate-gray-10-5px">Company address</div>
                              <div class="frame-290">
                                <p class="address inter-semi-bold-black-12px">2044 Broke Maple Leaf Street</p>
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
                                <div class="state-province inter-normal-slate-gray-10-5px">State/Province</div>
                                <div class="frame-290">
                                  <div class="place-1 inter-semi-bold-black-12px">California</div>
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
                                <div class="city inter-normal-slate-gray-10-5px">City</div>
                                <div class="frame-290">
                                  <div class="san-fransisco inter-semi-bold-black-12px">San Fransisco</div>
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
                              <div class="zip-postal-code inter-normal-slate-gray-10-5px">Zip/Postal Code</div>
                              <div class="frame-290">
                                <div class="h3-j-1-g9 inter-semi-bold-black-12px">H3J 1G9</div>
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
