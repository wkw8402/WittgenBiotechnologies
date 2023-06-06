import "../styling/Payment2.css";
export default function () {
  let dataObject = [
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-23421",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "Upload File",
      databaseFile3: "",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "",
      databaseFile2: "Upload File",
      databaseFile3: "",
      dob: "11/11/2000",
    },
  ];

  let dataObjectRender = dataObject.map((element) => {
    return (
      <>
        <div className="frame-559">
          <div className="frame-55-3">
            <div className="component-102" />
          </div>
          <div className="frame-59">
            <div className="component-38">
              <div className="gh-1234567-5 inter-normal-slate-gray-14px">
                {element.sample}
              </div>
            </div>
          </div>
          <div className="component-1">
            <div className="cell-ranger inter-normal-tundora-14px">
              {element.databaseCategory}
            </div>
            <img
              className="material-symbolsnavigate-next"
              src="material-symbols-navigate-next-5@2x.svg"
              alt="material-symbols:navigate-next"
            />
          </div>
          <div className="component">
            <div className="gh-1234567 gh inter-normal-persian-blue-14px">
              {element.databaseFile1}
            </div>
          </div>
          <div className="component">
            <div className="gh-1234567 gh inter-normal-persian-blue-14px">
              {element.databaseFile2}
            </div>
          </div>
          <div className="component-63">
            <div className="gh-1234567 gh inter-normal-persian-blue-14px">
              {element.databaseFile3}
            </div>
          </div>
          <div className="component">
            <div className="date inter-normal-tundora-14px">{element.dob}</div>
          </div>
          <div className="component-101" />
        </div>
      </>
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
      <link rel="stylesheet" type="text/css" href="apply-payment-loading.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-payment-loading"
      />
      <div className="container-center-horizontal-payment2">
        <div className="apply-payment-loading screen-payment2">
          <div className="group-438">
            <div className="overlap-group2">
              <div className="group-184">
                <div className="overlap-group">
                  <div className="witt-gen-portal oxygen-bold-blue-dianne-28px">
                    <span className="oxygen-bold-blue-dianne-28px">
                      WittGen
                    </span>
                    <span className="oxygen-light-blue-dianne-28px">
                      Portal
                    </span>
                  </div>
                </div>
                <img className="line-79" src="line-79-9@1x.svg" alt="Line 79" />
              </div>
              <div className="component-13">
                <img
                  className="icon-home icon"
                  src="home-fill0-wght400-grad0-opsz48-1-9@2x.svg"
                  alt="icon-home"
                />
                <div className="dashboard inter-normal-blue-dianne-16px">
                  Dashboard
                </div>
              </div>
              <div className="component-14">
                <img
                  className="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1-9@2x.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <div className="my-files my inter-semi-bold-blue-dianne-16px">
                  My files
                </div>
              </div>
              <div className="component-22">
                <img
                  className="logout_fill0_wght400_grad0_opsz48-1"
                  src="logout-fill0-wght400-grad0-opsz48-1-9@2x.svg"
                  alt="logout_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="logout inter-normal-blue-dianne-16px">
                  Logout
                </div>
              </div>
              <div className="component-13-1">
                <img
                  className="import_contacts_fill"
                  src="import-contacts-fill0-wght400-grad0-opsz48-1-9@2x.svg"
                  alt="import_contacts_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="tutorial inter-normal-blue-dianne-16px">
                  Tutorial
                </div>
              </div>
              <div className="component-21">
                <img
                  className="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1-9@2x.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div className="cost-usage inter-normal-blue-dianne-16px">
                  Cost &amp; Usage
                </div>
              </div>
              <div className="component-23">
                <img
                  className="icon-user icon"
                  src="person-fill0-wght400-grad0-opsz48-1-9@2x.svg"
                  alt="icon-user"
                />
                <div className="my-profile my inter-normal-blue-dianne-16px">
                  My Profile
                </div>
              </div>
              <div className="component-18">
                <img
                  className="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1-9@2x.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div className="faq-support inter-normal-blue-dianne-16px">
                  FAQ / Support
                </div>
              </div>
              <div className="component-19">
                <img
                  className="icon-call icon"
                  src="call-fill0-wght400-grad0-opsz48--1--1-9@2x.svg"
                  alt="icon-call"
                />
                <div className="contact-us inter-normal-blue-dianne-16px">
                  Contact Us
                </div>
              </div>
              <div className="component-24">
                <img
                  className="icon-settings icon"
                  src="settings-fill0-wght400-grad0-opsz48-1-9@2x.svg"
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
              <div className="component-34">
                <div className="researchers inter-semi-bold-blue-dianne-14px">
                  Back
                </div>
              </div>
              <div className="component-33">
                <div className="researchers-3 inter-semi-bold-white-14px">
                  Submit
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-252" />
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
                  <div className="database-input database inter-normal-japanese-laurel-16px">
                    Database Input
                  </div>
                  <div className="rectangle-228" />
                </div>
                <div className="frame-49">
                  <div className="pay-submit inter-semi-bold-blue-dianne-16px">
                    Pay &amp; Submit
                  </div>
                  <div className="rectangle-228" />
                </div>
              </div>
              <div className="frame">
                <div className="component-33-1">
                  <div className="discard-exit inter-semi-bold-blue-dianne-14px">
                    Discard &amp; Exit
                  </div>
                </div>
                <div className="component-31">
                  <div className="researchers-2 researchers-3 inter-semi-bold-white-14px">
                    Save &amp; Exit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-248" />
          <div className="rectangle-253" />
          <div className="frame-577">
            <div className="frame-562">
              <div className="group-447">
                <div className="frame-564">
                  <p className="upgrade-freemium-to-6-months inter-semi-bold-blue-dianne-20px">
                    Upgrade Freemium to 6 months
                  </p>
                  <div className="frame-565">
                    <div className="group-456">
                      <p className="agree-to-wittgens-u inter-normal-blue-dianne-14px">
                        Agree to Wittgen’s use of sample &amp; data information
                        and enjoy 6 months unlimited access to Wittgen’s
                        services for free. Effective immediately.
                      </p>
                      <div className="group-402">
                        <div className="component-92">
                          <img
                            className="material-symbolscheck-small-1"
                            src="material-symbols-check-small-5@2x.svg"
                            alt="material-symbols:check-small"
                          />
                        </div>
                        <p className="i-have-read-and-agree-to-the-website inter-normal-black-14px-2">
                          <span className="inter-normal-black-14px">
                            I have read and agree to the website
                          </span>
                          <span className="inter-normal-cerulean-14px" />
                        </p>
                        <div className="terms-and-conditions inter-normal-cerulean-14px">
                          terms and conditions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-575">
                <div className="frame-container">
                  <div className="frame-568">
                    <div className="overview inter-semi-bold-blue-dianne-16px">
                      Overview
                    </div>
                    <div className="frame">
                      <div className="frame">
                        <div className="frame-290">
                          <div className="frame-234">
                            <img
                              className="icon"
                              src="ri-search-2-line-1@2x.svg"
                              alt="icon-search"
                            />
                            <div className="search inter-normal-slate-gray-14px">
                              Search
                            </div>
                          </div>
                        </div>
                        <div className="frame-319">
                          <img
                            className="verified_fill1_wght400_grad0_opsz48-1"
                            src="verified-fill1-wght400-grad0-opsz48-1-3@2x.svg"
                            alt="verified_FILL1_wght400_GRAD0_opsz48 1"
                          />
                          <div className="group-297">
                            <div className="apply-promotion inter-normal-cerulean-14px">
                              Apply Promotion
                            </div>
                          </div>
                        </div>
                        <div className="frame-456">
                          <img
                            className="icsharp-delete"
                            src="ic-sharp-delete-7@2x.svg"
                            alt="ic:sharp-delete"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-576">
                    <div className="frame-container-1">
                      <div className="frame-560">
                        <div className="frame-569">
                          <div className="frame-55">
                            <div className="frame-55-3">
                              <div className="component-102" />
                            </div>
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
                            <div className="component-10">
                              <div className="database-file database inter-semi-bold-slate-gray-14px">
                                Database file
                              </div>
                            </div>
                            <div className="component-10-1" />
                            <div className="component-10-1" />
                            <div className="component-10">
                              <div className="dob inter-semi-bold-slate-gray-14px">
                                D.O.B
                              </div>
                            </div>
                          </div>
                          <div className="frame-617">
                            <div className="frame-container-2">
                              {/* <div className="frame-55">
                                <div className="frame-55-2 frame-55-3">
                                  <div className="component-102-1">
                                    <img
                                      className="material-symbolscheck-small"
                                      src="material-symbols-check-small-6@2x.svg"
                                      alt="material-symbols:check-small"
                                    />
                                  </div>
                                </div>
                                <div className="frame-59">
                                  <div className="component-38">
                                    <div className="gh-1234567-5 inter-normal-slate-gray-14px">
                                      GH-1234567
                                    </div>
                                    <img
                                      className="verified_fill1_wght400_grad0_opsz48-1"
                                      src="verified-fill1-wght400-grad0-opsz48-1-4@2x.svg"
                                      alt="verified_FILL1_wght400_GRAD0_opsz48 1"
                                    />
                                  </div>
                                </div>
                                <div className="component-1">
                                  <div className="seurat inter-normal-tundora-14px">
                                    Seurat
                                  </div>
                                  <img
                                    className="material-symbolsnavigate-next"
                                    src="material-symbols-navigate-next-3@2x.svg"
                                    alt="material-symbols:navigate-next"
                                  />
                                </div>
                                <div className="component">
                                  <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                                    GH-1234567
                                  </div>
                                </div>
                                <div className="component-101" />
                                <div className="component-9" />
                                <div className="component">
                                  <div className="date inter-normal-tundora-14px">
                                    Nov 12, 1976
                                  </div>
                                </div>
                              </div> */}
                              {/* <div className="frame-558">
                                <div className="frame-55-2 frame-55-3">
                                  <div className="component-102-1">
                                    <img
                                      className="material-symbolscheck-small"
                                      src="material-symbols-check-small-7@2x.svg"
                                      alt="material-symbols:check-small"
                                    />
                                  </div>
                                </div>
                                <div className="frame-59">
                                  <div className="component-38">
                                    <div className="gh-1234567-5 inter-normal-slate-gray-14px">
                                      GH-1234567
                                    </div>
                                    <img
                                      className="verified_fill1_wght400_grad0_opsz48-1"
                                      src="verified-fill1-wght400-grad0-opsz48-1-5@2x.svg"
                                      alt="verified_FILL1_wght400_GRAD0_opsz48 1"
                                    />
                                  </div>
                                </div>
                                <div className="component-1">
                                  <div className="fast-queue inter-normal-tundora-14px">
                                    Fast Queue
                                  </div>
                                  <img
                                    className="material-symbolsnavigate-next"
                                    src="material-symbols-navigate-next-4@2x.svg"
                                    alt="material-symbols:navigate-next"
                                  />
                                </div>
                                <div className="component">
                                  <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                                    GH-1234567
                                  </div>
                                </div>
                                <div className="component">
                                  <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                                    GH-1234567
                                  </div>
                                </div>
                                <div className="component-9" />
                                <div className="component-99">
                                  <div className="date-1 inter-normal-tundora-14px">
                                    Nov 12, 1976
                                  </div>
                                </div>
                              </div> */}
                              {dataObjectRender}
                              {/* <div className="frame-559">
                                <div className="frame-55-3">
                                  <div className="component-102" />
                                </div>
                                <div className="frame-59">
                                  <div className="component-38">
                                    <div className="gh-1234567-5 inter-normal-slate-gray-14px">
                                      GH-1234567
                                    </div>
                                  </div>
                                </div>
                                <div className="component-1">
                                  <div className="cell-ranger inter-normal-tundora-14px">
                                    Cell ranger
                                  </div>
                                  <img
                                    className="material-symbolsnavigate-next"
                                    src="material-symbols-navigate-next-5@2x.svg"
                                    alt="material-symbols:navigate-next"
                                  />
                                </div>
                                <div className="component">
                                  <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                                    GH-1234567
                                  </div>
                                </div>
                                <div className="component">
                                  <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                                    GH-1234567
                                  </div>
                                </div>
                                <div className="component-63">
                                  <div className="gh-1234567 gh inter-normal-persian-blue-14px">
                                    GH-1234567
                                  </div>
                                </div>
                                <div className="component-101" />
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-573">
                        <div className="frame-449">
                          <img
                            className="iontriangle-sharp"
                            src="ion-triangle-sharp-24@2x.svg"
                            alt="ion:triangle-sharp"
                          />
                          <div className="rectangle-235" />
                        </div>
                        <img
                          className="iontriangle-sharp-1"
                          src="ion-triangle-sharp-23@2x.svg"
                          alt="ion:triangle-sharp"
                        />
                      </div>
                    </div>
                    <div className="frame-572">
                      <div className="frame-449">
                        <img
                          className="iontriangle-sharp-2"
                          src="ion-triangle-sharp-22@2x.svg"
                          alt="ion:triangle-sharp"
                        />
                        <div className="rectangle-235-1" />
                      </div>
                      <img
                        className="iontriangle-sharp-3"
                        src="ion-triangle-sharp-21@2x.svg"
                        alt="ion:triangle-sharp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-438-1">
              <div className="group-431">
                <div className="payment inter-semi-bold-blue-dianne-20px">
                  Payment
                </div>
              </div>
              <div className="group-432">
                <div className="group-423">
                  <div className="overlap-group-1">
                    <div className="frame-214">
                      <div className="membership inter-semi-bold-silver-16px">
                        Membership
                      </div>
                    </div>
                    <div className="frame-32">
                      <div className="invoice inter-semi-bold-silver-16px">
                        Invoice
                      </div>
                    </div>
                    <div className="frame-32">
                      <div className="debit-credit-card inter-semi-bold-silver-16px">
                        Debit/Credit card
                      </div>
                    </div>
                    <div className="frame-327">
                      <div className="invoice-1 inter-semi-bold-silver-16px">
                        Invoice
                      </div>
                    </div>
                    <div className="frame-215">
                      <div className="freemium inter-semi-bold-white-16px">
                        Freemium
                      </div>
                    </div>
                    <img
                      className="line-92"
                      src="line-92-1@1x.svg"
                      alt="Line 92"
                    />
                  </div>
                  <div className="pre-payment inter-semi-bold-silver-16px">
                    Pre-payment
                  </div>
                </div>
                <p className="your-freemium-ends-i inter-normal-tundora-16px">
                  <span className="inter-normal-tundora-16px">
                    Your Freemium ends in{" "}
                  </span>
                  <span className="span1 inter-semi-bold-tundora-16px">
                    June 17th, 2023
                  </span>
                  <span className="inter-normal-tundora-16px">
                    {" "}
                    (6 month upgrade applied).
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="frame-591">
            <div className="frame-590">
              <div className="frame-58">
                <div className="frame-58">
                  <div className="frame-582">
                    <div className="order-summary inter-normal-tundora-20px">
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
                    src="line-107-1@2x.svg"
                    alt="Line 107"
                  />
                </div>
                <div className="group-394">
                  <div className="group-393 inter-semi-bold-tundora-16px">
                    <div className="frame-416">
                      <div className="group-392">
                        <div className="samples">Samples</div>
                      </div>
                      <div className="group-389">
                        <div className="flex-row inter-normal-slate-gray-14px">
                          <div className="number">3</div>
                          <div className="x">x</div>
                          <div className="price">$100</div>
                        </div>
                      </div>
                    </div>
                    <div className="price-1">$300</div>
                  </div>
                </div>
              </div>
              <div className="frame-589">
                <div className="frame-588">
                  <div className="frame-587">
                    <div className="frame-58-1">
                      <div className="subtotal inter-normal-slate-gray-14px">
                        Subtotal:
                      </div>
                      <div className="price-2 inter-semi-bold-tundora-16px">
                        $300
                      </div>
                    </div>
                    <div className="frame-58-1">
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
                    src="line-112-1@2x.svg"
                    alt="Line 112"
                  />
                </div>
                <div className="frame-317">
                  <div className="group-427">
                    <div className="total-amount inter-normal-silver-14px">
                      Total amount
                    </div>
                    <h1 className="price-4 inter-semi-bold-silver-36px">
                      $330
                    </h1>
                  </div>
                  <div className="group-428">
                    <div className="freemium-1 inter-normal-cerulean-14px">
                      Freemium
                    </div>
                    <div className="price-5 inter-semi-bold-blue-dianne-36px">
                      $0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="line-108" src="line-108-1@2x.svg" alt="Line 108" />
        </div>
      </div>
    </>
  );
}
