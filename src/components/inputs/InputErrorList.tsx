import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { InputToolTip } from '.'
import { isEmptyArray } from '../../helpers'
import { ErrorsIcon } from '../icons'


type errorsType={
    errors:string[]
}
export const InputErrorList:FC<errorsType> = ({errors} ) => {
    if (isEmptyArray(errors)) return <></>
    return (
            <span className={' text-red-500 text-xs'} >
                {
                    errors.map((err, index) => (
                        
                        <span key={index} >
                            - {err}<br/>
                        </span>
                    ))
                }
            </span>

    )
}
