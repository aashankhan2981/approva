import { IconButton } from '@mui/material'

import React, { FC, useState } from 'react'
import { InfoIcon } from '../icons'
import Zoom from '@mui/material/Zoom';
import { LightTooltip } from '../util';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

type ToolTipProps={
    text:string;
    icon?:ReactJSXElement
}
export const InputToolTip:FC<ToolTipProps> = (props) => {
    const {text, icon = <InfoIcon className="h-6 w-6 text-[#398ECE]" />}=props
    return (
        <LightTooltip TransitionComponent={Zoom} title={text} arrow>
           <div className=' p-0.5'>{icon}</div> 
        </LightTooltip>
        
    )
}
