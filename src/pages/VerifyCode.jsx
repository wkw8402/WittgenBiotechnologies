import "../styling/VerifyCode.css";
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
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="verify-code"
      />

      <div className="container-center-horizontal-verify">
        <div className="verify-code screen-verify">
          {/* left side bar */}
          <div className="group-184">
            <div className="overlap-group">
              <div className="witt-gen-portal oxygen-bold-blue-dianne-28px">
                <span className="oxygen-bold-white-28px">WittGen</span>
                <span className="oxygen-light-white-28px">Portal</span>
              </div>
            </div>
            <img className="line-79" src="line-79.png" alt="Line 79" />
          </div>

          {/* Email check form section */}
          <div className="verify-email">
            <div className="frame-205 frame">
              <div className="frame-460 frame">
                <h1 className="title inter-semi-bold-blue-dianne-36px">
                  Please check your emails
                </h1>
                <p className="please-enter-the-ver inter-normal-black-16px">
                  <span className="inter-normal-black-16px">
                    Please enter the verification code sent to your email at{" "}
                  </span>
                  <span className="span-1 inter-semi-bold-black-16px">
                    j****h@science.co
                  </span>
                  <span className="inter-normal-black-16px">
                    to activate your account. The link will expire in 24 hours.
                  </span>
                </p>
              </div>
              <div className="frame-460-1 frame-460-3">
                <div className="frame-1 frame">
                  <div className="frame-1-1">
                    <div className="frame-202 frame">
                      <div className="frame-196 frame">
                        <div className="frame-460-2 frame-460-3">
                          <div className="verify-code-1 inter-semi-bold-blue-dianne-16px">
                            Verify code
                          </div>
                          <div className="resend-code inter-normal-cerulean-16px">
                            Resend code
                          </div>
                        </div>
                        <div className="frame-1-2" />
                      </div>
                    </div>
                    <div className="frame-1-3" />
                  </div>
                  <p className="click-here-if-you-wo">
                    <span className="span-2">Click here</span>
                    <span className="inter-normal-black-16px">
                      if you would like to change the email address you signed
                      up with.
                    </span>
                  </p>
                </div>
                <div className="login">
                  <div className="login-1 inter-medium-white-18px">Submit</div>
                </div>
              </div>
            </div>
          </div>

          {/* ???? */}
          <img
            className="icbaseline-download"
            src="ic-baseline-download@2x.png"
            alt="ic:baseline-download"
          />
        </div>
      </div>
    </>
  );
}
