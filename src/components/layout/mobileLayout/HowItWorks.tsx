import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const data = [
    {
        position: "right",
        headTitle: "Share a little about yourself",
        messsage: "Access the best mortgages in seconds with our AI-powered algorithm. We screen the entire market in seconds to present you the best possible rates from 2,000+ mortgage products",
        imgUrl: "/imgs/mobile/landing/Group 34.png"
    },
    {
        position: "left",
        headTitle: "Tailor your options",
        messsage:
            "Create an account and provide us more information about your objectives to pinpoint your best options.",
        imgUrl: "/imgs/mobile/landing/Group 34 (1).png"
    },

    {
        position: "right",
        headTitle: "Build your mortgage and apply",
        messsage: "Trust your instincts? Confirm your product choice directly online. Still undecided? Get advice from our expert mortgage advisors. Either way, get the financing process started.",
        imgUrl: "/imgs/mobile/landing/Group 15858.png"
    },
    {
        position: "left",
        headTitle: "Get your mortgage approved",
        messsage:
            "Upload your supporting documents and we’ll take it from there. Just like that, you’ve got your new mortgage.",
        imgUrl: "/imgs/mobile/landing/Group 15860.png"
    },
];

export const HowItWorks = () => {
    const [state, setState] = useState([]);
    useLayoutEffect(() => {
        let i = state.length % data.length;
        setTimeout(() => {
            if(state.length < 6) {
                setState([...state, data[i]]);
            }
        }, 2000);
    }, [state]);
    console.log(state.length, "oooooooooooooo");

    return (
        <>
            <div className="m-3 mb-16 bg-[#0aafff1a] rounded-2xl py-4 px-3 md:w-11/12 md:mx-auto">
                <div className="text-center">
                    <p className="font-bold text-xl my-3">
                        How It Works
                    </p>
                </div>
                <ScrollToBottom className="h-[650px]   ">
                    {state.length > 0 &&
                        state.map((item, index) => {
                            return (
                                <>
                                    {index == state.length - 1 && item?.position == "left" ? (
                                        <div className="">
                                            <div className="  rounded-xl   w-4/12 animate-pulse flex justify-between">
                                                <img src="/imgs/mobile/landing/typing-bubble.png" alt="" />
                                            </div>


                                        </div>
                                    ) : index == state.length - 1 && item?.position == "right" ? <></> : (
                                        <>
                                            <div
                                                key={index}
                                                className={`${!(item?.position == "right")
                                                    ? "bg-blue-500 mr-8 md:w-4/5 md:float-left md:my-3"
                                                    : "bg-white ml-8 md:float-right md:w-4/5 md:my-3 "
                                                    } rounded-xl  transition duration-300 delay-150`}
                                            >
                                                <div className={`p-2 my-5 ${!(item?.position == "right") ? "flex flex-row-reverse items-center justify-between " : "flex flex-row items-center"}`}>
                                                    <div className="min-w-[40px] sm:min-w-[5vw] md:min-w-[7vw]  ">
                                                        <img
                                                            src={item.imgUrl}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-4">
                                                        <div className="text-[11px] md:text-[2.7vw] font-semibold mb-1">
                                                            {item.headTitle}
                                                        </div>
                                                        <div className="text-[10px] md:text-[2.5vw] mb-2">
                                                            {item.messsage}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </>
                            );
                        })}
                </ScrollToBottom>
            </div>
        </>
    );
};