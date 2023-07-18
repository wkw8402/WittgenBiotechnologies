import "../styling/LandingPage.css";
import React, { useState } from 'react';
import Modal from './Popup';
import { HashLink } from 'react-router-hash-link';

export default function () {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <link rel="stylesheet" type="text/css" href="minimalist-green-responsive.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="minimalist-green-responsive"
      />
    <div class="minimalist-green-responsive screen">
      <div class="padding-fitter"></div>
      <div class="frame-160">
      <a href="https://www.wittgenbio.com" style= {{ textDecoration: 'none', color: 'inherit' }}>
        <div class="witt-gen-biotechnologies">
        <img
                      class="witt-gen-biotechnologies"
                      src="logo_2.svg"
                      alt="WittGen Biotechnologies"
                    />
        </div>
        </a>
        <div class="frame-159 oxygen-normal-blue-dianne-21px">
          <div class="group-176">
            <img class="vector-14" src="vector-14.svg" alt="Vector 14" />
            <HashLink smooth to="/#ourPlatform"  class="our-platform oxygen-normal-blue-dianne-21px" style= {{ textDecoration: 'none', color: '#25474F' }}>Our platform</HashLink>
          </div>
          <HashLink smooth to="/#contact" class="about-us" style= {{ textDecoration: 'none', color: '#25474F' }}>Contact Us</HashLink>
          <a href="#" style= {{ textDecoration: 'none', color: 'inherit' }} onClick={openModal}>
          <div class="sign-up">Sign Up</div>
          </a>
          <Modal open={modalOpen} close={closeModal} header="">
                    </Modal>
           <a href="/login" className="my-portal" style= {{ textDecoration: 'none', color: '#25474F' }}>
            <div class="my-portal">My portal</div>
            </a>
          {/* <div class="component-9">
          <a href="/login" className="my-portal" style= {{ textDecoration: 'none', color: '#25474F' }}>
            <div class="my-portal">My portal</div>
            <img class="line-54" src="line-54.svg" alt="Line 54" />
            </a>
          </div> */}
        </div>
      </div>
      <div class="group-468">
        <div class="overlap-group2">
          <img class="rectangle-270" src="rectangle-270.svg" alt="Rectangle 270" />
          <div class="frame-472">
            <div class="fast-forward-to-your">Fast forward your</div>
            <div class="group-472">
              <div class="overlap-group-1">
                <div class="single-cell-level-cancer">Single Cell Level Cancer Diagnosis</div>
                <div class="title">with Machine Learning</div>
              </div>
            </div>
            <p class="using-high-resolutio">
              Using high resolution profiling to make cancer<br />Identifiable, Predictable &amp; Curable
            </p>
          </div>
          <a href="#" style= {{ textDecoration: 'none', color: 'inherit' }} onClick={openModal}>
          <div class="overlap-group1"><div class="request-pdf-demo valign-text-middle">Request PDF Demo</div></div>
          </a>
          
          <div class="frame-489">
            <a href="https://twitter.com/wittgen_bio" style= {{ textDecoration: 'none', color: 'inherit' }} target="_blank">
            <img class="icon-twitter" src="twitter---negative.svg" alt="icon-twitter" />
            </a>
            <a href="https://www.linkedin.com/company/wittgen-biotechnologies/" style= {{ textDecoration: 'none', color: 'inherit' }} target="_blank">
            <img class="icon-linkedin" src="linkedin---negative.svg" alt="icon-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div class="line-right-rec">
        <div class="overlap-group">
          <div class="rectangle-188"></div>
          <img class="line-57" src="line-57.svg" alt="Line 57" />
        </div>
      </div>
      <div class="frame-469">
        <div class="frame-470">
          <p class="timing-is-crucial-in oxygen-normal-blue-dianne-35px">
            Timing is crucial in cancer treatment<br />Every medical decision is critical
          </p>
          <p class="although-conventiona">
              Although conventional tumor profiling is a common medical practice, it has limitations in identifying the
              subtle intratumor heterogeneity. This can result in lengthy and high-risk cancer treatment processes that
              may not effectively target all subpopulations of cancer cells within the tumor.
            </p>
        </div>
        <p class="so-how-can-we-overco"><br />So how can we overcome cancer heterogeneity?</p>
      </div>
      <div class="line-left-rec">
        <div class="rectangle-277"></div>
        <img class="line-78" src="line-78.svg" alt="Line 78" />
      </div>
      <div class="frame-474">
        <p class="simply-upload-your-p oxygen-normal-blue-dianne-35px">
          <span class="oxygen-normal-blue-dianne-35px">Simply upload your patient scRNA-seq data,<br /></span
          ><span class="span1">our seamless clinical decision support platform does</span>
        </p>
      </div>
      <img class="minimalist-green-responsive-item" src="vector-1.svg" alt="Vector" />
      <p class="label-cell-types-with-no-errors oxygen-light-blue-dianne-32px">
        <span class="oxygen-light-blue-dianne-32px">Visualize cell composition in your tumor biopsy</span>
      </p>
      <img class="minimalist-green-responsive-item" src="frame.svg" alt="Frame" />
      <p class="minimalist-green-responsive-item-1 minimalist-green-responsive-item-3 oxygen-light-blue-dianne-32px">
        <span class="oxygen-light-blue-dianne-32px">
          Predict histological subtype &amp; grade of each cancer cell in the tumor
          </span>
      </p>
      <img class="minimalist-green-responsive-item" src="vector.svg" alt="Vector" />
      <p class="minimalist-green-responsive-item-1 minimalist-green-responsive-item-3 oxygen-light-blue-dianne-32px">
        <span class="oxygen-light-blue-dianne-32px">
        Profile molecular characteristics such as biomarkers expressions, <br/>
        SNV/CNV and activated pathways <span class="span1-1">at the cell level</span>
        </span>
      </p>
      <div class="padding-fitter"></div>
      <a href="#" style= {{ textDecoration: 'none', color: 'inherit' }} onClick={openModal}>
      <div class="content-smallbutton">
        <div class="overlap-group4"><p class="save-your-time-cost">Get more information  &amp; maximize therapy </p></div>
      </div>
      </a>
      <div class="padding-fitter"></div>
      <div class="line-right-rec">
        <div class="overlap-group">
          <div class="rectangle-188"></div>
          <img class="line-57" src="line-57-1.svg" alt="Line 57" />
        </div>
      </div>
      <div class="frame-474-1 frame-474-3">
        <p class="let-us-help-your-cut oxygen-normal-blue-dianne-35px">
          <span class="oxygen-normal-blue-dianne-35px"
            >Let us help your cutting-edge scRNA-seq clinical research<br /></span
          ><span class="span1">By collaborating with us, you can<br /></span><span class="span2"></span>
        </p>
      </div>
      <img class="minimalist-green-responsive-item" src="iconsax-bold-flashy.svg" alt="Iconsax/Bold/flashy" />
      <p class="expedite-your-resear oxygen-light-blue-dianne-32px">Expedite your research progress in a jiffy</p>
      <img
        class="minimalist-green-responsive-item"
        src="iconsax-bold-lampcharge.svg"
        alt="Iconsax/Bold/lampcharge"
      />
      <div class="minimalist-green-responsive-item-2 minimalist-green-responsive-item-3 oxygen-light-blue-dianne-32px">
        Gain robust deeper insights
      </div>
      <img class="minimalist-green-responsive-item" src="iconsax-bold-stellar.svg" alt="Iconsax/Bold/stellar" />
      <div class="minimalist-green-responsive-item-2 minimalist-green-responsive-item-3 oxygen-light-blue-dianne-32px">
        Unearth groundbreaking novel discoveries
      </div>
      <div class="padding-fitter"></div>
      <a href="#" style= {{ textDecoration: 'none', color: 'inherit' }} onClick={openModal}>
      <div class="content-smallbutton-1">
        <div class="overlap-group6">
          <div class="explore-witt-gen-platform valign-text-middle">Explore WittGen Platform</div>
        </div>
      </div>
      </a>
      <div class="padding-fitter"></div>
      <img class="line-no-rec" src="line-norec.svg" alt="line-noRec" />
      <div class="here-our-approach">
        <div class="group-474">
          <div class="overlap-group-2">
            <img class="rectangle-189" src="rectangle-189.png" alt="Rectangle 189" />
            <p class="heres-our-approach-to-sc-rna-sequencing">
              <span class="oxygen-normal-blue-dianne-30px">Here’s our approach to<br /></span
              ><span class="span1-4">scRNA Sequencing</span>
            </p>
          </div>
        </div>
      </div>
      <div class="frame-474-2 frame-474-3">
        <p class="deep-single-cell-sta">
          Deep single-cell state characterization can improve cancer therapies and offer insights beyond disease care by
          understanding tumor heterogeneity for more targeted treatment strategies.
        </p>
      </div>
      <div class="padding-fitter"></div>
      <div class="frame-475">
        <div class="frame-475-1 frame-475-4">
          <img class="line" src="line-61.svg" alt="Line 61" />
          <p class="increase-the-complete-response-rate oxygen-normal-blue-dianne-30px">
          Optimize <br/> therapeutic strategies 
          </p>
        </div>
        <div class="optimize-neo">
          <img class="line" src="line-61.svg" alt="Line 60" />
          <div class="optimize-neoadjuvent-treatment oxygen-normal-blue-dianne-30px">
          Increase <br/> complete response rate
          </div>
        </div>
        <div class="frame-476">
          <img class="line" src="line-61.svg" alt="Line 59" />
          <p class="improve-patients-quality-of-life oxygen-normal-blue-dianne-30px">
            Improve <br />patients’ quality of life
          </p>
        </div>
      </div>
      <img class="line-6" src="line-62.svg" alt="Line 62" />
      <div class="frame-475-2 frame-475-4">
        <p class="with-sc-rna-data-we-do oxygen-light-blue-dianne-40px">With scRNA data, we do</p>
        <div class="frame-475-3 frame-475-4">
          <div class="group-475">
            <p class="identify-tumor-molec oxygen-normal-blue-dianne-21px">
              Identify tumor molecular pheotypes at cell level
            </p>
            <div class="high-resolution-tumor-classification oxygen-bold-blue-dianne-30px">
              High resolution tumor classification
            </div>
          </div>
          <img class="line-7" src="line-76.svg" alt="Line 76" />
          <div class="group-476">
            <p class="prognostic-therapeut oxygen-normal-blue-dianne-21px">
              Prognostic therapeutic markers associated with cancer pathway
            </p>
            <p class="new-tumor-biological-pathway-detection oxygen-bold-blue-dianne-30px">
              New tumor biological pathway detection
            </p>
          </div>
          <img class="line-7" src="line-76.svg" alt="Line 77" />
          <div class="group-477">
            <div class="accelerates-clinical-trials oxygen-normal-blue-dianne-21px">Accelerates clinical trials</div>
            <p class="first-in-best-in-class-drug-discovery oxygen-bold-blue-dianne-30px">
              First-in/ Best-in class drug discovery
            </p>
          </div>
        </div>
      </div>
      <img class="line-6" src="line-62.svg" alt="Line 63" />
      <div class="frame-478">
        <div class="how-sc-rna-compares oxygen-light-blue-dianne-40px">How scRNA Compares</div>
      </div>
      <div class="group-481">
        <div class="overlap-group7">
          <div class="frame-482">
            <img class="line-64" src="line-64.svg" alt="Line 64" />
            <div class="rectangle-1"></div>
            <div class="rectangle-1"></div>
            <div class="rectangle-1"></div>
          </div>
          <div class="compare-table oxygen-bold-blue-dianne-21px">
            <div class="col1">
              <div class="text-1 valign-text-middle"></div>
              <div class="col1-item valign-text-middle">Pathological Subtyping</div>
              <div class="col1-item valign-text-middle">Biomarker Profiling (quantitative)</div>
              <div class="col1-item valign-text-middle">Biomarker Profiling (qualitative)</div>
              <div class="col1-item valign-text-middle">Molecular Characterization</div>
              <div class="col1-item valign-text-middle">Cell-level Diagnosis</div>
              <div class="col1-item valign-text-middle">Time</div>
              <div class="col1-item valign-text-middle">Behavior Prediction</div>
            </div>
            <div class="compare-table-item">
              <div class="pathologic-analysis valign-text-middle">Pathologic analysis</div>
              <div class="text valign-text-middle">****</div>
              <div class="text valign-text-middle">***</div>
              <div class="text valign-text-middle">**</div>
              <div class="text valign-text-middle">**</div>
              <div class="text valign-text-middle">**</div>
              <div class="text valign-text-middle">***</div>
              <div class="text valign-text-middle">**</div>
            </div>
            <div class="compare-table-item">
              <div class="panel-sequencing valign-text-middle">Panel Sequencing</div>
              <div class="text valign-text-middle">*</div>
              <div class="text valign-text-middle">**</div>
              <div class="text valign-text-middle">****</div>
              <div class="text valign-text-middle">****</div>
              <div class="text valign-text-middle">*</div>
              <div class="text valign-text-middle">**</div>
              <div class="text valign-text-middle">***</div>
            </div>
            <div class="compare-table-item">
              <div class="sc-rna-seq valign-text-middle">scRNA-seq</div>
              <div class="text valign-text-middle">****</div>
              <div class="text valign-text-middle">****</div>
              <div class="text valign-text-middle">***</div>
              <div class="text valign-text-middle">****</div>
              <div class="text valign-text-middle">****</div>
              <div class="text valign-text-middle">**</div>
              <div class="text valign-text-middle">****</div>
            </div>
          </div>
        </div>
      </div>
      <div class="group-485">
        <div class="flex-col">
          <div class="frame-482-1 frame-482-3">
            <img class="line-71" src="line-71.svg" alt="Line 71" />
            <div class="frame-483"></div>
          </div>
          <div class="frame-482-2 frame-482-3">
            <div class="group-483"><div id="ourPlatform" class="our-platform-1 oxygen-bold-blue-dianne-40px">Our platform</div></div>
            <div class="group-487">
              <div class="overlap-group-3">
                {/* <img class="rectangle-276" src="rectangle-276.svg" alt="Rectangle 276" /> */}
                <div class="frame-484">
                  <p class="clinical-cancer-test-analysis-service">Clinical cancer test analysis service</p>
                  <div class="frame-488">
                    <p class="clinicians-can-direc">
                      Clinicians can directly submit scRNA-seq data from patient biopsies to our web-based platform,
                      enabling them to receive a precise report on cell-level statistics and machine learning-based
                      predictions, including the tumor subtype and grade, within a matter of minutes to hours. These insights
                      provide clear guidance for clinical decision-making and enhance the efficacy of treatment
                      protocols.
                    </p>
                    <div class="dummy-fitter"></div>
                  </div>
                  <a href="#" style= {{ textDecoration: 'none', color: 'inherit' }} onClick={openModal}>
                  <div class="group-175">
                    <div class="learn-more">Learn more</div>
                    <img class="line-76" src="line-76-1.svg" alt="Line 76" />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="frame-486"></div>
          </div>
          <img class="line-62-1" src="line-62-1.svg" alt="Line 62" />
        </div>
      </div>
      <div class="frame-488-1">
        <div class="our-services-include oxygen-bold-blue-dianne-40px">Our services include</div>
        <div class="frame-489-1 frame-489-3">
          <div class="service-row">
            <div class="component-8">
              <div class="cancer-origin-tracking oxygen-normal-blue-dianne-30px">Cancer origin tracking</div>
              <div class="group-161-2 group-161-4">
                <div class="line-container">
                  <img class="line-62" src="line-62-2.svg" alt="Line 62" />
                  <img class="line-63" src="line-63-1.svg" alt="Line 63" />
                </div>
              </div>
            </div>
            <div class="group-1">
              <div class="risk-scoring-prediction oxygen-normal-blue-dianne-30px">Pathological subtype &amp; grade prediction</div>
              <div class="group-161">
                <div class="line-container">
                  <img class="line-62" src="line-62-3.svg" alt="Line 62" />
                  <img class="line-63" src="line-63-2.svg" alt="Line 63" />
                </div>
              </div>
            </div>
            <div class="group-171">
              <div class="risk-scoring-prediction oxygen-normal-blue-dianne-30px">Risk score with pathway analysis</div>
              <div class="group-161">
                <div class="line-container">
                  <img class="line-62" src="line-62-4.svg" alt="Line 62" />
                  <img class="line-63" src="line-63-3.svg" alt="Line 63" />
                </div>
              </div>
            </div>
          </div>
          <div class="service-row">
            <div class="group-1">
              <div class="level-inference oxygen-normal-blue-dianne-30px">SNV &amp; CNV</div>
              <div class="group-161-1 group-161-4">
                <div class="line-container">
                  <img class="line-62" src="line-62-5.svg" alt="Line 62" />
                  <img class="line-63" src="line-63-4.svg" alt="Line 63" />
                </div>
              </div>
            </div>
            <div class="group-170">
              <div class="risk-scoring-prediction oxygen-normal-blue-dianne-30px">Drug recommendation</div>
              <div class="group-161-3 group-161-4">
                <div class="line-container-1">
                  <img class="line-62-2" src="line-62-6.svg" alt="Line 62" />
                  <img class="line-63-1" src="line-63-5.svg" alt="Line 63" />
                </div>
              </div>
            </div>
            <div class="group-172">
              <div class="distinguished-gene-profiles oxygen-normal-blue-dianne-30px">Novel biomarker identification</div>
              <div class="group-161-1 group-161-4">
                <div class="line-container">
                  <img class="line-62" src="line-62-4.svg" alt="Line 62" />
                  <img class="line-63" src="line-63-3.svg" alt="Line 63" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="frame-79">
        <img class="line-75" src="line-75.svg" alt="Line 75" />
        <div class="frame-489-2 frame-489-3">
        <a href="#" style= {{ textDecoration: 'none', color: 'inherit' }} onClick={openModal}>
          <div class="group-156">
            <div class="overlap-group-4">
              <div class="sign-up-1">Sign up</div>
              <div class="rectangle-18"></div>
              <div class="rectangle-18"></div>
            </div>
          </div>
          </a>
          <div id="contact" class="footer-contact">
            <div class="frame-488-2 oswald-normal-blue-dianne-21px">
              <div class="frame-488-item">+1 (510) 710 3352</div>
              <div class="frame-488-item">
                <span class="oswald-normal-blue-dianne-21px">info</span
                ><a href="mailto:yun@wittgenbio.com" target="_blank"
                  ><span class="oswald-normal-blue-dianne-21px">@wittgenbio.com</span></a
                >
              </div>
              <div class="frame-490">
              <a href="https://twitter.com/wittgen_bio" style= {{ textDecoration: 'none', color: 'inherit' }} target="_blank">
                <img class="icon" src="twitter---original.svg" alt="icon-twitter" /> </a>
                <a href="https://www.linkedin.com/company/wittgen-biotechnologies/" style= {{ textDecoration: 'none', color: 'inherit' }} target="_blank">
                <img class="icon" src="linkedin---original.svg" alt="icon-linkedin" /> </a>
              </div>
            </div>
            <div class="place">Contact</div>
          </div>
        </div>
        <div class="group-157"><p class="copyright">Copyright © 2023 Wittgen Inc.</p></div>
      </div>
    </div>
    </>
  );
}
