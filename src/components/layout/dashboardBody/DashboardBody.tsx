import Link from "next/link";
import { ScoreSectionNew } from "../../landing/results/ScoreSectionNew";
import { useCheckApplication } from '../../../hooks';
import { useReducer } from "react";
import MortgageVisuals from "./MortgageVisuals";
import PortalVisuals from "./PortalVisuals";

export function DashboardBody({id}) {

    const [filter, dispatch] = useReducer(reducer, {
        start: 0,
        refinance: false,
        attributes: ""
    })

    const { data, loading, error } = useCheckApplication(id, filter)
    return (
        <>
            <div className="flex w-[100%] text-center justify-center flex-wrap border-b-2">
                <div className=" flex-wrap static px-1 py-1 rounded-[25px] flex justify-between items-center  w-[100%] mb-2">
                    <div className="relative left-[2rem] bottom-[6rem]">
                        <img src={"/imgs/DoingGreat.png"} style={{width: "42rem"}} />
                    </div> 
                    <div className="absolute right-[6rem]">
                        <img src={"/imgs/HouseHands.png"} />
                    </div>               
                </div>
            </div>
            <div className="flex w-[100%] font-roboto text-center justify-center flex-wrap border-b-2">
                <div className=" flex justify-center w-[100%] py-12">
                    <Link href='/mortgage/new'>
                    <div className="bg-[#398ECE] font-poppins w-[40%] rounded-3xl text-white py-3 px-12 ">
                        Assets & Liabilities
                    </div>
                    </Link>
                </div>
                <div className="bg-[#2DCA73]/[0.1] flex-wrap px-10 py-8 rounded-[25px] flex justify-between items-center  w-[100%] mb-12">
                    <div className={'w-[13%]'}>
                        <img src={"/imgs/Files.png"} />
                    </div>
                    <div className="flex flex-col w-[65%]">
                        <h2 className=" text-[1.5rem]">
                            <b>Your Assets & Liabilities</b>
                        </h2>
                        <p className=" text-grey text-[0.9rem] py-2 leading-6">
                            Input your assets (i.e. RRSPs, TFSA, Cars, Houses, etc.)
                        </p>
                        <p className=" text-grey text-[0.9rem] py-2 leading-6">
                            Input Your Liabilities (i.e. credit card debt, loans, mortgages, etc.)
                        </p>
                    </div>
                    <div className="w-[22%]">
                        <Link href='/mortgage/new'>
                        <button className="bg-[#2DCA73] w-[100%] rounded-2xl text-white py-4 px-12 ">
                            Click Here &#10230;
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex w-[100%] font-roboto text-center justify-center flex-wrap border-b-2">
                <div className=" flex justify-center w-[100%] py-12">
                    <Link href='/mortgage/new'>
                    <div className="bg-[#398ECE] font-poppins w-[40%] rounded-3xl text-white py-3 px-12 ">
                        Document Portal
                    </div>
                    </Link>
                </div>
                <div className="bg-[#2DCA73]/[0.1] flex-wrap px-10 py-8 rounded-[25px] flex justify-between items-center  w-[100%] mb-12">
                    <div className={'w-[13%]'}>
                        <img src={"/imgs/Files.png"} />
                    </div>
                    <div className="flex flex-col w-[65%]">
                        <h2 className=" text-[1.5rem]">
                            <b>Let's Upload Your Documents</b>
                        </h2>
                        <p className=" text-grey text-[0.9rem] pt- leading-6">
                            On the Document Portal, upload your Paystubs, T4s, NOAs and other documents.
                        </p>
                        <p className=" text-grey text-[0.9rem]  leading-6">
                            ALL Data uploaded is securely encrypted and uses Bank level protection.
                        </p>
                    </div>
                    <div className="w-[22%]">
                        <Link href='/mortgage/upload'>
                        <button className="bg-[#2DCA73] w-[100%] rounded-2xl text-white py-3 px-2 ">
                            Upload Documents &#10230;
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex w-[100%] text-center justify-center flex-wrap border-b-2">
                <div className=" flex justify-center w-[100%] py-12">
                    <Link href='/mortgage/new'>
                    <div className="bg-[#398ECE] font-poppins w-[40%] rounded-3xl text-white py-3 px-12">
                        My Credit Profile
                    </div>
                    </Link>
                </div>
                <div className=" w-[100%] mb-12">
                    <ScoreSectionNew data={data ? data.metrics : {}} />
                </div>
            </div>
            <div className="flex w-[100%] text-center justify-center flex-wrap border-b-2">
                <div className=" flex justify-center w-[100%] py-12">
                    <Link href='/mortgage/new'>
                    <div className="bg-[#398ECE] font-poppins w-[40%] rounded-3xl text-white py-3 px-12">
                        My Mortgage Visualised
                    </div>
                    </Link>
                </div>
                <div className=" w-[70%] ">
                    <MortgageVisuals />
                </div>
            </div>
            <div className="flex w-[100%] text-center justify-center flex-wrap">
                <div className=" flex justify-center w-[100%] py-12">
                    <Link href='/mortgage/new'>
                    <div className="bg-[#398ECE] font-poppins w-[40%] rounded-3xl text-white py-3 px-12">
                        Document Portal
                    </div>
                    </Link>
                </div>
                <div className=" w-[85%] ">
                    <PortalVisuals />
                </div>
            </div>
        </>
    )
};

type filterActionType = {
    type: "SET_AMORTIZATION" | "SET_TERM" | "SET_RATE" | "SET_RATE" | "PAGINATE" | "ADD_ATTRIBUTE" | "REMOVE_ATTRIBUTE",
    payload: any
}

function reducer(state, action: filterActionType) {
    const { type, payload } = action
    switch (type) {
        case "SET_AMORTIZATION":
            if (payload.amortization != "ANY")
                return { ...state, start: 0, amortization: payload.amortization }
            else {
                const { amortization, ...new_state } = state;
                return { ...new_state, start: 0 }
            }

        case "SET_TERM":
            if (payload.term != "ANY")
                return { ...state, start: 0, term: payload.term }
            else {
                const { term, ...new_state } = state;
                return { ...new_state, start: 0 }
            }

        case "SET_RATE":
            if (payload.rate != "ANY")
                return { ...state, start: 0, rate: payload.rate }
            else {
                const { rate, ...new_state } = state;
                return { ...new_state, start: 0 }
            }
        case "PAGINATE":
            return { ...state, start: payload.start }

        case "ADD_ATTRIBUTE":
          
            return { ...state, attributes: state.attributes+payload.value+","}

        case "REMOVE_ATTRIBUTE":
            if(state.attributes.includes(payload.value))
            return { ...state, attributes: state.attributes.split(',').filter(item=>(item!=payload.value)).toString()}
        default:
            return state
    }
}