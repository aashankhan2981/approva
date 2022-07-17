import React from 'react';

export const RateFilter = ({ value, dispatch }) => {
    return (
        <div className='flex items-center gap-4 flex-grow'>
            <span className=' hidden lg:inline font-semibold text-dark'>Rate</span>
            <ul className='flex flex-grow bg-gray-200 gap-1 py-1 px-2 rounded text-xs'>
                {
                    rates.map(item => (
                        <RateButton key={item} value={item} text={`${item}`} rate={value} dispatch={dispatch} />
                    ))
                }
            </ul>
        </div>
    )
};

const RateButton = ({ value, text, rate, dispatch }) => {
    return (
        <li
            className={` flex-grow cursor-pointer py-1 px-1 lg:px-3 ${!rate && value === "ANY" ? "bg-white" : ""}  ${rate === value ? "bg-white" : ""} rounded`}
            onClick={() => dispatch({ type: "SET_RATE", payload: { rate: value } })}
        >
            {text}
        </li>
    )
}

const rates = ["ANY", "fixed", "variable"]