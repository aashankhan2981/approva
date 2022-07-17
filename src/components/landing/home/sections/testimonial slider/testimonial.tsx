import React from "react";
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


export  function Testimonial() {
  

  React.useEffect(() => {
    //this will automatically change the slide to next after 15 seconds.
    console.log(typeof(global.window))
    setInterval(() => {
      const element= document.querySelector(".owl-next")
      element?.dispatchEvent(
        new MouseEvent("click", {
            view: global.window,
            bubbles: true,
            cancelable: true,
            buttons: 1
        })
      )
    }, 15000);
  }, []);
  return (
    <div className="bg-[#E9F6F4] p-10 pt-[80px] pb-[80px] rounded-[70px] mt-10 maxWidth">
      <h1 className="text-center text-[40px] font-bold text-[#1C2D41]">
        What people are saying
      </h1>
      <OwlCarousel className="owl-theme testimonial-slider" loop margin={10} nav center={true}>
        <div className="item">
          <img className="w-10" src={"/imgs/landing/stars.svg"} alt="stars" />
          <p>
            This was such a fun process!! Thanks guys your customer service is INCREDIBLE!!
            Will be referring my parents to approva for their refi next year :)
          </p>
          <span>ALLISON HUANG, TORONTO GENERAL HOSPITAL</span>
        </div>
        <div className="item">
          <img className="w-10" src={"/imgs/landing/Star4.png"} alt="stars" />
          <p>
            Wish i had known about approva earlier.
            I should have done my first purchase through Approva, but nonetheless,
            great job! Thank you fro the Cashback. Will refer.
          </p>
          <span>JESSICA LIONATTA, LANDLORD, BUSINESS OWNER</span>
        </div>
        <div className="item">
          <img className="w-10" src={"/imgs/landing/stars.svg"} alt="stars" />
          <p>
            It was fast, service was good - there was a few
            glitches but aside from that I&apos;ll be reusing. Received my bonus today, thanks.
          </p>
          <span>SHAWNA ILYANA, TEACHER YRDSB</span>
        </div>
        <div className="item">
          <img className="w-10" src={"/imgs/landing/Star4.png"} alt="stars" />
          <p>
            As a business operator, I&apos;m always on the go.
            I was sceptical at first - but you guys came through!
            Great process and this is the FUTURE.
          </p>
          <span>JEROME WILLIAMS, GAS STATION OWNER</span>
        </div>
        <div className="item">
          <img className="w-10" src={"/imgs/landing/Star4.png"} alt="stars" />
          <p>
            We had 2 days to closing. Needed a solution ASAP or we
            lost our $90K deposit. The team responded in 4 MINUTES!!
            Thank you and god bless. We went with a 2 year plan.
          </p>
          <span>VINCENZO ALAMATI, TTC</span>
        </div>
      </OwlCarousel>
    </div>
  );
}
