import "../styling/MyFiles2.css";
export default function () {
  let allSamplesObject = [
    {
      fileId: "GH-123445",
      service: "Clincal",
      submittedDate: "11/13/2022",
      status: "Submitted",
      download: "2 files",
    },
    {
      fileId: "GH-123445",
      service: "Clincal",
      submittedDate: "11/13/2022",
      status: "Completed",
      download: "2 files",
    },
    {
      fileId: "GH-123445",
      service: "Clincal",
      submittedDate: "11/13/2022",
      status: "2 Issue(s)",
      download: "1 files",
    },
  ];

  let allSamplesObjectRender = allSamplesObject.map((element) => {
    return (
      <div className="frame-484">
        <div className="frame-4-1">
          <div className="frame-460">
            <div className="gh-123325 inter-normal-tundora-14px">
              {element.fileId}
            </div>
          </div>
          <div className="frame-461">
            <div className="clinical inter-normal-tundora-14px">
              {element.service}
            </div>
          </div>
          <div className="frame-46">
            <div className="date inter-normal-tundora-14px">
              {element.submittedDate}
            </div>
          </div>
          <div className="frame-46">
            {/* <div className="frame-276"> */}
            <div className="inter-normal-tundora-14px">{element.status}</div>
            {/* </div> */}
          </div>
          <div className="frame-464">
            <div className="x2-files">
              <div className="address inter-normal-persian-blue-14px">
                {element.download}
              </div>
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
      <link rel="stylesheet" type="text/css" href="my-files-all-samples.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="my-files-all-samples"
      />
      <div className="container-center-horizontal-myFiles2">
        <div className="my-files-all-samples screen-myFiles2">
          <div className="group-438">
            <div className="overlap-group1">
              <div className="group-184">
                <div className="overlap-group">
                  <h1 className="title oxygen-bold-blue-dianne-28px">
                    <span className="oxygen-bold-blue-dianne-28px">
                      WittGen
                    </span>
                    <span className="oxygen-light-blue-dianne-28px">
                      Portal
                    </span>
                  </h1>
                </div>
                <img
                  className="line-79"
                  src="line-79-12@1x.svg"
                  alt="Line 79"
                />
              </div>
              <div className="component-13 component">
                <img
                  className="icon-home icon"
                  src="home-fill0-wght400-grad0-opsz48-1-11@2x.svg"
                  alt="icon-home"
                />
                <a href="/dashboard">
                  <div className="dashboard inter-normal-blue-dianne-16px">
                    Dashboard
                  </div>
                </a>
              </div>
              <div className="component-14 component">
                <img
                  className="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1-11@2x.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <div className="my-files my inter-semi-bold-blue-dianne-16px">
                  My files
                </div>
              </div>
              <div className="component-22 component">
                <img
                  className="logout_fill0_wght400_grad0_opsz48-1"
                  src="logout-fill0-wght400-grad0-opsz48-1-12@2x.svg"
                  alt="logout_FILL0_wght400_GRAD0_opsz48 1"
                />
                <a href="/logout">
                  <div className="logout inter-normal-blue-dianne-16px">
                    Logout
                  </div>
                </a>
              </div>
              <div className="component-13-1">
                <img
                  className="import_contacts_fill"
                  src="import-contacts-fill0-wght400-grad0-opsz48-1-12@2x.svg"
                  alt="import_contacts_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="tutorial inter-normal-blue-dianne-16px">
                  Tutorial
                </div>
              </div>
              <div className="component-21 component">
                <img
                  className="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1-12@2x.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="cost-usage inter-normal-blue-dianne-16px">
                  Cost &amp; Usage
                </div>
              </div>
              <div className="component-23 component">
                <img
                  className="icon-user icon"
                  src="person-fill0-wght400-grad0-opsz48-1-12@2x.svg"
                  alt="icon-user"
                />
                <div className="my-profile my inter-normal-blue-dianne-16px">
                  My Profile
                </div>
              </div>
              <div className="component-18 component">
                <img
                  className="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1-12@2x.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div className="faq-support inter-normal-blue-dianne-16px">
                  FAQ / Support
                </div>
              </div>
              <div className="component-19 component">
                <img
                  className="icon-call icon"
                  src="call-fill0-wght400-grad0-opsz48--1--1-12@2x.svg"
                  alt="icon-call"
                />
                <div className="contact-us inter-normal-blue-dianne-16px">
                  Contact Us
                </div>
              </div>
              <div className="component-24 component">
                <img
                  className="icon-settings icon"
                  src="settings-fill0-wght400-grad0-opsz48-1-12@2x.svg"
                  alt="icon-settings"
                />
                <div className="settings inter-normal-blue-dianne-16px">
                  Settings
                </div>
              </div>
            </div>
          </div>
          <div className="component-91-variant6">
            <div className="frame-292">
              <div className="frame-29">
                <p className="what-are-you-looking-for inter-semi-bold-tundora-16px">
                  What are you looking for?
                </p>
                <div className="frame-290-1">
                  <img
                    className="icon"
                    src="search-fill1-wght400-grad0-opsz48-1@2x.svg"
                    alt="icon-search"
                  />
                  <div className="search inter-normal-slate-gray-14px">
                    Search
                  </div>
                </div>
              </div>
              <div className="frame-29">
                <div className="category inter-semi-bold-tundora-16px">
                  Category
                </div>
                <div className="frame-290">
                  <div className="frame-297">
                    <div className="all inter-normal-blue-dianne-14px">
                      All samples
                    </div>
                    <img
                      className="frame-607"
                      src="frame-607-10@2x.svg"
                      alt="Frame 607"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-29">
                <div className="status inter-semi-bold-tundora-16px">
                  Status
                </div>
                <div className="frame-290">
                  <div className="frame-297">
                    <div className="all-1 inter-normal-blue-dianne-14px">
                      All
                    </div>
                    <img
                      className="frame-607-1"
                      src="frame-607-11@2x.svg"
                      alt="Frame 607"
                    />
                  </div>
                </div>
              </div>
              <a href="/my_files_2?search=&category=&status=">
                <div className="frame-291">
                  <div className="group-234">
                    <div className="search-1 inter-semi-bold-white-14px">
                      SEARCH
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <img className="line-106" src="line-106@2x.svg" alt="Line 106" />
            <div className="group-381">
              <div className="flex-col">
                <div className="submit-new-file inter-semi-bold-tundora-16px">
                  Submit new file
                </div>
                <a href="/metabase_input_1?uploader=researchers">
                  <div className="frame-292-1">
                    <div className="group-220">
                      <img
                        className="_fill0_wght400_grad0_opsz48-1"
                        src="assignment-fill0-wght400-grad0-opsz48-1-1@2x.svg"
                        alt="assignment_FILL0_wght400_GRAD0_opsz48 1"
                      />
                      <div className="researchers inter-semi-bold-blue-dianne-16px">
                        Researchers
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <a href="/metabase_input_1?uploader=clinicians">
                <div className="frame-293">
                  <div className="group-220-1">
                    <img
                      className="_fill0_wght400_grad0_opsz48-1"
                      src="stethoscope-fill0-wght400-grad0-opsz48-1-1@2x.svg"
                      alt="stethoscope_FILL0_wght400_GRAD0_opsz48 1"
                    />
                    <div className="clinicians inter-semi-bold-blue-dianne-16px">
                      Clinicians
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="frame-490">
            <div className="frame-488">
              <div className="all-samples inter-semi-bold-blue-dianne-20px">
                All Samples
              </div>
              <div className="group-286">
                <div className="frame-487">
                  <img
                    className="frame-24"
                    src="frame-244@2x.svg"
                    alt="Frame 244"
                  />
                  <div className="frame-486">
                    <div className="group-236">
                      <div className="overlap-group-1">
                        <div className="number-2 number-3 inter-semi-bold-tundora-14px">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="group-23">
                      <div className="number inter-semi-bold-slate-gray-14px">
                        2
                      </div>
                    </div>
                    <div className="group-23">
                      <div className="number-1 number-3 inter-semi-bold-slate-gray-14px">
                        3
                      </div>
                    </div>
                    <div className="group-23">
                      <div className="number-1 number-3 inter-semi-bold-slate-gray-14px">
                        4
                      </div>
                    </div>
                    <div className="group-240">
                      <div className="number inter-semi-bold-slate-gray-14px">
                        5
                      </div>
                    </div>
                  </div>
                  <img
                    className="frame-24"
                    src="frame-243@2x.svg"
                    alt="Frame 243"
                  />
                </div>
              </div>
            </div>
            <div className="frame-485">
              <div className="frame-479 inter-semi-bold-blue-dianne-14px">
                <div className="frame-460-1">
                  <div className="file-id inter-semi-bold-blue-dianne-14px">
                    File ID
                  </div>
                </div>
                <div className="frame-4">
                  <div className="service">Service</div>
                  <img
                    className="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next-11@2x.svg"
                    alt="material-symbols:navigate-next"
                  />
                </div>
                <div className="frame-4">
                  <div className="submitted-date">Submitted date</div>
                  <img
                    className="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next-12@2x.svg"
                    alt="material-symbols:navigate-next"
                  />
                </div>
                <div className="frame-458">
                  <div className="status-1">Status</div>
                </div>
                <div className="frame-459">
                  <div className="download">Download</div>
                </div>
              </div>
              {allSamplesObjectRender}
              {/* <div className="frame-484">
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="clinical inter-normal-tundora-14px">
                      Clinical
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="frame-276">
                      <div className="complete inter-normal-japanese-laurel-14px">
                        Complete
                      </div>
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="address inter-normal-persian-blue-14px">
                        2 files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="clinical-6 inter-normal-tundora-14px">
                      Clinical
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="submitted inter-normal-tundora-14px">
                      Submitted
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="x2-files-3 inter-normal-tundora-14px">
                        20%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="place inter-normal-tundora-14px">
                      Research
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="frame-280">
                      <div className="address-1 address-9 inter-normal-red-14px">
                        2 Issue(s)
                      </div>
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="x2-files-3 inter-normal-tundora-14px">
                        20%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="clinical-6 inter-normal-tundora-14px">
                      Clinical
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="completed inter-normal-tundora-14px">
                      Completed
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="address-2 address-9 inter-normal-persian-blue-14px">
                        2 files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="place-4 inter-normal-tundora-14px">
                      Research
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="completed-7 inter-normal-tundora-14px">
                      Completed
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="address-3 address-9 inter-normal-persian-blue-14px">
                        2 files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="clinical-6 inter-normal-tundora-14px">
                      Clinical
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="completed-7 inter-normal-tundora-14px">
                      Completed
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="address-4 address-9 inter-normal-persian-blue-14px">
                        2 files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="clinical-6 inter-normal-tundora-14px">
                      Clinical
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="completed-7 inter-normal-tundora-14px">
                      Completed
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="address-5 address-9 inter-normal-persian-blue-14px">
                        2 files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="place-4 inter-normal-tundora-14px">
                      Research
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="completed-7 inter-normal-tundora-14px">
                      Completed
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="address-6 address-9 inter-normal-persian-blue-14px">
                        2 files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-4-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="place-4 inter-normal-tundora-14px">
                      Research
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="completed-7 inter-normal-tundora-14px">
                      Completed
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="address-7 address-9 inter-normal-persian-blue-14px">
                        2 files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-488-1">
                  <div className="frame-460">
                    <div className="gh-123325-10 inter-normal-tundora-14px">
                      GH-123325
                    </div>
                  </div>
                  <div className="frame-461">
                    <div className="clinical-6 inter-normal-tundora-14px">
                      Clinical
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="date-10 inter-normal-tundora-14px">
                      11/13/2022
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="completed-7 inter-normal-tundora-14px">
                      Completed
                    </div>
                  </div>
                  <div className="frame-464">
                    <div className="x2-files">
                      <div className="address-8 address-9 inter-normal-persian-blue-14px">
                        2 files
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
