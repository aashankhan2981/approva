import React from 'react';
import Image from 'next/image';
import {CkeckedIcon, InfoOutLineIcon} from '../../icons';
import {getTodayPlusX} from '../../../helpers';
import {Button} from '@mui/material';

export const MatchNew = (props) => {

    const {lender, program, infos} = props
    const fixed = infos.fixedRateMonthlyPayment
    const variable = infos.variableRateMonthlyPayment
    const totalCashback = round(infos.bankCashBack + infos.approvaCashBack, 2)
    const parsefullText = (text) => {
        if (!text) return []
        const arr = text.split("-")
        arr.shift()
        return arr
    }

    function round(value, precision) {
        return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
    }

    let imageWithColor = {
        color: "",
        image: "",
    };

    switch (lender.name) {
        case "TD Bank":
            imageWithColor.color = "#00BA3B";
            imageWithColor.image = "/imgs/TD-Bank.png";
            break;
        case "Scotia":
            imageWithColor.color = "#FF001C";
            imageWithColor.image = "/imgs/scotiabank.png";
            break;
        case "MCAP":
            imageWithColor.color = "#1A2674";
            imageWithColor.image = "/imgs/MCAP-Bank.png";
            break;
        case "ICICI Bank":
            imageWithColor.color = "#E86524";
            imageWithColor.image = "/imgs/ICICI-Bank.png";
            break;
        case "First National":
            imageWithColor.color = "#f7bd05";
            imageWithColor.image = "/imgs/First-National-Bank.png";
            break;
        case "Merix":
            imageWithColor.color = "#c0ab00";
            imageWithColor.image = "/imgs/Merix-Bank.png";
            break;
        case "Lendwise":
            imageWithColor.color = "#0081A4";
            imageWithColor.image = "/imgs/LendWise-Bank.png";
            break;
        case "B2B Bank":
            imageWithColor.color = "#fdb81f";
            imageWithColor.image = "/imgs/B2B-Bank.png";
            break;
        case "CMLS":
            imageWithColor.color = "#0f346b";
            imageWithColor.image = "/imgs/CMLS-Bank.png";
            break;
        case "Home Trust":
            imageWithColor.color = "#013668";
            imageWithColor.image = "/imgs/Home-Trust-Bank.png";
            break;
        case "Optimum":
            imageWithColor.color = "#DAAA00";
            imageWithColor.image = "/imgs/CWB-Bank.png";
            break;
        case "Haventree":
            imageWithColor.color = "#BEDD30";
            imageWithColor.image = "/imgs/Haven-Tree-Bank.png";
            break;
        case "RFA":
            imageWithColor.color = "#1E9AA0";
            imageWithColor.image = "/imgs/RFA-Bank.png";
            break;
        case "RMG":
            imageWithColor.color = "#EB7923";
            imageWithColor.image = "/imgs/RMG-Bank.png";
            break;
        case "Strive":
            imageWithColor.color = "#F5C710";
            imageWithColor.image = "/imgs/Strive-Bank.png";
            break;

        default:
            imageWithColor.image = lender.logo;
            imageWithColor.color = lender.color;
    }



    return (
        <div className="matchView">
            <div className="matchFirstColumn">
                {/* <div className="infoWrapper">
                    <img src={"/imgs/PerFi.svg"} width={70} height={18} alt=""/>
                    <InfoOutLineIcon className="infoOutlineIcon"/>
                </div> */}
                <div className="greenCheckIconWrapper">
                    <CkeckedIcon className="greenCheckIcon"/>
                </div>
            </div>
            <div style={{backgroundColor: imageWithColor.color}} className={"matchSecondColumn " + lender.name}>
                <img className="bankLogo" src={imageWithColor.image} alt=""/>
            </div>
            <div className="matchThirdColumn">
                {
                    variable && variable.value > 0 &&
                    <div className='top'>
                        <p className="prefix">{round(variable.intrestRate, 2)}%
                            <span className="suffix"> Variable</span>
                        </p>
                        <p className="prefix">${round(variable.value, 2)}
                            <span className="suffix"> /Month variable</span>
                        </p>
                    </div>
                }
                <p className="middle">
                    <span className="text">Rate Guranteed Until May 31</span>
                </p>
                {
                    fixed && fixed.value > 0 &&
                    <div className="lower">
                        <p className="prefix">{round(fixed.intrestRate, 2)}%
                            <span className="suffix"> Fixed</span>
                        </p>
                        <p className="prefix">${round(fixed.value, 2)}
                            <span className="suffix"> /Month fixed</span>
                        </p>
                    </div>
                }
            </div>
            <div className="matchFourthColumn">
                {totalCashback > 0 && <div className="top">${totalCashback}</div>}
                <div className="divider"></div>
                <div className="middle">
                    {infos.bankCashBack > 0 &&
                    <div className='flex items-center gap-2'>
                        <p>{lender.name} ${round(infos.bankCashBack, 2)}</p>
                    </div>
                    }
                    {infos.bankCashBack > 0 && infos.approvaCashBack > 0 && <p>+</p>}
                    {infos.approvaCashBack > 0 &&
                    <p className='approvaCashback'>
                        <div className="prefix">Approva - </div>
                        <div className="suffix"> ${round(infos.approvaCashBack, 2)}</div>
                    </p>
                    }
                </div>
            </div>
            <div className="matchFifthColumn">
                {
                    lender.bunus_products &&
                    parsefullText(lender.bunus_products).map((item, index) => (
                            <p key={index}>-{item} </p>
                        )
                    )
                }
            </div>
            <div className="matchSixthColumn">
                <div className=' cursor-pointer'>
                    <Button>
                        <Image src="/imgs/document.svg" width={64} height={66} alt=""/>
                    </Button>
                </div>
                {totalCashback > 0 &&
                <div style={{backgroundColor: lender.color}}
                     className={` absolute skew-x-12 text-xs text-white  -top-2 -right-1 py-1 px-2`}>
                    Best Cashback
                </div>
                }
            </div>
        </div>
    );
}
