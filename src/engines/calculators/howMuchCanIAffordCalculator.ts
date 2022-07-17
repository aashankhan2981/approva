import { isEmptyArray } from "../../helpers";
import { All_Variants } from "../constants";
import { ApplicationType, FilterType } from "../programs/types";

export function howMuchCanIAffordCalculator(application:ApplicationType, filter:FilterType = {}):number{
    if (isEmptyArray(application.applicants)) return 0
    const maxPrice = All_Variants.reduce((accumelator,variant)=>{
        return Math.max(accumelator,variant.get_max_purchasePrice(application,filter))
    },0)
    return maxPrice
}
