import "../styling/GettingStarted1.css";

import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function GettingStarted1() {
  const [clientInformation, setClientInformation] = useState({
    firstName: "",
    lastName: "",
    sendNotifs: "",
    companyName: "",
    country: "",
    companyAddress: "",
    state: "",
    city: "",
    zip: "",
  });

  const countryOptions = useMemo(() => countryList().getData(), []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(clientInformation);
  };

  return (
    <>
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
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

      <div className="flex flex-row relative bg-[FFFFFF] w-screen h-screen">
        {/* LEFT SIDE BAR */}
        <div className="top-0 left-0 h-screen text-white bg-fixed bg-witgen w-195">
          <div className="flex flex-row w-138 h-27 left-30.75 text-wg top-16.5 font-oxygen pt-16.5 pl-30.75 pr-26.25">
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
        <div className="absolute mt-[0px] ml-[193.5px] ">
          {/* inside of header */}
          <div className="flex flex-row  items-center justify-center mt-[36px] ml-[90.5px]">
            <ul className="flex flex-row gap-[48.5px] flex-nowrap">
              <div className="flex flex-col">
                <li className="whitespace-nowrap">Getting started</li>
                <div className="w-[150px] h-[3px] bg-[#25474F]" />
              </div>
              <div className="flex flex-col">
                <li className="whitespace-nowrap leading-[16px]">
                  Databetabase Input
                </li>
                <div className="w-[150px] h-[3px] bg-[#F2F6F7]" />
              </div>
              <div className="flex flex-col">
                <li className="whitespace-nowrap">Database Input</li>
                <div className="w-[150px] h-[3px] bg-[#F2F6F7]" />
              </div>
              <div className="flex flex-col">
                <li className="whitespace-nowrap">Submit</li>
                <div className="w-[150px] h-[3px] bg-[#F2F6F7]" />
              </div>
            </ul>
            <div className="flex flex-row whitespace-nowrap">
              <button>Discard & Exit</button>
              <button>Save & Exit</button>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="relative flex flex-row gap-[230.5px] mt-[126px]">
          {/* Left */}
          <div className="flex flex-col justify-center item-center">
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
                    className="border justify-center p-[9px] w-[140px] h-[36px] "
                    type="text"
                    id="company_name"
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
                    className="border justify-center p-[9px] w-[210px] h-[36px] "
                    type="text"
                    id="department/laboratory"
                    placeholder="GH-13728930_1"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-[232.5px] mt-[30px]">
                <h1 className="">Client Information</h1>
                <div className="flex flex-row gap-[6px]">
                  <input type="checkbox" className="form-checkbox" />
                  <h1 className="font-normal text-[14px] leading-[21px] text-[#464646] ">
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
                    className="border justify-center p-[9px] w-[210px] h-[36px] "
                    type="text"
                    id="first_name"
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
                    className="border justify-center p-[9px] w-[210px] h-[36px] "
                    type="text"
                    id="last_name"
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
                  className="border-solid border-[0.9px] border-[#CEDDE1]-400 justify-center pt-[9px] pb-[4.5px] pl-[9px] pr-[9px] w-[432px] h-[34px]"
                  type="email"
                  id="notification"
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
                    className="border justify-center p-[9px] w-[210px] h-[36px] "
                    type="text"
                    id="company_name"
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
                    className="border justify-center p-[9px] w-[210px] h-[36px] "
                    type="text"
                    id="country"
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
                  className="border-solid border-[0.9px] border-[#CEDDE1]-400 justify-center pt-[9px] pb-[4.5px] pl-[9px] pr-[9px] w-[432px] h-[34px]"
                  type="email"
                  id="notification"
                />
              </div>
              <div className="flex flex-row gap-[12px] ">
                <div>
                  <label
                    className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                    htmlFor="State"
                  >
                    State / privince
                  </label>
                  <input
                    className="border justify-center p-[9px] w-[210px] h-[36px] "
                    type="text"
                    id="State"
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
                    className="border justify-center p-[9px] w-[210px] h-[36px] "
                    type="text"
                    id="city"
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
                />
              </div>
            </form>

            <button className="mt-[119.5px] ml-[60px] justify-center items-center  w-[135px] h-[36px] border border-solid border-gray-200">
              <span className="font-normal text-[10.5px] py-[18px] px-[60px] leading-[13px] text-[#25474F]">
                Back
              </span>
            </button>
          </div>

          {/* Right Part */}
          <div className="w-[463.5px] h-[546px] flex flex-col gap-[18px]">
            <div>
              <h1 className="text-[15px] font-bold text-[#0FB4DB]">
                Upgrade Freemium to 6 months
              </h1>
              <div className="border py-[15px] px-[18px] w-[463.5px] h-[111px]  border-solid border-gray-300 justify-start">
                <p className="font-normal text-[10.5px] leading-[16px] text-#25474F]">
                  Agree to Wittgen’s use of sample & data information and enjoy
                  6 months unlimited access to Wittgen’s services for free.
                  Effective immediately.
                </p>

                <button className="mt-[27px] items-center justify-center border border-gray-300 border-solid w-[189px] h-[31px] px-[9px] py-[9px]">
                  <span className="text-[#0FB4DB] text-[10.5px] font-semibold">
                    Read terms & conditions
                  </span>
                </button>
              </div>
            </div>

            <div className="relative justify-start border border-gray-300 border-solid w-[463.5px] h-[390px] ">
              <h3 className="font-semibold text-[12px] leading-[18px] p-[25px]">
                $100 / sample
              </h3>

              <div className="left-[24px] absolute border border-solid border-gray-100 w-[439.5px] h-[0px] "></div>
            </div>

            <button className="mt-[119.5px] ml-[330px] bg-[#25474F] justify-center items-center  w-[135px] h-[36px] border border-solid border-gray-200">
              <span className="text-white font-semibold text-[10.5px] py-[18px] px-[60px] leading-[13px] ">
                Back
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
