import dynamic from 'next/dynamic'
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export const Section6 = () => {
    return (
        <>
            <div className="text-center w-11/12 m-auto my-3">
                <p className="font-extrabold text-[22px]">
                    What people are saying about Approva
                </p>
            </div>
            <div>
                <OwlCarousel className='owl-theme maxWidth cashBack-slider' smartSpeed={1000} items={1} margin={10} loop autoplayHoverPause={true} >
                    <div className="bg-[#0AAFFF]/[0.1] py-8 rounded-3xl font-poppins flex-wrap flex text-center justify-center items-center w-[90%] m-auto px-10">
                        <div className=''>
                            <img src="/imgs/mobile/landing/Ratings.png" alt="ratings" />
                        </div>
                        <div>
                            <div className="text-left my-5">
                                <p>
                                    This was such a fun process!! Thanks guys your customer service is INCREDIBLE! Will be referring my parents to approva for their refi next year :)
                                </p>
                            </div>
                            <div className="my-5 mb-10 flex flex-row">
                                <div>
                                    <img src="/imgs/mobile/landing/approva-user.png" alt="approva-user" />
                                </div>
                                <div className="flex flex-col justify-start items-start ml-3">
                                    <p className="font-semibold text-left">Allison Huang </p>
                                    <span className="text-sm text-left">Toronto, General Hospital</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='slide2' className="bg-purple-400 py-8 rounded-3xl font-poppins flex-wrap flex text-center justify-center items-center w-[90%] m-auto px-10">
                        <div className=''>
                            <img src="/imgs/mobile/landing/Ratings.png" alt="ratings" />
                        </div>
                        <div>
                            <div className="text-left my-5">
                                <p>
                                    This was such a fun process!! Thanks guys your customer service is INCREDIBLE! Will be referring my parents to approva for their refi next year :)
                                </p>
                            </div>
                            <div className="my-5 mb-10 flex flex-row">
                                <div>
                                    <img src="/imgs/mobile/landing/approva-user.png" alt="approva-user" />
                                </div>
                                <div className="flex flex-col justify-start items-start ml-3">
                                    <p className="font-semibold text-left">Allison Huang </p>
                                    <span className="text-sm text-left">Toronto, General Hospital</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </>
    )
}