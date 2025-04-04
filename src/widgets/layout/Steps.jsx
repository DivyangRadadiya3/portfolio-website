import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

export function Steps() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(true);

    const handleNext = () => {
        if (!isLastStep) {
            setActiveStep((cur) => cur + 1);
            setIsFirstStep(false);
            if (activeStep === 1) {
                setIsLastStep(true);
            }
        }
    };

    const handlePrev = () => {
        if (!isFirstStep) {
            setActiveStep((cur) => cur - 1);
            setIsLastStep(false);
            if (activeStep === 1) {
                setIsFirstStep(true);
            }
        }
    };

    return (
        <div className="w-full py-4 px-8">
            {/* <Stepper activeStep={activeStep} orientation="vertical" className="flex flex-col items-center justify-start">
                <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
                <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
                <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
            </Stepper>
            <div className="mt-16 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Next
                </Button>
            </div> */}


            {/* <ol class=" overflow-hidden space-y-8">
                <li
                    class="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                    <a href="https://pagedone.io/" class="flex items-start font-medium w-full  ">
                        <span
                            class="w-8 h-8 aspect-square bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                            1
                        </span>
                        <div class="block">
                            <h4 class="text-base  text-indigo-600 mb-2">How to create a Pagedone
                                account?</h4>
                            <p class="text-sm text-gray-600 max-w-xs mb-4">To
                                Create an account with several steps to collect user
                                information, verify identity, and set up account
                                preferences.
                                <br /></p>
                            <ul class="flex flex-wrap gap-x-5 gap-y-1 w-full max-w-xl mb-4">
                                <li class="text-sm font-medium text-gray-900">
                                    Register yourself </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Validation </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Validation</li>
                                <li class="text-sm font-medium text-gray-900">Email
                                    Verification </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Account Activation </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Profile Setup </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Confirmation Message.</li>
                            </ul>
                            <p class="text-sm text-gray-600 max-w-xs">
                                By following these steps, you can create an easy and
                                user-friendly account creation process.</p>
                            <div class="flex items-center gap-4 my-6">
                                <button type="button"
                                    class="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700">Continue</button>
                                <p
                                    class="py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 ">
                                    BACK</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li
                    class="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                    <a class="flex items-center font-medium w-full  ">
                        <span
                            class="w-8 h-8 bg-indigo-50 relative z-20 border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">2</span>
                        <div class="block">
                            <h4 class="text-base  text-indigo-600 mb-2">Have any trust
                                issue?</h4>
                            <p class="text-sm text-gray-600 max-w-xs">
                                of courser we are here to guide you
                            </p>
                        </div>
                    </a>
                </li>
                <li class="relative flex-1 ">
                    <a class="flex items-start font-medium w-full  ">
                        <span
                            class="w-8 h-8 bg-gray-50 border-2 relative z-10 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">3</span>
                        <div class="block">
                            <h4 class="text-base  text-gray-900 mb-2">How can I reset my
                                password?</h4>
                            <p class="text-sm text-gray-600 max-w-xs">
                                Go to your profile  Click Change Password  Enter
                                previous password confirm Previous password and add
                                your new password
                            </p>
                        </div>
                    </a>
                </li>
            </ol>
             <ol class=" overflow-hidden space-y-8">
                <li
                    class="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                    <a href="https://pagedone.io/" class="flex items-start font-medium w-full  ">
                        <span
                            class="w-8 h-8 aspect-square bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                            1
                        </span>
                        <div class="block">
                            <h4 class="text-base  text-indigo-600 mb-2">How to create a Pagedone
                                account?</h4>
                            <p class="text-sm text-gray-600 max-w-xs mb-4">To
                                Create an account with several steps to collect user
                                information, verify identity, and set up account
                                preferences.
                                <br /></p>
                            <ul class="flex flex-wrap gap-x-5 gap-y-1 w-full max-w-xl mb-4">
                                <li class="text-sm font-medium text-gray-900">
                                    Register yourself </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Validation </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Validation</li>
                                <li class="text-sm font-medium text-gray-900">Email
                                    Verification </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Account Activation </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Profile Setup </li>
                                <li class="text-sm font-medium text-gray-900">
                                    Confirmation Message.</li>
                            </ul>
                            <p class="text-sm text-gray-600 max-w-xs">
                                By following these steps, you can create an easy and
                                user-friendly account creation process.</p>
                            <div class="flex items-center gap-4 my-6">
                                <button type="button"
                                    class="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700">Continue</button>
                                <p
                                    class="py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 ">
                                    BACK</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li
                    class="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                    <a class="flex items-center font-medium w-full  ">
                        <span
                            class="w-8 h-8 bg-indigo-50 relative z-20 border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">2</span>
                        <div class="block">
                            <h4 class="text-base  text-indigo-600 mb-2">Have any trust
                                issue?</h4>
                            <p class="text-sm text-gray-600 max-w-xs">
                                of courser we are here to guide you
                            </p>
                        </div>
                    </a>
                </li>
                <li class="relative flex-1 ">
                    <a class="flex items-start font-medium w-full  ">
                        <span
                            class="w-8 h-8 bg-gray-50 border-2 relative z-10 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">3</span>
                        <div class="block">
                            <h4 class="text-base  text-gray-900 mb-2">How can I reset my
                                password?</h4>
                            <p class="text-sm text-gray-600 max-w-xs">
                                Go to your profile  Click Change Password  Enter
                                previous password confirm Previous password and add
                                your new password
                            </p>
                        </div>
                    </a>
                </li>
            </ol> */}

        </div>
    );
}

Steps.displayName = "/src/widgets/layout/Steps.jsx";


export default Steps;