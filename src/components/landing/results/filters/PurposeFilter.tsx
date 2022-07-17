import React from 'react';

export const PurposeFilter = ({ filter }) => {
    const { purpose, setPurpose } = filter
    return (
        <div className='flex items-center gap-4 flex-grow'>
            <span className=' hidden lg:inline font-semibold text-dark'>Purpose</span>
            <ul className='flex flex-grow bg-gray-200 gap-1 py-1 px-2 rounded text-xs'>
                <PurposeButton value="purchase" text="Purchase" purpose={purpose} setPurpose={setPurpose}  />
                <PurposeButton value="refinance" text="Refiance" purpose={purpose} setPurpose={setPurpose}  />
                <PurposeButton value="pre-approval" text="Pre-Approval" purpose={purpose} setPurpose={setPurpose}  />
            </ul>
        </div>
    )
};

const PurposeButton = ({ value, text, purpose, setPurpose }) => {
    return (
        <li
            className={` flex-grow cursor-pointer py-1 px-1 lg:px-3 ${purpose === value ? "bg-white" : ""} rounded`}
            onClick={() => setPurpose(value)}
        >
            {text}
        </li>
    )
}