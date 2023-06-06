import "../styling/MetabaseInput3.css";
export default function () {
  let dataObject = [
    {
      id: "GH-23423",
      dob: "178",
      height: "78",
      weight: "98",
      primaryRegion: "Breast",
      subtype: "ER+",
      grade: "3",
      surgery: "Yes",
    },
    {
      id: "GH-23423",
      dob: "189",
      height: "78",
      weight: "98",
      primaryRegion: "Breast",
      subtype: "ER+",
      grade: "3",
      surgery: "Yes",
    },
    {
      id: "GH-2342",
      dob: "223",
      height: "78",
      weight: "98",
      primaryRegion: "Breast",
      subtype: "ER+",
      grade: "3",
      surgery: "Yes",
    },
  ];

  let dataObjectRender = dataObject.map((element) => {
    return (
      <div className="frame-5">
        <div className="component-1">
          <div className="gh-1234567 gh inter-normal-tundora-14px">
            {element.id}
          </div>
        </div>
        <div className="component-2">
          <div className="number-2 number-9 inter-normal-tundora-14px">
            {element.dob}
          </div>
        </div>
        <div className="component-2">
          <div className="number-3 number-9 inter-normal-tundora-14px">
            {element.height}
          </div>
        </div>
        <div className="component-2">
          <div className="date inter-normal-tundora-14px">{element.weight}</div>
        </div>
        <div className="component-2">
          <div className="breast inter-normal-tundora-14px">
            {element.primaryRegion}
          </div>
        </div>
        <div className="component-2">
          <div className="er inter-normal-tundora-14px">{element.subtype}</div>
        </div>
        <div className="component-2">
          <div className="number-4 number-9 inter-normal-tundora-14px">
            {element.grade}
          </div>
        </div>
        <div className="component-3">
          <div className="yes inter-normal-tundora-14px">{element.surgery}</div>
        </div>
      </div>
      //   <div className="frame-511-1">
      //     <div className="component-1">
      //       <div className="gh-1234567-3 inter-normal-tundora-14px">
      //         GH-1234567
      //       </div>
      //     </div>
      //     <div className="component-2">
      //       <div className="number-5 number-9 inter-normal-tundora-14px">
      //         169
      //       </div>
      //     </div>
      //     <div className="component-2">
      //       <div className="e-rdfa inter-normal-tundora-14px">ERdfa</div>
      //     </div>
      //     <div className="component-2">
      //       <div className="date-1 inter-normal-tundora-14px">Nov 12, 1976</div>
      //     </div>
      //     <div className="component-2">
      //       <div className="breast-1 inter-normal-tundora-14px">Breast</div>
      //     </div>
      //     <div className="component-2">
      //       <div className="tnbc inter-normal-tundora-14px">TNBC</div>
      //     </div>
      //     <div className="component-2">
      //       <div className="number-6 number-9 inter-normal-tundora-14px">2</div>
      //     </div>
      //     <div className="component-3">
      //       <div className="yes-1 inter-normal-tundora-14px">Yes</div>
      //     </div>
      //   </div>
      //   <div className="frame-5">
      //     <div className="component-1">
      //       <div className="gh-1234567-3 inter-normal-tundora-14px">
      //         GH-12367
      //       </div>
      //     </div>
      //     <div className="component-2">
      //       <div className="number-7 number-9 inter-normal-tundora-14px">
      //         180
      //       </div>
      //     </div>
      //     <div className="component-2">
      //       <div className="number-8 number-9 inter-normal-tundora-14px">
      //         90
      //       </div>
      //     </div>
      //     <div className="component-4" />
      //     <div className="component-4" />
      //     <div className="component-4" />
      //     <div className="component-4" />
      //     <div className="component-3">
      //       <div className="place inter-normal-tundora-14px">No</div>
      //     </div>
      //   </div>
      // </div>
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
        href="apply-metadatabase-input-import-excel-file-select-header-row.css"
      />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-metadatabase-input-import-excel-file-select-header-row"
      />
      <div className="container-center-horizontal-validateExcel">
        <div className="apply-metadatabase-input-import-excel-file-select-header-row screen-validateExcel">
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
                <img className="line-79" src="line-79-2@1x.svg" alt="Line 79" />
              </div>
              <div className="component-13">
                <img
                  className="icon"
                  src="home-fill0-wght400-grad0-opsz48-1-2@2x.svg"
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
                  src="draft-fill1-wght400-grad0-opsz48--1--1-2@2x.svg"
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
                  src="logout-fill0-wght400-grad0-opsz48-1-2@2x.svg"
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
                  src="import-contacts-fill0-wght400-grad0-opsz48-1-2@2x.svg"
                  alt="import_contacts_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="tutorial inter-normal-blue-dianne-16px">
                  Tutorial
                </div>
              </div>
              <div className="component-21">
                <img
                  className="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1-2@2x.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="cost-usage inter-normal-blue-dianne-16px">
                  Cost &amp; Usage
                </div>
              </div>
              <div className="component-23">
                <img
                  className="icon"
                  src="person-fill0-wght400-grad0-opsz48-1-2@2x.svg"
                  alt="icon-user"
                />
                <div className="my-profile my inter-normal-blue-dianne-16px">
                  My Profile
                </div>
              </div>
              <div className="component-18">
                <img
                  className="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1-2@2x.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div className="faq-support inter-normal-blue-dianne-16px">
                  FAQ / Support
                </div>
              </div>
              <div className="component-19">
                <img
                  className="icon"
                  src="call-fill0-wght400-grad0-opsz48--1--1-2@2x.svg"
                  alt="icon-call"
                />
                <div className="contact-us inter-normal-blue-dianne-16px">
                  Contact Us
                </div>
              </div>
              <div className="component-24">
                <img
                  className="icon"
                  src="settings-fill0-wght400-grad0-opsz48-1-2@2x.svg"
                  alt="icon-settings"
                />
                <div className="settings inter-normal-blue-dianne-16px">
                  Settings
                </div>
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
                  <div className="researchers inter-semi-bold-blue-dianne-14px">
                    Back
                  </div>
                </div>
              </a>
              <a href="/metabase_input_4" style={{ textDecoration: "none" }}>
                <div className="component-33">
                  <div className="researchers-3 inter-semi-bold-white-14px">
                    Next
                  </div>
                </div>
              </a>
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
                <a href="/dashboard" style={{ textDecoration: "none" }}>
                  <div className="component-33-1">
                    <div className="discard-exit inter-semi-bold-blue-dianne-14px">
                      Discard &amp; Exit
                    </div>
                  </div>
                </a>
                <a
                  href="/dashboard?mode=save"
                  style={{ textDecoration: "none" }}
                >
                  <div className="component-31">
                    <div className="researchers-2 researchers-3 inter-semi-bold-white-14px">
                      Save &amp; Exit
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="frame-527">
            <div className="frame-503">
              <div className="group-283">
                <div className="frame-504">
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
                <div className="frame">
                  <div className="frame-620">
                    <div className="group-260-1">
                      <div className="group-457">
                        <img
                          className="done_fill0_wght400_grad0_opsz48-1"
                          src="done-fill0-wght400-grad0-opsz48-1-2@2x.svg"
                          alt="done_FILL0_wght400_GRAD0_opsz48 1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="upload-file inter-normal-japanese-laurel-16px">
                    Upload file
                  </div>
                </div>
                <img className="line-9" src="line-93-1@2x.svg" alt="Line 93" />
                <div className="frame">
                  <div className="group-260">
                    <div className="overlap-group-1 overlap-group-3">
                      <div className="number inter-normal-white-16px">2</div>
                    </div>
                  </div>
                  <div className="match-columns inter-semi-bold-blue-dianne-16px">
                    Match columns
                  </div>
                </div>
                <img className="line-9" src="line-94-1@2x.svg" alt="Line 94" />
                <div className="frame">
                  <div className="group-260">
                    <div className="overlap-group-2 overlap-group-3">
                      <div className="number-1 number-9 inter-normal-slate-gray-16px">
                        3
                      </div>
                    </div>
                  </div>
                  <div className="validate-data inter-normal-slate-gray-16px">
                    Validate data
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-526">
              <div className="frame-525">
                <div className="frame-267">
                  <p className="your-excel-sheet-col inter-semi-bold-tundora-20px">
                    Your excel sheet column header will be shown as
                  </p>
                </div>
                <div className="frame-528">
                  <div className="frame-524">
                    <div className="frame-518">
                      <div className="frame-2-1">
                        <div className="sample inter-normal-tundora-14px">
                          Sample
                        </div>
                      </div>
                      <div className="frame-2-1">
                        <div className="dob inter-normal-tundora-14px">
                          D.O.B
                        </div>
                      </div>
                      <div className="frame-2-1">
                        <div className="height inter-normal-tundora-14px">
                          Height
                        </div>
                      </div>
                      <div className="frame-2-1">
                        <div className="weight-kg inter-normal-tundora-14px">
                          Weight (kg)
                        </div>
                      </div>
                      <div className="frame-2-1">
                        <div className="primary-region inter-normal-tundora-14px">
                          Primary region
                        </div>
                      </div>
                      <div className="frame-2-1">
                        <div className="subtype inter-normal-tundora-14px">
                          Subtype
                        </div>
                      </div>
                      <div className="frame-2-1">
                        <div className="grade inter-normal-tundora-14px">
                          Grade
                        </div>
                      </div>
                      <div className="frame-2-1">
                        <div className="surgery inter-normal-tundora-14px">
                          Surgery
                        </div>
                      </div>
                    </div>
                    <div className="frame-523">
                      <div className="frame-1">
                        <div className="frame-271-1 frame-271-3">
                          <div className="id inter-normal-tundora-14px">ID</div>
                          <img
                            className="frame-607"
                            src="frame-607-1@2x.svg"
                            alt="Frame 607"
                          />
                        </div>
                      </div>
                      <div className="frame-271-2 frame-271-3">
                        <div className="group-266">
                          <div className="frame-271">
                            <div className="weight-kg-1 inter-normal-tundora-14px">
                              Weight (kg)
                            </div>
                            <img
                              className="frame-607"
                              src="frame-607-2@2x.svg"
                              alt="Frame 607"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="frame-1">
                        <div className="group-266">
                          <div className="frame-271">
                            <div className="height-cm inter-normal-tundora-14px">
                              Height (cm)
                            </div>
                            <img
                              className="frame-607"
                              src="frame-607-3@2x.svg"
                              alt="Frame 607"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="frame-1">
                        <div className="group-266">
                          <div className="frame-271">
                            <div className="dob-1 inter-normal-tundora-14px">
                              D.O.B
                            </div>
                            <img
                              className="frame-607"
                              src="frame-607-4@2x.svg"
                              alt="Frame 607"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="frame-1">
                        <div className="group-266">
                          <div className="frame-271">
                            <div className="primary inter-normal-tundora-14px">
                              Primary
                            </div>
                            <img
                              className="frame-607"
                              src="frame-607-5@2x.svg"
                              alt="Frame 607"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="frame-1">
                        <div className="group-266">
                          <div className="frame-271">
                            <div className="subtype-1 inter-normal-tundora-14px">
                              Subtype
                            </div>
                            <img
                              className="frame-607"
                              src="frame-607-6@2x.svg"
                              alt="Frame 607"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="frame-1">
                        <div className="group-266">
                          <div className="frame-271">
                            <div className="grade-1 inter-normal-tundora-14px">
                              Grade
                            </div>
                            <img
                              className="frame-607"
                              src="frame-607-7@2x.svg"
                              alt="Frame 607"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="frame-1">
                        <div className="group-266">
                          <div className="frame-271">
                            <div className="surgery-1 inter-normal-tundora-14px">
                              Surgery
                            </div>
                            <img
                              className="frame-607-1"
                              src="frame-607@2x.png"
                              alt="Frame 607"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="frame-525-1">
                    <div className="frame-449">
                      <img
                        className="iontriangle-sharp"
                        src="ion-triangle-sharp-6@2x.svg"
                        alt="ion:triangle-sharp"
                      />
                      <div className="rectangle-235" />
                    </div>
                    <img
                      className="iontriangle-sharp-1"
                      src="ion-triangle-sharp-5@2x.svg"
                      alt="ion:triangle-sharp"
                    />
                  </div> */}
                </div>
              </div>
              <div className="frame-517">
                <div className="frame">
                  <div className="preview inter-semi-bold-tundora-20px">
                    Preview
                  </div>
                </div>
                <div className="frame-51">
                  <div className="frame-51">
                    <div className="frame-5">
                      <div className="component">
                        <div className="id-1 inter-semi-bold-slate-gray-14px">
                          ID
                        </div>
                      </div>
                      <div className="component">
                        <div className="dob-2 inter-semi-bold-slate-gray-14px">
                          D.O.B
                        </div>
                      </div>
                      <div className="component">
                        <div className="height-cm-1 inter-semi-bold-slate-gray-14px">
                          Height (cm)
                        </div>
                      </div>
                      <div className="component">
                        <div className="weight-kg-2 inter-semi-bold-slate-gray-14px">
                          Weight (kg)
                        </div>
                      </div>
                      <div className="component">
                        <div className="primary-region-1 inter-semi-bold-slate-gray-14px">
                          Primary region
                        </div>
                      </div>
                      <div className="component">
                        <div className="subtype-2 inter-semi-bold-slate-gray-14px">
                          Subtype
                        </div>
                      </div>
                      <div className="component">
                        <div className="grade-2 inter-semi-bold-slate-gray-14px">
                          Grade
                        </div>
                      </div>
                      <div className="component-104">
                        <div className="surgery-2 inter-semi-bold-slate-gray-14px">
                          Surgery
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-514">
                    {dataObjectRender}
                    {/* <div className="frame-511">
                      <div className="frame-5">
                        <div className="component-1">
                          <div className="gh-1234567 gh inter-normal-tundora-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="number-2 number-9 inter-normal-tundora-14px">
                            178
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="number-3 number-9 inter-normal-tundora-14px">
                            78
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="date inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="breast inter-normal-tundora-14px">
                            Breast
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="er inter-normal-tundora-14px">
                            ER+
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="number-4 number-9 inter-normal-tundora-14px">
                            3
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="yes inter-normal-tundora-14px">
                            Yes
                          </div>
                        </div>
                      </div>
                      <div className="frame-511-1">
                        <div className="component-1">
                          <div className="gh-1234567-3 inter-normal-tundora-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="number-5 number-9 inter-normal-tundora-14px">
                            169
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="e-rdfa inter-normal-tundora-14px">
                            ERdfa
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="date-1 inter-normal-tundora-14px">
                            Nov 12, 1976
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="breast-1 inter-normal-tundora-14px">
                            Breast
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="tnbc inter-normal-tundora-14px">
                            TNBC
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="number-6 number-9 inter-normal-tundora-14px">
                            2
                          </div>
                        </div>
                        <div className="component-3">
                          <div className="yes-1 inter-normal-tundora-14px">
                            Yes
                          </div>
                        </div>
                      </div>
                      <div className="frame-5">
                        <div className="component-1">
                          <div className="gh-1234567-3 inter-normal-tundora-14px">
                            GH-1234567
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="number-7 number-9 inter-normal-tundora-14px">
                            180
                          </div>
                        </div>
                        <div className="component-2">
                          <div className="number-8 number-9 inter-normal-tundora-14px">
                            90
                          </div>
                        </div>
                        <div className="component-4" />
                        <div className="component-4" />
                        <div className="component-4" />
                        <div className="component-4" />
                        <div className="component-3">
                          <div className="place inter-normal-tundora-14px">
                            No
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="frame-450">
                      <div className="frame-449">
                        <img
                          className="iontriangle-sharp"
                          src="ion-triangle-sharp-8@2x.svg"
                          alt="ion:triangle-sharp"
                        />
                        <div className="rectangle-235" />
                      </div>
                      <img
                        className="iontriangle-sharp-1"
                        src="ion-triangle-sharp-7@2x.svg"
                        alt="ion:triangle-sharp"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="iontriangle-sharp-2"
            src="ion-triangle-sharp-4@2x.svg"
            alt="ion:triangle-sharp"
          />
        </div>
      </div>
    </>
  );
}
