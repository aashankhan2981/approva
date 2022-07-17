import { isEmptyArray } from "../helpers";
import { All_Variants, getLenderById, getProgramById } from "./constants";

import { ApplicationType, FilterType } from "./programs/types";
import { DecisionOutputType } from "./types";

export function getValidVariants(application:ApplicationType, filter:FilterType = {}) : DecisionOutputType[]|null {
    if (isEmptyArray(application.applicants)) return null
    const FilteredVariants = All_Variants.filter(variant => variant.variant_checker(application,filter))
    return FilteredVariants.map(variant => {
        const validation = variant.engin(application, filter);
        const finalOutput = {
            lender: getLenderById(variant.lender),
            program: getProgramById(variant.program),
            name: variant.name,
            results: validation.results,
            attributes: validation.attributes,
            outputData: validation.output,
        }
        return finalOutput;
    })
}
