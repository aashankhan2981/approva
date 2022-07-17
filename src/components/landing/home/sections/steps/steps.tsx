
import React, { useEffect } from "react";

export function Steps() {

    let getDivider = (step, context) => {
        return (
            <div className={"divider " + step}>
                {context !== "up" && <div className={"separatorUp " + context}></div>}
                <div className="bullet"></div>
                {context !== "down" && <div className={"separatorDown " + context}></div>}
            </div>
        )
    };

    return (
        <div className="app bg-[#0aafff1a] rounded-[60px] maxWidth m-auto">
            <div className="homePage">
                <div className="heading">How it Works</div>
                <div className="body">
                    <div className="leftSection">
                        <div className="step right step1" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            <div className="number">1.</div>
                            <div className="iconContainer left">
                                <img className="icon" src={"/imgs/landing/resume 1.svg"} alt="" />
                            </div>
                        </div>
                        <div className="descriptionContainer step2" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            <div className="label right">Tailor your options</div>
                            <div className="description right">
                                Create an account and provide us more information
                                about your objectives to pinpoint your best options.
                            </div>
                        </div>
                        <div className="step right step3" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            <div className="number">3.</div>
                            <div className="iconContainer left">
                                <img className="icon" src={"/imgs/landing/profiles 1.svg"} alt="" />
                            </div>
                        </div>
                        <div className="descriptionContainer step4" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            <div className="label right">Get your mortgage approved</div>
                            <div className="description right">
                                Upload your supporting documents and we’ll take it
                                from there. Just like that, you’ve got your new
                                mortgage.
                            </div>
                        </div>
                    </div>
                    <div className="rightSection">
                        <div className="desContainer" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            {getDivider("step1", "up")}
                            <div className="descriptionContainer step1">
                                <div className="label left">Share a little about yourself.</div>
                                <div className="description left">
                                    Access the best mortgages in seconds with our AI
                                    -powered algorithm. We screen the entire market in
                                    seconds to present you the best possible rates from
                                    2,000+ mortgage products.
                                </div>
                            </div>
                        </div>
                        <div className="desContainer" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            {getDivider("step2", "both")}
                            <div className="step left step2">
                                <div className="iconContainer right">
                                    <img className="icon" src={"/imgs/landing/cinema-seat 1.svg"} alt="" />
                                </div>
                                <div className="number">2.</div>
                            </div>
                        </div>
                        <div className="desContainer" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            {getDivider("step3", "both")}
                            <div className="descriptionContainer step3">
                                <div className="label left">Build your mortgage and apply</div>
                                <div className="description left">
                                    Trust your instincts? Confirm your product choice
                                    directly online. Still undecided? Get advice from our
                                    expert mortgage advisors. Either way, get the financing
                                    process started.
                                </div>
                            </div>
                        </div>
                        <div className="desContainer" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            {getDivider("step4", "down")}
                            <div className="step left step4">
                                <div className="iconContainer right">
                                    <img className="icon" src={"/imgs/landing/check-mark 1.svg"} alt="" />
                                </div>
                                <div className="number">4.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}