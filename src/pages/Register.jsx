import "../styling/Register.css";
import "../styling/tailwind.css";

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
      <link rel="stylesheet" type="text/css" href="css/create-an-account.css" />
      <link rel="stylesheet" type="text/css" href="css/styleguide.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="create-an-account"
      />
      <div className="container-center-horizontal-register">
        <div className="create-an-account screen-register">
          <div className="group-184">
            <div className="overlap-group">
              <div className="witt-gen-portal oxygen-bold-blue-dianne-28px">
                <span className="oxygen-bold-white-28px">WittGen</span>
                <span className="oxygen-light-white-28px">Portal</span>
              </div>
            </div>
            <img className="line-79" src="line-79.png" alt="Line 79" />
          </div>
          <div className="group-460">
            <div className="component-85">
              <div className="frame-459-1">
                <h1 className="title inter-semi-bold-blue-dianne-36px">
                  Create new accounts
                </h1>
                <div className="frame">
                  <div className="already-have-an-account inter-normal-slate-gray-16px">
                    Already have an account?
                  </div>
                  <div className="login inter-normal-cerulean-16px">Login</div>
                </div>
              </div>
              <div className="frame-630">
                <div className="frame-459">
                  <div className="login-information inter-semi-bold-blue-dianne-20px">
                    Login information
                  </div>
                  <div className="group-405">
                    <div className="frame-4">
                      <div className="frame-40">
                        <div className="frame">
                          <div className="frame-1 inter-normal-slate-gray-14px">
                            <div className="first-name">First name</div>
                            <div className="frame-290">
                              <div className="group-234">
                                <div className="x1234emailcom">
                                  1234@email.com
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-40">
                        <div className="frame">
                          <div className="frame-1 inter-normal-slate-gray-14px">
                            <div className="last-name">Last name</div>
                            <div className="frame-290">
                              <div className="group-234">
                                <div className="x1234emailcom-6">
                                  1234@email.com
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-30">
                    <div className="group-317">
                      <div className="group-298">
                        <div className="frame-2">
                          <div className="send-notifications-to inter-normal-slate-gray-14px">
                            Email
                          </div>
                          <div className="for-receiving-updates-to-your-file-only inter-semi-bold-tahiti-gold-11px" />
                        </div>
                        <div className="frame-290-2 frame-290-5">
                          <div className="group-234-1 group-234-6">
                            <div className="exampleemailcom inter-normal-silver-14px">
                              example@email.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-30">
                    <div className="group-317">
                      <div className="group-298">
                        <div className="frame-2">
                          <div className="phone-number inter-normal-slate-gray-14px">
                            Phone number
                          </div>
                          <div className="for-receiving-updates-to-your-file-only inter-semi-bold-tahiti-gold-11px" />
                        </div>
                        <div className="frame-290-1 frame-290-5" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-30">
                    <div className="group-317">
                      <div className="group-298">
                        <div className="frame-2">
                          <div className="password inter-normal-slate-gray-14px">
                            Password
                          </div>
                          <div className="for-receiving-updates-to-your-file-only inter-semi-bold-tahiti-gold-11px" />
                        </div>
                        <div className="frame-290-1 frame-290-5" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-306">
                    <div className="group-317">
                      <div className="group-298">
                        <div className="frame-2">
                          <div className="confirm-password inter-normal-slate-gray-14px">
                            Confirm Password
                          </div>
                          <div className="for-receiving-updates-to-your-file-only inter-semi-bold-tahiti-gold-11px" />
                        </div>
                        <div className="frame-290-1 frame-290-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-459">
                  <div className="basic-information inter-semi-bold-blue-dianne-20px">
                    Basic information
                  </div>
                  <div className="register-as">
                    <div className="register-as-1 inter-normal-slate-gray-14px">
                      Register as:
                    </div>
                    <div className="frame-291">
                      <div className="frame-2">
                        <div className="checkbox" />
                        <div className="a inter-normal-tundora-14px">
                          A researcher
                        </div>
                      </div>
                      <div className="frame-2">
                        <div className="checkbox" />
                        <div className="a inter-normal-tundora-14px">
                          A clinician
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <div className="frame-304">
                      <div className="frame-1 inter-normal-slate-gray-14px">
                        <div className="company">Company name</div>
                        <div className="frame-290">
                          <div className="group-234">
                            <div className="x1234emailcom-6">
                              1234@email.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-301 inter-normal-slate-gray-14px">
                      <div className="department-laboratory">
                        Department/ Laboratory
                      </div>
                      <div className="frame-290">
                        <div className="group-234">
                          <div className="x1234emailcom-6">1234@email.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-4-1">
                    <div className="frame-1 inter-normal-slate-gray-14px">
                      <div className="company">Company address</div>
                      <div className="frame-290-3 frame-290-5">
                        <div className="group-234">
                          <div className="x1234emailcom-6">1234@email.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <div className="frame-301 inter-normal-slate-gray-14px">
                      <div className="state-province">State/ province</div>
                      <div className="frame-29">
                        <div className="group-234-2 group-234-6">
                          <div className="select-a">
                            Select a state/province
                          </div>
                        </div>
                        <img
                          className="frame-607"
                          src="frame-607.svg"
                          alt="Frame 607"
                        />
                      </div>
                    </div>
                    <div className="group-298-1">
                      <div className="frame-1 inter-normal-slate-gray-14px">
                        <div className="city">City</div>
                        <div className="frame-29">
                          <div className="group-234-3 group-234-6">
                            <div className="select-a">Select a city</div>
                          </div>
                          <img
                            className="frame-607"
                            src="frame-607.svg"
                            alt="Frame 607"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="frame-1 inter-normal-slate-gray-14px">
                      <div className="country">Country</div>
                      <div className="frame-29">
                        <div className="group-234-4 group-234-6">
                          <div className="select-a">Select a country</div>
                        </div>
                        <img
                          className="frame-607"
                          src="frame-607.svg"
                          alt="Frame 607"
                        />
                      </div>
                    </div>
                    <div className="frame-301-1">
                      <div className="zip-postal-code inter-normal-slate-gray-14px">
                        Zip/ Postal code
                      </div>
                      <div className="frame-290-4 frame-290-5">
                        <div className="group-234-5 group-234-6">
                          <div className="x1234emailcom-6 inter-bold-slate-gray-14px">
                            1234@email.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-container">
              <div className="frame-4-1">
                <img className="union" src="union.svg" alt="Union" />
                <div className="frame-546">
                  <div className="group-445">
                    <div className="frame-551">
                      <div className="frame-438">
                        <div className="frame-445">
                          <img
                            className="error_fill0_wght400_grad0_opsz48-1"
                            src="error-fill0-wght400-grad0-opsz48-1.svg"
                            alt="error_FILL0_wght400_GRAD0_opsz48 1"
                          />
                          <div className="password-security">
                            Password security
                          </div>
                        </div>
                        <p className="your-password-must-b inter-normal-black-14px">
                          Your password must be classified as at least Strong. A
                          good password consists of:
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="group-446">
                    <div className="frame-551-1">
                      <div className="frame-438-1">
                        <div className="password-1">
                          <div className="frame-2">
                            <div className="done_fill0_wght400_grad0_opsz48-1-2">
                              <div className="ellipse-25" />
                            </div>
                            <div className="address inter-normal-black-14px">
                              8 or more characters
                            </div>
                          </div>
                          <div className="frame-2">
                            <div className="done_fill0_wght400_grad0_opsz48-1-2">
                              <div className="ellipse-25" />
                            </div>
                            <p className="mixture-of-letters-and-numbers inter-normal-black-14px">
                              Mixture of letters and numbers
                            </p>
                          </div>
                          <div className="frame-2">
                            <div className="done_fill0_wght400_grad0_opsz48-1-2">
                              <div className="ellipse-25" />
                            </div>
                            <p className="mixture-of-upper-and-lowercase inter-normal-black-14px">
                              Mixture of upper and lowercase
                            </p>
                          </div>
                          <div className="frame-2">
                            <div className="done_fill0_wght400_grad0_opsz48-1-2">
                              <div className="ellipse-25" />
                            </div>
                            <div className="special-characters inter-normal-black-14px">
                              Special characters
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-636">
                <div className="login-1">
                  <div className="login-2 inter-medium-white-18px">
                    Send verification email
                  </div>
                </div>
                <p className="by-signing-up-you-a inter-normal-black-14px-2">
                  <span className="inter-normal-black-14px">
                    By signing up, you agree to{" "}
                  </span>
                  <span className="inter-normal-persian-blue-14px">
                    the terms{" "}
                  </span>
                  <span className="inter-normal-black-14px">and </span>
                  <span className="inter-normal-persian-blue-14px">
                    privacy policy
                  </span>
                </p>
              </div>
            </div>
          </div>
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
