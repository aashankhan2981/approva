
import {

    BadgetForm, CitizenShipForm,
    CoApplicantsNumberForm, ContactInformationForm,
    CurrentLivinStatusForm, DebtsForm, FinancialHealth,
    FirstBuyingForm, HowYouWillUsePrepretyForm,
    IncomeDetailsForm, NoteForm, PropertyCategoryForm,
    TermsAndConditionsFrom, TheEnd, WhatIsYourGoalForm

}from '../components/forms'


import { HomeIcon, ShildIcon, UserIcon, EditIcon, DoneIcon } from '../components/icons'

export * from "./theme"

export const applicationInitialState = () => ({

    currentStepIndex: 0,
    steps: [
        {
            name: "ApplicationInfo",
            title: 'What is your Goal?',
            brief: '',
            icon: <></>,
            isDone: false,
            visible: false,
            introduction: true,
            forms: [
                {
                    name: "application",
                    component: <WhatIsYourGoalForm />
                },
            ],
            activeFormIndex: 0,
        },
        {
            name: "ApplicationInfo",
            title: 'Proprety Type',
            brief: '',
            icon: <></>,
            isDone: false,
            visible: false,
            introduction: true,
            forms: [
                {
                    name: "application",
                    component: <PropertyCategoryForm />
                },
            ],
            activeFormIndex: 0,
        },
        {
            name: "ApplicationInfo",
            title: 'Purchase Purpose',
            brief: '',
            icon: <></>,
            isDone: false,
            visible: false,
            introduction: true,
            forms: [
                {
                    name: "application",
                    component: <HowYouWillUsePrepretyForm />
                },
            ],
            activeFormIndex: 0,
        },
        {
            name: "ApplicantsInfo",
            title: 'Firs Time Buyer ',
            brief: '',
            icon: <></>,
            isDone: false,
            visible: false,
            introduction: true,
            forms: [
                {
                    name: "application",
                    component: <FirstBuyingForm />
                },
            ],
            activeFormIndex: 0,
        },
        {
            name: "ApplicationInfo",
            title: 'Mortage Information',
            brief: '',
            icon: <></>,
            isDone: false,
            visible: false,
            introduction: true,
            forms: [
                {
                    name: "application",
                    component: <BadgetForm />,
                },
            ],
            activeFormIndex: 0,
        },
        {
            name: "ApplicantsInfo",
            title: 'Contact Information',
            brief: 'Let us know more about you',
            icon: <img src={"/imgs/logos/Contact-Information-Icon.svg"} className="pb-[2px] h-10 w-10 m-auto text-[#398ECE]" alt={""}/>,
            isDone: false,
            visible: true,
            forms: [
                {
                    name: "applicant",
                    component: <ContactInformationForm />,
                },
                {
                    name: "applicant",
                    component: <CitizenShipForm />,
                },

                {
                    name: "applicant",
                    component: <CurrentLivinStatusForm />,
                },

            ],
            activeFormIndex: 0,
        },
        {
            name: "ApplicantsInfo",
            title: 'Income Information',
            brief: 'Employment, Income Details',
            icon: <img src={"/imgs/logos/Income-Information-Icon.svg"} className="pb-[2px] h-10 w-10 m-auto text-[#398ECE]"  alt={""}/>,
            isDone: false,
            visible: true,
            forms: [
                {
                    name: "applicant",
                    component: <IncomeDetailsForm />,
                },
                {
                    name: "application",
                    component: <TermsAndConditionsFrom />,
                },
            ],
            activeFormIndex: 0,
        },

        {
            name: "ApplicantsInfo",
            title: 'Credit Information',
            brief: 'Balancing debt with a Mortgage',
            icon: <img src={"/imgs/logos/Credit-Information-Icon.svg"} className="h-10 w-10 pb-[2px] m-auto text-[#398ECE]" alt={""}/>,
            isDone: false,
            visible: true,
            forms: [
                {
                    name: "applicant",
                    component: <FinancialHealth />,
                },
                {
                    name: "applicant",
                    component: <DebtsForm />,
                },
                {
                    name: "applicant",
                    component: <CoApplicantsNumberForm />,
                },
            ],
            activeFormIndex: 0,
        },


        {
            name: "ApplicationInfo",
            title: 'Tailor-Made Results',
            brief: 'Compare your Options',
            icon: <img src={"/imgs/logos/Notes-Stepper-Icon.svg"} className="h-10 w-10 m-auto text-[#398ECE] pb-[2px]" alt={""}/>,
            isDone: false,
            visible: true,
            forms: [
                {
                    name: "application",
                    component: <NoteForm />,
                },

            ],
            activeFormIndex: 0,
        },
        {
            name: "ApplicationInfo",
            title: 'Done',
            brief: 'your application is completed',
            icon: <DoneIcon className="h-6 w-6 m-auto text-[#398ECE]" />,
            isDone: false,
            visible: false,
            forms: [
                {
                    name: "application",
                    component: <TheEnd />,
                },

            ],
            activeFormIndex: 0,
        },
    ],

})



export const FormInitialState = {
    application:{
        applicants:[],
        user:"",
    },
    applicants:[],

}


//change it to env variable later
export const GooglePlacesApiKey = 'AIzaSyAlRjrxJo90MpIT5z1gpQXIYtljOixrygo'



//

const env = process.env.NODE_ENV
let BackendUrl=""
if(env == "development"){
     BackendUrl="http://localhost:3000/api"
}
else {
    BackendUrl = "https://approva-sample.vercel.app/api"
}

export {BackendUrl}
