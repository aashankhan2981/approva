import { Checkbox, Grid } from "@mui/material";
import Link from "next/link"
import { useState } from "react";
import Slider from "react-slick";
import Typewriter from "typewriter-effect";
import { PhoneIcon } from "../../icons";



export const Section1 = () => {

    const settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: true,
    };
    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        // rtl: true
    };
    const settings3 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: true,
    };
    return (
        <>
            <div className="flex justify-between min-h-[15vh] md:min-h-[18vh] overflow-x-hidden">
                <div className="flex flex-wrap justify-start relative">
                    <div className="">
                        <img
                            className=" w-1/1 sm:h-20"
                            src='/imgs/mobile/landing/Rectangle1.png'
                            alt=""
                        />
                    </div>
                    <div className="absolute top-4 left-0 w-[48vw]">
                        <img
                            className=" w-1/1 sm:h-24"
                            src='/imgs/mobile/landing/family_1.png'
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-end relative">
                    <div className="w-[48vw] flex justify-end max-w-[180px] max-h-[85px]">
                        <img
                            className=" w-1/1 sm:h-24"
                            src='/imgs/mobile/landing/Rectangle2.png'
                            alt=""
                        />
                    </div>
                    <div className="absolute top-3 right-0 w-[52vw] flex justify-end">
                        <img
                            className=" w-1/1 sm:h-24"
                            src='/imgs/mobile/landing/family_2.png'
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="text-center ">
                <div className="text-xl font-bold text-[#1C2D41]">
                    Getting your mortgage <br /> approved just got
                </div>

                <Typewriter
                    options={{ loop: true }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                '<span className="text-md text-[#1C2D41]">simple.</span>'
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(
                                '<span className="text-md text-[#1C2D41]">easy.</span>'
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(
                                '<span className="text-md text-[#1C2D41]">fast.</span>'
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(
                                '<span className="text-md text-[#1C2D41]">transparent.</span>'
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
            <div className="flex justify-between mt-2 min-h-[115px] sm:min-h-[150px] max-w-full overflow-x-hidden">
                <div className="flex flex-wrap justify-start relative">
                    <div className="w-[50vw]">
                        <img
                            className=" w-1/1 sm:h-28"
                            src='/imgs/mobile/landing/Rectangle3.png'
                            alt=""
                        />
                    </div>
                    <div className="absolute left-0 top-4 w-[55vw]">
                        <img
                            className=" w-1/1 sm:h-28"
                            src='/imgs/mobile/landing/family_3.png'
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-end relative">
                    <div className="flex justify-end items-start">
                        <img
                            className=" w-1/1 sm:h-16"
                            src='/imgs/mobile/landing/Rectangle4.png'
                            alt=""
                        />
                    </div>
                    <div className="absolute right-0 w-[44vw] top-4 flex justify-end">
                        <img
                            className=" w-1/1 sm:h-28"
                            src='/imgs/mobile/landing/family_4.png'
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="">
                    <div className="flex m-2 items-center">
                        {/* <img src={"/imgs/landing/Vector.svg"} alt="verified" /> */}
                        <div>
                            <Checkbox aria-label="checkbox" defaultChecked sx={{ color: "#2dca73", '&.Mui-checked, &.MuiCheckbox-root': { color: "#2dca73", border: "1px solid #e4e4e4", boxShadow: "1px 2px 1px 1px #e4e4e4", width: "35px", height: "35px" } }} />
                        </div>
                        <p className="ml-2 font-normal text-[#3C4858] flex text-sm items-center">
                            Results in seconds, not days.
                        </p>
                    </div>
                    <div className="flex m-2 items-center">
                        {/* <img src={"/imgs/landing/Vector.svg"} alt="verified" /> */}
                        <div>
                            <Checkbox aria-label="checkbox" defaultChecked sx={{ color: "#2dca73", '&.Mui-checked, &.MuiCheckbox-root': { color: "#2dca73", border: "1px solid #e4e4e4", boxShadow: "1px 2px 1px 1px #e4e4e4", width: "35px", height: "35px" } }} />
                        </div>
                        <p className="ml-2 font-normal text-[#3C4858] flex text-sm items-center">
                            Rock-bottom rates.
                        </p>
                    </div>
                    <div className="flex m-2 items-center">
                        {/* <img src={"/imgs/landing/Vector.svg"} alt="verified" /> */}
                        <div>
                            <Checkbox aria-label="checkbox" defaultChecked sx={{ color: "#2dca73", '&.Mui-checked, &.MuiCheckbox-root': { color: "#2dca73", border: "1px solid #e4e4e4", boxShadow: "1px 2px 1px 1px #e4e4e4", width: "35px", height: "35px" } }} />
                        </div>
                        <p className="ml-2 font-normal text-[#3C4858] flex text-sm items-center">
                            Up to $3,000 cashback upon approval.
                        </p>
                    </div>
                    {/* <p className="flex text-sm mt-2 items-center"><span></span>Results in seconds, not days.</p> */}
                    {/* <p className="flex text-sm mt-2 items-center"><span></span> Rock-bottom rates.</p> */}
                    {/* <p className="flex text-sm mt-2 items-center"><span></span> Up to $3,000 cashback upon approval.</p> */}
                </div>
            </div>
            {/* ----- Access ------ */}
            <div className="bg-[#EBF8FF] mt-4 py-5 px-1 overflow-hidden">
                <div >

                    <div className=" relative">
                        <div className="absolute top-4 -left-4">
                            <img src="/imgs/mobile/landing/Circle6.png" alt="circle6" />
                        </div>
                        <div className="absolute -bottom-8 -right-8">
                            <img src="/imgs/mobile/landing/Circle6.png" alt="circle6" />
                        </div>
                        <Slider {...settings1} className="">
                            {bankList1.map((items) => (<div>
                                <div className="flex border border-[#CDEEFF] rounded-xl min-h-[80px] sm:min-h-[100px] min-w-[80px] sm:min-w-[100px] mx-2 justify-center items-center bg-white z-50">
                                    <img src={items.imgUrl} alt={items.alt} className="sm:w-4/12" />
                                </div>
                            </div>))}
                        </Slider>
                        <br />
                        <Slider {...settings2} className="">
                            {bankList2.map((items) => (<div>
                                <div className=" border border-[#CDEEFF] rounded-xl min-h-[80px] sm:min-h-[100px] min-w-[80px] sm:min-w-[100px] mx-2 bg-white flex items-center justify-center z-50">
                                    <img src={items.imgUrl} alt={items.alt} className="sm:w-4/12" />
                                </div>
                            </div>))}
                        </Slider>
                        <br />
                        <Slider {...settings3} className="">
                            {bankList3.map((items) => (<div>
                                <div className=" border border-[#CDEEFF] rounded-xl min-h-[80px] sm:min-h-[100px] min-w-[80px] sm:min-w-[100px] mx-2 bg-white flex items-center justify-center z-50">
                                    <img src={items.imgUrl} alt={items.alt} className="sm:w-4/12" />
                                </div>
                            </div>))}
                        </Slider>

                    </div>
                    <div className="text-center mt-3 font-medium">
                        Access over <span className="font-bold">35+ Banks,</span><br />Credit Unions and Lenders
                    </div>
                </div>
            </div>
            <div className=" w-[80%] m-auto flex flex-wrap justify-center border-b-2 pb-6">
                <Link href="/mortgage/new">
                    <button className=" w-[100%] transition ease-in-out delay-150 bg-[#1D72E8] border-[#1D72E8] font-medium border py-3 text-[#FFFFFF] rounded-xl text-[16px] mt-5 mb-5">
                        See mortgage results for you
                    </button>
                </Link>
                <Link href="/mortgage/new">
                    <button className="w-[100%] transition ease-in-out delay-150 bg-[#FFFFFF] py-3 border border-[#1D72E8] text-[#1D72E8] font-medium rounded-xl text-[16px] mb-5 ">
                        Get pre-approved
                    </button>
                </Link>
            </div>
            <div className="m-auto w-[60%]">
                <p className="text-[lg] my-[30px] font-normal text-center">
                    View current market rates in canada {">"}
                </p>
            </div>
            <div className="m-auto w-[85%] px-3 relative">
                <div className="absolute left-4 bottom-4 -z-50">
                    <img src={"/imgs/mobile/landing/Circle5.png"} alt="circle-left" />
                </div>
                <div className="absolute -right-1 -top-5 -z-50">
                    <img src={"/imgs/mobile/landing/Circle4.png"} alt="circle-right" />
                </div>
                <p className="text-2xl text-center font-medium">
                    Entirely digital, on the go <span className="font-semibold">just like you</span><br /> 24/7/365
                </p>
            </div>

        </>
    )
}


const bankList1 = [
    {
        alt: "firstNational",
        imgUrl: "/imgs/mobile/landing/firstNational.png"
    },
    {
        alt: "merix",
        imgUrl: "/imgs/mobile/landing/merix.png"
    },
    {
        alt: "rfa",
        imgUrl: "/imgs/mobile/landing/rfa.png"
    },
    {
        alt: "lendwise",
        imgUrl: "/imgs/mobile/landing/lendwise.png"
    },
    {
        alt: "rmg",
        imgUrl: "/imgs/mobile/landing/rmg.png"
    },
    {
        alt: "cwb",
        imgUrl: "/imgs/mobile/landing/cwb.png"
    }
]

const bankList2 = [
    {
        alt: "scotiaBank",
        imgUrl: "/imgs/mobile/landing/scotiaBank.png"
    },
    {
        alt: "td",
        imgUrl: "/imgs/mobile/landing/td.png"
    },
    {
        alt: "mcap",
        imgUrl: "/imgs/mobile/landing/mcap.png"
    },
    {
        alt: "icici",
        imgUrl: "/imgs/mobile/landing/icici.png"
    },
    {
        alt: "eq",
        imgUrl: "/imgs/mobile/landing/eq.png"
    },
    {
        alt: "manulife",
        imgUrl: "/imgs/mobile/landing/manulife.png"
    }
]

const bankList3 = [
    {
        alt: "cmls",
        imgUrl: "/imgs/mobile/landing/cmls.png"
    },
    {
        alt: "homeTrust",
        imgUrl: "/imgs/mobile/landing/homeTrust.png"
    },
    {
        alt: "b2bBank",
        imgUrl: "/imgs/mobile/landing/b2bBank.png"
    },
    {
        alt: "duca",
        imgUrl: "/imgs/mobile/landing/duca.png"
    },
    {
        alt: "strive",
        imgUrl: "/imgs/mobile/landing/strive.png"
    },
    {
        alt: "xmc",
        imgUrl: "/imgs/mobile/landing/xmc.png"
    },
]