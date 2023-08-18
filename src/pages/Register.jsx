import { Link } from "react-router-dom";
import "../styling/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import UserPool from "../config";
import "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../styling/VerifyCode.css";
import "../styling/globals.css";
import "../styling/styleguide.css";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("")
  const [companyname, setCompanyname] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [OTP, setOTP] = useState("");
  const [verifyProcess, setVerifyProcess] = useState(false);
  const [showValidation, setShowValidation] = useState(false)
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {

    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:firstname",
        Value: firstname,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:lastname",
        Value: lastname,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:company_name",
        Value: companyname,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:department",
        Value: department,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:address",
        Value: address,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:state",
        Value: state,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:city",
        Value: city,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:country",
        Value: country,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "custom:zipcode",
        Value: zip,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "nickname",
        Value: "new-nickname",
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      })
    );
    
    console.log(attributeList);
    const att = UserPool.CognitoUserAttribute;
    UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err.message)
        toast("🦄 We are unable to sign you up!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // alert("Couldn't sign up");
      } else {
        toast("🦄 User Added Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setVerifyProcess(true);
      }
    });
  };

  const verifyAccount = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    user.confirmRegistration(OTP, true, (err, data) => {
      if (err) {
        console.log(err);

        toast("🦄 Couldnt verify account!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        //alert("Couldn't verify account");
      } else {
        console.log(data);
        toast("🦄  Successfully verified!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/login");
      }
    });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setShowValidation(true);
    } else {
      setShowValidation(false);
    }
  };

  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="create-an-account"
      />

      {/* entire container */}
      <div className="flex flex-row relative bg-[#F2F6F7] w-screen h-screen font-inter bg-[#FFFFF]">
        {/* left side bar */}
        <div className="absolute top-0 left-0 h-screen text-white bg-fixed bg-witgen w-195">
          <div className="flex flex-row w-138 h-27 left-30.75 text-wg top-16.5 font-oxygen pt-16.5 pl-30.75 pr-26.25">
            <h1 className="font-bold">WittGen</h1>
            <h1 className="font-extralight">Portal</h1>
          </div>
        </div>

        {/* entire section  */}
        {!verifyProcess && (<div className="flex flex-row  mt-[42.75px]">
          {/* Register description section */}
          <div className="pl-[285px] pt-[42.75px] flex flex-col gap-[18px] ">
            <h1 className="text-witgen text-[27px] font-semibold leading-[33px]  ">
              Create new account
            </h1>

            <div className="flex flex-row gap-[12px]">
              <h4 className="text-[#717F8C] leading-[18px] text-[12px] font-normal ">
                Already Have an account?
              </h4>
              <span className="text-[#0FB4DB] text-[12px] font-semibold leading-[18px] underline underline-offset-[]">
                <button onClick={(e) => login(e)}>Login</button>
              </span>
            </div>
          </div>

          {/* Register Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="ml-[206.5px] flex flex-col gap-[11.5px]"
          >
            <h1 className="font-normal text-[12px] leading-[18px] text-[#B60B0B] ">
              *All fields are mandatory
            </h1>

            {/* two inputs per row */}
            <div className="flex flex-row gap-[12px]">
              <div>
                <label
                  className="font-normal text-[10.5px] leading-[16px] text-[#717F8C] block"
                  htmlFor="first_name"
                >
                  First name
                </label>
                <input
                  className="border justify-center p-[9px] w-[210px] h-[36px] "
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  autoComplete="new-firstname"
                />
              </div>
              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor="last_name"
                >
                  Last name
                </label>
                <input
                  className="border justify-center p-[9px] w-[210px] h-[36px] "
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  autoComplete="new-lastname"
                />
              </div>
            </div>

            {/* one inputs per row */}

            <div>
              <label
                className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-solid border-[0.9px] border-s[#CEDDE1]-400 justify-center pt-[9px] pb-[4.5px] pl-[9px] pr-[9px] w-[432px] h-[34px]"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="new-email"
              />
            </div>
            <div>
              <label
                className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border-solid border-[0.9px] border-[#CEDDE1]-400 justify-center pt-[9px] pb-[4.5px] pl-[9px] pr-[9px] w-[432px] h-[34px]"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="new-password"
              />
            </div>
            <div>
              <label
                className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                className="border-solid border-[0.9px] border-[#CEDDE1]-400 justify-center pt-[9px] pb-[4.5px] pl-[9px] pr-[9px] w-[432px] h-[34px]"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                autoComplete="new-confirm"
              />
            </div>
            <FontAwesomeIcon icon="fa-sharp fa-light fa-circle-exclamation" />
            {/* two inputs per row */}
            <div className="flex flex-row gap-[12px]">
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
                  value={companyname}
                  onChange={(e) => setCompanyname(e.target.value)}
                  autoComplete="new-companyname"
                />
              </div>

              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor="department/laboratory"
                >
                  Department/Laboratory
                </label>
                <input
                  className="border justify-center p-[9px] w-[210px] h-[36px] "
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  autoComplete="new-department"
                />
              </div>
            </div>

            <div>
              <label
                className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                htmlFor="address"
              >
                Company address
              </label>
              <input
                className="border-solid border-[0.9px] border-[#CEDDE1]-400 justify-center pt-[9px] pb-[4.5px] pl-[9px] pr-[9px] w-[432px] h-[34px]"
                type="text"
                value={address.trim()}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="new-address"
              />
            </div>

            <div className="flex flex-row gap-[12px]">
              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor=" "
                >
                  State/ Province
                </label>
                <input
                  className="border justify-center p-[9px] w-[210px] h-[36px] "
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  autoComplete="new-state"
                />
              </div>

              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor="department/laboratory"
                >
                  City
                </label>
                <input
                  className="border justify-center p-[9px] w-[210px] h-[36px] "
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  autoComplete="new-city"
                />
              </div>
            </div>
            <div className="flex flex-row gap-[12px]">
              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor=" "
                >
                  Country
                </label>
                <input
                  className="border justify-center p-[9px] w-[210px] h-[36px] "
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  autoComplete="new-country"
                />
              </div>

              <div>
                <label
                  className="block font-normal text-[10.5px] leading-[16px] text-[#717F8C]"
                  htmlFor=" "
                >
                  Zip/ Postal code
                </label>
                <input
                  className="border justify-center p-[9px] w-[90px] h-[36px] "
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  autoComplete="new-zip"
                />
              </div>
            </div>
            <div className="pt-[61.5px]">
              <button 
                className="border justify-center py-[13.5px] px-[138px] w-[432px] h-[45px] bg-witgen border-solid border-[0.75px] text-[#FFFFFF] text-[13.5px] leading-[16px] font-medium"
                type="submit"
                onClick={onSubmit}
              >
                Send verification email
              </button>
            </div>
            <div className="pt-[9px]">
              <h3 className="font-normal text-[10.5px] leading-[16px] text-[#000000]">
                By signing up, you agree to{" "}
                <span>
                  <Link className="text-[#1431C9]" to="">
                    the terms &nbsp;
                  </Link>
                </span>
                and &nbsp;
                <Link className="text-[#1431C9]" to="">
                  privacy policy
                </Link>
              </h3>
            </div>
          </form>
        </div>)}

        {verifyProcess && (<div className="bg-[#FFFFFF] font-inter border-0.75 border-solid border-gray-300 justify-start w-498 h-488.25 flex flex-row flex-start top-114 right-471 left-471 absolute bottom-207.75 mx-auto ">
          <div className="p-[36px] px-[91.5px] pb-[42.75px]">
            <div className="font-semibold text-center text-witgewqn">
              <h1 className="text-[27px]">Please check your email</h1>
            </div>
            <div>
              <p className="leading-[15px] text-[12px] font-normal text-black pt-[18px]">
                Please enter the verification code sent to your email at{" "}
                <span className="font-bold">{email}</span> to activate
                your account. The link will expire in 24 hours.
              </p>
            </div>
            <div className="pt-[45px] flex flex-row text-[16px] font-normal justify-between">
              <div className="font-semibold leading-6 text-witgen">
                Verify code
              </div>
              <div className="text-[#0FB4DB] font-normal leading-5">
                <a href="#">
                  <span>Resend code</span>
                </a>
              </div>
            </div>

            <input
              className="w-full border border-witgen w-[318px] h-[38.25px] pt-[6px]"
              type="text"
              placeholder="Enter verification code here"
              bsSize="lg"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              style={{ paddingLeft: '10px' }}
              autoComplete="new-password"
            ></input>

            <div className="pt-[69px]">
              <p className="leading-5 text-[12px]">
                <span className="text-[#0FB4DB] font-semibold">Click here</span>{" "}
                if you would like to change the email address you signed up
                with.
              </p>
            </div>
            <div className="pt-[57.25px]">
              <button 
                className="bg-witgen border-none w-[318px]"
                onClick={verifyAccount}
              >
                <span className="block py-[14.5px] px-[136px] text-white">
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>)}

        {/* Validation for Password  */}
        {!verifyProcess && showValidation && (
          <div className="absolute font-normal w-[285.75px] h-[147.75px] top-[220.5px] left-[456.75px] border border-[0.75px] border-solid border-[#CEDDE1] ">
            <div className="flex flex-row ml-[18.75px] mt-[9px] content-center  ">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="border-[#B60B0B]-500 rounded-full border-1  fa-xs"
              />

              <h3 className="ml-[3.75px] text-[8.25px] font-semibold text-[#B60B0B] leading-[10px] mb-[7.5px]">
                Password security
              </h3>
            </div>
            <div>
              <h3 className="font-normal text-[10.5px] leading-[16px] text-[#000000] mx-[18px] mb-[19.37px]">
                Your password must be classified as at least Strong. A good
                password consist of:
              </h3>
            </div>
            <div>
              <ul className="ml-[22.5px] text-[10.5px] leading-[17px] font-semibold">
                <div className="flex flex-row items-center gap-[10.5px]">
                  <FontAwesomeIcon
                    className="w-3 h-3 text-[#D9D9D9]"
                    icon={faCircle}
                  />
                  <li>8 or more characters</li>
                </div>
                <div className="flex flex-row items-center gap-[10.5px]">
                  <FontAwesomeIcon
                    className="w-3 h-3 text-[#D9D9D9]"
                    icon={faCircle}
                  />
                  <li>Mixture of letters and numbers</li>
                </div>
                <div className="flex flex-row items-center gap-[10.5px]">
                  <FontAwesomeIcon
                    className="w-3 h-3 text-[#D9D9D9]"
                    icon={faCircle}
                  />
                  <li>Mixture of upper and lowercase</li>
                </div>
                <div className="flex flex-row items-center gap-[10.5px]">
                  <FontAwesomeIcon
                    className="w-3 h-3 text-[#D9D9D9]"
                    icon={faCircle}
                  />
                  <li>Special characters</li>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}