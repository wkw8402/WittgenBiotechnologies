import "../styling/MetabaseInput4.css";
export default function () {
  let dataObject = [
    {
      sample: "GH-23234",
      height: "78",
      weight: "98",
      bloodType: "AB+",
      primaryRegion: "Breast",
      subtype: "ER+",
      grade: "3",
      surgery: "Yes",
    },
    {
      sample: "GH-23234",
      height: "78",
      weight: "98",
      bloodType: "AB+",
      primaryRegion: "Brest",
      subtype: "ER+",
      grade: "3",
      surgery: "Yes",
    },
    {
      sample: "GH-23234",
      height: "78",
      weight: "98",
      bloodType: "AB+",
      primaryRegion: "Breast",
      subtype: "ER+",
      grade: "3",
      surgery: "Yes",
    },
  ];

  let dataObjectRender = dataObject.map((element) => {
    return (
      <div>
        <div className="frame-53">
          <div className="frame-53-1">
            <img
              className="icsharp-delete"
              src="ic-sharp-delete@2x.svg"
              alt="ic:sharp-delete"
            />
          </div>
          <div className="component-3 component-1">
            <div className="gh-1234567-21 inter-normal-tundora-14px">
              {element.sample}
            </div>
          </div>
          <div className="component">
            <div className="gh-1234567-21 inter-normal-tundora-14px">
              {element.height}
            </div>
          </div>
          <div className="component">
            <div className="gh-1234567-21 inter-normal-tundora-14px">
              {element.weight}
            </div>
          </div>
          <div className="component">
            <div className="gh-1234567-21 inter-normal-tundora-14px">
              {element.bloodType}
            </div>
          </div>
          <div className="component">
            <div className="gh-1234567-21 inter-normal-tundora-14px">
              {element.primaryRegion}
            </div>
          </div>
          <div className="component">
            <div className="gh-1234567-21 inter-normal-tundora-14px">
              {element.subtype}+
            </div>
          </div>
          <div className="component">
            <div className="gh-1234567-21 inter-normal-tundora-14px">
              {element.grade}
            </div>
          </div>
          <div className="component">
            <div className="gh-1234567-21 inter-normal-tundora-14px">
              {element.surgery}
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
      <link
        rel="stylesheet"
        type="text/css"
        href="apply-metadatabase-input-import-excel-file-match-columns.css"
      />
      <link rel="stylesheet" type="text/css" href="styleguide.css" />
      <link rel="stylesheet" type="text/css" href="globals.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-metadatabase-input-import-excel-file-match-columns"
      />
      <div className="container-center-horizontal-validateData">
        <div className="apply-metadatabase-input-import-excel-file-match-columns screen-validateData">
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
                <img className="line-79" src="line-79@1x.svg" alt="Line 79" />
              </div>
              <div className="component-13 component-1">
                <img
                  className="icon-home icon"
                  src="home-fill0-wght400-grad0-opsz48-1@2x.svg"
                  alt="icon-home"
                />
                <a href="/dashboard">
                  <div className="dashboard inter-normal-blue-dianne-16px">
                    Dashboard
                  </div>
                </a>
              </div>
              <div className="component-14 component-1">
                <img
                  className="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1@2x.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <a href="/my_files_1" style={{ textDecoration: "none" }}>
                  <div className="my-files my inter-semi-bold-blue-dianne-16px">
                    My files
                  </div>
                </a>
              </div>
              <div className="component-22 component-1">
                <img
                  className="logout_fill0_wght400_grad0_opsz48-1"
                  src="logout-fill0-wght400-grad0-opsz48-1@2x.svg"
                  alt="logout_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="logout inter-normal-blue-dianne-16px">
                  Logout
                </div>
              </div>
              <div className="component-13-1">
                <img
                  className="import_contacts_fill"
                  src="import-contacts-fill0-wght400-grad0-opsz48-1@2x.svg"
                  alt="import_contacts_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="tutorial inter-normal-blue-dianne-16px">
                  Tutorial
                </div>
              </div>
              <div className="component-21 component-1">
                <img
                  className="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1@2x.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="cost-usage inter-normal-blue-dianne-16px">
                  Cost &amp; Usage
                </div>
              </div>
              <div className="component-23 component-1">
                <img
                  className="icon-user icon"
                  src="person-fill0-wght400-grad0-opsz48-1@2x.svg"
                  alt="icon-user"
                />
                <div className="my-profile my inter-normal-blue-dianne-16px">
                  My Profile
                </div>
              </div>
              <div className="component-18 component-1">
                <img
                  className="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1@2x.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div className="faq-support inter-normal-blue-dianne-16px">
                  FAQ / Support
                </div>
              </div>
              <div className="component-19 component-1">
                <img
                  className="icon-call icon"
                  src="call-fill0-wght400-grad0-opsz48--1--1@2x.svg"
                  alt="icon-call"
                />
                <div className="contact-us inter-normal-blue-dianne-16px">
                  Contact Us
                </div>
              </div>
              <div className="component-24 component-1">
                <img
                  className="icon-settings icon"
                  src="settings-fill0-wght400-grad0-opsz48-1@2x.svg"
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
              <div className="gh-13728930 gh inter-semi-bold-slate-gray-32px">
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
                  <div className="metadatabase-input inter-semi-bold-blue-dianne-16px">
                    Metadatabase Input
                  </div>
                  <div className="rectangle-228" />
                </div>
                <div className="frame-49">
                  <div className="database-input inter-normal-oslo-gray-16px">
                    Database Input
                  </div>
                  <div className="rectangle-228-1" />
                </div>
                <div className="frame-49">
                  <div className="pay-submit inter-normal-oslo-gray-16px">
                    Pay &amp; Submit
                  </div>
                  <div className="rectangle-228-1" />
                </div>
              </div>
              <div className="frame-2">
                <a href="/dashboard">
                  <div className="component-33 component-1">
                    <div className="discard-exit inter-semi-bold-blue-dianne-14px">
                      Discard &amp; Exit
                    </div>
                  </div>
                </a>
                <a href="/dashboard?mode=save">
                  <div className="component-31 component-1">
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
                <div className="component-34 component-1">
                  <div className="researchers-3 inter-semi-bold-blue-dianne-14px">
                    Back
                  </div>
                </div>
              </a>
              <a href="/database_input_1" style={{ textDecoration: "none" }}>
                <div className="component-33-1">
                  <div className="researchers-3 inter-semi-bold-white-14px">
                    Next
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="frame-541">
            <div className="group-347">
              <div className="frame-61">
                <div className="frame-61">
                  <div className="frame-504">
                    <div className="group-283">
                      <div className="frame-504-1">
                        <div className="frame-454">
                          <div className="frame-214">
                            <div className="import-excel-file inter-semi-bold-white-16px">
                              Import Excel file
                            </div>
                          </div>
                          <a
                            href="/metabase_input_5"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="frame-215">
                              <div className="manual-data-input inter-semi-bold-blue-dianne-16px">
                                Manual data input
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="frame-317">
                        <div className="expected-amount inter-normal-slate-gray-14px">
                          Expected amount
                        </div>
                        <h1 className="price inter-semi-bold-blue-dianne-36px">
                          $300
                        </h1>
                      </div>
                    </div>
                    <div className="frame-2">
                      <div className="frame-26">
                        <div className="frame-619">
                          <div className="group-260">
                            <div className="group-457">
                              <img
                                className="done_fill0_wght400_grad0_opsz48-1"
                                src="done-fill0-wght400-grad0-opsz48-1@2x.svg"
                                alt="done_FILL0_wght400_GRAD0_opsz48 1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="upload-file inter-normal-japanese-laurel-16px">
                          Upload file
                        </div>
                      </div>
                      <img
                        className="line-9"
                        src="line-93@2x.svg"
                        alt="Line 93"
                      />
                      <div className="frame-26">
                        <div className="frame-619">
                          <div className="group-260">
                            <div className="group-457">
                              <img
                                className="done_fill0_wght400_grad0_opsz48-1"
                                src="done-fill0-wght400-grad0-opsz48-1-1@2x.svg"
                                alt="done_FILL0_wght400_GRAD0_opsz48 1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="match-columns inter-normal-japanese-laurel-16px">
                          Match columns
                        </div>
                      </div>
                      <img
                        className="line-9"
                        src="line-94@2x.svg"
                        alt="Line 94"
                      />
                      <div className="frame-26">
                        <div className="group-260-1">
                          <div className="overlap-group-1">
                            <div className="number inter-normal-white-16px">
                              3
                            </div>
                          </div>
                        </div>
                        <div className="validate-data inter-semi-bold-blue-dianne-16px">
                          Validate data
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-540">
                    <div className="frame-539">
                      <div className="frame-453">
                        <div className="frame-532" />
                        <div className="component">
                          <div className="sample inter-semi-bold-slate-gray-14px">
                            Sample
                          </div>
                        </div>
                        <div className="component">
                          <div className="height inter-semi-bold-white-14px-2">
                            <span className="inter-semi-bold-slate-gray-14px">
                              Height{" "}
                            </span>
                            <span className="inter-semi-bold-red-14px">*</span>
                          </div>
                        </div>
                        <div className="component">
                          <div className="weight inter-bold-white-14px">
                            <span className="inter-bold-slate-gray-14px">
                              Weight
                            </span>
                            <span className="inter-bold-tundora-14px">
                              &nbsp;
                            </span>
                            <span className="inter-bold-red-14px">*</span>
                          </div>
                        </div>
                        <div className="component-99 component-1">
                          <div className="blood-type inter-semi-bold-white-14px-2">
                            <span className="inter-semi-bold-slate-gray-14px">
                              Blood type{" "}
                            </span>
                            <span className="inter-semi-bold-red-14px">*</span>
                          </div>
                        </div>
                        <div className="component">
                          <div className="primary-region inter-semi-bold-slate-gray-14px">
                            Primary region
                          </div>
                        </div>
                        <div className="component">
                          <div className="subtype inter-semi-bold-slate-gray-14px">
                            Subtype
                          </div>
                        </div>
                        <div className="component">
                          <div className="grade inter-semi-bold-slate-gray-14px">
                            Grade
                          </div>
                        </div>
                        <div className="component">
                          <div className="surgery inter-semi-bold-slate-gray-14px">
                            Surgery
                          </div>
                        </div>
                      </div>
                      <div className="frame-538">
                        {dataObjectRender}
                        {/* <div className="frame-53">
                          <div className="frame-53-1">
                            <img
                              className="icsharp-delete"
                              src="ic-sharp-delete@2x.svg"
                              alt="ic:sharp-delete"
                            />
                          </div>
                          <div className="component-3 component-1">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              GH-1234567
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              178
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              78
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              AB+
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              Breast
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              ER+
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              3
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              Yes
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="frame-53">
                          <div className="frame-53-1">
                            <img
                              className="icsharp-delete-3"
                              src="ic-sharp-delete-1@2x.svg"
                              alt="ic:sharp-delete"
                            />
                          </div>
                          <div className="component-3 component-1">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              GH-1234567
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              169
                            </div>
                          </div>
                          <div className="component-43 component-1">
                            <div className="group-369">
                              <div className="gh-1234567 gh inter-normal-tundora-14px">
                                ERdfa
                              </div>
                              <img
                                className="mdiwarning-circle-outline"
                                src="mdi-warning-circle-outline@2x.svg"
                                alt="mdi:warning-circle-outline"
                              />
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              B-
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              Breast
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              TNBC
                            </div>
                          </div>
                          <div className="component">
                            <div className="number-1 inter-normal-tundora-14px">
                              2
                            </div>
                          </div>
                          <div className="component">
                            <div className="yes inter-normal-tundora-14px">
                              Yes
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="frame-537">
                          <div className="frame-534">
                            <img
                              className="icsharp-delete-3"
                              src="ic-sharp-delete-2@2x.svg"
                              alt="ic:sharp-delete"
                            />
                          </div>
                          <div className="component-46 component-1">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              GH-1234567
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              180
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px">
                              90
                            </div>
                          </div>
                          <div className="component-49 component-1">
                            <div className="group-369">
                              <div className="gh-1234567 gh inter-normal-black-14px-2">
                                GH-1234567
                              </div>
                              <img
                                className="mdiwarning-circle-outline"
                                src="mdi-warning-circle-outline-1@2x.svg"
                                alt="mdi:warning-circle-outline"
                              />
                            </div>
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px" />
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px" />
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px" />
                          </div>
                          <div className="component">
                            <div className="gh-1234567-21 inter-normal-tundora-14px" />
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="frame-211">
                      <div className="add inter-semi-bold-blue-dianne-14px">
                        + Add
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="frame-450">
              <div className="frame-449">
                <img
                  className="iontriangle-sharp"
                  src="ion-triangle-sharp-1@2x.svg"
                  alt="ion:triangle-sharp"
                />
                <div className="rectangle-235" />
              </div>
              <img
                className="iontriangle-sharp-1"
                src="ion-triangle-sharp@2x.svg"
                alt="ion:triangle-sharp"
              />
            </div> */}
          </div>
          <div className="frame-409">
            <img
              className="icon"
              src="ion-warning-sharp@2x.svg"
              alt="icon-caution"
            />
            <div className="frame-412">
              <p className="please-fill-in-the-i inter-semi-bold-tundora-14px">
                Please fill in the invalid and/or empty fields
              </p>
              <img
                className="teenyiconsx-small-solid"
                src="teenyicons-x-small-solid@2x.svg"
                alt="teenyicons:x-small-solid"
              />
            </div>
          </div>
          {/* <div className="frame-449-1">
            <div className="frame-449">
              <img
                className="iontriangle-sharp-2"
                src="ion-triangle-sharp-3@2x.svg"
                alt="ion:triangle-sharp"
              />
              <div className="rectangle-235-1" />
            </div>
            <img
              className="iontriangle-sharp-3"
              src="ion-triangle-sharp-2@2x.svg"
              alt="ion:triangle-sharp"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
