import Image from "next/image";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { EverythingInRealTime, HomeSlider1, Steps, Testimonial } from "../components/landing/home";
import { Footer, MainHeader } from "../components/layout";
import Landing from "./mobileView/Landing";


export default function Home() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
 
  const detectDevice = (): boolean => {
  
    let isMobileView =  typeof window !== "undefined"&&navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPod|iPad|Opera Mini|IEMobile|WPDesktop/i
    );
    return Boolean(isMobileView);

  };
  
  console.log( detectDevice(),'kkkkkkkkkkkkkkkkkkkkkkkkkkk')
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <>
      {detectDevice() ? (
        <Landing></Landing>
      ) : (
        <>
          <MainHeader />
          <div>
            <div className="p-10">
              <div className="flex justify-around items-center flex-wrap border-b-2 md:flex-nowrap lg:flex-nowrap maxWidth">
                <div className="text-left mr-10 mb-20">
                  <h1 className="text-[52px] font-bold text-[#1C2D41]">
                    Getting your mortgage <br /> approved just got
                  </h1>

                  <Typewriter
                    options={{ loop: true }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          '<span className="text-[52px] font-bold text-[#1C2D41]">simple.</span>'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                          '<span className="text-[52px] font-bold text-[#1C2D41]">easy.</span>'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                          '<span className="text-[52px] font-bold text-[#1C2D41]">fast.</span>'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                          '<span className="text-[52px] font-bold text-[#1C2D41]">transparent.</span>'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />

                  <div className="font-light mt-8 mb-8">
                    <div className="flex m-2">
                      <img src={"/imgs/landing/Vector.svg"} alt="verified" />
                      <p className="ml-2 font-normal text-[#3C4858]">
                        Get results and collaborate with Experts, all in real-time.
                      </p>
                    </div>

                    <div className="flex m-2">
                      <img src={"/imgs/landing/Vector.svg"} alt="verified" />
                      <p className="ml-2 font-normal text-[#3C4858]">
                        Enjoy up to $3,000 cashback *.
                      </p>
                    </div>

                    <div className="flex m-2">
                      <img src={"/imgs/landing/Vector.svg"} alt="verified" />
                      <p className="ml-2 font-normal text-[#3C4858]">
                        Enjoy up to $15,000 in funding for home
                        upgrades **.
                      </p>
                    </div>
                  </div>
                  <div>
                    <a href="/mortgage/new">
                      <button className="transition ease-in-out delay-150 bg-[#1D72E8] border-[#1D72E8] font-medium border p-5 text-[#FFFFFF] rounded text-[16px] mt-5 mb-8  md:m-0 lg:m-0">
                        See mortgage results for you
                      </button>
                    </a>
                    <a href="/mortgage/new">
                      <button className="transition ease-in-out delay-150 bg-[#FFFFFF] p-5 border border-[#1D72E8] text-[#1D72E8] font-medium rounded text-[16px] mb-5 md:ml-8 lg:ml-8">
                        Get pre-approved
                      </button>
                    </a>
                  </div>
                  <div>
                    <a className="text-[#7F7F7F] font-normal">Do you have account?</a>
                    <a className="text-[#1D72E8] ml-3 font-medium">
                      Sign up for free
                    </a>
                  </div>
                </div>
                <div className="mb-20">
                  <Image src="/imgs/landing/landing.svg" alt="landing-image" width={739} height={538} />
                </div>
              </div>
              <p className="text-[15px] my-[30px] font-normal text-center">
                View current market rates in canada {">"}
              </p>
              <HomeSlider1 />
              <EverythingInRealTime />
              <Steps />
              <Testimonial />
              <div className="bg-[#FFC212]/[0.10] flex justify-around items-center flex-wrap text-left rounded-[70px] mt-[50px] maxWidth">
                <div className="p-6">
                  <h1 className="font-semibold text-[#000000] text-[40px]">
                    24/7 Real-time <br /> support.
                  </h1>
                  <h4 className="font-semibold text-[18px] mt-8 mb-8">
                    Got questions? We have answers.
                  </h4>
                  <p className="font-normal text-[16px] mt-3 mb-3 text-[#3C4858]">
                    We understand mortgages can be a little complex at times, that&apos;s
                    <br />
                    why we have Experts readily available 24 hours a day, 7 days a
                    week,
                    <br />
                    365 days a year.
                  </p>
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="bg-[#2DCA73]/[0.20] p-3 mt-6 mb-6 rounded-2xl">
                      <div className="flex items-center">
                        <img className="-mt-6" src={"/imgs/landing/Vector.svg"} alt="verified" />
                        <span className="ml-2 text-[15px] font-bold text-[#1C2D41]">
                          Free <br />
                          <span className="font-medium">mortgage explanations</span>
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#2DCA73]/[0.20] p-3 mt-6 mb-6 rounded-2xl">
                      <div className="flex items-center">
                        <img className="-mt-6" src={"/imgs/landing/Vector.svg"} alt="verified" />
                        <span className="ml-2 text-[15px] font-bold text-[#1C2D41]">
                          Free <br />
                          <span className="font-medium">
                            online/telephone support
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="/imgs/landing/available.svg" alt="available" />
                </div>
              </div>
            </div>

            <div>
              <Footer />
            </div>
          </div>
        </>
      )
      }
    </>
  );
}



// export default function Home() {
//   const [width, setWidth] = useState<number>(
//     typeof window !== "undefined" ? window.innerWidth : 1000
//   );
//   function handleWindowSizeChange() {
//     setWidth(window.innerWidth);
//   }
//   useEffect(() => {
//     window.addEventListener("resize", handleWindowSizeChange);
//     return () => {
//       window.removeEventListener("resize", handleWindowSizeChange);
//     };
//   }, []);
//   const isMobile = width <= 768;
//   console.log(isMobile, "lllllllllllllllllll");

//   return (
//     <>
//       {isMobile ? (