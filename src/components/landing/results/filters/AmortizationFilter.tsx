import React from 'react';

export const AmortizationFilter = ({ value, dispatch }) => {
    return (
        <div className='flex items-center gap-4 flex-grow'>
            <span className=' hidden lg:inline font-semibold text-dark'>Amortization</span>
            <ul className='flex flex-wrap flex-grow bg-gray-200 gap-1 py-1 px-2 rounded text-xs'>
                {
                    amortizations.map(item => (
                        <AmortizationButton key={item} value={item} text={`${item}${item!="ANY"?"Years":""}`} amortization={value} dispatch={dispatch} />
                    ))
                }
            </ul>
        </div>
    )
};

const AmortizationButton = ({ value, text, amortization, dispatch }) => {
    return (
        <li
            className={` flex-grow cursor-pointer py-1 px-1 lg:px-3 ${!amortization && value === "ANY" ? "bg-white" : ""}  ${amortization === value ? "bg-white" : ""} rounded`}
            onClick={() => dispatch({ type: "SET_AMORTIZATION", payload: { amortization: value } })}
        >
            {text}
        </li>
    )
}
const amortizations = ["ANY", 10, 15, 20, 25, 30]