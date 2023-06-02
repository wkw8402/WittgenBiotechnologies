import "../styling/InProgress.css";
export default function () {
  let applicationInfo = [
    {
      sample: "GH-123445",
      databaseCategory: "Clincal",
      databaseFile1: "GH-32342",
      databaseFile2: "",
      databaseFile3: "GH-234234",
      dob1: "22/11/2001",
      dob2: "",
      dob3: "09/12/1987",
    },
    {
      sample: "GH-123445",
      databaseCategory: "Cell Ranger",
      databaseFile1: "GH-323423",
      databaseFile2: "",
      databaseFile3: "",
      dob1: "11/11/2012",
      dob2: "",
      dob3: "",
    },
    {
      sample: "GH-123445",
      databaseCategory: "Clincal",
      databaseFile1: "",
      databaseFile2: "",
      databaseFile3: "GH-123123",
      dob1: "32/12/2001",
      dob2: "23/11/2001",
      dob3: "11/22/0221",
    },
  ];

  let applicationInfoRender = applicationInfo.map((element) => {
    return (
      <div>
        <div className="frame-557">
          <div className="frame-596">
            <div className="component-38">
              <div className="gh-1234567-5 inter-normal-slate-gray-14px">
                {element.sample}
              </div>
              <img
                className="verified_fill1_wght400_grad0_opsz48-1"
                src="verified-fill1-wght400-grad0-opsz48-1-6@2x.svg"
                alt="verified_FILL1_wght400_GRAD0_opsz48 1"
              />
            </div>
          </div>
          <div className="component-2">
            <div className="seurat inter-normal-tundora-14px">
              {element.databaseCategory}
            </div>
            <img
              className="material-symbolsnavigate-next"
              src="material-symbols-navigate-next-8@2x.svg"
              alt="material-symbols:navigate-next"
            />
          </div>
          <div className="component-3">
            <div className="gh-1234567 gh inter-normal-persian-blue-14px">
              {element.databaseFile1}
            </div>
          </div>
          <div className="component-3">
            <div className="gh-1234567 gh inter-normal-persian-blue-14px">
              {element.databaseFile2}
            </div>
          </div>
          <div className="component-3">
            <div className="gh-1234567 gh inter-normal-persian-blue-14px">
              {element.databaseFile3}
            </div>
          </div>
          <div className="component-3">
            <div className="date inter-normal-tundora-14px">{element.dob1}</div>
          </div>
          <div className="component-3">
            <div className="date-8 inter-normal-tundora-14px">
              {element.dob2}
            </div>
          </div>
          <div className="component">
            <div className="date-8 inter-normal-tundora-14px">
              {element.dob3}
            </div>
          </div>
        </div>
      </div>
    );
  });

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
      <link rel="stylesheet" type="text/css" href="my-file-in-progress.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="my-file-in-progress"
      />
      <div className="container-center-horizontal-fileProgress">
        <div className="my-file-in-progress screen-fileProgress">
          <div className="group-437">
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
                  src="line-79-11@1x.svg"
                  alt="Line 79"
                />
              </div>
              <div className="component-13">
                <img
                  className="icon"
                  src="home-fill0-wght400-grad0-opsz48-1-10@2x.svg"
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
                  src="draft-fill1-wght400-grad0-opsz48--1--1-10@2x.svg"
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
                  src="logout-fill0-wght400-grad0-opsz48-1-11@2x.svg"
                  alt="logout_FILL0_wght400_GRAD0_opsz48 1"
                />
                <a href="logout">
                  <div className="logout inter-normal-blue-dianne-16px">
                    Logout
                  </div>
                </a>
              </div>
              <div className="component-13-1">
                <img
                  className="import_contacts_fill"
                  src="import-contacts-fill0-wght400-grad0-opsz48-1-11@2x.svg"
                  alt="import_contacts_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="tutorial inter-normal-blue-dianne-16px">
                  Tutorial
                </div>
              </div>
              <div className="component-21">
                <img
                  className="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1-11@2x.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="cost-usage inter-normal-blue-dianne-16px">
                  Cost &amp; Usage
                </div>
              </div>
              <div className="component-23">
                <img
                  className="icon"
                  src="person-fill0-wght400-grad0-opsz48-1-11@2x.svg"
                  alt="icon-user"
                />
                <div className="my-profile my inter-normal-blue-dianne-16px">
                  My Profile
                </div>
              </div>
              <div className="component-18">
                <img
                  className="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1-11@2x.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div className="faq-support inter-normal-blue-dianne-16px">
                  FAQ / Support
                </div>
              </div>
              <div className="component-19">
                <img
                  className="icon"
                  src="call-fill0-wght400-grad0-opsz48--1--1-11@2x.svg"
                  alt="icon-call"
                />
                <div className="contact-us inter-normal-blue-dianne-16px">
                  Contact Us
                </div>
              </div>
              <div className="component-24">
                <img
                  className="icon"
                  src="settings-fill0-wght400-grad0-opsz48-1-11@2x.svg"
                  alt="icon-settings"
                />
                <div className="settings inter-normal-blue-dianne-16px">
                  Settings
                </div>
              </div>
            </div>
          </div>
          <div className="frame-593">
            <div className="gh-12384359 gh inter-semi-bold-blue-dianne-20px">
              GH- 12384359
            </div>
          </div>
          <div className="component-33">
            <div className="researchers inter-semi-bold-white-14px">
              Download result file
            </div>
          </div>
          <div className="frame-605">
            <div className="frame-60">
              <div className="file-progress file">File Progress</div>
              <div className="frame-601">
                <div className="frame-600">
                  <div className="frame-5">
                    <div className="frame-59">
                      <div className="frame-371">
                        <div className="application-submitted application inter-semi-bold-japanese-laurel-16px">
                          Application submitted
                        </div>
                        <img
                          className="_fill0_wght400_grad0_opsz48-1"
                          src="upload-file-fill0-wght400-grad0-opsz48-1@2x.svg"
                          alt="upload_file_FILL0_wght400_GRAD0_opsz48 1"
                        />
                        <div className="text inter-normal-black-16px">
                          11/27/2022 16:37
                        </div>
                      </div>
                    </div>
                    <div className="frame-59">
                      <div className="frame-371">
                        <div className="data-curation inter-semi-bold-japanese-laurel-16px">
                          Data Curation
                        </div>
                        <img
                          className="_fill0_wght400_grad0_opsz48-1"
                          src="database-fill0-wght400-grad0-opsz48-1@2x.svg"
                          alt="database_FILL0_wght400_GRAD0_opsz48 1"
                        />
                        <div className="text inter-normal-black-16px">
                          11/27/2022 20:37
                        </div>
                      </div>
                    </div>
                    <div className="frame-59">
                      <div className="frame-371">
                        <div className="data-pre-processing inter-semi-bold-blue-dianne-16px">
                          Data pre-processing
                        </div>
                        <img
                          className="_fill0_wght400_grad0_opsz48-1"
                          src="dataset-fill0-wght400-grad0-opsz48-1@2x.svg"
                          alt="dataset_FILL0_wght400_GRAD0_opsz48 1"
                        />
                      </div>
                    </div>
                    <div className="frame-59">
                      <div className="frame-371">
                        <div className="ml-model inter-semi-bold-silver-16px">
                          ML Model
                        </div>
                        <img
                          className="_fill0_wght400_grad0_opsz48-1"
                          src="rebase-fill0-wght400-grad0-opsz48-1@2x.svg"
                          alt="rebase_FILL0_wght400_GRAD0_opsz48 1"
                        />
                      </div>
                    </div>
                    <div className="frame-59">
                      <div className="frame-371">
                        <div className="file-complete file inter-semi-bold-silver-16px">
                          File complete
                        </div>
                        <img
                          className="_fill0_wght400_grad0_opsz48-1"
                          src="task-fill0-wght400-grad0-opsz48-1@2x.svg"
                          alt="task_FILL0_wght400_GRAD0_opsz48 1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="component-109">
                    <div className="ellipse-23" />
                    <h1 className="x40-complete">
                      <span className="inter-semi-bold-blue-dianne-36px">
                        40%
                        <br />
                      </span>
                      <span className="span1 inter-semi-bold-black-16px">
                        Complete
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <img className="line-104" src="line-104@1x.svg" alt="Line 104" />
            <div className="frame-60">
              <div className="application-info application inter-semi-bold-blue-dianne-20px">
                Application info
              </div>
              <div className="frame-576">
                <div className="frame-container">
                  <div className="frame-560">
                    <div className="frame-569">
                      <div className="frame-5">
                        <div className="component">
                          <div className="gh-1234567-5 inter-semi-bold-slate-gray-14px">
                            Sample
                          </div>
                        </div>
                        <div className="component-104">
                          <div className="database-category database inter-semi-bold-slate-gray-14px">
                            Database category
                          </div>
                        </div>
                        <div className="component-1">
                          <div className="database-file database inter-semi-bold-slate-gray-14px">
                            Database file
                          </div>
                        </div>
                        <div className="component-10" />
                        <div className="component-10" />
                        <div className="component-1">
                          <div className="dob inter-semi-bold-slate-gray-14px">
                            D.O.B
                          </div>
                        </div>
                        <div className="component-1">
                          <div className="dob-3 inter-semi-bold-slate-gray-14px">
                            D.O.B
                          </div>
                        </div>
                        <div className="component-1">
                          <div className="dob-3 inter-semi-bold-slate-gray-14px">
                            D.O.B
                          </div>
                        </div>
                      </div>
                      {applicationInfoRender}
                      {/* <div className="frame-557">
                        <div className="frame-596">
                          <div className="component-38">
                            <div className="gh-1234567-5 inter-normal-slate-gray-14px">
                              GH-1234567
                            </div>
                            <img
                              className="verified_fill1_wght400_grad0_opsz48-1"
                              src="verified-fill1-wght400-grad0-opsz48-1-6@2x.svg"
                              alt="verified_FILL1_wght400_GRAD0_opsz48 1"
                            />
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="seurat inter-normal-tundora-14px">
                            Seurat
                          </div>
                          <img
                            className="material-symbolsnavigate-next"
                            src="material-symbols-navigate-next-8@2x.svg"
                            alt="material-symbols:navigate-next"
                          />
                        </div>
                        <div className="component-3">
                          <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-4" />
                        <div className="component-4" />
                        <div className="component-3">
                          <div className="date inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="date-8 inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                        <div className="component">
                          <div className="date-8 inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="frame-558">
                        <div className="frame-595">
                          <div className="component-38">
                            <div className="gh-1234567-5 inter-normal-slate-gray-14px">
                              GH-1234567
                            </div>
                            <img
                              className="verified_fill1_wght400_grad0_opsz48-1"
                              src="verified-fill1-wght400-grad0-opsz48-1-7@2x.svg"
                              alt="verified_FILL1_wght400_GRAD0_opsz48 1"
                            />
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="fast-queue inter-normal-tundora-14px">
                            Fast Queue
                          </div>
                          <img
                            className="material-symbolsnavigate-next"
                            src="material-symbols-navigate-next-9@2x.svg"
                            alt="material-symbols:navigate-next"
                          />
                        </div>
                        <div className="component-3">
                          <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-4" />
                        <div className="component-3">
                          <div className="date-8 inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="date-8 inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="date-8 inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="frame-559">
                        <div className="frame-595-1">
                          <div className="component">
                            <div className="gh-1234567-5 inter-normal-slate-gray-14px">
                              GH-1234567
                            </div>
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="cell-ranger inter-normal-tundora-14px">
                            Cell ranger
                          </div>
                          <img
                            className="material-symbolsnavigate-next"
                            src="material-symbols-navigate-next-10@2x.svg"
                            alt="material-symbols:navigate-next"
                          />
                        </div>
                        <div className="component-3">
                          <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-4" />
                        <div className="component-3">
                          <div className="date-8 inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="date-8 inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="frame-573">
                    <div className="frame-449">
                      <img
                        className="iontriangle-sharp"
                        src="ion-triangle-sharp-28@2x.svg"
                        alt="ion:triangle-sharp"
                      />
                      <div className="rectangle-235" />
                    </div>
                    <img
                      className="iontriangle-sharp-1"
                      src="ion-triangle-sharp-27@2x.svg"
                      alt="ion:triangle-sharp"
                    />
                  </div> */}
                </div>
                {/* <div className="frame-572">
                  <div className="frame-449">
                    <img
                      className="iontriangle-sharp-2"
                      src="ion-triangle-sharp-26@2x.svg"
                      alt="ion:triangle-sharp"
                    />
                    <div className="rectangle-235-1" />
                  </div>
                  <img
                    className="iontriangle-sharp-3"
                    src="ion-triangle-sharp-25@2x.svg"
                    alt="ion:triangle-sharp"
                  />
                </div> */}
              </div>
            </div>
            <div className="frame-608">
              <img
                className="line-105"
                src="line-105-1@1x.svg"
                alt="Line 105"
              />
              <div className="frame-603">
                <div className="frame-590">
                  <div className="frame-58">
                    <div className="frame-58">
                      <div className="frame-582">
                        <div className="order-summary inter-semi-bold-blue-dianne-20px">
                          Order Summary
                        </div>
                        <div className="group-391">
                          <div className="currency-usd inter-normal-tundora-14px">
                            Currency: USD
                          </div>
                        </div>
                      </div>
                      <img
                        className="line-107"
                        src="line-107-2@2x.svg"
                        alt="Line 107"
                      />
                    </div>
                    <div className="group-394">
                      <div className="group-393">
                        <div className="frame-416">
                          <div className="group-392">
                            <div className="samples inter-semi-bold-tundora-16px">
                              Samples
                            </div>
                          </div>
                          <div className="group-389">
                            <div className="flex-row inter-normal-slate-gray-14px">
                              <div className="number">3</div>
                              <div className="x">x</div>
                              <div className="price">$100</div>
                            </div>
                          </div>
                        </div>
                        <div className="price-1 inter-semi-bold-tundora-16px">
                          $300
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-58-1">
                    <div className="frame-58-1">
                      <div className="frame-587">
                        <div className="frame-58-2">
                          <div className="subtotal inter-normal-slate-gray-14px">
                            Subtotal:
                          </div>
                          <div className="price-2 inter-semi-bold-tundora-16px">
                            $300
                          </div>
                        </div>
                        <div className="frame-58-2">
                          <div className="group-387">
                            <div className="taxes10 inter-normal-slate-gray-14px">
                              Taxes(10%)
                            </div>
                          </div>
                          <div className="price-3 inter-semi-bold-tundora-16px">
                            $30
                          </div>
                        </div>
                      </div>
                      <img
                        className="line-112"
                        src="line-112-2@2x.svg"
                        alt="Line 112"
                      />
                    </div>
                    <div className="frame-317">
                      <div className="group-427">
                        <div className="total-amount inter-normal-silver-14px">
                          Total amount
                        </div>
                        <div className="price-4 inter-semi-bold-silver-36px">
                          $330
                        </div>
                      </div>
                      <div className="group-428">
                        <div className="freemium inter-normal-cerulean-14px">
                          Freemium
                        </div>
                        <div className="price-5 inter-semi-bold-blue-dianne-36px">
                          $0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="payed-by-credit-card-ending-in-2563 inter-normal-slate-gray-14px">
                  <span className="span0 inter-normal-slate-gray-14px">
                    Payed by credit card ending in{" "}
                  </span>
                  <span className="inter-semi-bold-slate-gray-14px">2563</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
