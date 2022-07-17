import React, { useContext, useEffect, useState } from "react";
import { CkeckedIcon, MenuIcon, UserIcon } from "../../icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import UserProfile from "./UserProfile";
import { SideMenu } from "./SideMenu";
import { useRouter } from 'next/router'
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { FormContext, ApplicationStatusContext, AuthenticationContext } from "../../../contexts";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useFireBaseAuth } from "../../../hooks";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 59,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(128, 183, 224, 0.2)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#80B7E0",
    borderTopRightRadius: 18,
  },
}));

export const Header = () => {
  const { appStatus, dispatch } = useContext(ApplicationStatusContext);
  const currentStep = appStatus.currentStepIndex + 1;
  const { auth_state, dispatch:dispatchAuth } = useFireBaseAuth()
  const user  = useContext(AuthenticationContext)
  const router = useRouter()
  let currentStepIndex = (currentStep > 5) ? currentStep - 5 : currentStep;
  const steps = (currentStep <= 5) ? appStatus.steps.filter((item)=>{return item.introduction}) : appStatus.steps.filter((item)=>{return !item.introduction});

  const goBack = () => {
    
    appStatus.currentStepIndex===0? 
    router.back()
    :
    dispatch({ type: "GO_BACK" });
  };
const SignOut=()=>{
  dispatchAuth({type:"SIGNOUT"})
}
  return (
    
    <div className="mx-10 mt-6">
      <div className="relative">
        <BorderLinearProgress
          className="rounded-t-[18px]"
          variant="determinate"
          value={(currentStepIndex / steps.length) * 100}
        />
        <a
          className={`text-white flex absolute top-[16px] left-[2%] items-center cursor-pointer `}
          onClick={() => goBack()}
        >
          <KeyboardBackspaceIcon sx={{ color: "white", marginRight: 1 }} />

          <p className={`text-white`}>{currentStep===1?"Home":"Back"}</p>
        </a>
        <img
          className="absolute left-[45%] bottom-[9%]"
          src="/imgs/logos/approva.svg"
          alt="Approva"
        />
        <div className="flex float-right relative right-[17px] bottom-[51px]">
          {currentStep <= 5 && <p className="text-[#1C5F92] text-[16px] pt-[10px] pr-[12px]">
            <b>{currentStepIndex}</b>/{steps.length}
          </p>}
          {currentStep > 5 && user && <div className="bg-white rounded-[25px] px-[18px] py-[5px] mt-[6px] text-[#1C5F92]">
            <span className=" cursor-pointer" onClick={SignOut} >SIGN OUT</span>
          </div>}
        </div>
      </div>

      <div className="bg-white rounded-b-[18px] w-[100%] h-[60px]">
        <p className="text-[15px] font-medium mx-auto w-fit pt-[17px]">Faster process. Better <span className="text-[#80B7E0]">Results.</span></p>
      </div>
    </div>
  );
};
