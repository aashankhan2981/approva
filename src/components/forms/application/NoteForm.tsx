import React,{useState} from 'react'
import { useFillForm } from '../../../hooks'
import { TextAreaInput,ChoiceInput,NextPrevButtuns} from '../../inputs'
import * as yup from 'yup';





export const NoteForm = () => {
    const {note,tags}=form

    const initialState =  Object.assign({
        note:"",
        tags: tags.multiple?tags.selectedValues:tags.selectedValues[0],
    },useFillForm())

    const [data, setData] = useState(initialState)
   
    return (
        <div className="flex flex-col gap-4 w-full">
        <TextAreaInput resize={false} rows={4}
                label={note.label}
                placeholder={note.placeholder}
                isrequired={note.isrequired}
                tooltip={note.tooltip}
                defaultValue={data.note}
                onChange={(value) => setData({ ...data, note: value })}
            />

        <ChoiceInput
            label={tags.label}
            multiple={tags.multiple}
            isrequired={tags.isrequired}
            choices={tags.choices}
            defaultValue={data.tags}
            onChange={(value) => setData({ ...data, tags: value, })}
        />
         <NextPrevButtuns  data={data} isValidForm={true} showTheErrors={()=>{}} />

    </div>
    )
}

const form={
    note: {
        label: "Anything else you want to share?",
        isrequired: false,
        placeholder: "Write here ...",
        tooltip: "Add some optional Note ",
    },
    tags: {
        label: "",
        multiple: true,
        isrequired: false,
        choices: [
            { key: "Just started a new job", value: "new_job", tooltip: "" },
            { key: "On maternity leave", value: "maternity_leave", tooltip: "" },
            { key: "On short-term disability", value: "short_disability", tooltip: "" },
            { key: "Able to show older tax returns", value: "able_tax_returns", tooltip: "" },
            { key: "Able to have guarantor, but prefer not to", value: "able_guarantor", tooltip: "" },
            { key: "Loss of income due to COVID-19", value: "loss_income", tooltip: "" },
            
        ],
        selectedValues: [],
        tooltip: "",
    },
}
