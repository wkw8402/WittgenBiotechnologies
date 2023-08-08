/* eslint-disable */

import "../styling/Thank.css";
import React from 'react';
import { useState, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';
import AWS from "aws-sdk";

const Thank = (props) => {

    const { open, close, name } = props;

    return (
    <>
    <div className={open ? 'openModal modal' : 'modal'}>
    {open ? (
        <section>
        <main>{    
            <div>
                <meta charSet="utf-8" />
                {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
                {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="photo" />
                <input type="hidden" id="anPageName" name="page" defaultValue="frame-3535" />
                <div class="container-center-horizontal">
                    <div class="frame-3390 screen">
                        <img class="close" src="close@2x.png" alt="close" onClick={close}/>
                        <div class="frame-3452">
                        <img class="frame-621" src="frame-621-7.svg" alt="Frame 621" />
                        <div class="witt-gen-biotechnologies">
                            <span class="span0">WittGen</span><span class="span1">Biotechnologies</span>
                        </div>
                        </div>
                        <div class="frame-3568">
                        <div class="frame-3566">
                            <h1 class="dear-sample-name-t">Dear, {name}<br />Thanks for signing up!</h1>
                            <p class="were-so-excited-to">
                            We&#39;re so excited to welcome you.<br />We will keep you posted on the latest updates.
                            </p>
                        </div>
                        <img class="line-79" src="line-79-1.svg" alt="Line 79" />
                        <div class="frame-3567">
                            <p class="if-you-have-any-ques">If you have any questions, please contact us below</p>
                            <div class="frame-3534">
                            <div class="frame-353">
                                <img class="call" src="call@2x.png" alt="call" />
                                <div class="phone oxygen-normal-tundora-20px">+1 (510) 710 3352</div>
                            </div>
                            <div class="frame-353">
                                <img class="mail" src="mail@2x.png" alt="mail" />
                                <div class="infowittgenbiocom oxygen-normal-tundora-20px">info@wittgenbio.com</div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="close-1" onClick={close} ><div class="close-2">Close</div></div>
                    </div>
                </div>
            </div>
        }</main>
        </section>
    ) : null}
    </div>
    </>
    );
}

export default Thank;