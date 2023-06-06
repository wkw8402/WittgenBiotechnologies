import "../styling/VerifyCode.css";
import "../styling/globals.css";
import "../styling/styleguide.css";

export default function () {
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
    <div class="container-center-horizontal">
      <div class="verify-code screen">
        <div class="group-184">
          <div class="overlap-group">
            <div class="witt-gen-portal oxygen-bold-blue-dianne-21px">
              <span class="oxygen-bold-white-21px">WittGen</span><span class="oxygen-light-white-21px">Portal</span>
            </div>
          </div>
          <img class="line-79" src="img/line-79-1.png" alt="Line 79" />
        </div>
        <div class="verify-email">
          <div class="frame-205 frame">
            <div class="frame-460 frame">
              <h1 class="title inter-semi-bold-blue-dianne-36px">Please check your email</h1>
              <p class="please-enter-the-ver inter-normal-black-12px">
                <span class="inter-normal-black-12px">Please enter the verification code sent to your email at </span
                ><span class="span1 inter-semi-bold-black-12px">j****h@science.co</span
                ><span class="inter-normal-black-12px">
                  to activate your account. The link will expire in 24 hours.</span
                >
              </p>
            </div>
            <div class="frame-460-1 frame-460-3">
              <div class="frame-1 frame">
                <div class="frame-1-1">
                  <div class="frame-202 frame">
                    <div class="frame-196 frame">
                      <div class="frame-460-2 frame-460-3">
                        <div class="verify-code-1 inter-semi-bold-blue-dianne-16px">Verify code</div>
                        <div class="resend-code">Resend code</div>
                      </div>
                      <div class="frame-1-2"></div>
                    </div>
                  </div>
                  <div class="frame-1-3"></div>
                </div>
                <p class="click-here-if-you-wo">
                  <span class="span0">Click here</span
                  ><span class="inter-normal-black-12px">
                    if you would like to change the email address you signed up with.</span
                  >
                </p>
              </div>
              <div class="login"><div class="login-1 inter-medium-white-13-5px">Submit</div></div>
            </div>
          </div>
        </div>
        <img class="icbaseline-download" src="img/ic-baseline-download@2x.png" alt="ic:baseline-download" />
      </div>
    </div>
    </>
  );
}
