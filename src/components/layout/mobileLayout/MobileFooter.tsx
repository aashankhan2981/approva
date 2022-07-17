import Link from 'next/link'
import React from 'react'

export function MobileFooter() {
    return (
        <div>

            <div className="relative top-[5rem] flex w-[90%] z-10  bg-white shadow-2xl border py-8 rounded-3xl text-[#1C2D41] font-poppins text-center flex-col m-auto mt-10">
                <div className="m-auto p-5 w-[80%] ">
                    <h1 className="font-semibold text-2xl">Easy.Fast.Better</h1>
                    <div className="flex items-center">
                        <p className="font-normal text-md">Your mortgage application, wherever you are, whenever you want.</p>
                    </div>
                </div>
                <div className="w-[100%]">
                    <Link href='/mortgage/new'>
                        <button className="ml-4 w-[50%] m-auto shadow-xl bg-[#398ECE] py-2 font-medium px-3 rounded-lg align-center text-white">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-[100%]  bg-[#398ECE] text-left rounded-t-[80px] px-9 pt-[200px]">
                <div className="flex justify-around flex-wrap">
                    <div className="w-[100%]">
                        <div className="w-1/2 mb-5">
                            <a href='/'><img src={"/imgs/landing/footerlogo.svg"} className="w-[10rem]" alt="footerlogo" /></a>
                        </div>
                        <p className="text-left text-md mt-4 mb-4 text-white">Mortgages made simple. Approva is a Licensed Mortgage. Brokerage, FSRAO# 13290124.<br/> All Rights Reserved.</p>
                        <div>
                            <div className="flex mt-6 mb-4">
                                <img src={"/imgs/landing/email.svg"} alt="email" />
                                <p className="text-white text-md ml-2">support@approva.co</p>
                            </div>
                            <div className="flex mt-4 mb-4">
                                <img src={"/imgs/landing/phone.svg"} alt="phone" />
                                <p className="text-white text-md ml-2">1-800-643-2321</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <h1 className="font-bold text-lg mt-10 mb-5 text-white">Our product</h1>
                        <p className="font-normal text-md text-white mt-4 mb-4">How it works?</p>
                        <p className="font-normal text-md text-white mt-4 mb-4">Partners</p>
                        <p className="font-normal text-md text-white mt-4 mb-4">Features</p>
                    </div>
                    <div className="w-[100%]">
                        <h1 className="font-bold text-lg mt-8 mb-5 text-white">Legal</h1>
                        <p className="font-normal text-md text-white mt-4 mb-4">Terms & Conditions</p>
                        <p className="font-normal text-md text-white mt-4 mb-4">Privacy Policy</p>
                    </div>
                    <div className="w-[100%]">
                        <h1 className="font-bold text-lg mt-8 mb-5 text-white">Resources</h1>
                        <p className="font-normal text-md text-white mt-4 mb-4">Learn</p>
                        <p className="font-normal text-md text-white mt-4 mb-4">Calculator</p>
                        <p className="font-normal text-md text-white mt-4 mb-4">Help</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

