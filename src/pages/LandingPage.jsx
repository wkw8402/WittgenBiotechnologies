/* eslint-disable */

import "../styling/LandingPage.css";
import React, { useState, useRef, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Modal from './Popup';
import { Helmet } from "react-helmet";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;  
  z-index: 1;
  width: 100%;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function () {

  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isDiagnosis, setIsDiagnosis] = useState(true);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  let navigate = useNavigate(); 
  const toHome = () => { 
    let path = '/'; 
    navigate(path);
  }

  const toLogin = () => { 
    let path = '/login'; 
    navigate(path);
    window.scrollTo(0, 0);
    console.log("toLogin")
  }

  const ref = useRef(null);
  const toContactFooter = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      openModal();
    }
  };

  const calculateMinHeight = () => {
    return `calc(100vh + ${document.documentElement.scrollHeight - document.documentElement.clientHeight}px)`;
  };

  return (
    <>
      {windowWidth >= 1920 
      ? 
      <div style={{ minHeight: calculateMinHeight(), overflow: 'hidden' }}>
        <div>
          <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=1920, maximum-scale=1.0" />
            <meta name="og:type" content="website" />
            <meta name="twitter:card" content="photo" />
          </Helmet>
          <div className="container-center-horizontal">
            <div
              class="landingpage-diagnosis-3 auto-animated screen"
              data-page="landingpage-diagnosis-3"
              data-screens="landingpage-diagnosis-3,landingpage-clinical-research"
            >
              <HeaderStyle>
              <div class="frame-631-C61RwL">
                <div class="frame-3452-P2NboM" onClick={() => {
                  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }} >
                  <div class="frame-621-08MuUF"/>
                  <div class="witt-gen-biotechnologies-08MuUF" onClick={toHome}>
                    <span class="span0-X47hLW">WittGen</span><span class="span1-X47hLW">Biotechnologies</span>
                  </div>
                </div>
                <div class="frame-620-P2NboM">
                  <div class="frame-619-cNbyrl" onClick={openModal} 
                  onmouseover><div class="sign-up-nGaw5V">Sign Up</div></div>
                  <div class="frame-620-cNbyrl" onClick={toLogin} onmouseover><div class="my-portal-SKGGs9">My portal</div></div>
                </div>
              </div>
              </HeaderStyle>

              <div class="frame-3547-C61RwL">
                <div class="frame-3488-Xw3ch0">
                  <div class="x2-MpaT6l"></div>
                  {/* email input 1920 */}

                  <div className="frame-3390-MpaT6l" onmouseover>
                      {inputEmail("frame-3387-n5UIe0", setEmail, handleKeyPress)}
                      <div className="frame-3388-n5UIe0" onClick={openModal}
                      ><div className="get-started-xkPIui">Get Started</div></div>
                  </div>

                  {/* email input 1920 end */}
                  <div class="frame-3591-MpaT6l">
                    <div class="fast-forward-to-your-1920">
                      <div class="fast-1920"></div> 
                      <div class="fast-forward-to-your-Oec8HO">Forward to Your</div>
                    </div>
                    <h1 class="single-cell-level-ca-Oec8HO">Single Cell Level Cancer Diagnosis with Machine Learning</h1>
                  </div>
                </div>
                {/* diagnosis / clinical research 1920 */}

                { isDiagnosis == true ?
                  (diagnosis1920(setIsDiagnosis, openModal))
                :
                  (clinicalResearch1920(setIsDiagnosis, openModal))
                }

                {/* diagnosis / clinical research 1920 end*/}

                <div class="frame-3491-Xw3ch0">
                  <div class="frame-3556-ludayN">
                    <div class="timing-is-crucial-in-73zDKI">
                      Timing is crucial in cancer treatment<br />Every medical decision is critical
                    </div>
                    <div class="current-diagnostic-a-73zDKI">
                      Current diagnostic approaches based on tumor-level <br />profiling may not sufficiently capture the
                      intra-tumoral heterogeneity resulting from clonal evolution, <br />leading to the failure of first-line
                      cancer therapies.
                    </div>
                  </div>
                  <div class="frame-3536-ludayN">
                    <div class="cancer-cells-undergo-Urx4k8">
                      Cancer cells undergo clonal evolution generating multiple clones<br />with different phenotypes as they
                      proliferate
                    </div>
                    <div class="frame-3494-Urx4k8">
                      <div class="group-525-zEZFn9">
                        <div class="cell-cCZCbx">
                          <div class="vector-34-qec5O2"></div>
                          <div class="ellipse-46-qec5O2"></div>
                        </div>
                        <div class="cell-EjBChb">
                          <div class="vector-34-VUgrVe"></div>
                          <div class="ellipse-46-VUgrVe"></div>
                        </div>
                        <div class="cell-llKBDP">
                          <div class="vector-34-LddS2g"></div>
                          <div class="ellipse-46-LddS2g"></div>
                        </div>
                        <div class="cell-9DhDKK">
                          <div class="vector-34-2Ve0fx"></div>
                          <div class="ellipse-46-2Ve0fx"></div>
                        </div>
                        <div class="cell-fLzctf">
                          <div class="vector-34-8CQN5S"></div>
                          <div class="ellipse-46-8CQN5S"></div>
                        </div>
                        <div class="cell-i4T2QC">
                          <div class="vector-34-MElFzd"></div>
                          <div class="ellipse-46-MElFzd"></div>
                        </div>
                        <div class="cell-e8Ty1f">
                          <div class="vector-34-IFFx1s"></div>
                          <div class="ellipse-46-IFFx1s"></div>
                        </div>
                        <div class="cell-ejclt5">
                          <div class="vector-34-5MrxIn"></div>
                          <div class="ellipse-46-5MrxIn"></div>
                        </div>
                        <div class="cell-y5OsDZ">
                          <div class="vector-34-qYR815"></div>
                          <div class="ellipse-46-qYR815"></div>
                        </div>
                        <div class="tumor-population-4-cCZCbx">
                          <div class="vector-34-WRhDQf"></div>
                          <div class="ellipse-46-WRhDQf"></div>
                          <div class="mutation-WRhDQf">
                            <div class="star-2-bM3DQ6"></div>
                          </div>
                        </div>
                      </div>
                      <div class="group-531-zEZFn9">
                        <div class="cell-fp5yNq">
                          <div class="vector-34-MqxFzq"></div>
                          <div class="ellipse-46-MqxFzq"></div>
                        </div>
                        <div class="cell-wEPb7X">
                          <div class="vector-34-zb81Pi"></div>
                          <div class="ellipse-46-zb81Pi"></div>
                        </div>
                        <div class="cell-aaUSjL">
                          <div class="vector-34-gOxylx"></div>
                          <div class="ellipse-46-gOxylx"></div>
                        </div>
                        <div class="cell-fiQ0dn">
                          <div class="vector-34-DVk3Ax"></div>
                          <div class="ellipse-46-DVk3Ax"></div>
                        </div>
                        <div class="cell-cqoANe">
                          <div class="vector-34-u3Faoy"></div>
                          <div class="ellipse-46-u3Faoy"></div>
                        </div>
                        <div class="cell-5M4NlY">
                          <div class="vector-34-EJjsvn"></div>
                          <div class="ellipse-46-EJjsvn"></div>
                        </div>
                        <div class="cell-y2aIia">
                          <div class="vector-34-ANltOe"></div>
                          <div class="ellipse-46-ANltOe"></div>
                        </div>
                        <div class="tumor-population-4-fp5yNq">
                          <div class="vector-34-1fqcmC"></div>
                          <div class="ellipse-46-1fqcmC"></div>
                          <div class="mutation-1fqcmC">
                            <div class="star-2-AU2g39"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-wEPb7X">
                          <div class="vector-34-iU1AJA"></div>
                          <div class="ellipse-46-iU1AJA"></div>
                          <div class="mutation-iU1AJA">
                            <div class="star-2-ySHpAh"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-aaUSjL">
                          <div class="vector-34-tIdxtx"></div>
                          <div class="ellipse-47-tIdxtx"></div>
                          <div class="mutation-tIdxtx">
                            <div class="star-2-Nk5A6r"></div>
                          </div>
                          <div class="mutation-Mngy6G">
                            <div class="star-3-ZQs2FX"></div>
                          </div>
                        </div>
                      </div>
                      <div class="group-549-zEZFn9">
                        <div class="cell-VxXPPo">
                          <div class="vector-34-LWU6Uw"></div>
                          <div class="ellipse-46-LWU6Uw"></div>
                        </div>
                        <div class="cell-zpXsVW">
                          <div class="vector-34-dluprf"></div>
                          <div class="ellipse-46-dluprf"></div>
                        </div>
                        <div class="cell-LRCb6A">
                          <div class="vector-34-GdK2CL"></div>
                          <div class="ellipse-46-GdK2CL"></div>
                        </div>
                        <div class="cell-7Yrx6l">
                          <div class="vector-34-GmdmD2"></div>
                          <div class="ellipse-46-GmdmD2"></div>
                        </div>
                        <div class="cell-HJeVdS">
                          <div class="vector-34-QSdaQI"></div>
                          <div class="ellipse-46-QSdaQI"></div>
                        </div>
                        <div class="tumor-population-4-VxXPPo">
                          <div class="vector-34-xJCtAx"></div>
                          <div class="ellipse-46-xJCtAx"></div>
                          <div class="mutation-xJCtAx">
                            <div class="star-2-WZ0nQ3"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-zpXsVW">
                          <div class="vector-34-ddCBvL"></div>
                          <div class="ellipse-46-ddCBvL"></div>
                          <div class="mutation-ddCBvL">
                            <div class="star-2-xsjPJX"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-LRCb6A">
                          <div class="vector-34-GHBybS"></div>
                          <div class="ellipse-47-GHBybS"></div>
                          <div class="mutation-GHBybS">
                            <div class="star-2-AtfeNC"></div>
                          </div>
                          <div class="mutation-1SY6JX">
                            <div class="star-3-zaiJl0"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-7Yrx6l">
                          <div class="vector-34-i3EvVe"></div>
                          <div class="ellipse-47-i3EvVe"></div>
                          <div class="mutation-i3EvVe">
                            <div class="star-2-trwuOz"></div>
                          </div>
                          <div class="mutation-qAoOw8">
                            <div class="star-3-AdYINx"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-HJeVdS">
                          <div class="vector-34-CJvY6v"></div>
                          <div class="ellipse-47-CJvY6v"></div>
                          <div class="mutation-CJvY6v">
                            <div class="star-2-xpWql5"></div>
                          </div>
                          <div class="mutation-b0kA3i">
                            <div class="star-3-2k04MY"></div>
                          </div>
                        </div>
                        <div class="cell-iSN02b">
                          <div class="vector-34-wPep54"></div>
                          <div class="ellipse-46-wPep54"></div>
                        </div>
                        <div class="tumor-population-4-iSN02b">
                          <div class="vector-34-vnzez0"></div>
                          <div class="ellipse-46-vnzez0"></div>
                          <div class="mutation-vnzez0">
                            <div class="star-2-0Y03mZ"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-RgV203">
                          <div class="vector-34-GI29Fx"></div>
                          <div class="ellipse-47-GI29Fx"></div>
                          <div class="mutation-GI29Fx">
                            <div class="star-2-j9D5v4"></div>
                          </div>
                          <div class="mutation-g4oM2l">
                            <div class="star-3-xgjVSr"></div>
                          </div>
                        </div>
                      </div>
                      <div class="group-559-zEZFn9">
                        <div class="cell-C5BzBj">
                          <div class="vector-34-9WmCsf"></div>
                          <div class="ellipse-46-9WmCsf"></div>
                        </div>
                        <div class="cell-qgZQk4">
                          <div class="vector-34-mxXOxZ"></div>
                          <div class="ellipse-46-mxXOxZ"></div>
                        </div>
                        <div class="cell-leacfF">
                          <div class="vector-34-n0F96Z"></div>
                          <div class="ellipse-46-n0F96Z"></div>
                        </div>
                        <div class="cell-1oV1kx">
                          <div class="vector-34-DE30Ld"></div>
                          <div class="ellipse-47-DE30Ld"></div>
                          <div class="mutation-DE30Ld">
                            <div class="star-2-W6rsiq"></div>
                          </div>
                          <div class="mutation-FpsgiL">
                            <div class="star-3-2JVVZi"></div>
                          </div>
                        </div>
                        <div class="cell-NK2p5s">
                          <div class="vector-34-Iyigy2"></div>
                          <div class="ellipse-47-Iyigy2"></div>
                          <div class="mutation-Iyigy2">
                            <div class="star-2-5x8mcB"></div>
                          </div>
                          <div class="mutation-B9XhxD">
                            <div class="star-3-rGm9KD"></div>
                          </div>
                        </div>
                        <div class="cell-MPRyOi">
                          <div class="vector-34-tpJUyi"></div>
                          <div class="ellipse-48-tpJUyi"></div>
                          <div class="mutation-tpJUyi">
                            <div class="star-2-f25g3T"></div>
                          </div>
                          <div class="mutation-47hpEr">
                            <div class="star-3-Wgfp2P"></div>
                          </div>
                          <div class="mutation-uDpsMD">
                            <div class="star-4-0K9Y8B"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-C5BzBj">
                          <div class="vector-34-XkxoNy"></div>
                          <div class="ellipse-46-XkxoNy"></div>
                          <div class="mutation-XkxoNy">
                            <div class="star-2-0z2xvy"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-qgZQk4">
                          <div class="vector-34-pW3idw"></div>
                          <div class="ellipse-46-pW3idw"></div>
                          <div class="mutation-pW3idw">
                            <div class="star-2-JdhU6r"></div>
                          </div>
                        </div>
                        <div class="tumor-population-5-C5BzBj">
                          <div class="vector-34-HJA9Tm"></div>
                          <div class="ellipse-46-HJA9Tm"></div>
                          <div class="mutation-HJA9Tm">
                            <div class="star-2-OKQD1x"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-leacfF">
                          <div class="vector-34-bqOpnV"></div>
                          <div class="ellipse-47-bqOpnV"></div>
                          <div class="mutation-bqOpnV">
                            <div class="star-2-jlQA9Y"></div>
                          </div>
                          <div class="mutation-dyyA5K">
                            <div class="star-3-Zs7xIO"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-1oV1kx">
                          <div class="vector-34-zjqD3w"></div>
                          <div class="ellipse-47-zjqD3w"></div>
                          <div class="mutation-zjqD3w">
                            <div class="star-2-GT2qtX"></div>
                          </div>
                          <div class="mutation-O5vnJv">
                            <div class="star-3-S1h3et"></div>
                          </div>
                        </div>
                        <div class="tumor-population-6-C5BzBj">
                          <div class="vector-34-WQIlXp"></div>
                          <div class="ellipse-47-WQIlXp"></div>
                          <div class="mutation-WQIlXp">
                            <div class="star-2-deQJ9l"></div>
                          </div>
                          <div class="mutation-bML4j9">
                            <div class="star-3-2Mex4b"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-NK2p5s">
                          <div class="vector-34-nxLArq"></div>
                          <div class="ellipse-47-nxLArq"></div>
                          <div class="mutation-nxLArq">
                            <div class="star-2-Ylb0nA"></div>
                          </div>
                          <div class="mutation-3EFKb1">
                            <div class="star-3-e7M1nZ"></div>
                          </div>
                        </div>
                        <div class="cell-XXXzFo">
                          <div class="vector-34-mJj6Rw"></div>
                          <div class="ellipse-47-mJj6Rw"></div>
                          <div class="mutation-mJj6Rw">
                            <div class="star-2-8l8xXb"></div>
                          </div>
                          <div class="mutation-uz3gD3">
                            <div class="star-3-hxyHEs"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-MPRyOi">
                          <div class="vector-34-ZwrxZS"></div>
                          <div class="ellipse-46-ZwrxZS"></div>
                          <div class="mutation-ZwrxZS">
                            <div class="star-2-EunxDt"></div>
                          </div>
                        </div>
                        <div class="tumor-population-4-XXXzFo">
                          <div class="vector-34-tivRf2"></div>
                          <div class="ellipse-47-tivRf2"></div>
                          <div class="mutation-tivRf2">
                            <div class="star-2-zrvBP1"></div>
                          </div>
                          <div class="mutation-vvw5VS">
                            <div class="star-3-DjJlv7"></div>
                          </div>
                        </div>
                        <div class="tumor-population-7-C5BzBj">
                          <div class="vector-34-ylz61X"></div>
                          <div class="ellipse-47-ylz61X"></div>
                          <div class="mutation-ylz61X">
                            <div class="star-2-EplY9x"></div>
                          </div>
                          <div class="mutation-CJ0hvU">
                            <div class="star-3-s2rXuh"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-3512-Urx4k8">
                      <div class="frame-3503-SVkYQ6">
                        <div class="frame-3502-NyWRM7"></div>
                        <div class="time-NyWRM7">Time</div>
                      </div>
                      <div class="line-78-SVkYQ6"></div>
                    </div>
                    <div class="frame-3572-Urx4k8">
                      <div class="frame-3513-dq1SdL">
                        <div class="mutation-6pw17j">
                          <div class="star-2-f0tlFP"></div>
                        </div>
                        <div class="driver-mutation-exi-6pw17j">
                          <span class="span0-J0kaIT">Driver Mutation<br /></span
                          ><span class="span1-J0kaIT">(Exists in all cancer cells)</span>
                        </div>
                      </div>
                      <div class="frame-3514-dq1SdL">
                        <div class="mutation-guv3lQ">
                          <div class="star-3-9VI3ix"></div>
                        </div>
                        <div class="subclonal-mutations-guv3lQ">
                          <span class="span0-xE88DC">Subclonal Mutations<br /></span
                          ><span class="span1-xE88DC">(Exists in a subset of cancer cells)</span>
                        </div>
                      </div>
                      <div class="frame-3515-dq1SdL">
                        <div class="mutation-K4rqTj">
                          <div class="star-4-vKoMqV"></div>
                        </div>
                        <div class="subclonal-mutations-K4rqTj">
                          <span class="span0-Ho3xk5">Subclonal Mutations<br /></span
                          ><span class="span1-Ho3xk5">(Exists in a subset of cancer cells)</span>
                        </div>
                      </div>
                    </div>
                    <div class="frame-3548-Urx4k8">
                      <div class="frame-3516-QYxquo">
                        <div class="cell-x21WS8">
                          <div class="vector-34-y8279d"></div>
                          <div class="ellipse-46-y8279d"></div>
                        </div>
                        <div class="normal-cell-x21WS8">Normal Cell</div>
                      </div>
                      <div class="frame-3517-QYxquo">
                        <div class="cell-ANxln0">
                          <div class="vector-34-QlybGx"></div>
                          <div class="ellipse-46-QlybGx"></div>
                        </div>
                        <div class="tumor-population-1-ANxln0">Tumor Population 1</div>
                      </div>
                      <div class="frame-3518-QYxquo">
                        <div class="cell-oRzzmu">
                          <div class="vector-34-aSxpN0"></div>
                          <div class="ellipse-47-aSxpN0"></div>
                        </div>
                        <div class="tumor-population-2-oRzzmu">Tumor Population 2</div>
                      </div>
                      <div class="frame-3519-QYxquo">
                        <div class="cell-lIziyg"></div>
                        <div class="tumor-population-3-lIziyg">Tumor Population 3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-3408-Xw3ch0">
                  <div class="rectangle-1142-7zeGzv"></div>
                  <div class="frame-3557-7zeGzv">
                    <div class="we-help-you-overcome-oYpUsM">
                      We help you overcome the heterogeneity of cancer for better clinical outcomes with
                    </div>
                    <div class="single-cell-rna-sequ-oYpUsM">single-cell RNA sequencing data analysis &amp; testing</div>
                  </div>
                  <div class="deep-single-cell-sta-7zeGzv">
                    <span class="span0-owoTJj">Deep single-cell state characterization
                    </span>
                    <span class="span1-owoTJj">
                      &nbsp;takes the presence of diverse cancer clones into account to improve cancer therapies by providing the
                      best combinations of druggable targets.
                      </span>
                  </div>
                  <div class="frame-3450-7zeGzv">
                    <div class="frame-3396-PwCOhF">
                      <div class="frame-475-e079xO">
                        <div class="frame-3487-2Er6Mf"></div>
                        <div class="line-61-2Er6Mf"></div>
                        <div class="optimize-therapeutic-strategies-2Er6Mf">
                          <span class="span0-WLHCWr">Optimize<br /></span
                          ><span class="span1-WLHCWr">therapeutic strategies</span>
                        </div>
                      </div>
                    </div>
                    <div class="frame-3397-PwCOhF">
                      <div class="optimize-neo-B1GFfa">
                        <div class="frame-3488-LJ2xAZ"></div>
                        <div class="line-60-LJ2xAZ"></div>
                        <div class="increase-complete-response-rate-LJ2xAZ">
                          <span class="span0-TN6WFq">Increase<br /></span
                          ><span class="span1-TN6WFq">complete response rate</span>
                        </div>
                      </div>
                    </div>
                    <div class="frame-3398-PwCOhF">
                      <div class="frame-476-VRUYyx">
                        <div class="frame-3489-pYBRkY"></div>
                        <div class="line-59-pYBRkY"></div>
                        <div class="improve-patients-quality-of-life-pYBRkY">
                          <span class="span0-JEidFo">Improve <br /></span
                          ><span class="span1-JEidFo">patients’ quality of life</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-3409-Xw3ch0">
                  <div class="frame-3528-C2djMK">
                    <div class="with-sc-rna-seq-data-we-do-d3W1W5">With scRNA-seq data, we do</div>
                    <div class="frame-3527-d3W1W5">
                      <div class="frame-3397-y7XzbK">
                        <div class="frame-3323-JTZJ4n">
                          <div class="high-resolution-tumor-classification-MqTeff">High resolution tumor classification</div>
                          <div class="identify-molecular-a-MqTeff">
                            Identify molecular and pathological cancer subtypes, grade, cell composition &amp; more at the
                            cell level
                          </div>
                        </div>
                        <div class="frame-3561-JTZJ4n">
                          <div class="group-564-8kDf2x">
                            <div class="cell-Yz5eUa">
                              <div class="vector-34-wQ73iK"></div>
                              <div class="ellipse-46-wQ73iK"></div>
                            </div>
                            <div class="cell-6ZauoJ"></div>
                            <div class="cell-cUVOv7">
                              <div class="vector-34-WJsvPt"></div>
                              <div class="ellipse-47-WJsvPt"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="frame-3410-y7XzbK">
                        <div class="frame-3324-9dRBTa">
                          <div class="drug-recommendation-BAB7xP">Drug recommendation targeting each cancer cell</div>
                          <div class="match-fda-approved-d-BAB7xP">
                            Match FDA-approved drugs with the most activated pathways based on SNV/CNV &amp; transcriptomic
                            status
                          </div>
                        </div>
                        <div class="frame-3563-9dRBTa">
                          <div class="group-563-84ZKAs"></div>
                          <div class="group-562-84ZKAs"></div>
                          <div class="group-561-84ZKAs"></div>
                        </div>
                      </div>
                      <div class="frame-3411-y7XzbK">
                        <div class="frame-3325-fxMZTt">
                          <div class="discovery-of-innovat-ansff8">
                            Discovery of innovative and state-of-the-art combinatorial cancer therapies
                          </div>
                          <div class="uncover-novel-pathwa-ansff8">
                            Uncover novel pathways to target cancer cells with no standard biomarkers &amp; find the
                            synergistic targets
                          </div>
                        </div>
                        <div class="frame-3563-fxMZTt"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-3410-Xw3ch0">
                  <div class="how-sc-rna-compares-mOqz9m">How scRNA Compares</div>
                  <div class="frame-3419-mOqz9m">
                    <div class="frame-3417-w7ESjZ">
                      <div class="frame-3327-Fi0IQA"></div>
                      <div class="frame-3327-H01lns">
                        <div class="pathological-subtyping-swR5b6 valign-text-middle">Pathological Subtyping</div>
                      </div>
                      <div class="frame-3338-Fi0IQA">
                        <div class="biomarker-profiling-quantitative-W8nOVJ valign-text-middle">
                          Biomarker Profiling<br />(quantitative)
                        </div>
                      </div>
                      <div class="frame-3339-Fi0IQA">
                        <div class="biomarker-profiling-qualitative-W1BKVq valign-text-middle">
                          Biomarker Profiling<br />(qualitative)
                        </div>
                      </div>
                      <div class="frame-3340-Fi0IQA">
                        <div class="molecular-characterization-f5WtzS valign-text-middle">Molecular Characterization</div>
                      </div>
                      <div class="frame-3341-Fi0IQA">
                        <div class="cell-level-diagnosis-mHPmpH valign-text-middle">Cell-level Diagnosis</div>
                      </div>
                      <div class="frame-3342-Fi0IQA"><div class="time-uiPvcV valign-text-middle">Time</div></div>
                      <div class="frame-3343-Fi0IQA">
                        <div class="behavior-prediction-OtxV6U valign-text-middle">Behavior Prediction</div>
                      </div>
                    </div>
                    <div class="frame-3416-w7ESjZ">
                      <div class="frame-3327-xWtg3c">
                        <div class="pathologic-analysis-i2PLFt valign-text-middle">Pathologic analysis</div>
                      </div>
                      <div class="frame-3327-4No9Dl"><div class="text-1-Wxpy9J valign-text-middle">****</div></div>
                      <div class="frame-3327-Paz03n"><div class="text-2-fE26Gr valign-text-middle">****</div></div>
                      <div class="frame-3327-4URMkX"><div class="text-3-HW5PTc valign-text-middle">**</div></div>
                      <div class="frame-3327-Y5e8MB"><div class="text-4-hG4LxU valign-text-middle">**</div></div>
                      <div class="frame-3327-MnMAKg"><div class="text-5-0FIIhr valign-text-middle">**</div></div>
                      <div class="frame-3327-64DqzM"><div class="text-6-jRZIxv valign-text-middle">***</div></div>
                      <div class="frame-3327-YLXbsT"><div class="text-7-xLz7Cn valign-text-middle">**</div></div>
                    </div>
                    <div class="frame-3415-w7ESjZ">
                      <div class="frame-3328-myOtLH">
                        <div class="panel-sequencing-kjnSUf valign-text-middle">Panel Sequencing</div>
                      </div>
                      <div class="frame-3328-lwkGHZ"><div class="text-8-JxdVVE valign-text-middle">*</div></div>
                      <div class="frame-3328-Pl1rpq"><div class="text-9-15GnJN valign-text-middle">**</div></div>
                      <div class="frame-3328-lEUWGV"><div class="text-10-xqVmYc valign-text-middle">****</div></div>
                      <div class="frame-3328-cNSJoo"><div class="text-11-p5xtdF valign-text-middle">****</div></div>
                      <div class="frame-3328-gV99cE"><div class="text-12-IL5Mrr valign-text-middle">*</div></div>
                      <div class="frame-3328-THUxkw"><div class="text-13-bY6nwW valign-text-middle">**</div></div>
                      <div class="frame-3328-VAM65Z"><div class="text-14-rUxSwS valign-text-middle">***</div></div>
                    </div>
                    <div class="frame-3418-w7ESjZ">
                      <div class="frame-3329-RkdpMx"><div class="sc-rna-seq-gyy1BO valign-text-middle">scRNA-seq</div></div>
                      <div class="frame-3329-YDwmEq"><div class="text-15-usx5NR valign-text-middle">****</div></div>
                      <div class="frame-3329-sz2vxA"><div class="text-16-UkKonR valign-text-middle">****</div></div>
                      <div class="frame-3329-DH3zTv"><div class="text-17-VDNwMx valign-text-middle">***</div></div>
                      <div class="frame-3329-7mqDT3"><div class="text-18-cXYcO5 valign-text-middle">****</div></div>
                      <div class="frame-3329-E2K1qX"><div class="text-19-LFFlME valign-text-middle">****</div></div>
                      <div class="frame-3329-Ex7OUx"><div class="text-20-3eHqeI valign-text-middle">**</div></div>
                      <div class="frame-3329-OxRNH3"><div class="text-21-xMWLOO valign-text-middle">****</div></div>
                    </div>
                  </div>
                </div>
                <div class="frame-3445-Xw3ch0">
                  <div class="our-services-include-DOp7CI">Our services include</div>
                  <div class="frame-3432-DOp7CI">
                    <div class="frame-3428-sFdAgI">
                      <div class="service-rIl1o4">
                        <div class="prediction-of-subtyp-7X6Bt2">
                          Prediction of subtypes, grade, cell composition &amp; more
                        </div>
                        <div class="add-7X6Bt2"></div>
                      </div>
                    </div>
                    <div class="frame-3427-sFdAgI">
                      <div class="service-mgAPMw">
                        <div class="snv-cnv-RFlvGy">SNV &amp; CNV</div>
                        <div class="add-RFlvGy"></div>
                      </div>
                    </div>
                    <div class="frame-3426-sFdAgI">
                      <div class="service-65FCrM">
                        <div class="cancer-origin-tracking-SUrt4x">Cancer origin tracking</div>
                        <div class="add-SUrt4x"></div>
                      </div>
                    </div>
                    <div class="frame-3430-sFdAgI">
                      <div class="service-xkxEOz">
                        <div class="risk-score-with-pathway-analysis-R0IQmu">Risk score with pathway analysis</div>
                        <div class="add-R0IQmu"></div>
                      </div>
                    </div>
                    <div class="frame-3429-sFdAgI">
                      <div class="service-gInlAE">
                        <div class="drug-recommendation-rSfXpK">Drug recommendation</div>
                        <div class="add-rSfXpK"></div>
                      </div>
                    </div>
                    <div class="frame-3431-sFdAgI">
                      <div class="service-xSuzXs">
                        <div class="novel-biomarker-identification-HluH8f">Novel biomarker identification</div>
                        <div class="add-HluH8f"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-3401-Xw3ch0">
                  <div class="frame-3433-LC5qdX">
                    <div class="using-high-resolutio-5VCzBA">
                      Using high resolution profiling to make cancer<br />Identifiable, Predictable &amp; Curable
                    </div>

                    <div className="frame-3390-5VCzBA" onmouseover>
                      {inputEmail("frame-3387-EA6Fs7", setEmail, handleKeyPress)}
                      <div className="frame-3388-EA6Fs7" onClick={openModal}
                      ><div className="get-started-7xvBA5">Get Started</div></div>
                    </div>

                  </div>
                  <div class="x4-LC5qdX"></div>
                </div>
                <div class="frame-3490-Xw3ch0">
                  <div class="privacy-policy-Zr0GZl">Privacy Policy</div>
                  <div class="terms-of-use-Zr0GZl">Terms of Use</div>
                  <div class="copyright-Zr0GZl">Copyright © 2023 WittGen Inc.</div>
                  <div class="place-Zr0GZl">Contact</div>
                  <div class="follow-us-Zr0GZl">Follow Us</div>
                  <div class="frame-3534-Zr0GZl">
                    <div class="frame-3532-pQZAY3">
                      <div class="call-OA7JyO"></div>
                      <div class="phone-OA7JyO">+1 (510) 710 3352</div>
                    </div>
                    <div class="frame-3533-pQZAY3" onClick={sendEmail}>
                      <div class="mail-lPNUoR"></div>
                      <div class="infowittgenbiocom-lPNUoR">info@wittgenbio.com</div>
                    </div>
                  </div>
                  <div class="frame-3442-Zr0GZl">
                    <div class="frame-3366-6avUUi">
                      <div class="twitter-0gFma5"></div>
                      <div
                        class="x-0gFma5 valign-text-middle"
                      >
                      <a href="https://twitter.com/wittgen_bio" target="_blank" rel="noreferrer"><div className="x-nqe87x valign-text-middle" /></a>

                      </div>
                    </div>
                    <div class="frame-3367-6avUUi">
                      <div class="linked-in-vopVRZ"></div>
                      <div
                        class="x-vopVRZ valign-text-middle"
                      >
                        <a href="https://www.linkedin.com/company/wittgen-biotechnologies/" target="_blank" rel="noreferrer"><div className="x-WT0Uxx valign-text-middle" /></a>
                      </div>
                    </div>
                  </div>
                  <div class="frame-629-Zr0GZl">
                    <div class="frame-621-MOZ4hq"></div>
                    <div class="witt-gen-biotechnologies-MOZ4hq">
                      <span class="span0-Jwri4G">WittGen</span><span class="span1-Jwri4G">Biotechnologies</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Modal open={modalOpen} close={closeModal} email={email} setEmail={setEmail}></Modal>
      </div>
      : 
      <div>
        <div>
          <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=1440, maximum-scale=1.0" />
            <meta name="og:type" content="website" />
            <meta name="twitter:card" content="photo" />
          </Helmet>
          <div class="container-center-horizontal">
      <div
        class="landingpageu95diagnosis auto-animated screen"
        data-page="landingpageu95diagnosis"
        data-screens="landingpageu95diagnosis2,landingpageu95diagnosis"
      >
        <HeaderStyle>
        <div class="frame-631-C61RwL">
          <div class="frame-3452-P2NboM" onClick={() => {
                  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }} >
            <div class="frame-621-08MuUF"></div>
            <div class="witt-gen-biotechnologies-08MuUF" onClick={toHome}>
              <span class="span0-X47hLW">WittGen</span><span class="span1-X47hLW">Biotechnologies</span>
            </div>
          </div>
          <div class="frame-620-P2NboM">
            <div class="frame-619-cNbyrl" onClick={openModal} onmouseover><div class="sign-up-nGaw5V">Sign Up</div></div>
            <div
              class="frame-620-cNbyrl"
              onClick={toLogin} onmouseover
            >
              <div class="my-portal-SKGGs9">My portal</div>
            </div>
          </div>
        </div>
        </HeaderStyle>
        
        <div class="frame-3584-C61RwL">
          
          <div class="frame-3488-rTg1Kt">
            <div class="x2-wdF0fw"></div>
            <div class="frame-3539-wdF0fw">
              <div class="frame-3535-1Fnmxg">
                <div class="fast-forward-to-your-1440">
                <div class="fast-1440"></div> 
                <div class="fast-forward-to-your-GVl3y4">Forward to Your</div>
                </div>
                <div class="single-cell-level-ca-GVl3y4">Single Cell Level Cancer Diagnosis with Machine Learning</div>
              </div>

              <div className="frame-3390-1Fnmxg" onmouseover>
                      {inputEmail("frame-3387-MHoymp", setEmail, handleKeyPress)}
                      <div className="frame-3388-MHoymp" onClick={openModal}
                      ><div className="get-started-GgUpUD">Get Started</div></div>
              </div>

            </div>
          </div>

          { isDiagnosis == true ?
              (diagnosis(setIsDiagnosis, openModal))
                :
              (clinicalResearch(setIsDiagnosis, openModal))
          }

          <div class="frame-3491-rTg1Kt">
            <div class="frame-3556-p7RQwu">
              <div class="timing-is-crucial-in-xqVk4q">
                Timing is crucial in cancer treatment<br />Every medical decision is critical
              </div>
              <div class="current-diagnostic-a-xqVk4q">
                Current diagnostic approaches based on tumor-level <br />profiling may not sufficiently capture the
                intra-tumoral heterogeneity resulting from clonal evolution, <br />leading to the failure of first-line
                cancer therapies.
              </div>
            </div>
            <div class="frame-3536-p7RQwu">
              <div class="cancer-cells-undergo-sQbexb">
                Cancer cells undergo clonal evolution generating multiple clones<br />with different phenotypes as they
                proliferate
              </div>
              <div class="frame-3494-sQbexb">
                <div class="group-525-oOtJk7">
                  <div class="cell-iqmfx3">
                    <div class="vector-34-3x4fTZ"></div>
                    <div class="ellipse-46-3x4fTZ"></div>
                  </div>
                  <div class="cell-fKjB5D">
                    <div class="vector-34-Jq0xBA"></div>
                    <div class="ellipse-46-Jq0xBA"></div>
                  </div>
                  <div class="cell-7CTKxj">
                    <div class="vector-34-UKbwpM"></div>
                    <div class="ellipse-46-UKbwpM"></div>
                  </div>
                  <div class="cell-JxF9UF">
                    <div class="vector-34-YLAczy"></div>
                    <div class="ellipse-46-YLAczy"></div>
                  </div>
                  <div class="cell-aaTxDm">
                    <div class="vector-34-YMGRai"></div>
                    <div class="ellipse-46-YMGRai"></div>
                  </div>
                  <div class="cell-nygWw0">
                    <div class="vector-34-U3J7lo"></div>
                    <div class="ellipse-46-U3J7lo"></div>
                  </div>
                  <div class="cell-UMLEsG">
                    <div class="vector-34-zrabfk"></div>
                    <div class="ellipse-46-zrabfk"></div>
                  </div>
                  <div class="cell-nRswhy">
                    <div class="vector-34-SWxXwx"></div>
                    <div class="ellipse-46-SWxXwx"></div>
                  </div>
                  <div class="cell-bL54Fv">
                    <div class="vector-34-V7Uxc2"></div>
                    <div class="ellipse-46-V7Uxc2"></div>
                  </div>
                  <div class="tumor-population-4-iqmfx3">
                    <div class="vector-34-fMMLAv"></div>
                    <div class="ellipse-46-fMMLAv"></div>
                    <div class="mutation-fMMLAv">
                      <div class="star-2-l0iHag"></div>
                    </div>
                  </div>
                </div>
                <div class="group-531-oOtJk7">
                  <div class="cell-M8M5IL">
                    <div class="vector-34-7Yhyuy"></div>
                    <div class="ellipse-46-7Yhyuy"></div>
                  </div>
                  <div class="cell-3HWPXN">
                    <div class="vector-34-yxFDDg"></div>
                    <div class="ellipse-46-yxFDDg"></div>
                  </div>
                  <div class="cell-mJWv1l">
                    <div class="vector-34-4KNiMr"></div>
                    <div class="ellipse-46-4KNiMr"></div>
                  </div>
                  <div class="cell-OQsxwe">
                    <div class="vector-34-ZKhkPi"></div>
                    <div class="ellipse-46-ZKhkPi"></div>
                  </div>
                  <div class="cell-pCttjA">
                    <div class="vector-34-82Ottd"></div>
                    <div class="ellipse-46-82Ottd"></div>
                  </div>
                  <div class="cell-J9BfTv">
                    <div class="vector-34-7mEuwC"></div>
                    <div class="ellipse-46-7mEuwC"></div>
                  </div>
                  <div class="cell-B22xKx">
                    <div class="vector-34-fMFrL8"></div>
                    <div class="ellipse-46-fMFrL8"></div>
                  </div>
                  <div class="tumor-population-4-M8M5IL">
                    <div class="vector-34-wRcRQp"></div>
                    <div class="ellipse-46-wRcRQp"></div>
                    <div class="mutation-wRcRQp">
                      <div class="star-2-9QJtAd"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-3HWPXN">
                    <div class="vector-34-Xrppz0"></div>
                    <div class="ellipse-46-Xrppz0"></div>
                    <div class="mutation-Xrppz0">
                      <div class="star-2-pm7ZuA"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-mJWv1l">
                    <div class="vector-34-cv0aff"></div>
                    <div class="ellipse-47-cv0aff"></div>
                    <div class="mutation-cv0aff">
                      <div class="star-2-o9zekp"></div>
                    </div>
                    <div class="mutation-eUzlFu">
                      <div class="star-3-0aXQ7T"></div>
                    </div>
                  </div>
                </div>
                <div class="group-549-oOtJk7">
                  <div class="cell-hgW7Ls"></div>
                  <div class="cell-z83aQx"></div>
                  <div class="cell-YiD9nz"></div>
                  <div class="cell-xEDIfz"></div>
                  <div class="cell-8URCZg"></div>
                  <div class="tumor-population-4-hgW7Ls">
                    <div class="vector-34-F83ZmE"></div>
                    <div class="ellipse-46-F83ZmE"></div>
                    <div class="mutation-F83ZmE">
                      <div class="star-2-MrfFlw"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-z83aQx">
                    <div class="vector-34-gxIIHZ"></div>
                    <div class="ellipse-46-gxIIHZ"></div>
                    <div class="mutation-gxIIHZ">
                      <div class="star-2-H3nkIx"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-YiD9nz">
                    <div class="vector-34-rYsSO4"></div>
                    <div class="ellipse-47-rYsSO4"></div>
                    <div class="mutation-rYsSO4">
                      <div class="star-2-LMFV5D"></div>
                    </div>
                    <div class="mutation-wkRLaD">
                      <div class="star-3-isFxa7"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-xEDIfz">
                    <div class="vector-34-ihtt72"></div>
                    <div class="ellipse-47-ihtt72"></div>
                    <div class="mutation-ihtt72">
                      <div class="star-2-QQH2X2"></div>
                    </div>
                    <div class="mutation-oSPOqI">
                      <div class="star-3-YfqTkc"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-8URCZg">
                    <div class="vector-34-KNvnqP"></div>
                    <div class="ellipse-47-KNvnqP"></div>
                    <div class="mutation-KNvnqP">
                      <div class="star-2-xdgiGy"></div>
                    </div>
                    <div class="mutation-y6geto">
                      <div class="star-3-cThmgz"></div>
                    </div>
                  </div>
                  <div class="cell-7paxZm"></div>
                  <div class="tumor-population-4-7paxZm">
                    <div class="vector-34-w5xX9x"></div>
                    <div class="ellipse-46-w5xX9x"></div>
                    <div class="mutation-w5xX9x">
                      <div class="star-2-SCnhBX"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-5MxGqa">
                    <div class="vector-34-5Eocyx"></div>
                    <div class="ellipse-47-5Eocyx"></div>
                    <div class="mutation-5Eocyx">
                      <div class="star-2-Nx1rBN"></div>
                    </div>
                    <div class="mutation-GicNeE">
                      <div class="star-3-bgzxgI"></div>
                    </div>
                  </div>
                </div>
                <div class="group-559-oOtJk7">
                  <div class="cell-5ExTWl">
                    <div class="vector-34-jmBjvB"></div>
                    <div class="ellipse-46-jmBjvB"></div>
                  </div>
                  <div class="cell-AFkPFh">
                    <div class="vector-34-2LoxPT"></div>
                    <div class="ellipse-46-2LoxPT"></div>
                  </div>
                  <div class="cell-6kCpaM">
                    <div class="vector-34-KelmAZ"></div>
                    <div class="ellipse-46-KelmAZ"></div>
                  </div>
                  <div class="cell-KjQKQd">
                    <div class="vector-34-MwehJ3"></div>
                    <div class="ellipse-47-MwehJ3"></div>
                    <div class="mutation-MwehJ3">
                      <div class="star-2-d6BZCS"></div>
                    </div>
                    <div class="mutation-W2qWXh">
                      <div class="star-3-UO876n"></div>
                    </div>
                  </div>
                  <div class="cell-v04LPA">
                    <div class="vector-34-3BxxGE"></div>
                    <div class="ellipse-47-3BxxGE"></div>
                    <div class="mutation-3BxxGE">
                      <div class="star-2-zXas4x"></div>
                    </div>
                    <div class="mutation-pyxSvS">
                      <div class="star-3-qBD7VX"></div>
                    </div>
                  </div>
                  <div class="cell-PMBrSZ">
                    <div class="vector-34-bZho7t"></div>
                    <div class="ellipse-48-bZho7t"></div>
                    <div class="mutation-bZho7t">
                      <div class="star-2-AxIlJf"></div>
                    </div>
                    <div class="mutation-ORIUWa">
                      <div class="star-3-8I0387"></div>
                    </div>
                    <div class="mutation-yNAZXI">
                      <div class="star-4-RkMM8C"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-5ExTWl">
                    <div class="vector-34-v2de4f"></div>
                    <div class="ellipse-46-v2de4f"></div>
                    <div class="mutation-v2de4f">
                      <div class="star-2-Ef0xyj"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-AFkPFh">
                    <div class="vector-34-565jpa"></div>
                    <div class="ellipse-46-565jpa"></div>
                    <div class="mutation-565jpa">
                      <div class="star-2-QixscV"></div>
                    </div>
                  </div>
                  <div class="tumor-population-5-5ExTWl">
                    <div class="vector-34-VdN4xO"></div>
                    <div class="ellipse-46-VdN4xO"></div>
                    <div class="mutation-VdN4xO">
                      <div class="star-2-Hxucgi"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-6kCpaM">
                    <div class="vector-34-xBeqf8"></div>
                    <div class="ellipse-47-xBeqf8"></div>
                    <div class="mutation-xBeqf8">
                      <div class="star-2-5iMEft"></div>
                    </div>
                    <div class="mutation-fNhvYb">
                      <div class="star-3-hxcdxv"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-KjQKQd">
                    <div class="vector-34-V4YXeN"></div>
                    <div class="ellipse-47-V4YXeN"></div>
                    <div class="mutation-V4YXeN">
                      <div class="star-2-LWmXXz"></div>
                    </div>
                    <div class="mutation-TraC0i">
                      <div class="star-3-jPxODd"></div>
                    </div>
                  </div>
                  <div class="tumor-population-6-5ExTWl">
                    <div class="vector-34-yIIJw0"></div>
                    <div class="ellipse-47-yIIJw0"></div>
                    <div class="mutation-yIIJw0">
                      <div class="star-2-U8TSbL"></div>
                    </div>
                    <div class="mutation-sQL9Bg">
                      <div class="star-3-Vk9dqf"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-v04LPA">
                    <div class="vector-34-jm8Wy7"></div>
                    <div class="ellipse-47-jm8Wy7"></div>
                    <div class="mutation-jm8Wy7">
                      <div class="star-2-4wdJqL"></div>
                    </div>
                    <div class="mutation-eZxXk6">
                      <div class="star-3-9YL788"></div>
                    </div>
                  </div>
                  <div class="cell-EZCe3X">
                    <div class="vector-34-KMgTaX"></div>
                    <div class="ellipse-47-KMgTaX"></div>
                    <div class="mutation-KMgTaX">
                      <div class="star-2-wKW1yo"></div>
                    </div>
                    <div class="mutation-Em4CLb">
                      <div class="star-3-8c0Q9r"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-PMBrSZ">
                    <div class="vector-34-S7RUkb"></div>
                    <div class="ellipse-46-S7RUkb"></div>
                    <div class="mutation-S7RUkb">
                      <div class="star-2-ot2C2Z"></div>
                    </div>
                  </div>
                  <div class="tumor-population-4-EZCe3X">
                    <div class="vector-34-jS002n"></div>
                    <div class="ellipse-47-jS002n"></div>
                    <div class="mutation-jS002n">
                      <div class="star-2-LEupsi"></div>
                    </div>
                    <div class="mutation-o2l2FR">
                      <div class="star-3-NRGfP6"></div>
                    </div>
                  </div>
                  <div class="tumor-population-7-5ExTWl">
                    <div class="vector-34-fdyxCa"></div>
                    <div class="ellipse-47-fdyxCa"></div>
                    <div class="mutation-fdyxCa">
                      <div class="star-2-5yQMGv"></div>
                    </div>
                    <div class="mutation-Cr6IaH">
                      <div class="star-3-XTEahi"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-3512-sQbexb">
                <div class="frame-3503-Njgiok">
                  <div class="frame-3502-ftVR6S"></div>
                  <div class="time-ftVR6S">Time</div>
                </div>
                <div class="line-78-Njgiok"></div>
              </div>
              <div class="frame-3513-sQbexb">
                <div class="mutation-7bxxbj">
                  <div class="star-2-P0Forx"></div>
                </div>
                <div class="driver-mutation-exi-7bxxbj">
                  <span class="span0-AVLGDQ">Driver Mutation<br /></span
                  ><span class="span1-AVLGDQ">(Exists in all cancer cells)</span>
                </div>
              </div>
              <div class="frame-3514-sQbexb">
                <div class="mutation-nDiv0k">
                  <div class="star-3-yKUocT"></div>
                </div>
                <div class="subclonal-mutations-nDiv0k">
                  <span class="span0-sshHBx">Subclonal Mutations<br /></span
                  ><span class="span1-sshHBx">(Exists in a subset of cancer cells)</span>
                </div>
              </div>
              <div class="frame-3515-sQbexb">
                <div class="mutation-uhNdCU">
                  <div class="star-4-IQvhMs"></div>
                </div>
                <div class="subclonal-mutations-uhNdCU">
                  <span class="span0-0tTT76">Subclonal Mutations<br /></span
                  ><span class="span1-0tTT76">(Exists in a subset of cancer cells)</span>
                </div>
              </div>
              <div class="frame-3587-sQbexb">
                <div class="cell-vbf0uy"></div>
                <div class="normal-cell-vbf0uy">Normal Cell</div>
              </div>
              <div class="frame-3588-sQbexb">
                <div class="cell-7ftxu2"></div>
                <div class="tumor-population-1-7ftxu2">Tumor Population 1</div>
              </div>
              <div class="frame-3589-sQbexb">
                <div class="cell-wRNUxJ"></div>
                <div class="tumor-population-2-wRNUxJ">Tumor Population 2</div>
              </div>
              <div class="frame-3590-sQbexb">
                <div class="cell-AAMXix"></div>
                <div class="tumor-population-3-AAMXix">Tumor Population 3</div>
              </div>
            </div>
          </div>
          <div class="frame-3408-rTg1Kt">
            <div class="frame-3557-78bmKL">
              <div class="we-help-you-overcome-igzbHh">
                We help you overcome the heterogeneity of cancer for better clinical outcomes with
              </div>
              <div class="single-cell-rna-sequ-igzbHh">single-cell RNA sequencing data analysis &amp; testing</div>
            </div>
            <div class="group-571-78bmKL">
              <div class="rectangle-1142-AMdjaB"></div>
              <div class="deep-single-cell-sta-AMdjaB">
                <span class="span0-17HZl7">Deep single-cell state characterization</span
                ><span class="span1-17HZl7">&nbsp;</span
                ><span class="span2-17HZl7"
                  >takes the presence of diverse cancer clones into account to improve cancer therapies by providing the
                  best combinations of druggable targets.</span
                >
              </div>
            </div>
            <div class="frame-3575-78bmKL">
              <div class="frame-3396-WMxsdo">
                <div class="frame-475-s214Vj">
                  <div class="frame-3487-ixd7i8"></div>
                  <div class="line-61-ixd7i8"></div>
                  <div class="optimize-therapeutic-strategies-ixd7i8">
                    <span class="span0-MOvRs4">Optimize<br /></span
                    ><span class="span1-MOvRs4">therapeutic strategies</span>
                  </div>
                </div>
              </div>
              <div class="frame-3397-WMxsdo">
                <div class="optimize-neo-sfPqxA">
                  <div class="frame-3488-1a6vYL"></div>
                  <div class="line-60-1a6vYL"></div>
                  <div class="increase-complete-response-rate-1a6vYL">
                    <span class="span0-TLVpHX">Increase<br /></span
                    ><span class="span1-TLVpHX">complete response rate</span>
                  </div>
                </div>
              </div>
              <div class="frame-3398-WMxsdo">
                <div class="frame-476-4l7ibx">
                  <div class="frame-3489-tJGGqp"></div>
                  <div class="line-59-tJGGqp"></div>
                  <div class="improve-patients-quality-of-life-tJGGqp">
                    <span class="span0-6Bumgj">Improve <br /></span
                    ><span class="span1-6Bumgj">patients’ quality of life</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-3409-rTg1Kt">
            <div class="frame-3528-WZg517">
              <div class="with-sc-rna-seq-data-we-do-2qcYyo">With scRNA-seq data, we do</div>
              <div class="frame-3527-2qcYyo">
                <div class="frame-3397-CdMmhQ">
                  <div class="frame-3323-s9XIVX">
                    <div class="high-resolution-tumor-classification-zKXoIl">High resolution tumor classification</div>
                    <div class="identify-molecular-a-zKXoIl">
                      Identify molecular and pathological cancer subtypes, grade, cell composition &amp; more at the
                      cell level
                    </div>
                  </div>
                  <div class="frame-3561-s9XIVX">
                    <div class="group-564-s3Ahea">
                      <div class="cell-Q9xTRJ">
                        <div class="vector-34-NZ9W59"></div>
                        <div class="ellipse-46-NZ9W59"></div>
                      </div>
                      <div class="cell-xohB3w"></div>
                      <div class="cell-HO9QEH">
                        <div class="vector-34-W8sFLW"></div>
                        <div class="ellipse-47-W8sFLW"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-3410-CdMmhQ">
                  <div class="frame-3324-xpGkVk">
                    <div class="drug-recommendation-lskeBQ">Drug recommendation targeting each cancer cell</div>
                    <div class="match-fda-approved-d-lskeBQ">
                      Match FDA-approved drugs with the most activated pathways based on SNV/CNV &amp; transcriptomic
                      status
                    </div>
                  </div>
                  <div class="frame-3563-xpGkVk">
                    <div class="group-563-aTYfjZ"></div>
                    <div class="group-562-aTYfjZ"></div>
                    <div class="group-561-aTYfjZ"></div>
                  </div>
                </div>
                <div class="frame-3411-CdMmhQ">
                  <div class="frame-3325-cTpRxV">
                    <div class="discovery-of-innovat-C6xsjb">
                      Discovery of innovative and state-of-the-art combinatorial cancer therapies
                    </div>
                    <div class="uncover-novel-pathwa-C6xsjb">
                      Uncover novel pathways to target cancer cells with no standard biomarkers &amp; find the
                      synergistic targets
                    </div>
                  </div>
                  <div class="frame-3563-cTpRxV"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-3410-rTg1Kt">
            <div class="how-sc-rna-compares-YveswE">How scRNA Compares</div>
            <div class="frame-3419-YveswE">
              <div class="frame-3417-rhmvop">
                <div class="frame-3327-IwG8GR"></div>
                <div class="frame-3327-UJwHSh">
                  <div class="pathological-subtyping-AXgAb9 valign-text-middle">Pathological Subtyping</div>
                </div>
                <div class="frame-3338-IwG8GR">
                  <div class="biomarker-profiling-quantitative-xNEIGH valign-text-middle">
                    Biomarker Profiling<br />(quantitative)
                  </div>
                </div>
                <div class="frame-3339-IwG8GR">
                  <div class="biomarker-profiling-qualitative-00Ww8O valign-text-middle">
                    Biomarker Profiling<br />(qualitative)
                  </div>
                </div>
                <div class="frame-3340-IwG8GR">
                  <div class="molecular-characterization-jS4n2l valign-text-middle">Molecular Characterization</div>
                </div>
                <div class="frame-3341-IwG8GR">
                  <div class="cell-level-diagnosis-GCHoWu valign-text-middle">Cell-level Diagnosis</div>
                </div>
                <div class="frame-3342-IwG8GR"><div class="time-yAH5fk valign-text-middle">Time</div></div>
                <div class="frame-3343-IwG8GR">
                  <div class="behavior-prediction-PbTSyS valign-text-middle">Behavior Prediction</div>
                </div>
              </div>
              <div class="frame-3416-rhmvop">
                <div class="frame-3327-tnuN77">
                  <div class="pathologic-analysis-5YxpJY valign-text-middle">Pathologic analysis</div>
                </div>
                <div class="frame-3327-nY62qM"><div class="text-64-gWviko valign-text-middle">****</div></div>
                <div class="frame-3327-0HtWv2"><div class="text-65-bkjUBP valign-text-middle">****</div></div>
                <div class="frame-3327-H5Quoj"><div class="text-66-gTrb71 valign-text-middle">**</div></div>
                <div class="frame-3327-VJ4J49"><div class="text-67-dnxztL valign-text-middle">**</div></div>
                <div class="frame-3327-zP0gBd"><div class="text-68-Xrvq09 valign-text-middle">**</div></div>
                <div class="frame-3327-elKMvW"><div class="text-69-fp2x3w valign-text-middle">***</div></div>
                <div class="frame-3327-y3RWs8"><div class="text-70-42OGQG valign-text-middle">**</div></div>
              </div>
              <div class="frame-3415-rhmvop">
                <div class="frame-3328-4cktwm">
                  <div class="panel-sequencing-RnjJLC valign-text-middle">Panel Sequencing</div>
                </div>
                <div class="frame-3328-FQfjUF"><div class="text-71-ZBBfeI valign-text-middle">*</div></div>
                <div class="frame-3328-xZIZxh"><div class="text-72-XAiIok valign-text-middle">**</div></div>
                <div class="frame-3328-DDY5Wd"><div class="text-73-JYEMNN valign-text-middle">****</div></div>
                <div class="frame-3328-xwxxyc"><div class="text-74-ncfpF9 valign-text-middle">****</div></div>
                <div class="frame-3328-CdxqlY"><div class="text-75-QGR86k valign-text-middle">*</div></div>
                <div class="frame-3328-Hh7uzT"><div class="text-76-mHcAPH valign-text-middle">**</div></div>
                <div class="frame-3328-mBCmKo"><div class="text-77-bZlNKM valign-text-middle">***</div></div>
              </div>
              <div class="frame-3418-rhmvop">
                <div class="frame-3329-se97m8"><div class="sc-rna-seq-yqP08x valign-text-middle">scRNA-seq</div></div>
                <div class="frame-3329-PpIEDf"><div class="text-78-UGzMEZ valign-text-middle">****</div></div>
                <div class="frame-3329-xsNj7V"><div class="text-79-ciYrm4 valign-text-middle">****</div></div>
                <div class="frame-3329-xkjol7"><div class="text-80-ToQAj5 valign-text-middle">***</div></div>
                <div class="frame-3329-IftSQd"><div class="text-81-iXkYuJ valign-text-middle">****</div></div>
                <div class="frame-3329-su7BHp"><div class="text-82-Uo2QQg valign-text-middle">****</div></div>
                <div class="frame-3329-63GtUM"><div class="text-83-uXTPWe valign-text-middle">**</div></div>
                <div class="frame-3329-jVve1F"><div class="text-84-9tiX7r valign-text-middle">****</div></div>
              </div>
            </div>
          </div>
          <div class="frame-3445-rTg1Kt">
            <div class="frame-3576-V0xRq4">
              <div class="our-services-include-gIubfg">Our services include</div>
              <div class="frame-3432-gIubfg">
                <div class="frame-3428-PFxIcF">
                  <div class="service-REKbYG">
                    <div class="prediction-of-subtyp-weuDZr">
                      Prediction of subtypes, grade, cell composition &amp; more
                    </div>
                    <div class="add-weuDZr"></div>
                  </div>
                </div>
                <div class="frame-3427-PFxIcF">
                  <div class="service-C5hfkW">
                    <div class="snv-cnv-4EsLbw">SNV &amp; CNV</div>
                    <div class="add-4EsLbw"></div>
                  </div>
                </div>
                <div class="frame-3426-PFxIcF">
                  <div class="service-vbVxzx">
                    <div class="cancer-origin-tracking-HJpbrE">Cancer origin tracking</div>
                    <div class="add-HJpbrE"></div>
                  </div>
                </div>
                <div class="frame-3430-PFxIcF">
                  <div class="service-OFT9WH">
                    <div class="risk-score-with-pathway-analysis-M5MwVm">Risk score with pathway analysis</div>
                    <div class="add-M5MwVm"></div>
                  </div>
                </div>
                <div class="frame-3429-PFxIcF">
                  <div class="service-z0S22O">
                    <div class="drug-recommendation-7Rz1VU">Drug recommendation</div>
                    <div class="add-7Rz1VU"></div>
                  </div>
                </div>
                <div class="frame-3431-PFxIcF">
                  <div class="service-Vxf5hX">
                    <div class="novel-biomarker-identification-prVPjV">Novel biomarker identification</div>
                    <div class="add-prVPjV"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-3401-rTg1Kt">
            <div class="frame-3433-MAnYnP">
              <div class="using-high-resolutio-NHwpNB">
                Using high resolution profiling to make cancer<br />Identifiable, Predictable &amp; Curable
              </div>
              <div className="frame-3390-NHwpNB" onmouseover>
                      {inputEmail("frame-3387-85wv42", setEmail, handleKeyPress)}
                      <div className="frame-3388-85wv42" onClick={openModal}
                      ><div className="get-started-zSZM0H">Get Started</div></div>
                    </div>
            </div>
            <div class="x4-MAnYnP"></div>
          </div>
          <div class="frame-3490-rTg1Kt">
            <div class="frame-3586-o1ccxQ">
              <div class="privacy-policy-84PYxf">Privacy Policy</div>
              <div class="terms-of-use-84PYxf">Terms of Use</div>
            </div>
            <div class="copyright-o1ccxQ">Copyright © 2023 WittGen Inc.</div>
            <div class="place-o1ccxQ">Contact</div>
            <div class="follow-us-o1ccxQ">Follow Us</div>
            <div class="frame-3534-o1ccxQ">
              <div class="frame-3532-R8Lvkx">
                <div class="call-JRw0h1"></div>
                <div class="phone-JRw0h1">+1 (510) 710 3352</div>
              </div>
              <div class="frame-3533-R8Lvkx">
                <div class="mail-1gL3tL"></div>
                <div class="infowittgenbiocom-1gL3tL" onClick={sendEmail}>info@wittgenbio.com</div>
              </div>
            </div>
            <div class="frame-3442-o1ccxQ">
              <div class="frame-3366-gxTj5P">
                <div class="twitter-JsI2kg"></div>
                <a href="https://twitter.com/wittgen_bio" target="_blank" rel="noreferrer">
                <div
                  class="x-JsI2kg valign-text-middle" 
                 onmouseover>
                </div></a>
              </div>
              <div class="frame-3367-gxTj5P">
                <div class="linked-in-7uZYBH"></div>
                <a href="https://www.linkedin.com/company/wittgen-biotechnologies/" target="_blank" rel="noreferrer">
                <div
                  class="x-7uZYBH valign-text-middle" onmouseover
                > 
                </div> </a>
              </div>
            </div>
            <div class="frame-629-o1ccxQ">
              <div class="frame-621-BDSTEu"></div>
              <div class="witt-gen-biotechnologies-BDSTEu">
                <span class="span0-KFqGBJ">WittGen</span><span class="span1-KFqGBJ">Biotechnologies</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
        </div>
        <Modal open={modalOpen} close={closeModal} email={email} setEmail={setEmail}></Modal>
      </div>}
    </>
  );
}

function clinicalResearch(setIsDiagnosis, openModal) {
  return <div class="frame-3406-a1zmEx"><div class="frame-3583-GeTPUD">
  <div class="frame-3582-xw0sQf">
    <div class="frame-3554-IL9yul">
      <div
        class="frame-3387-V5ukkE"
        onClick={() => {
          setIsDiagnosis(true);
        } } onmouseover
      >
        <div class="lab_research-SN6ZqN"></div>
        <div class="frame-3581-SN6ZqN">
          <div class="diagnosis-WzGmx3">Diagnosis</div>
          <div class="single-cell-level-cancer-diagnosis-WzGmx3">Single cell-level cancer diagnosis</div>
        </div>
        <div class="check_circle-SN6ZqN"></div>
      </div>
      <div class="frame-3388-V5ukkE" onClick={() => {
        setIsDiagnosis(false);
      } } onmouseover>
        <div class="biotech-1RDve5"></div>
        <div class="frame-3580-1RDve5">
          <div class="clinical-research-QqDEJu">Clinical Research</div>
          <div class="cutting-edge-research-using-sc-rna-seq-QqDEJu">
            Cutting-edge research using scRNA-seq
          </div>
        </div>
        <div class="check_circle-1RDve5"></div>
      </div>
    </div>
    <div class="frame-3571-IL9yul">
      <div class="frame-3396-wQvPQO">
        <div class="frame-3549-0rVNJn">
          <div class="expedite-tF0w63">Expedite</div>
          <div class="your-research-progress-in-a-jiffy-tF0w63">your research progress in a jiffy</div>
        </div>
        <div class="frame-3326-0rVNJn">
          <div class="group-495-WZFov2">
            <div class="ellipse-37-yj2bmM"></div>
            <div class="ellipse-38-yj2bmM"></div>
            <div class="ellipse-39-yj2bmM"></div>
            <div class="ellipse-40-yj2bmM"></div>
            <div class="ellipse-41-yj2bmM"></div>
            <div class="ellipse-42-yj2bmM"></div>
            <div class="rectangle-301-yj2bmM"></div>
            <div class="rectangle-302-yj2bmM"></div>
            <div class="rectangle-303-yj2bmM"></div>
          </div>
          <div class="group-496-WZFov2">
            <div class="rectangle-304-OhJWaz"></div>
            <div class="rectangle-305-OhJWaz"></div>
            <div class="rectangle-306-OhJWaz"></div>
          </div>
        </div>
      </div>
      <div class="frame-3397-wQvPQO">
        <div class="frame-3385-0WqRFw">
          <div class="group-496-YLpR8k"></div>
        </div>
        <div class="frame-3550-0WqRFw">
          <div class="gain-A5NE7S">Gain</div>
          <div class="more-robust-and-deep-A5NE7S">
            more robust and deeper insights into the tumor heterogeneity
          </div>
        </div>
      </div>
      <div class="frame-3398-wQvPQO">
        <div class="frame-3551-MwbLFT">
          <div class="discover-hgW5fj">Discover</div>
          <div class="groundbreaking-novel-discoveries-hgW5fj">groundbreaking novel discoveries</div>
        </div>
        <div class="frame-3393-MwbLFT">
          <div class="group-570-P5xuqZ">
            <div class="group-567-qRVf4X">
              <div class="rectangle-1151-P2cP1g"></div>
              <div class="union-P2cP1g"></div>
              <div class="union-YfKSHq"></div>
              <div class="group-490-P2cP1g"></div>
              <div class="group-565-P2cP1g">
                <div class="star-1-xgNuWM"></div>
                <div class="vector-22-stroke-xgNuWM"></div>
                <div class="vector-22-stroke-vjXqhn"></div>
                <div class="vector-22-stroke-5WviPl"></div>
                <div class="ellipse-7-stroke-xgNuWM"></div>
                <div class="ellipse-7-stroke-vjXqhn"></div>
              </div>
            </div>
            <div class="group-569-qRVf4X"></div>
          </div>
        </div>
      </div>
    </div>
    <button class="frame-3301-IL9yul" onClick={openModal} 
    onmouseover><div class="explore-more-BBuXSs">Explore more</div></button>
  </div>
  </div>
  </div>;
}

function clinicalResearch1920(setIsDiagnosis, openModal) {
  return <div class="frame-3406-Xw3ch0"><div class="frame-3583-GeTPUD">
  <div class="frame-3554-jJ2VEg">
    <button
      class="frame-3387-SVgw1N"
      onClick={() => {
        setIsDiagnosis(true);
      } } onmouseover
    >
      <div class="lab_research-6cSx9i"></div>
      <div class="diagnosis-6cSx9i">Diagnosis</div>
      <div class="single-cell-level-cancer-diagnosis-6cSx9i">Single cell-level cancer diagnosis</div>
      <div class="check_circle-6cSx9i"></div>
    </button>
    <button class="frame-3388-SVgw1N"
    onClick={() => {
      setIsDiagnosis(false);
    } } onmouseover>
      <div class="biotech-fExi2U"></div>
      <div class="clinical-research-fExi2U">Clinical Research</div>
      <div class="cutting-edge-research-using-sc-rna-seq-fExi2U">Cutting-edge research using scRNA-seq</div>
      <div class="check_circle-fExi2U"></div>
    </button>
  </div>
  <div class="frame-3399-jJ2VEg">
  <div class="frame-3396-HyFxLn">
    <div class="frame-3326-riAr0l"></div>
    <div class="frame-3549-hV0kwT">
      <div class="frame-3477-riAr0l">
        <div class="expedite-1S6mBG">Expedite</div>
        <div class="your-research-progress-in-a-jiffy-1S6mBG">your research progress in a jiffy</div>
      </div>
    </div>
  </div>
  <div class="frame-3397-HyFxLn">
    <div class="group-496-GsCIOW"></div>
    <div class="frame-3549-hV0kwT">
      <div class="gain-K5ZdFR">Gain</div>
      <div class="more-robust-and-deep-K5ZdFR">
        more robust and deeper insights into the tumor heterogeneity
      </div>
    </div>
  </div>
  <div class="frame-3398-HyFxLn">
    <div class="frame-3393-lMYxox">
    </div>
    <div class="frame-3549-hV0kwT">
      <div class="discover-Kmq9Lj">Discover</div>
      <div class="groundbreaking-novel-discoveries-Kmq9Lj">groundbreaking novel discoveries</div>
    </div>
  </div>
  </div>
  <div class="frame-3301-jJ2VEg" onClick={openModal} onmouseover><div class="explore-more-63vVhL">Explore more</div></div>

</div></div>
;
}

function diagnosis(setIsDiagnosis, openModal) {
  return <div class="frame-3406-a1zmEx">
  <div class="frame-3583-GeTPUD">
    <div class="frame-3554-4rfc5r">
      <div class="frame-3387-9bgcHM" onClick={() => {
        setIsDiagnosis(true);
      } } onmouseover>
        <div class="lab_research-t6xrqG"></div>
        <div class="frame-3578-t6xrqG">
          <div class="diagnosis-6edbvU">Diagnosis</div>
          <div class="single-cell-level-cancer-diagnosis-6edbvU">Single cell-level cancer diagnosis</div>
        </div>
        <div class="check_circle-t6xrqG"></div>
      </div>
      <div
        class="frame-3388-9bgcHM"
        onClick={() => {
          setIsDiagnosis(false);
        } } onmouseover
      >
        <div class="biotech-VifZbk"></div>
        <div class="frame-3579-VifZbk">
          <div class="clinical-research-bs33QB">Clinical Research</div>
          <div class="cutting-edge-research-using-sc-rna-seq-bs33QB">
            Cutting-edge research using scRNA-seq
          </div>
        </div>
        <div class="check_circle-VifZbk"></div>
      </div>
    </div>
    <div class="frame-3571-4rfc5r">
      <div class="frame-3396-QrQxne">
        <div class="frame-3549-iHymeE">
          <div class="visualize-CXLHUp">Visualize</div>
          <div class="the-composition-of-t-CXLHUp">the composition of the tumor <br />micro environment</div>
        </div>
        <div class="frame-iHymeE"></div>
      </div>
      <div class="frame-3397-QrQxne">
        <div class="frame-CC5mRC">
          <div class="frame-3323-7wcYBB">
            <div class="group-490-bws81r">
              <div class="star-1-pKBe75"></div>
              <div class="vector-22-stroke-pKBe75"></div>
              <div class="vector-22-stroke-jUjWA1"></div>
              <div class="vector-22-stroke-rXO8h0"></div>
              <div class="ellipse-7-stroke-pKBe75"></div>
              <div class="ellipse-7-stroke-jUjWA1"></div>
              <div class="ellipse-7-stroke-rXO8h0"></div>
            </div>
            <div class="group-491-bws81r">
              <div class="star-1-HvDf8f"></div>
              <div class="vector-22-stroke-HvDf8f"></div>
              <div class="vector-22-stroke-SqjZ3O"></div>
              <div class="vector-22-stroke-dM73Sx"></div>
              <div class="ellipse-7-stroke-HvDf8f"></div>
              <div class="ellipse-7-stroke-SqjZ3O"></div>
              <div class="ellipse-7-stroke-dM73Sx"></div>
            </div>
            <div class="group-492-bws81r">
              <div class="star-1-14MpyY"></div>
              <div class="vector-22-stroke-14MpyY"></div>
              <div class="vector-22-stroke-oXPyxq"></div>
              <div class="vector-22-stroke-tSip4E"></div>
              <div class="ellipse-7-stroke-14MpyY"></div>
              <div class="ellipse-7-stroke-oXPyxq"></div>
              <div class="ellipse-7-stroke-tSip4E"></div>
            </div>
            <div class="rectangle-282-bws81r"></div>
            <div class="rectangle-283-bws81r"></div>
            <div class="union-bws81r"></div>
            <div class="rectangle-284-bws81r"></div>
            <div class="group-493-bws81r">
              <div class="ellipse-26-xIxi5a"></div>
              <div class="ellipse-25-xIxi5a"></div>
              <div class="ellipse-24-xIxi5a"></div>
              <div class="ellipse-23-xIxi5a"></div>
              <div class="ellipse-22-xIxi5a"></div>
            </div>
          </div>
        </div>
        <div class="frame-3550-CC5mRC">
          <div class="predict-Odqq1R">Predict</div>
          <div class="histological-subtype-Odqq1R">
            histological subtypes, grade &amp; more at the cell level in your biopsy
          </div>
        </div>
      </div>
      <div class="frame-3398-QrQxne">
        <div class="frame-3551-cBCYpB">
          <div class="profile-sUcewj">Profile</div>
          <div class="molecular-characteri-sUcewj">
            molecular characteristics such as biomarkers expressions, SNV/CNV &amp; activated pathways at the
            cell level
          </div>
        </div>
        <div class="frame-3393-cBCYpB">
          <div class="union-BXMAiS"></div>
        </div>
      </div>
    </div>
    <div class="frame-3301-4rfc5r" onClick={openModal} onmouseover><div class="explore-more-QnYsQt">Explore more</div></div>
  </div>
</div>;
}

function diagnosis1920(setIsDiagnosis, openModal) {
  return  <div class="frame-3406-Xw3ch0">
  <div class="frame-3583-GeTPUD">
  <div class="frame-3554-jJ2VEg">
    <div class="frame-3387-xT9hTx" onClick={() => {
          setIsDiagnosis(true);
        } } onmouseover>
      <div class="lab_research-ySKur6"></div>
      <div class="diagnosis-ySKur6">Diagnosis</div>
      <div class="single-cell-level-cancer-diagnosis-ySKur6">Single cell-level cancer diagnosis</div>
      <div class="check_circle-ySKur6"></div>
    </div>
    <div
      class="frame-3388-xT9hTx"
      onClick={() => {
        setIsDiagnosis(false);
      } } onmouseover
    >
      <div class="biotech-rNHbEy"></div>
      <div class="clinical-research-rNHbEy">Clinical Research</div>
      <div class="cutting-edge-research-using-sc-rna-seq-rNHbEy">Cutting-edge research using scRNA-seq</div>
      <div class="check_circle-rNHbEy"></div>
    </div>
  </div>
  <div class="frame-3399-jJ2VEg">
    <div class="frame-3396-HyFxLn">
      <div class="frame-3549-hV0kwT">
        <div class="visualize-3y8RUx">Visualize</div>
        <div class="the-composition-of-t-3y8RUx">the composition of the tumor <br />micro environment</div>
      </div>
      <div class="frame-hV0kwT"></div>
    </div>
    <div class="frame-3397-HyFxLn">
      <div class="frame-l4Tdhx">
        <div class="frame-3323-vLPNxR">
          <div class="group-490-Xx9R43">
            <div class="star-1-NTLFn1"></div>
            <div class="vector-22-stroke-NTLFn1"></div>
            <div class="vector-22-stroke-RAoaIC"></div>
            <div class="vector-22-stroke-AAM8ls"></div>
            <div class="ellipse-7-stroke-NTLFn1"></div>
            <div class="ellipse-7-stroke-RAoaIC"></div>
            <div class="ellipse-7-stroke-AAM8ls"></div>
          </div>
          <div class="group-491-Xx9R43">
            <div class="star-1-CpwEb2"></div>
            <div class="vector-22-stroke-CpwEb2"></div>
            <div class="vector-22-stroke-orRsWu"></div>
            <div class="vector-22-stroke-Sxvoyx"></div>
            <div class="ellipse-7-stroke-CpwEb2"></div>
            <div class="ellipse-7-stroke-orRsWu"></div>
            <div class="ellipse-7-stroke-Sxvoyx"></div>
          </div>
          <div class="group-492-Xx9R43">
            <div class="star-1-0jyVxX"></div>
            <div class="vector-22-stroke-0jyVxX"></div>
            <div class="vector-22-stroke-Z0v3gP"></div>
            <div class="vector-22-stroke-MHfmQh"></div>
            <div class="ellipse-7-stroke-0jyVxX"></div>
            <div class="ellipse-7-stroke-Z0v3gP"></div>
            <div class="ellipse-7-stroke-MHfmQh"></div>
          </div>
          <div class="rectangle-282-Xx9R43"></div>
          <div class="rectangle-283-Xx9R43"></div>
          <div class="union-Xx9R43"></div>
          <div class="rectangle-284-Xx9R43"></div>
          <div class="group-493-Xx9R43">
            <div class="ellipse-26-GO4xwB"></div>
            <div class="ellipse-25-GO4xwB"></div>
            <div class="ellipse-24-GO4xwB"></div>
            <div class="ellipse-23-GO4xwB"></div>
            <div class="ellipse-22-GO4xwB"></div>
          </div>
        </div>
      </div>
      <div class="frame-3550-l4Tdhx">
        <div class="predict-1RZaxu">Predict</div>
        <div class="histological-subtype-1RZaxu">
          histological subtypes, grade &amp; more at the cell level in your biopsy
        </div>
      </div>
    </div>
    <div class="frame-3398-HyFxLn">
      <div class="frame-3551-6sYtFS">
        <div class="profile-2PdLlj">Profile</div>
        <div class="molecular-characteri-2PdLlj">
          molecular characteristics such as biomarkers expressions, SNV/CNV &amp; activated pathways at the
          cell level
        </div>
      </div>
      <div class="frame-3393-6sYtFS">
        <div class="union-7IxWcL"></div>
      </div>
    </div>
  </div>
  <div class="frame-3301-jJ2VEg" onClick={openModal}
  onmouseover><div class="explore-more-Jy2ufs">Explore more</div></div>
</div>
</div>;
}

function inputEmail(className, setEmail, handleKeyPress) {
  return <input className={className} onChange={(e) => {
    setEmail(e.target.value);
  } } style={{
    border: 'none',
    outline: 'none',
    paddingLeft: '10px',
    fontSize: "14px"
  }} placeholder="Email"
  onKeyDown={handleKeyPress} />;
}

const sendEmail = () => {
  const recipient = 'info@wittgenbio.com';
  const mailtoUrl = `mailto:${recipient}`;
  window.location.href = mailtoUrl;
};