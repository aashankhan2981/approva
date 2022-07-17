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

export function MobileHomeSlider() {

  return (
    <OwlCarousel className='owl-theme maxWidth cashBack-slider' smartSpeed={1000} items={1} margin={10} loop autoplayHoverPause={true} >
      <div className="bg-[#0AAFFF]/[0.1] py-8 rounded-3xl font-poppins flex-wrap flex text-center justify-center items-center w-[90%] m-auto">
        <div className="w-[50%] m-auto">
          <img src={"/imgs/landing/slider1_1.png"} />
        </div>
        <div className="w-[70%]">
          <h2 className=" text-2xl">
            <b>Up to $3,000</b> Cashback on Approval
          </h2>
        </div>
        <div className="flex flex-col items-start w-[95%]">
          <p className="text-sm text-[#3C4858] my-5 leading-4">
            You read that right. We give you up to $3,000 in cashback after your
            approved mortgage is advanced.<br/> Normally brokers get paid a finders 
            fee from Lenders for bringing them customers; because of our low-cost 
            approach we can afford to pass that on to you.
          </p>
          <Link href='/mortgage/new'>
            <button className="bg-[#0AAFFF] m-auto rounded-[50px] text-white px-5 py-3 ">
              Get started
            </button>
          </Link>

        </div>
      </div>

      <div className="bg-[#FF7D51]/[0.1]  py-8 rounded-3xl font-poppins flex-wrap flex text-center justify-center items-center w-[90%] m-auto" >
        <div className="w-[50%] m-auto">
            <img src={"/imgs/landing/slider1_2.png"} />
            </div>
            <div className="w-[90%]">
            <h2 className=" text-2xl">
                <b>Up to $15,000</b> in funding for new furniture or home upgrades
            </h2>
            </div>
            <div className="flex flex-col items-start w-[95%]">
            <p className="text-sm text-[#3C4858] my-5 leading-4">
                We’ve partnered with Affirm and negotiated access to over 50
                different retailers, so you can get immediate access to $15,000
                worth of furniture, with no payments for the first 12 months!
            </p>
            <Link href='/mortgage/new'>
                <button className="bg-[#FF7D51] m-auto rounded-[50px] text-white px-5 py-3 ">
                Get started
                </button>
            </Link>
        </div>
      </div>

      <div id="slide3" className="bg-[#2DCA73]/[0.1]  pb-7 rounded-3xl font-poppins flex-wrap flex text-center justify-center items-center w-[90%] m-auto" >
      <div className="w-[50%] m-auto">
          <img src={"/imgs/landing/slider1_3.png"} />
        </div>
        <div className="w-[55%] px-2 my-2">
          <h2 className=" text-2xl">
              <b>Get Approved?</b> We plant 3 trees
          </h2>
        </div>
        <div className="flex flex-col items-start w-[95%]">
          <p className="text-sm text-[#3C4858] mt-1 mb-5 leading-5">
            We are a mission-driven company. <br/>We plant 3 trees, with the support
            of our partner, TreesCanada and you’ll receive a certificate of
            authenticity.
          </p>
          <Link href='/mortgage/new'>
            <button className="bg-[#2DCA73] m-auto rounded-[50px] text-white px-5 py-3 my-2 ">
              Get started
            </button>
          </Link>

        </div>
      </div>
    </OwlCarousel>
  )
}



