import { string } from "yup"

export type menuItem = {
    name: string
    link: string
    submenu?: menuItem[]
}

/*inputs*/
export type searchtype='(cities)'|'(regions)'|'establishment'|'street_address'|'geocode'|'address'
export type SearchOptionsType={
    types:searchtype[]
}
export type selectOptionType={
    key:string|JSX.Element;
    value:any;
    tooltip?:string;
}

export type InputProps = {
    label: string;
    brief?:string;
    multiple?:boolean;
    disabled?:boolean;
    choices?:selectOptionType[];
    isrequired: boolean;
    cols?:number,
    defaultValue?: any;
    placeholder?: string;
    tooltip?: string;
    readOnly?: boolean;
    onChange: (val:any) => void;
    showErrors?: boolean;
    errors?:string[];
    type?:'number'|'text'|'email'|'password'|'tel'|string;
    searchOptions?:SearchOptionsType;
    children?:any
    classes?:any
    views?:any
}