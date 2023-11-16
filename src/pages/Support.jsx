import "../styling/DatabaseInput1.css"
import "../styling/Support.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Account, AccountContext, cogGroup } from "../components/Account";

export default function Sample() {

  const compRef = useRef();

  const logout = (event) => {
    compRef.current.logout();
    navigate("/")
  }

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Get the email text
    const emailText = 'info@wittgenbio.com';

    // Create a temporary textarea element to copy the text to the clipboard
    const textarea = document.createElement('textarea');
    textarea.value = emailText;

    // Make the textarea non-editable to avoid keyboard flickering
    textarea.setAttribute('readonly', '');

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // You can optionally show a notification or perform other actions after copying
    console.log('Email copied to clipboard:', emailText);

    setIsCopied(true);

    // Hide the popup message after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const navigate = useNavigate();

    return(
        <>
        <Account ref={compRef} />
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
      <div className="main-navigation">
        <div className="logo-box">
        <button className="witt-gen-portal bold-portal-logo" onClick={()=>navigate("/dashboard")}>
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
            src="/image/settings-icon.svg"
            alt="setting-icon"
            />
            <div className="light-font">Settings</div>
        </button>
        <button className="navigation-box-1" onClick={()=>{  navigate('/support')  }}>
            <img
            className="faq-support-ion"
            src="/image/faq-support-icon.svg"
            alt="faq-support-icon"
            />
            <div className="my-files-font">FAQ / Support</div>
        </button>
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

        <div class="frame-686 frame-1" style={{ marginLeft: '100px'}}>
          <div class="frame-685 frame-1">
            <div class="frame">
              <div class="frame-6 frame-1">
                <img class="icon" src="/image/icon-17.svg" alt="icon" />
                <h1 class="title inter-semi-bold-blue-dianne-27px">Tutorial</h1>
              </div>
              <div class="frame-683 frame-1">
                <div class="group-464">
                  <p class="learn-how-to-apply-f inter-semi-bold-tundora-15px" style={{ fontSize: '15px' }}>
                    Learn how to apply for and receive your clinical report
                  </p>
                  <button class="frame-670 frame-1"><div class="learn-now inter-semi-bold-white-12px" style={{ fontSize: '12px' }}>Learn now</div></button>
                </div>
              </div>
            </div>
            <div class="frame">
              <div class="frame-464 frame-1">
                <img class="icon" src="/image/icon-18.svg" alt="icon" />
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
                    <button class="group-297" onClick={handleCopyClick}><div class="infowittgenbiocom inter-semi-bold-blue-dianne-12px" style={{ fontSize: '14px', textAlign: 'center' }}>{isCopied? "Email copied!" : "\u00A0\u00A0\u00A0Copy"}</div></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="line-131" src="/image/line-131-2.svg" alt="Line 131" />
          <div class="frame">
            <div class="frame-672 frame-1">
              <div class="frame-6 frame-1">
                <img class="icon" src="/image/icon-19.svg" alt="icon" />
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
