import { MatchNew } from './MatchNew';
import React, { useState } from 'react';
import { isEmptyArray } from '../../../helpers';
import { Loading, Pagination } from '../../util';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { rankingAttributeType } from '../../../engines/programs/types';
import { CashIcon, ClockIcon, PaperClipIcon, PlusIcon } from '@heroicons/react/outline';

export const MatchingSectionNew = ({ data, dispatch, filter, loading }) => {

    
    const { results, count, pageSize }: any = data ? data : {}
    
    return (
        <div className="matchingSectionNew">
            <div className="headerFilterContainer">
                <div className="amortizationTermContainer">
                    <div className="amortizationTermLabel">Amortization Term</div>
                    <div className="amortizationTermFilterContainer">
                        <div className={"amortizationTermFilterChild" + (filter.amortization === 20 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_AMORTIZATION", payload: { amortization: 20 } })}>
                            20 YR
                        </div>
                        <div className={"amortizationTermFilterChild" + (filter.amortization === 25 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_AMORTIZATION", payload: { amortization: 25 } })}>
                            25 YR
                        </div>
                        <div className={"amortizationTermFilterChild" + (filter.amortization === 30 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_AMORTIZATION", payload: { amortization: 30 } })}>
                            30 YR
                        </div>
                        <div className={"amortizationTermFilterChild" + (filter.amortization === 35 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_AMORTIZATION", payload: { amortization: 35 } })}>
                            35 YR
                        </div>
                    </div>
                </div>
                <div className="termsContainer">
                    <div className="termsLabel">Terms</div>
                    <div className="termsFilterContainer">
                        <div className={"termsFilterChild" + (filter.term === 1 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_TERM", payload: { term: 1 } })}>
                            1yr
                        </div>
                        <div className={"termsFilterChild" + (filter.term === 2 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_TERM", payload: { term: 2 } })}>
                            2yr
                        </div>
                        <div className={"termsFilterChild" + (filter.term === 3 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_TERM", payload: { term: 3 } })}>
                            3yr
                        </div>
                        <div className={"termsFilterChild" + (filter.term === 4 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_TERM", payload: { term: 4 } })}>
                            4yr
                        </div>
                        <div className={"termsFilterChild" + (filter.term === 5 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_TERM", payload: { term: 5 } })}>
                            5yr
                        </div>
                        <div className={"termsFilterChild" + (filter.term === 6 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_TERM", payload: { term: 6 } })}>
                            6yr
                        </div>
                        <div className={"termsFilterChild" + (filter.term === 7 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_TERM", payload: { term: 7 } })}>
                            7yr
                        </div>
                        <div className={"termsFilterChild last" + (filter.term === 10 ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_TERM", payload: { term: 10 } })}>
                            10yr
                        </div>
                    </div>
                </div>
                <div className="interestRateContainer">
                    <div className="interestRateLabel">Interest Rate</div>
                    <div className="interestRateFilterContainer">
                        <div className={"interestRateFilterChild" + (filter.rate === undefined ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_RATE", payload: { rate: "ANY" } })}>
                            Any
                        </div>
                        <div className={"interestRateFilterChild" + (filter.rate === "fixed" ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_RATE", payload: { rate: "fixed" } })}>
                            Fixed
                        </div>
                        <div className={"interestRateFilterChild last" + (filter.rate === "variable" ? " active" : "")}
                            onClick={() => dispatch({ type: "SET_RATE", payload: { rate: "variable" } })}>
                            Variable
                        </div>
                    </div>
                </div>
            </div>
            <div className="matchingSectionBody">
                <div className="mr-6 ml-4">
                    <div className=' border-[#4E72A3]/[.38] bg-[#F9FAFC] rounded-[21px] px-7 py-3.5 border-2 text-left'>
                        <div className='text-[15px] font-semibold'>I want a Lender that has:</div>
                        <div className='text-[11px] font-semibold'>(select below what’s important to you)</div>
                    </div>

                    <PaymentAttributes dispatch={dispatch} selectedAttributes={filter.attributes.split(",")} />
                    <BonusProductAttributes dispatch={dispatch} selectedAttributes={filter.attributes.split(",")} />
                    <UrgencyAttributes dispatch={dispatch} selectedAttributes={filter.attributes.split(",")}/>
                    <DocumentsAttributes dispatch={dispatch} selectedAttributes={filter.attributes.split(",")} />
                </div>
                <div className="matchingSectionBodyRightSection">
                    <div className="bodyRightSectionWrapper">
                        <div className="matchingSectionBodyRightSectionHeader">
                            <div className="checkboxHeader"></div>
                            <div className="partnersHeader">
                                Partners
                            </div>
                            <div className="ratesAndMonthlyPaymentsHeader">
                                Rates + Monthly Payment
                            </div>
                            <div className="cashbackHeader">
                                Cashback
                            </div>
                            <div className="bonusProductsHeader">
                                Bonus Products
                            </div>
                            <div className='documentsRequiredHeader'>
                                Documents Required
                            </div>
                        </div>
                        <div className="matchingSectionBodyRightSectionList">
                            {
                                results &&
                                results.map((result, index) => (
                                    <MatchNew key={index}
                                        lender={result.lender}
                                        program={result.program}
                                        infos={result.outputData}
                                    />
                                ))

                            }
                        </div>
                        {
                            loading && <Loading />
                        }
                        {
                            !loading && isEmptyArray(results) &&
                            <Button>
                                No results match the current filter!
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}



type FilterAttributeType = {
    label: string;
    value?: rankingAttributeType;
    color: string,
    selected?: boolean,
    dispatch?: any
}
type FilterAttributeHeaderType = {
    label: string;
    color: string,
    icon?: JSX.Element
}

const AttributeHeader: React.FC<FilterAttributeHeaderType> = (props) => {
    const { label, color,icon } = props
    return (
        <div className={` w-fit items-center flex gap-2 rounded-[42px] px-1 py-[6px] mt-3.5  text-left`}>
            <div className='text-sm font-semibold'>{label}</div>
            {icon}
        </div>
    )
}
const Attribute: React.FC<FilterAttributeType> = (props) => {
    const { label, value, color, selected, dispatch } = props

    const toggleSelection = () => {
        dispatch({ type: selected ? "REMOVE_ATTRIBUTE" : "ADD_ATTRIBUTE", payload: { value: value } })
    }

    return (
        <div className={`cursor-pointer  w-fit items-center flex rounded-[42px] px-7 py-[5px] mt-3.5 border-2 text-left hover:border-[{color}]/[.76]  ${selected ? ` border-blue-400` : ` border-blue-100`}`}
            onClick={() => toggleSelection()}>
            <div className='text-sm font-semibold'>{label}</div>
        </div>
    )

}

const PaymentAttributes = ({ dispatch,selectedAttributes=[] }) => {
    
    const attributes: FilterAttributeType[] = [
        {
            label: "Skip First Payment",
            value: "paymentFlexibilityFirstMonth",
            color: "#EAAD48",
        },
        {
            label: "Skip a Payment Option",
            value: "paymentFlexibilityMissOne",
            color: "#EAAD48",
        },
        {
            label: "Early Repayment Option",
            value: "prePaymentAbility",
            color: "#EAAD48",
        },
        {
            label: "Lowest Monthly Payment",
            value: "monthlyPayment",
            color: "#EAAD48",
        },
        {
            label: "Provides CashBack",
            value: "hasCashBack",
            color: "#EAAD48",
        }

    ]

    return (
        <>
            <AttributeHeader label='Mortgage Payment Options' color="#EAAD48" icon={<CashIcon className='w-6 h-6' />} />
            {
                attributes.map((item, index) =>
                    <Attribute
                        key={index}
                        label={item.label}
                        value={item.value}
                        selected={selectedAttributes.includes(item.value)}
                        color={item.color}
                        dispatch={dispatch}
                    />
                )
            }
        </>

    )
}

const BonusProductAttributes = ({ dispatch,selectedAttributes=[] }) => {

    const attributes: FilterAttributeType[] = [
        {
            label: "Overdraft Protection",
            value: "overdraftProtection",
            color: "#EAAD48",
            selected: false,
        },
        {
            label: "Big Bank Size",
            value: "bankSize",
            color: "#EAAD48",
            selected: false,
        },
        {
            label: "Online Banking",
            value: "onlineBanking",
            color: "#EAAD48",
            selected: false,
        },
        {
            label: "Home Equity Line of Credit",
            value: "HELOC",
            color: "#EAAD48",
            selected: false,
        },
        {
            label: "Credit Card",
            value: "creditCard",
            color: "#EAAD48",
            selected: false,
        },
        {
            label: "Bundle Pricing Benifits",
            value: "bundlePricing",
            color: "#EAAD48",
            selected: false,
        },
        {
            label: "Multiple Branch",
            value: "multipleBranch",
            color: "#EAAD48",
            selected: false,
        },
    ]

    return (
        <>
            <AttributeHeader label='Bonus Banking Products' color="#EAAD48" icon={<PlusIcon className='w-6 h-6' />} />
            {
                attributes.map((item, index) =>
                    <Attribute
                        key={index}
                        label={item.label}
                        value={item.value}
                        selected={selectedAttributes.includes(item.value)}
                        color={item.color}
                        dispatch={dispatch}
                    />
                )
            }
        </>

    )
}

const UrgencyAttributes = ({ dispatch,selectedAttributes=[] }) => {
    const attributes: FilterAttributeType[] = [
        {
            label: "Response in < 24 hours",
            value: "responsivity",
            color: "#EAAD48",
            selected: false,
        },
    ]

    return (
        <>
            <AttributeHeader label='Urgency Of Time' color="#EAAD48" icon={<ClockIcon className='w-6 h-6' />} />
            {
                attributes.map((item, index) =>
                    <Attribute
                        key={index}
                        label={item.label}
                        value={item.value}
                        selected={selectedAttributes.includes(item.value)}
                        color={item.color}
                        dispatch={dispatch}
                    />
                )
            }
        </>

    )
}

const DocumentsAttributes = ({ dispatch ,selectedAttributes=[]}) => {
    const attributes: FilterAttributeType[] = [
        {
            label: "Least Documents Required",
            value: "documentationRequirement",
            color: "#F8E71C",
            selected: false,
        },
    ]

    return (
        <>
            <AttributeHeader label='Least Documents Required' color="#F8E71C" icon={<PaperClipIcon className='w-6 h-6'/>} />
            {
                attributes.map((item, index) =>
                    <Attribute
                        key={index}
                        label={item.label}
                        value={item.value}
                        selected={selectedAttributes.includes(item.value)}
                        color={item.color}
                        dispatch={dispatch}
                    />
                )
            }
        </>

    )
}