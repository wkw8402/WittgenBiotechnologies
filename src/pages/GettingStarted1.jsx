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

      <div className="flex flex-row relative bg-[#F2F6F7] w-screen h-screen font-inter bg-[#FFFFF]">
        {/* LEFT SIDE BAR */}
        <div className="absolute top-0 left-0 h-screen text-white bg-fixed bg-witgen w-195">
          <div className="flex flex-row w-138 h-27 left-30.75 text-wg top-16.5 font-oxygen pt-16.5 pl-30.75 pr-26.25">
            <h1 className="font-bold">WittGen</h1>
            <h1 className="font-extralight">Portal</h1>
          </div>

          <ul className="font-normal text-[16px] flex flex-col mt-[90px] text-left leading-[19px] gap-[28.5px] ml-[46.5px]">
            <div className="flex flex-row ">
              <li className="inline-block">Dashbaord</li>
            </div>
            <div className="flex flex-row">
              <li>My files</li>
            </div>
            <div className="flex flex-row">
              <li>Cost & Usage</li>
            </div>
            <div className="flex flex-row">
              <li>Settings</li>
            </div>
            <div className="flex flex-row">
              <li>FAQ / Support</li>
            </div>
            <div className="flex flex-row ">
              <span>Logout</span>
            </div>
          </ul>
        </div>

        <div className="ml-[284px] mt-[36px] ">
          {/* top menubar  */}
          <ul className="flex flex-row gap-[86.5px]">
            <li className="flex-1">Getting started</li>
            <li className="flex-1">Metadatabase Input</li>
            <li className="flex-1">Database Input</li>
            <li className="flex-1">Submit</li>

            <button className="ml-auto bg-[#FFFFFF] border-solid border-[0.75px] w-[120px] h-[30px]">
              Discard & Exit
            </button>
            <button className=" ml-auto bg-witgen border-solid border-[0.75px] w-[120px] h-[30px] text-[#FFFFFF] px-8 py-2.5 flex-end ">
              Save & Exit
            </button>
          </ul>

          <div className="flex flex-row gap-[9px] "></div>
        </div>
      </div>
    </>
  );
}
