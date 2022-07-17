import Link from "next/link";
import React from "react";

export  function EverythingTailored() {
    return (
        <div className="body tailored">
            <div className="tailoredLeftSection">
                <div className="section">
                    <img className="icon" alt="" src={"/imgs/landing/compare-rates-icon.png"}/>
                    <div className="descriptionContainer">
                        <div className="heading">Compare Rates & Monthly payments</div>
                        <div className="description">
                            Find the best mortgage, tailor-made to you. Find the lowest
                            monthly payment, lowest rates and find the best bang-
                            for-buck option.
                        </div>
                    </div>
                </div>
                <div className="section">
                    <img className="icon" alt="" src={"/imgs/landing/bonus-products-icon.png"}/>
                    <div className="descriptionContainer">
                        <div className="heading">Bonus Products</div>
                        <div className="description">
                            Many Banks offer incentives for you to choose them.
                            Home-Equity Line of Credits, pre-approved credit cards, first
                            month no payment, Cashback, and so much more! The
                            more you know....
                        </div>
                    </div>
                </div>
                <div className="section">
                    <img className="icon" alt="" src={"/imgs/landing/track-progress-icon.png"}/>
                    <div className="descriptionContainer">
                        <div className="heading">Track Progress of Applications</div>
                        <div className="description">
                            Upload documents digitally, get text/email updates
                            whenever there are updates/questions from the Lenders.
                        </div>
                    </div>
                </div>
                <Link href='/mortgage/new'>
                    <button className="getStartedButton tailored">Get Started</button>
                </Link>
            </div>
            <div className="tailoredRightSection">
                <div className="imageContainer">
                    <div className="backgroundShade"></div>
                    <img className="image" src={"/imgs/landing/everything-tailored-group-icon.png"} alt=""/>
                </div>
            </div>
        </div>
    );
}