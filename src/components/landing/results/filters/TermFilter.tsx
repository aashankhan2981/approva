import React from 'react';

export const TermFilter = ({ value, dispatch }) => {
    return (
        <div className='flex items-center gap-4 flex-grow'>
            <span className=' hidden lg:inline font-semibold text-dark'>Term</span>
            <ul className='flex flex-wrap flex-grow bg-gray-200 gap-1 py-1 px-2 rounded text-xs'>
                {
                    terms.map(item => (
                        <TermButton key={item} value={item} text={`${item}${item!="ANY"?"Years":""}`} term={value} dispatch={dispatch} />
                    ))
                }
            </ul>
        </div>
    )
};

const TermButton = ({ value, text, term, dispatch }) => {
    return (
        <li
            className={` flex-grow cursor-pointer py-1 px-1 lg:px-3 ${!term && value === "ANY" ? "bg-white" : ""}  ${term === value ? "bg-white" : ""} rounded`}
            onClick={() => dispatch({ type: "SET_TERM", payload: { term: value } })}
        >
            {text}
        </li>
    )
}

const terms = ["ANY", 1, 2, 3, 4, 5, 6, 7, 10]