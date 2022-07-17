import Link from "next/link"


export const Section4 = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center mx-2">
                <div className="relative px-4 my-8">
                    <div className="absolute top-3 -left-1 -z-50">
                        <img src={"/imgs/mobile/landing/Circle1.png"} alt="Circle1" className="w-10/12"/>
                    </div>
                    <div className="absolute top-[71px] -left-1 -z-50">
                        <img src={"/imgs/mobile/landing/Circle2.png"} alt="Circle2" className="w-10/12"/>
                    </div>
                    <div className="absolute top-[130px] -left-1 -z-50">
                        <img src={"/imgs/mobile/landing/Circle3.png"} alt="Circle3" className="w-10/12"/>
                    </div>
                    <div className="absolute -bottom-6 left-11 -z-50">
                        <img src={"/imgs/mobile/landing/Rectangle6.png"} alt="Rectangle2" className="w-10/12"/>
                    </div>
                    <div className="absolute -bottom-6 left-20 -z-50">
                        <img src={"/imgs/mobile/landing/Rectangle7.png"} alt="Rectangle3" className="w-10/12"/>
                    </div>
                    <div className="absolute -bottom-[24px] left-[100px] z-50">
                        <img src={"/imgs/mobile/landing/banner_1.png"} alt="Group 15778" className="w-10/12"/>
                    </div>
                    <div className="absolute -bottom-6 right-0 -z-50">
                        <img src={"/imgs/mobile/landing/Rectangle5.png"} alt="Rectangle3" className="w-10/12"/>
                    </div>
                    <img src={"/imgs/mobile/landing/Group 15778.png"} alt="Group 15778" className="z-50 min-h-[165px]" />

                </div>
                <div className="mt-4 mb-2">
                    <p className="text-center font-semibold text-green-500 uppercase">
                        GET MORE THAN LOW RATES
                    </p>
                </div>
                <div className="mx-3">
                    <p className="text-center ">
                        Bank’s offer more than just lower rates, we find the “add-on” products that are better suited to your goals.
                    </p>
                </div>
                <div className="w-4/5 mt-4">
                    <Link href={"#"}>
                        <button className="w-[100%] transition ease-in-out delay-150 bg-green-500 py-3 border-0 text-white font-medium rounded-full text-[16px] mb-5 ">
                            Learn more
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}