/* eslint-disable */

import "../styling/Submitted.css";
import { useLocation } from 'react-router-dom';


export default function () {
  const location = useLocation();
  const fileName = location?.state?.fileName;

  return (
    <>
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1440, maximum-scale=1.0" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <link rel="stylesheet" type="text/css" href="apply-submitted.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-submitted"
      />
    <div class="container-center-horizontal">
      <div class="apply-submitted screen">
        <div class="main-navigation">
          <div class="overlap-group1">
            <div class="group-184">
              <div class="overlap-group">
              <a href="/dashboard">
                <div class="witt-gen-portal oxygen-bold-white-21px">
                  <span class="oxygen-bold-white-21px">WittGen</span><span class="oxygen-light-white-21px">Portal</span>
                </div>
                </a>
              </div>
              <img class="line-79" src="line-79.svg" alt="Line 79" />
            </div>
            <div class="frame-185">
              <a href="/dashboard">
              <div class="frame-185-item">
                <img class="icon-home" src="home-fill0-wght400-grad0-opsz48-1.svg" alt="icon-home" />
                <div class="dashboard inter-normal-white-12px">Dashboard</div>
              </div>
              </a>
              <a href="/my_files_1">
              <div class="frame-185-item">
              <img
                  class="draft_fill0_wght400_grad0_opsz48-1"
                  src="draft-fill0-wght400-grad0-opsz48-1.svg"
                  alt="draft_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="my-files inter-semi-bold-white-12px">My files</div>
              </div>
              </a>
            </div>
            <a href="/">
            <div class="logout">
              <img
                class="logout_fill0_wght400_grad0_opsz48-1"
                src="logout-fill0-wght400-grad0-opsz48-1.svg"
                alt="logout_FILL0_wght400_GRAD0_opsz48 1"
              />
              <div class="logout-1 inter-normal-white-12px">Logout</div>
            </div>
            </a>
          </div>
        </div>
        <div class="frame-447">
          <div class="frame-350">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started inter-normal-japanese-laurel-12px">Getting started</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="metadatabase-input inter-normal-japanese-laurel-12px">Metadatabase Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input inter-normal-japanese-laurel-12px">Database Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="submit inter-normal-japanese-laurel-12px">Submit</div>
                <div class="rectangle-228"></div>
              </div>
            </div>
            <div class="frame-213">
              <div class="component-33">
                <div class="discard-exit inter-semi-bold-blue-dianne-10-5px">Exit to Applications</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-662">
          <div class="frame-350-1">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started-1 inter-semi-bold-japanese-laurel-12px">Getting started</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="data-input inter-semi-bold-japanese-laurel-12px">Data Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="submit-1 inter-semi-bold-japanese-laurel-12px">Submit</div>
                <div class="rectangle-228"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-581">
          <div class="frame-578">
            <div class="frame-364">
              <div class="group-363">
                <img
                  class="material-symbolscheck-small"
                  src="material-symbols-check-small.svg"
                  alt="material-symbols:check-small"
                />
              </div>
              <p class="your-application-has">Your application has been successfully submitted.</p>
            </div>
            <img class="line-105" src="line-105.svg" alt="Line 105" />
          </div>
          <div class="frame-579">
            <div class="frame-580">
              <div class="file-id-gh-13728930">File ID: {fileName}</div>
              <p class="well-email-you-when">We will email you when your result is ready.</p>
            </div>
            <a href="/dashboard">
              <div class="frame-488">
                <div class="component-33-1"><div class="see-my-file inter-semi-bold-white-10-5px">Back to Dashboard</div></div>
                {/* <div class="frame-213">
                  <div class="component-33">
                    <div class="back-to-dashboard inter-semi-bold-blue-dianne-10-5px">See my file</div>
                  </div>
                </div> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
