import "../styling/CostUsage.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import "../styling/MetabaseInput2.css";
import "../styling/CostUsage.css";
import React, { useState, useEffect, useRef } from 'react';



export default function () {

    let TitleObject = [
        {
            component1: "Payment",
            component2: "Service",
            component3: "Completed",
            component4: "Status",
            component5: "Amount",
            component6: "Download Invoice",
        }
    ];

    let FilesObject = [
        {
            fileId: "Memory Usage Upgrade",
            service: "",
            lastEdited: "",
            status: "Pending",
            amount: "$50",
        },
        {
            fileId: "GH-123445",
            service: "Clincal",
            lastEdited: "11/13/2022",
            status: "Pending",
            amount: "$150",
        },
        {
            fileId: "GH-123445",
            service: "Clincal",
            lastEdited: "11/13/2022",
            status: "Done",
            amount: "$130",
        },
        {
            fileId: "GH-123445",
            service: "Clincal",
            lastEdited: "11/13/2022",
            status: "Failed",
            amount: "$250",
        },
        {
            fileId: "GH-1234325",
            service: "Clincal",
            lastEdited: "11/13/2022",
            status: "Done",
            amount: "$500",
        },
        {
            fileId: "GH-1145",
            service: "Research",
            lastEdited: "11/43/2022",
            status: "Done",
            amount: "$260",
        },
        {
            fileId: "GH-345",
            service: "Clincal",
            lastEdited: "111/13/2232",
            status: "Pending",
            amount: "$90",
        },
        {
            fileId: "GH-1231345",
            service: "Clincal",
            lastEdited: "111/13/2232",
            status: "Pending",
            amount: "$900",
        }

    ];

    const switchColor = (state) => {
        switch (state) {
            case 'Done':
                return '#009F06';
            case 'Pending':
                return '#1431C9';
            default:
                return '#B60B0B';
        }
    };

    function PaymentTable() {
        return (
            <div className="payment-table">
                <div className="payment-row-top">
                    {Object.values(TitleObject[0]).map((value, index) => (
                        <div className={index === 0 ? "payment-first-cell" : "payment-cell"}
                            key={index}
                        >
                            {value}
                        </div>
                    ))}
                </div>
                {FilesObject.map((row, index) => (
                    <div className="payment-row" key={index}>
                        {Object.entries(row).map(([key, value], cellIndex) => (
                            <div className={cellIndex === 0 ? "payment-first-cell" : "payment-cell"}
                                key={cellIndex}
                                style={key === 'status' ? { color: switchColor(value) } : {}}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return (


        <div className="page">
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=1920, maximum-scale=1.0" />
            <input
                type="hidden"
                id="anPageName"
                name="page"
                defaultValue="apply-metadatabase-input-import-excel-file-match-columns"
            />
            <div className="main-navigation">
                <div className="logo-box">
                    <a href="/">
                        <div className="witt-gen-portal bold-portal-logo">
                            <span className="bold-portal-logo">
                                WittGen
                            </span>
                            <span className="light-portal-logo">
                                Portal
                            </span>
                        </div>
                    </a>
                </div>
                <div className="navigation-box">
                    <div className="navigation-box-1">
                        <img
                            className="dashboard-icon"
                            src="/image/home-icon.svg"
                            alt="home-icon"
                        />
                        <div className="light-font">Dashboard</div>
                    </div>
                    <div className="navigation-box-1">
                        <img
                            className="myfiles-icon"
                            src="/image/myfiles-icon2.svg"
                            alt="myfiles-icon"
                        />
                        <div className="light-font">My files</div>
                    </div>
                    <div className="navigation-box-1">
                        <img
                            className="cost-usage-icon"
                            src="/image/cost-usage-icon2.svg"
                            alt="cost-usage-icon"
                        />
                        <div className="light-font2">Cost &amp; Usage</div>
                    </div>
                    <div className="navigation-box-1">
                        <img
                            className="setting-icon"
                            src="/image/settings-icon.svg"
                            alt="setting-icon"
                        />
                        <div className="light-font">Settings</div>
                    </div>
                    <div className="navigation-box-1">
                        <img
                            className="faq-support-ion"
                            src="/image/faq-support-icon.svg"
                            alt="faq-support-icon"
                        />
                        <div className="light-font">FAQ / Support</div>
                    </div>
                </div>
                <div className="logout">
                    <img
                        className="logout-icon"
                        src="/image/logout-icon.png"
                        alt="logout-icon"
                    />
                    <div className="light-font">Logout</div>
                </div>
            </div>


            <div className="cost-page">
                <div className="cost-page-top">
                    <div className="cost-page-title">
                        Cost & Usage
                    </div>
                </div>
                <div className="cost-page-main">
                    <div className="cost-page-main-1">
                        <div className="cost-title-box">
                            <div className="rectangle-skyblue"></div>
                            <div className="cost-payment-box">
                                <div className="cost-title-font1">Pending Payments</div>
                            </div>
                            <div className="skyblue-line"></div>
                            <div className="cost-title-font2">$500</div>
                            <div className="rectangle-skyblue2"></div>
                            <div className="cost-payment-box2">
                                <div className="cost-title-font1">Membership</div>
                            </div>
                            <div className="skyblue-line2"></div>
                            <div className="cost-title-font3">$500/ to be charged March 15th, 2023</div>
                            <div className="update-box">
                                <div className="update-font">Update membership plan</div>
                            </div>
                        </div>
                        <div className="cost-title-box2">
                            <div className="cost-bottom-1">Current Quota Usage (Membership only)</div>
                            <div className="cost-bottom-2">Update usage</div>
                            <div className="cost-bottom-3">Using 5.45 TB of quota 6 TB</div>
                            <div className="cost-bottom-4">45%</div>
                            <div className="cost-bottom-5"></div>
                        </div>
                    </div>

                    <div className="cost-page-main-2">
                        <div className="cost-page-payment">Payments</div>
                        <div className="cost-serach-box">
                            <img
                                style={{ marginRight: '9px' }}
                                src="/image/cost-serach-icon.svg"
                                alt="search-icon"
                            />
                            Search
                        </div>
                        <div className="cost-search-bottom">
                            Search
                        </div>
                        <div className="cost-page-list">
                            12345
                        </div>
                    </div>
                    <PaymentTable />
                </div>
            </div>


        </div>
    );
}

