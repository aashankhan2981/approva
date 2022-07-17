/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import {MoreToShow} from "./moreToShow";
import {EverythingTailored} from "./everythingTailored";
import dynamic from 'next/dynamic'
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


export  function EverythingInRealTime() {
    const [tab, setTab] = useState("moreToChoose");

    let handleOnScroll = (event) => {
        // dont use Jquery inReact Application ! , if you want to access dom element use useRef hook . l'objet $ is undefined in this context
        
        /*let carrousel = document.getElementById('everythinginrealtimeslider')
        var owl = $('.scroller.owl-carousel');
        
        if(carrousel){
            if (event.deltaY !== 0) {
                if (event.deltaY > 100) {
                    owl.trigger('next.owl.carousel');
                } else {
                    owl.trigger('prev.owl.carousel');
                }
            }
        }*/
    };

    const triggerNext = (trigger)=> {
        // dont use Jquery inReact Application ! , if you want to access dom element use useRef hook . l'objet $ is undefined in this context
        /*
        var owl = $('.scroller.owl-carousel');
        owl.trigger(trigger);
        */
    }

    return (
            <OwlCarousel className='owl-theme scroller' smartSpeed={1000} items={1} margin={10} onWheel={handleOnScroll} id="everythinginrealtimeslider">
            <div className="wrapper">
            <div className="everythingInRealTime moreToChoose bg-blue-100" id={"everythingInRealTime"} onWheel={handleOnScroll}>
                    <div className="headerContainer">
                        <div className="message moreToChoose" >No more 48 hour wait-times, get results in less than 6 mins
                        </div>
                        <div className="headingContainer" >
                            <img className="ellipsis" src={"/imgs/landing/Ellipse 2184.svg"} alt="" style={{width: '157px',height:'60px'}}/>
                            <div className="heading">Everything in Real-Time</div>
                        </div>   

                <div className="tabsContainer">
                <div className="tabContainer " >
                    <div className="moreToChooseTab active block" onClick={()=> triggerNext('prev.owl.carousel')}>More to choose from
                    </div><img className="selectedTabHighlighter" src={"/imgs/landing/tab-bottom-line.svg"}
                                                   alt={""}/>
                </div>
                <div className="tabContainer tailored block" onClick={()=> triggerNext('next.owl.carousel')}>
                    <div className="everythingTailored">Everything
                        Tailored to you
                    </div><div className="placeholder"></div>
                </div>
            
                <div className="bluebackgroundSmallShade"></div>
            </div>
                    </div>
                    <MoreToShow/>
                
          </div>
          </div>
          <div className="wrapper">
            <div className="everythingInRealTime everythingTailored" id={"everythingInRealTime"} onWheel={handleOnScroll}>
                    <div className="headerContainer">
                        <div className="message everythingTailored">No more 48 hour wait-times, get results in less than 6 mins
                        </div>
                        <div className="headingContainer">
                            <img className="ellipsis" src={"/imgs/landing/Ellipse-orange.png"} alt="" style={{width: '157px',height:'60px'}}/>
                            <div className="heading">Everything in Real-Time</div>
                        </div>   
                        <div className="tabsContainer">
                <div className="tabContainer">
                    <div className="moreToChooseTab block" onClick={()=> triggerNext('prev.owl.carousel')}>More to choose from
                    </div><div className="placeholder"></div>
                </div>
                <div className="tabContainer tailored">
                    <div className="everythingTailoredTab everythingTailored active">Everything
                        Tailored to you
                    </div><img className="selectedTabHighlighter tailored" src={"/imgs/landing/tab-bottom-line.svg"}
                                                   alt={""}/>
                </div>
            
                <div className="orangebackgroundSmallShade"></div>
            </div>
                        </div>
                        <EverythingTailored/>
          </div>
          </div>
          </OwlCarousel>
    );
}