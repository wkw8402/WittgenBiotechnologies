import "../styling/DatabaseInput1.css";
export default function () {
  let dataObject = [
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Uplox",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "Upload File",
      databaseFile3: "",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "",
      databaseFile2: "Upload File",
      databaseFile3: "",
    },
  ];

  let dataObjectRender = dataObject.map((element) => {
    return (
      <>
        <div className="frame-5-2 frame-5-3">
          <div className="frame-55-1">
            <div className="component-102" />
          </div>
          <div className="component-1">
            <div className="gh-1234567-4 inter-normal-tundora-14px">
              {element.sample}
            </div>
          </div>
          <div className="component-6">
            <div className="seurat-3 inter-normal-tundora-14px">
              {element.databaseCategory}
            </div>
            <img
              className="material-symbolsnavigate-next"
              src="material-symbols-navigate-next-13@2x.svg"
              alt="material-symbols:navigate-next"
            />
          </div>
          <div className="component-2">
            <div className="upload-file inter-normal-persian-blue-14px">
              {element.databaseFile1}
            </div>
          </div>
          <div className="component-2">
            <div className="upload-file inter-normal-persian-blue-14px">
              {element.databaseFile2}
            </div>
          </div>
          <div className="component-2">
            <div className="upload-file inter-normal-persian-blue-14px">
              {element.databaseFile3}
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      import "../styling/MetabaseInput5.css"
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <link rel="stylesheet" type="text/css" href="apply-database-input.css" />
      <link rel="stylesheet" type="text/css" href="styleguide.css" />
      <link rel="stylesheet" type="text/css" href="globals.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-database-input"
      />
      <div className="container-center-horizontal-databaseInput1">
        <div className="apply-database-input screen-databaseInput1">
          <div className="group-438">
            <div className="overlap-group1">
              <div className="group-184">
                <div className="overlap-group">
                  <a href="/">
                    <div className="witt-gen-portal oxygen-bold-blue-dianne-28px">
                      <span className="oxygen-bold-blue-dianne-28px">
                        WittGen
                      </span>
                      <span className="oxygen-light-blue-dianne-28px">
                        Portal
                      </span>
                    </div>
                  </a>
                </div>
                <img
                  className="line-79"
                  src="line-79-13@1x.svg"
                  alt="Line 79"
                />
              </div>
              <div className="component-13">
                <img
                  className="icon"
                  src="home-fill0-wght400-grad0-opsz48-1-12@2x.svg"
                  alt="icon-home"
                />
                <a href="/dashboard" style={{ textDecoration: "none" }}>
                  <div className="dashboard inter-normal-blue-dianne-16px">
                    Dashboard
                  </div>
                </a>
              </div>
              <div className="component-14">
                <img
                  className="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1-12@2x.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <a href="/my_files_1" style={{ textDecoration: "none" }}>
                  <div className="my-files my inter-semi-bold-blue-dianne-16px">
                    My files
                  </div>
                </a>
              </div>
              <div className="component-22">
                <img
                  className="logout_fill0_wght400_grad0_opsz48-1"
                  src="logout-fill0-wght400-grad0-opsz48-1-13@2x.svg"
                  alt="logout_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="logout inter-normal-blue-dianne-16px">
                  Logout
                </div>
              </div>
              <div className="component-13-1">
                <img
                  className="import_contacts_fill"
                  src="import-contacts-fill0-wght400-grad0-opsz48-1-13@2x.svg"
                  alt="import_contacts_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="tutorial inter-normal-blue-dianne-16px">
                  Tutorial
                </div>
              </div>
              <div className="component-21">
                <img
                  className="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1-13@2x.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="cost-usage inter-normal-blue-dianne-16px">
                  Cost &amp; Usage
                </div>
              </div>
              <div className="component-23">
                <img
                  className="icon"
                  src="person-fill0-wght400-grad0-opsz48-1-13@2x.svg"
                  alt="icon-user"
                />
                <div className="my-profile my inter-normal-blue-dianne-16px">
                  My Profile
                </div>
              </div>
              <div className="component-18">
                <img
                  className="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1-13@2x.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div className="faq-support inter-normal-blue-dianne-16px">
                  FAQ / Support
                </div>
              </div>
              <div className="component-19">
                <img
                  className="icon"
                  src="call-fill0-wght400-grad0-opsz48--1--1-13@2x.svg"
                  alt="icon-call"
                />
                <div className="contact-us inter-normal-blue-dianne-16px">
                  Contact Us
                </div>
              </div>
              <div className="component-24">
                <img
                  className="icon"
                  src="settings-fill0-wght400-grad0-opsz48-1-13@2x.svg"
                  alt="icon-settings"
                />
                <div className="settings inter-normal-blue-dianne-16px">
                  Settings
                </div>
              </div>
            </div>
          </div>
          <div className="frame-447">
            <div className="frame-350">
              <div className="gh inter-semi-bold-slate-gray-32px">
                GH-13728930
              </div>
              <div className="frame-258">
                <div className="frame-49">
                  <div className="getting-started inter-normal-japanese-laurel-16px">
                    Getting started
                  </div>
                  <div className="rectangle-228" />
                </div>
                <div className="frame-49">
                  <div className="metadatabase-input inter-normal-japanese-laurel-16px">
                    Metadatabase Input
                  </div>
                  <div className="rectangle-228" />
                </div>
                <div className="frame-49">
                  <div className="database-input database inter-semi-bold-blue-dianne-16px">
                    Database Input
                  </div>
                  <div className="rectangle-228" />
                </div>
                <div className="frame-49">
                  <div className="pay-submit inter-normal-oslo-gray-16px">
                    Pay &amp; Submit
                  </div>
                  <div className="rectangle-228-1" />
                </div>
              </div>
              <div className="frame-213">
                <a href="/dashboard" style={{ textDecoration: "none" }}>
                  <div className="component-33">
                    <div className="discard-exit inter-semi-bold-blue-dianne-14px">
                      Discard &amp; Exit
                    </div>
                  </div>
                </a>
                <a href="/dashboard?mode=save">
                  <div className="component-31">
                    <div className="researchers inter-semi-bold-white-14px">
                      Save &amp; Exit
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="group-325">
            <div className="frame-616">
              <a
                href="javascript:history.back()"
                style={{ textDecoration: "none" }}
              >
                <div className="component-34">
                  <div className="researchers-3 inter-semi-bold-blue-dianne-14px">
                    Back
                  </div>
                </div>
              </a>
              <a href="/payment_1">
                <div className="component-33-1">
                  <div className="researchers-3 inter-semi-bold-white-14px">
                    Next
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="frame-545">
            <div className="group-284">
              <div className="frame-544">
                <div className="frame-444">
                  <div className="frame-5">
                    <article className="component-10">
                      <div className="group-297-1 group-297-3">
                        <div className="seurat inter-normal-blue-dianne-14px">
                          Seurat
                        </div>
                      </div>
                    </article>
                    <article className="component-104">
                      <div className="group-297">
                        <div className="seurat-1 inter-normal-blue-dianne-14px">
                          Fast Queue
                        </div>
                      </div>
                    </article>
                    <article className="component-10">
                      <div className="group-297">
                        <div className="seurat-2 inter-normal-blue-dianne-14px">
                          Cell Ranger
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="component-106">
                    <img
                      className="icsharp-delete"
                      src="ic-sharp-delete-13@2x.svg"
                      alt="ic:sharp-delete"
                    />
                    <div className="group-297-2 group-297-3">
                      <div className="delete inter-normal-blue-dianne-14px">
                        Delete
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-290">
                  <div className="frame-234">
                    <img
                      className="risearch-2-line"
                      src="ri-search-2-line@2x.png"
                      alt="ri:search-2-line"
                    />
                    <div className="search inter-normal-slate-gray-14px">
                      Search
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-317">
                <div className="expected-amount inter-normal-slate-gray-14px">
                  Expected amount
                </div>
                <h1 className="price inter-semi-bold-blue-dianne-36px">$300</h1>
              </div>
            </div>
            <div className="frame-5-1 frame-5-3">
              <div className="frame-55">
                <div className="frame-552">
                  <div className="component-102" />
                </div>
                <div className="component">
                  <div className="gh-1234567 gh inter-semi-bold-slate-gray-14px">
                    Sample
                  </div>
                </div>
                <div className="component-104-1">
                  <div className="database-category database inter-semi-bold-slate-gray-14px">
                    Database category
                  </div>
                </div>
                <div className="component-105">
                  <div className="database-file database inter-semi-bold-slate-gray-14px">
                    Database file
                  </div>
                </div>
                <div className="component-10-1" />
                <div className="component-10-1" />
              </div>
              {dataObjectRender}
              {/* <div className="frame-5-2 frame-5-3">
                <div className="frame-55-1">
                  <div className="component-102" />
                </div>
                <div className="component-1">
                  <div className="gh-1234567-4 inter-normal-tundora-14px">
                    GH-1234567
                  </div>
                </div>
                <div className="component-6">
                  <div className="seurat-3 inter-normal-tundora-14px">
                    Seurat
                  </div>
                  <img
                    className="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next-13@2x.svg"
                    alt="material-symbols:navigate-next"
                  />
                </div>
                <div className="component-2">
                  <div className="upload-file inter-normal-persian-blue-14px">
                    Upload file
                  </div>
                </div>
                <div className="component-2">
                  <div className="upload-file inter-normal-persian-blue-14px">
                    Upload file
                  </div>
                </div>
                <div className="component-96" />
              </div> */}
              {/* <div className="frame-5-2 frame-5-3">
                <div className="frame-55-1">
                  <div className="component-102" />
                </div>
                <div className="component-1">
                  <div className="gh-1234567-4 inter-normal-tundora-14px">
                    GH-1234567
                  </div>
                </div>
                <div className="component-6">
                  <div className="fast-queue inter-normal-tundora-14px">
                    Fast Queue
                  </div>
                  <img
                    className="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next-14@2x.svg"
                    alt="material-symbols:navigate-next"
                  />
                </div>
                <div className="component-2">
                  <div className="upload-file inter-normal-persian-blue-14px">
                    Upload file
                  </div>
                </div>
                <div className="component-2">
                  <div className="upload-file inter-normal-persian-blue-14px">
                    Upload file
                  </div>
                </div>
                <div className="component-96" />
              </div> */}
              {/* <div className="frame-55">
                <div className="frame-55-1">
                  <div className="component-102" />
                </div>
                <div className="component-1">
                  <div className="gh-1234567-4 inter-normal-tundora-14px">
                    GH-1234567
                  </div>
                </div>
                <div className="component-6">
                  <div className="cell-ranger inter-normal-tundora-14px">
                    Cell ranger
                  </div>
                  <img
                    className="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next-15@2x.svg"
                    alt="material-symbols:navigate-next"
                  />
                </div>
                <div className="component-2">
                  <div className="upload-file inter-normal-persian-blue-14px">
                    Upload file
                  </div>
                </div>
                <div className="component-2">
                  <div className="upload-file inter-normal-persian-blue-14px">
                    Upload file
                  </div>
                </div>
                <div className="component">
                  <div className="upload-file inter-normal-persian-blue-14px">
                    Upload file
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="frame-561">
            {/* <div className="frame-449">
              <div className="frame-449-1">
                <img
                  className="iontriangle-sharp"
                  src="ion-triangle-sharp-30@2x.svg"
                  alt="ion:triangle-sharp"
                />
                <div className="rectangle-235" />
              </div>
              <img
                className="iontriangle-sharp-1"
                src="ion-triangle-sharp-29@2x.svg"
                alt="ion:triangle-sharp"
              />
            </div> */}
            <div className="frame-5-1 frame-5-3 frame-box">
              <div className="group-445">
                <div className="frame-5-1 frame-5-3">
                  <div className="frame-438">
                    <div className="frame-445">
                      <img
                        className="error_fill0_wght400_grad0_opsz48-1"
                        src="error-fill0-wght400-grad0-opsz48-1@2x.svg"
                        alt="error_FILL0_wght400_GRAD0_opsz48 1"
                      />
                      <div className="important">Important</div>
                    </div>
                    <p className="please-upload-your-d inter-normal-black-14px">
                      Please upload your database file(s) accordingly (in no
                      particular order):
                    </p>
                  </div>
                  <div className="frame-5">
                    <div className="frame-5-1 frame-5-3">
                      <div className="frame-4">
                        <div className="seurat-4 inter-semi-bold-black-14px">
                          Seurat
                        </div>
                      </div>
                      <div className="frame-44">
                        <div className="rds inter-normal-black-14px">RDS</div>
                      </div>
                    </div>
                    <div className="frame-5-1 frame-5-3">
                      <div className="frame-440">
                        <div className="fast-queue-1 fast-queue-3 inter-semi-bold-black-14px">
                          Fast Queue
                        </div>
                      </div>
                      <div className="frame-443 inter-normal-black-14px">
                        <div className="fast-queue-1-1">Fast Queue #1</div>
                        <div className="fast-queue-2 fast-queue-3">
                          Fast Queue #2
                        </div>
                      </div>
                    </div>
                    <div className="frame-5-1 frame-5-3">
                      <div className="frame-4">
                        <div className="cell-ranger-1 inter-semi-bold-black-14px">
                          Cell Ranger
                        </div>
                      </div>
                      <div className="frame-44 inter-normal-black-14px">
                        <div className="bar-code">Bar code</div>
                        <div className="feature">Feature</div>
                        <div className="matrix">Matrix</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
