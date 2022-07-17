import React, {useContext} from 'react'
import {StepIcon} from './Step-icon';
import {Step} from './Step';
import {ApplicationStatusContext} from '../../../contexts'

export const SidebarDashboard = () => {
    const {appStatus} = useContext(ApplicationStatusContext)
    const {steps, currentStepIndex} = appStatus
    const currentStep = steps[currentStepIndex]
    const Activestep = steps[currentStepIndex];
    const { forms, activeFormIndex } = Activestep
    const totalFormsNumber = Activestep.forms.length

    return (
        <>
            {!currentStep.introduction &&
            <div className="flex-row lg:items-start items-center pt-7">
                <div className="flex flex-grow lg:flex-grow-0 m-auto w-[1050px] flex-row lg:items-start items-center gap-5 justify-center">
                    {
                        steps.map((step, index) => (
                            step.visible &&
                            <React.Fragment key={index}>
                                {/*index != 0 && <div className={` h-1 lg:h-12 w-8 lg:w-1 ${steps[index - 1].isDone ? "bg-blue-500" : "bg-blue-100"} lg:ml-5`}></div>*/}
                                <StepIcon
                                    forms={forms}
                                    totalFormsNumber={totalFormsNumber}
                                    activeFormIndex={activeFormIndex}
                                    index={index}
                                    isDone={step.isDone}
                                    active={currentStepIndex === index}
                                    title={step.title}
                                    brief={step.brief}
                                    icon={step.icon}
                                    isLastStep={index === steps.length - 2}
                                    isFirstStep={index === 4}
                                />
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className="flex flex-grow lg:flex-grow-0 m-auto w-[1050px] flex-row lg:items-start items-center gap-5 justify-center">
                    {
                        steps.map((step, index) => (
                            step.visible &&
                            <React.Fragment key={index}>
                                {/*index != 0 && <div className={` h-1 lg:h-12 w-8 lg:w-1 ${steps[index - 1].isDone ? "bg-blue-500" : "bg-blue-100"} lg:ml-5`}></div>*/}
                                <Step
                                    index={index}
                                    isDone={step.isDone}
                                    active={currentStepIndex === index}
                                    title={step.title}
                                    brief={step.brief}
                                    icon={step.icon}
                                    isLastStep={index === steps.length - 2}
                                />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>}
        </>
    )
}

