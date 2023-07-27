/* eslint-disable */

import "../styling/GettingStarted1.css";

import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import React, { useState, useEffect, useContext, useRef } from "react";
import AWS, { SecretsManager } from "aws-sdk";
import "../config";
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";

const getUserAttributes = async () => {
  const cognitoISP = new AWS.CognitoIdentityServiceProvider();
  const currentUser = await cognitoISP.getUser({ AccessToken: NewJWTTOKEN }).promise();
  const userAttributes = currentUser.UserAttributes.reduce((attributes, attribute) => {
    attributes[attribute.Name] = attribute.Value;
    return attributes;
  }, {});
  return userAttributes;
};

export default function GettingStarted1() {

  const countryOptions = useMemo(() => countryList().getData(), []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(clientInformation);
  };

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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />

      {/* Oxygen font google link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Open+Sans:ital,wght@0,400;0,700;1,700;1,800&family=Oxygen:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="apply-getting-started-1.css"
      />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-getting-started-1"
      />

      <div className="font-inter flex flex-row relative bg-[FFFFFF] w-screen h-screen relative">
        {/* LEFT SIDE BAR */}
        <div className="top-0 left-0 h-screen text-white bg-fixed bg-witgen w-195">
          <div className="flex flex-row left-30.75 text-wg font-oxygen pt-16.5 pl-30.75 pr-26.25">
            <h1 className="font-bold">WittGen</h1>
            <h1 className="font-extralight">Portal</h1>
          </div>

          <ul className="font-normal text-[16px] flex flex-col mt-[90px] text-left leading-[19px] gap-[28.5px] ml-[46.5px]">
            <div className="flex flex-row ">
              <img
                className="icon"
                src="home-fill0-wght400-grad0-opsz48-1-1@2x.svg"
                alt="icon-home"
              />
              <li className="inline-block">Dashbaord</li>
            </div>
            <div className="flex flex-row">
              <img
                className="draft_fill1_wght400_grad0_opsz48-1-1"
                src="draft-fill1-wght400-grad0-opsz48--1--1-3@2x.svg"
                alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
              />
              <li>My files</li>
            </div>
            <div className="flex flex-row">
              <img
                className="paid_fill0_wght400_grad0_opsz48-1"
                src="paid-fill0-wght400-grad0-opsz48-1-3@2x.svg"
                alt="paid_FILL0_wght400_GRAD0_opsz48 1"
              />
              <li>Cost & Usage</li>
            </div>
            <div className="flex flex-row">
              <img
                className="icon"
                src="settings-fill0-wght400-grad0-opsz48-1-3@2x.svg"
                alt="icon-settings"
              />
              <li>Settings</li>
            </div>
            <div className="flex flex-row">
              <img
                className="contact_support_fill"
                src="contact-support-fill0-wght400-grad0-opsz48--1--1-3@2x.svg"
                alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
              />
              <li>FAQ / Support</li>
            </div>
            <div className="flex flex-row ">
              <img
                className="logout_fill0_wght400_grad0_opsz48-1"
                src="logout-fill0-wght400-grad0-opsz48-1-3@2x.svg"
                alt="logout_FILL0_wght400_GRAD0_opsz48 1"
              />
              <span>Logout</span>
            </div>
          </ul>
        </div>

        {/* header */}
        <div className="absolute ml-[194.5px] border-b border-[#E9EBED] border-solid ">
          {/* inside of header */}
          <div className="flex flex-row items-center justify-center ">
            <ul className="pt-[36px] pl-[60.5px] pb-[33px] flex flex-row gap-[48.5px] flex-nowrap ">
              <div className="flex flex-col items-center justify-center">
                <li className="whitespace-nowrap">Getting started</li>
                <div className="w-[150px] h-[3px] bg-[#25474F] mt-[6px]" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <li className="whitespace-nowrap leading-[16px]">
                  Databetabase Input
                </li>
                <div className="w-[150px] h-[3px] bg-[#F2F6F7]" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <li className="whitespace-nowrap">Database Input</li>
                <div className="w-[150px] h-[3px] bg-[#F2F6F7]" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <li className="whitespace-nowrap">Submit</li>
                <div className="w-[150px] h-[3px] bg-[#F2F6F7]" />
              </div>
            </ul>
            <div className="flex flex-row gap-[7.5px] py-[33px] pr-[60px] ml-[130px]">
              <button className=" border border-solid w-[120px] h-[30px] ">
                <span className="font-semibold text-[10.5px] leading-[13px] ">
                  Discard & Exit
                </span>
              </button>
              <button className=" bg-[#25474F]    w-[120px] h-[30px] border border-solid border-gray-200">
                <span className="text-white font-semibold text-[10.5px] leading-[13px] ">
                  Save & Exit
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="flex flex-row gap-[230.5px] mt-[126px]">
          {/* Left */}
          <div className="absolute flex flex-col justify-center item-center left-[253.6px] top-[126px] ">
            <form className="flex flex-col ml-[60px] gap-[12px]">
              <div className="flex flex-row gap-[12px] ">
                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="company_name"
                  >
                    Application type
                  </label>
                  <input
                    className="border justify-center p-[9px] w-[140px] h-[36px] bg-[#F1F3F4]  text-[14px]"
                    type="text"
                    id="company_name"
                    placeholder="Researchers"
                  />
                </div>

                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="department/laboratory"
                  >
                    Application ID
                  </label>
                  <input
                    className="border justify-center p-[9px] w-[210px] h-[36px]  text-[14px]"
                    type="text"
                    id="department/laboratory"
                    placeholder="GH-13728930_1"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-[170.5px] mt-[30px]">
                <h1 className="text-[#25474F] font-semibold leading-[24px] text-[16px] ">
                  Client Information
                </h1>
                <div className="flex flex-row">
                  <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="form-checkbox" />
                  <h1 className="font-normal text-[14px] leading-[21px] text-[#464646] ml-[8px]">
                    Same as profile
                  </h1>
                </div>
              </div>

              {/* First Name and Last Name */}
              <div className="flex flex-row gap-[12px] ">
                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="first_name"
                  >
                    First name
                  </label>
                  <input
                    className="border justify-center w-[210px] h-[36px] text-[14px] "
                    type="text"
                    id="first_name"
                    style= {{ paddingLeft: "5px" }}
                    defaultValue={ isChecked ? userAttributes['custom:firstname'] : ""}
                  />
                </div>

                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="department/laboratory"
                  >
                    Last name
                  </label>
                  <input
                    className="border justify-center w-[210px] h-[36px]  text-[14px]"
                    type="text"
                    id="last_name"
                    style= {{ paddingLeft: "5px" }}
                    defaultValue={ isChecked ? userAttributes['custom:lastname'] : ""}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor="notification"
                >
                  Send notifications to
                  <span className="ml-[6px] text-[#EB7910] font-semibold text-[11px] leading-[13px] ">
                    For receiving updates to your file ONLY
                  </span>
                </label>
                <input
                  className="border-solid border-[0.9px] border-[#CEDDE1]-400 justify-center pt-[9px] pb-[4.5px] pl-[9px] pr-[9px] w-[432px] h-[34px]  text-[14px]"
                  type="email"
                  id="notification"
                  placeholder="example@email.com"
                  style= {{ paddingLeft: "5px" }}
                  defaultValue={ isChecked ? userAttributes.email : ""}
                />
              </div>

              <div className="flex flex-row gap-[12px] ">
                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="company_name"
                  >
                    Company name
                  </label>
                  <input
                    className="border justify-center p-[9px] w-[210px] h-[36px] text-[14px] "
                    type="text"
                    id="company_name"
                    style= {{ paddingLeft: "5px" }}
                    defaultValue={ isChecked ? userAttributes['custom:company_name'] : ""}
                  />
                </div>

                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    className="border justify-center p-[9px] w-[210px] h-[36px]  text-[14px]"
                    type="text"
                    id="country"
                    placeholder="Select a country"
                    style= {{ paddingLeft: "5px" }}
                    defaultValue={ isChecked ? userAttributes['custom:country'] : ""}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor="notification"
                >
                  Company address
                </label>
                <input
                  className="border-solid border-[0.9px] border-[#CEDDE1]-400 justify-center pt-[9px] pb-[4.5px] pl-[9px] pr-[9px] w-[432px] h-[34px]  text-[14px]"
                  type="email"
                  id="notification"
                  style= {{ paddingLeft: "5px" }}
                  defaultValue={ isChecked ? userAttributes['custom:address'] : ""}
                />
              </div>
              <div className="flex flex-row gap-[12px] ">
                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="State"
                  >
                    State / province
                  </label>
                  <input
                    className="border justify-center p-[9px] w-[210px] h-[36px]  text-[14px]"
                    type="text"
                    id="State"
                    placeholder="Select a state/province"
                    style= {{ paddingLeft: "5px" }}
                    defaultValue={ isChecked ? userAttributes['custom:state'] : ""}
                  />
                </div>

                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="border justify-center p-[9px] w-[210px] h-[36px] text-[14px] "
                    type="text"
                    id="city"
                    placeholder="Select a city"
                    style= {{ paddingLeft: "5px" }}
                    defaultValue={ isChecked ? userAttributes['custom:city'] : ""}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor="zip_code"
                >
                  Zip/ Postal code
                </label>
                <input
                  className="border justify-center p-[9px] w-[90px] h-[36px] "
                  type="text"
                  id="zip_code"
                  style= {{ paddingLeft: "5px" }}
                  defaultValue={ isChecked ? userAttributes['custom:zipcode'] : ""}
                />
              </div>
            </form>
          </div>

          {/* Right Part */}
          <div className="left-[916.5px] top-[126px] absolute  w-[463.5px] h-[546px] flex flex-col gap-[18px]">
            <div>
              <h1 className="text-[15px] font-bold text-[#0FB4DB]">
                Upgrade Freemium to 6 months
              </h1>
              <div className="mt-[9px] border  w-[463.5px] h-[111px]  border-solid border-[#CEDDE1] justify-start">
                <div className="py-[15px] px-[18px]">
                  <p className=" font-normal text-[10.5px] leading-[16px] text-#25474F]">
                    Agree to Wittgen’s use of sample & data information and
                    enjoy 6 months unlimited access to Wittgen’s services for
                    free. Effective immediately.
                  </p>
                  <button className="ml-[238px] mt-[18px] items-center justify-center border border-gray-300 border-solid w-[189px] h-[31px]">
                    <span className="text-[#0FB4DB] text-[10.5px] font-semibold">
                      Read terms & conditions
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-[#CEDDE1] border-solid w-[463.5px] h-[390px] ">
              <div className="mt-[27.5px] ml-[24px]">
                <h3 className="font-semibold text-[12px] leading-[18px] ">
                  $100 / sample
                </h3>

                <div className="border border-solid border-[#E9EBED] w-[439.5px] h-[0px] mt-[13.75px]" />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="absolute flex flex-row gap-[801.5px] left-[313.6px] top-[900px]">
            <button className=" justify-center items-center  w-[135px] h-[36px] border border-solid border-[#CEDDE1]">
              <span className="font-semibold text-[10.5px] leading-[13px] text-[#25474F]">
                Back
              </span>
            </button>

            <button className=" bg-[#25474F] w-[135px] h-[36px] border border-solid border-[#CEDDE1]" onClick={()=>{navigate('/metabase_input_1')}}>
              <span className="text-white font-semibold text-[10.5px] py-[18px] px-[60px] leading-[13px] ">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}