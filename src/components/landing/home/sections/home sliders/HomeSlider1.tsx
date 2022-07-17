import React, { useEffect, useState } from "react";
import { Carousel, ActiveItem } from "react-scroll-slider";
import dynamic from 'next/dynamic'
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


let handleOnScroll = (event) => {
  // no Jquery syntax in react app
  /*
  let carrousel = document.getElementById('everythinginrealtimeslider')
  var owl = $('.scroller.owl-carousel');
  
  if(carrousel){
      if (event.deltaY !== 0) {
          if (event.deltaY > 50) {
              owl.trigger('next.owl.carousel');
          } else {
              owl.trigger('prev.owl.carousel');
          }
      }
  }
  */
};

export function HomeSlider1() {

  return (
    <OwlCarousel className='owl-theme maxWidth cashBack-slider' smartSpeed={1000} items={1} margin={10} loop autoplayHoverPause={true} >
      <div className="bg-[#0AAFFF]/[0.1] p-20 rounded-[70px] flex justify-center items-center h-[650px] min-h-[100px]">
        <div>
          <img src={"/imgs/landing/slider1_1.png"} />
        </div>
        <div className="flex flex-col items-start w-[40%] ml-[100px]">
          <h2 className="text-left text-[35px]">
            {" "}
            <b>Up to $3,000</b> Cashback on Approval
          </h2>
          <p className="text-left text-[14px] my-10 leading-6">
            You read that right. We give you up to $3,000 in cashback after your
            approved mortgage is advanced.<br></br>
            <b>How?</b>
            <br></br>
            Normally brokers get paid a finders fee from Lenders for bringing
            them customers; because of our low-cost approach we can afford to
            pass that on to you.
          </p>
          <Link href='/mortgage/new'>
            <button className="bg-[#1d72e8] rounded-md text-white p-4 ">
              Get started
            </button>
          </Link>

        </div>
      </div>

      <div className="bg-[#FF7D51]/[0.1] p-20 rounded-[70px] flex justify-center items-center h-[650px] min-h-[100px]" >
        <div className="flex flex-col items-start w-[40%] mr-[100px]">
          <h2 className="text-left text-[35px]">
            {" "}
            <b>Up to $15,000</b> in funding for new furniture or home upgrades
          </h2>
          <p className="text-left text-[14px] my-10 leading-6">
            We’ve partnered with Affirm and negotiated access to over 50
            different retailers, so you can get immediate access to $15,000
            worth of furniture, with no payments for the first 12 months!
          </p>
          <Link href='/mortgage/new'>
            <button className="bg-[#FF7D51] rounded-md text-white p-4 ">
              Get started
            </button>
          </Link>
        </div>
        <div>
          <img src={"/imgs/landing/slider1_2.png"} />
        </div>
      </div>
      <div id="slide3" className="bg-[#2DCA73]/[0.1] p-20 rounded-[70px] flex justify-center items-center h-[650px] min-h-[100px]" >
        <div>
          <img src={"/imgs/landing/slider1_3.png"} />
        </div>
        <div className="flex flex-col items-start w-[40%] ml-[100px]">
          <h2 className="text-left text-[35px]">
            {" "}
            <b>Get Approved?</b> We plant 3 trees
          </h2>
          <p className="text-left text-[14px] my-10 leading-6">
            We are a mission-driven company, with one of our focuses being a
            good stewart for our environment. We plant 3 trees, with the support
            of our partner, TreesCanada and you’ll receive a certificate of
            authenticity.
          </p>
          <Link href='/mortgage/new'>
            <button className="bg-[#2DCA73] rounded-md text-white p-4 ">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </OwlCarousel>
  )
}



