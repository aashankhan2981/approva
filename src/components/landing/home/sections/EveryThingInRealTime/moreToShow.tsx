import Link from "next/link";
import React from "react";

export function MoreToShow() {

    const getBankBadgeView = (sIconSRC) => {
        return (
            <div className="bankBadgeContainer">
                <img className="bankIcon" src={sIconSRC} alt={""} />
            </div>
        )
    };

    return (
        <div className="body more">
            <div className="moreLeftSection">
                <div className="heading1">Access over <b className="bold">35+ Banks,</b> Credit Unions and
                    Lenders
                </div>
                <div className="heading2">Your Time is valuable</div>
                <div className="description">
                    No more wasting your time going into branches, calling
                    branch reps, back-and-forth - compare the best rates, right
                    now, wherever you are, 365/24/7.
                </div>
                <Link href='/mortgage/new'>
                    <a className="getStartedButton more" style={{background: "#1d72e8"}}>Get Started</a>
                </Link>

            </div>
            <div className="moreRightSection">
                <div className="imageContainer">
                    <div className="backgroundShade"></div>
                    <div className="moreLeftSectionImageContainer">
                        <div className="bankBadgeWrapper">
                            {getBankBadgeView("/imgs/banks/first-national.svg")}
                            {getBankBadgeView("/imgs/banks/merix.svg")}
                        </div>
                        <div className="bankBadgeWrapper">
                            {getBankBadgeView("/imgs/banks/rfa.svg")}
                            {getBankBadgeView("/imgs/banks/lendwise.svg")}
                            {getBankBadgeView("/imgs/banks/rmg.svg")}
                        </div>
                        <div className="bankBadgeWrapper">
                            {getBankBadgeView("/imgs/banks/cwb.svg")}
                            {getBankBadgeView("/imgs/banks/scotiabank.svg")}
                            {getBankBadgeView("/imgs/banks/td.svg")}
                            {getBankBadgeView("/imgs/banks/mcap.svg")}
                        </div>
                        <div className="bankBadgeWrapper">
                            {getBankBadgeView("/imgs/banks/icicibank.svg")}
                            {getBankBadgeView("/imgs/banks/eq.svg")}
                            {getBankBadgeView("/imgs/banks/manulife.svg")}
                            {getBankBadgeView("/imgs/banks/cmls.svg")}
                        </div>
                        <div className="bankBadgeWrapper">
                            {getBankBadgeView("/imgs/banks/home-trust.svg")}
                            {getBankBadgeView("/imgs/banks/b2b-bank.svg")}
                            {getBankBadgeView("/imgs/banks/duca-bank.svg")}
                        </div>
                        <div className="bankBadgeWrapper">
                            {getBankBadgeView("/imgs/banks/strive.svg")}
                            {getBankBadgeView("/imgs/banks/xmc.svg")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}