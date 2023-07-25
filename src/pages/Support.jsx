import "../styling/DatabaseInput1.css"
import "../styling/Support.css";
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
    <link rel="stylesheet" type="text/css" href="css/faq-support.css" />
    <link rel="stylesheet" type="text/css" href="css/styleguide.css" />
    <link rel="stylesheet" type="text/css" href="css/globals.css" />
  
  
    <input type="hidden" id="anPageName" name="page" value="faq-support" />
    <div class="container-center-horizontal">
      <div class="faq-support screen">
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
                <div class="settings inter-normal-white-12px" style={{ fontSize: '12px' }}>Settings</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="faq-support inter-normal-white-12px" style={{ fontSize: '12px',  fontWeight: 600 }}>FAQ / Support</div>
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
        <div class="frame-686 frame-1">
          <div class="frame-685 frame-1">
            <div class="frame">
              <div class="frame-6 frame-1">
                <img class="icon" src="icon-17.svg" alt="icon" />
                <h1 class="title inter-semi-bold-blue-dianne-27px">Tutorial</h1>
              </div>
              <div class="frame-683 frame-1">
                <div class="group-464">
                  <p class="learn-how-to-apply-f inter-semi-bold-tundora-15px" style={{ fontSize: '15px' }}>
                    Learn how to apply for and receive your clinical report
                  </p>
                  <div class="frame-670 frame-1"><div class="learn-now inter-semi-bold-white-12px" style={{ fontSize: '12px' }}>Learn now</div></div>
                </div>
              </div>
            </div>
            <div class="frame">
              <div class="frame-464 frame-1">
                <img class="icon" src="icon-18.svg" alt="icon" />
                <div class="contact-us inter-semi-bold-blue-dianne-27px" style={{ fontSize: '27px' }}>Contact Us</div>
              </div>
              <div class="frame-464-1 frame-464-3">
                <p class="get-in-touch-and-let inter-normal-black-12px" style={{ fontSize: '12px' }}>
                  Get in touch and let us know how we can help. We accept all inquiries,<br />including technical
                  questions and partnership opportunities.
                </p>
                <div class="frame-464-2 frame-464-3">
                  <div class="infowittgenbiocom inter-semi-bold-blue-dianne-12px" style={{ fontSize: '12px' }}>info@wittgenbio.com</div>
                  <div class="database-input_-button">
                    <div class="group-297"><div class="button inter-normal-blue-dianne-14px" style={{ fontSize: '14px' }}>Copy e-mail</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="line-131" src="line-131-2.svg" alt="Line 131" />
          <div class="frame">
            <div class="frame-672 frame-1">
              <div class="frame-6 frame-1">
                <img class="icon" src="icon-19.svg" alt="icon" />
                <div class="frequently-asked-questions inter-semi-bold-blue-dianne-27px" style={{ fontSize: '27px' }}>
                  Frequently Asked Questions
                </div>
              </div>
            </div>
            <div class="group-467">
              <div class="overlap-group-1">
                <div class="to-be-updated inter-semi-bold-slate-gray-15px" style={{ fontSize: '15px' }}>To be updated!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
        </>
    )
}
