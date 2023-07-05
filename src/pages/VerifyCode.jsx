import "../styling/VerifyCode.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import "../styling/tailwind.css";

export default function VerifyCode() {
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

      <link rel="stylesheet" type="text/css" href="css/verify-code.css" />

      {/* Oxygen font google link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Open+Sans:ital,wght@0,400;0,700;1,700;1,800&family=Oxygen:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="verify-code"
      />

      {/* entire container */}
      <div className="flex flex-row relative bg-[#F2F6F7] w-screen h-screen">
        {/* left side bar */}
        <div className="absolute top-0 left-0 h-screen text-white bg-fixed bg-witgen w-195">
          <div className="flex flex-row w-138 h-27 left-30.75 text-wg top-16.5 font-oxygen pt-16.5 pl-30.75 pr-26.25">
            <h1 className="font-bold">WittGen</h1>
            <h1 className="font-extralight">Portal</h1>
          </div>
        </div>

        {/* check email form */}
        <div className="bg-[#FFFFFF] font-inter border-0.75 border-solid border-gray-300 justify-start w-498 h-488.25 flex flex-row flex-start top-114 right-471 left-471 absolute bottom-207.75 mx-auto ">
          <div className="p-[36px] px-[91.5px] pb-[42.75px]">
            <div className="font-semibold text-center text-witgewqn">
              <h1 className="text-[27px]">Please check your email</h1>
            </div>
            <div>
              <p className="leading-[15px] text-[12px] font-normal text-black pt-[18px]">
                Please enter the verification code sent to your email at{" "}
                <span className="font-bold">j****h@science.co</span> to activate
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
              placeholder=""
            ></input>

            <div className="pt-[69px]">
              <p className="leading-5 text-[12px]">
                <span className="text-[#0FB4DB] font-semibold">Click here</span>{" "}
                if you would like to change the email address you signed up
                with.
              </p>
            </div>
            <div className="pt-[57.25px]">
              <button className="bg-witgen border-none w-[318px]">
                <span className="block py-[14.5px] px-[136px] text-white">
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
