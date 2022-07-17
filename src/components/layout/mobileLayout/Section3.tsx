export const Section3 = () => {
    return (
        <>
            <div className="w-[90%] m-auto font-poppins bg-[#FFC212]/[0.10] py-5 flex justify-around items-center flex-wrap text-center rounded-2xl mt-[50px] maxWidth">
                <div className="w-[90%] m-auto my-5 text-2xl font-bold">
                    24/7 Real-time support.
                </div>
                <div className="w-[90%] mb-5 m-auto text-sm font-bold">
                    Got questions? We have answers.
                </div>
                <div className="w-[90%] m-auto text-sm text-[#424141]">
                    We understand mortgages can be a little complex at times, that's
                    why we have Experts readily available 24 hours a day, 7 days a
                    week, 365 days a year.
                </div>
                <div className="w-[100%] flex justify-evenly">
                    <div className="w-[45%] flex flex-wrap justify-center items-center bg-[#2DCA73]/[0.20] py-2 leading-1 mt-6 mb-6 rounded-xl">
                        <div className="flex gap-2 ">
                            <div className="mt-[0.2rem]">
                                <img src={"/imgs/landing/Vector.svg"} alt="verified" />
                            </div>
                            <div className="font-semibold">
                                FREE
                            </div>
                        </div>
                        <div className="text-sm font-normal text-[#424141]">
                            mortgage explanations
                        </div>
                    </div>
                    <div className="w-[45%] flex flex-wrap justify-center items-center bg-[#2DCA73]/[0.20] py-2 leading-1 mt-6 mb-6 rounded-xl">
                        <div className="flex gap-2 ">
                            <div className="mt-[0.2rem]">
                                <img src={"/imgs/landing/Vector.svg"} alt="verified" />
                            </div>
                            <div className="font-semibold">
                                FREE
                            </div>
                        </div>
                        <div className="text-sm font-normal text-[#424141]">
                            Online/Telephone support
                        </div>
                    </div>
                </div>
                <div className="w-[80%] -mt-4 m-auto">
                    <img src="/imgs/landing/available.svg" alt="available" />
                </div>
          </div>
        </>
    )
}