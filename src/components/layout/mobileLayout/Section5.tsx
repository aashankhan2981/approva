import React from "react";

import dynamic from 'next/dynamic'
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


export const Section5 = () => {
    return (
        <>
            <div>
                <OwlCarousel className='owl-theme maxWidth cashBack-slider' smartSpeed={1000} items={1} margin={10} loop autoplayHoverPause={true} >
                    <div>
                        <div className="relative flex justify-center items-center pt-5 max-w-md mx-auto">
                            <div className="w-5/12 absolute left-16 -bottom-12 -z-50">
                                <img src={"/imgs/mobile/landing/iPhone 13 mini.png"} alt="iphone13mini" />
                            </div>
                            <div className="w-5/12 absolute left-0 bottom-0 -z-50">
                                <img src={"/imgs/mobile/landing/Tailors.png"} alt="tailors" />
                            </div>
                            <div className="w-3/12 absolute right-0 bottom-0 -z-50">
                                <img src={"/imgs/mobile/landing/Rectangle8.png"} alt="Rectangle8" />
                            </div>
                            <div className="w-3/12 absolute right-20 bottom-0 -z-50">
                                <img src={"/imgs/mobile/landing/semiCircle.png"} alt="semiCircle" />
                            </div>
                            <div className=" absolute right-12 top-9 ">
                                <p className="text-blue-600 border p-1 text-[6px] font-medium whitespace-nowrap bg-white rounded-md">
                                    Credit Card Bonus
                                </p>
                            </div>
                            <div className=" absolute right-14 top-5 ">
                                <p className="text-blue-600 border p-1 text-[6px] font-medium whitespace-nowrap bg-white rounded-md">
                                    Lowest Monthly Payment
                                </p>
                            </div>
                            <div className=" absolute right-14 top-16 ">
                                <p className="text-blue-600 border p-1 text-[6px] font-medium whitespace-nowrap bg-white rounded-md">
                                    No Pre-Payment Penalties
                                </p>
                            </div>
                            <div className=" absolute right-9 top-20 border p-1 text-[6px] font-medium bg-white rounded-md flex flex-col justify-center items-center">
                                <div className=" w-2/6">
                                    <img src="/imgs/mobile/landing/user-face.png" alt="user-face" className="" />
                                </div>
                                <p className="text-slate-400 border my-1 p-1 text-[6px] font-semibold whitespace-nowrap bg-green-300 rounded-md">
                                    Mon, Feb 1 at 10:00am
                                </p>
                                <p className="text-slate-400 border my-1 p-1 text-[6px] font-semibold whitespace-nowrap bg-green-300 rounded-md">
                                    Tues, Feb 2 at 11:00am
                                </p>
                                <p className="text-slate-400 border my-1 p-1 text-[6px] font-semibold whitespace-nowrap bg-green-300 rounded-md">
                                    Tues, Feb 2 at 11:00am
                                </p>
                            </div>
                            <div className="w-5/12 ml-10 z-50">
                                <img src={"/imgs/mobile/landing/banner_2.png"} alt="banner-2" />
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <p className="text-center font-semibold text-blue-500 uppercase">
                                Tailor made to your goals
                            </p>
                        </div>
                        <div className="text-center m-4 text-sm">
                            <p className="text-center px-3">
                                Manage everything from sending application to your closing date - all in one place, wherever, whenever.
                            </p>
                        </div>
                        <div className="w-4/5 mt-5 mx-auto">
                            <Link href={"#"}>
                                <button className="w-[100%] transition ease-in-out delay-150 bg-blue-500 py-3 border-0 text-white font-medium rounded-xl text-[16px] mb-5 ">
                                    View the best rates
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div id="slide2">
                        <div className="relative flex justify-center items-center pt-5 max-w-md mx-auto">
                            <div className="w-5/12 absolute left-16 -bottom-12 -z-50">
                                <img src={"/imgs/mobile/landing/iPhone 13 mini.png"} alt="iphone13mini" />
                            </div>
                            <div className="w-5/12 absolute left-0 bottom-0 -z-50">
                                <img src={"/imgs/mobile/landing/Tailors.png"} alt="tailors" />
                            </div>
                            <div className="w-3/12 absolute right-0 bottom-0 -z-50">
                                <img src={"/imgs/mobile/landing/Rectangle8.png"} alt="Rectangle8" />
                            </div>
                            <div className="w-3/12 absolute right-20 bottom-0 -z-50">
                                <img src={"/imgs/mobile/landing/semiCircle.png"} alt="semiCircle" />
                            </div>
                            <div className=" absolute right-12 top-9 ">
                                <p className="text-blue-600 border p-1 text-[6px] font-medium whitespace-nowrap bg-white rounded-md">
                                    Credit Card Bonus
                                </p>
                            </div>
                            <div className=" absolute right-14 top-5 ">
                                <p className="text-blue-600 border p-1 text-[6px] font-medium whitespace-nowrap bg-white rounded-md">
                                    Lowest Monthly Payment
                                </p>
                            </div>
                            <div className=" absolute right-14 top-16 ">
                                <p className="text-blue-600 border p-1 text-[6px] font-medium whitespace-nowrap bg-white rounded-md">
                                    No Pre-Payment Penalties
                                </p>
                            </div>
                            <div className=" absolute right-9 top-20 border p-1 text-[6px] font-medium bg-white rounded-md flex flex-col justify-center items-center">
                                <div className=" w-2/6">
                                    <img src="/imgs/mobile/landing/user-face.png" alt="user-face" className="" />
                                </div>
                                <p className="text-slate-400 border my-1 p-1 text-[6px] font-semibold whitespace-nowrap bg-green-300 rounded-md">
                                    Mon, Feb 1 at 10:00am
                                </p>
                                <p className="text-slate-400 border my-1 p-1 text-[6px] font-semibold whitespace-nowrap bg-green-300 rounded-md">
                                    Tues, Feb 2 at 11:00am
                                </p>
                                <p className="text-slate-400 border my-1 p-1 text-[6px] font-semibold whitespace-nowrap bg-green-300 rounded-md">
                                    Tues, Feb 2 at 11:00am
                                </p>
                            </div>
                            <div className="w-5/12 ml-10 z-50">
                                <img src={"/imgs/mobile/landing/banner_3.png"} alt="banner-2" />
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <p className="text-center font-semibold text-blue-500 uppercase">
                                Tailor made to your goals
                            </p>
                        </div>
                        <div className="text-center m-4 text-sm">
                            <p className="text-center px-3">
                                Manage everything from sending application to your closing date - all in one place, wherever, whenever.
                            </p>
                        </div>
                        <div className="w-4/5 mt-5 mx-auto">
                            <Link href={"#"}>
                                <button className="w-[100%] transition ease-in-out delay-150 bg-blue-500 py-3 border-0 text-white font-medium rounded-xl text-[16px] mb-5 ">
                                    View the best rates
                                </button>
                            </Link>
                        </div>
                    </div>
                </OwlCarousel>
            </div >
        </>

    )
}