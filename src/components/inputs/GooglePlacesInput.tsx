import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { InputToolTip } from './InputToolTip';
import { Label } from './Label';
import { GooglePlacesApiKey } from '../../constants';
import { isEmptyArray } from '../../helpers';
import { InputErrorList } from './InputErrorList';
import { InputProps } from '../@types';




export const GooglePlacesInput:React.FC<InputProps> = (props) => {
    const { label, isrequired, tooltip, onChange, defaultValue, errors,showErrors,searchOptions} = props
    const updateValue = (val:any) => {
        if (val != defaultValue) {
            onChange(val);
        }
    }
    let sInputParent = showErrors && !isEmptyArray(errors) ? "inline-block m-auto gap-2" : "flex items-center justify-center gap-2";

    return (
        <div className=' relative  space-y-2'>
            <div className='flex flex-col w-full gap-4 justify-center'>
                <div className='flex items-center justify-center gap-2'>
                    <Label label={label} inputRequired={isrequired} />
                    {tooltip && <InputToolTip text={tooltip} />}
                </div>

                <div className={sInputParent}>
                    <div className={'tooltip w-[750px] border rounded-xl' + ((showErrors && !isEmptyArray(errors)) ? " border-red-500" : " border-blue-200")}>
                            <GooglePlacesAutocomplete
                                apiKey={GooglePlacesApiKey}
                                selectProps={{
                                    instanceId: "1",
                                    value: defaultValue,
                                    onChange: updateValue,
                                    styles: {styles},
                                }}
                                autocompletionRequest={{
                                    componentRestrictions: {
                                        country: ["ca"], //Restriction to only inside Canada
                                    },
                                    ...searchOptions,
                                }}
                                />  
                           
                    </div>
                </div>
            </div>
        </div>
    )
}


const styles = {
    input: (provided) => ({
        ...provided,
        color: 'blue',
        padding: 16,
        border: 'none',
        outline:'none',

    }),
    option: (provided) => ({
        ...provided,
        color: 'black',
        backgroundColor: '#fff',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'blue',
        padding: 16,
    }),
    textInputContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        zIndex: 999,
        width: '90%',
    },
    textInput: {
        marginLeft: 0,
        marginRight: 0,
        height: "120px",
        padding:"1rem",
        color: '#5d5d5d',
        fontSize: '16px',
        borderWidth: 1,
        zIndex: 999,
    },
    predefinedPlacesDescription: {
        color: '#1faadb'
    },
    listView: {
        top: 45.5,
        zIndex: 10,
        position: 'absolute',
        color: 'black',
        backgroundColor: "white",
        width: '89%',
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: 'blue',
    },
    description: {
        flexDirection: "row",
        flexWrap: "wrap",
        fontSize: 14,
        maxWidth: '89%',
    },
};

