import { ChekingType, AttribuetsType, OutPutType, LenderType, ProgramType, rankingAttributeType } from "./programs/types"

export type IntrestRate = {
    term: number|string;
    value: number;
    ensured: boolean;
}

export type MinIntrestType={
    fixed?:IntrestRate,
    variable?:IntrestRate,
}|null


export type DecisionOutputType ={
    lender: LenderType;
    program: ProgramType;
    name: string;
    results: ChekingType[];
    attributes: AttribuetsType;
    outputData: OutPutType;
}

export type MetricsType={
    fico: number;
    gds: number;
    tds: number;
}


export type FiltredOuputType ={
    filtredVariants: DecisionOutputType[];
    metrics: MetricsType;
}

export type RankedVariant ={
    variant: DecisionOutputType;
    variantScore: number;
}

export type RankedOutputType ={
    rankedResults: RankedVariant[];
    metrics: MetricsType;
}

export type EngineOutputType = {
    rankedResults: DecisionOutputType[];
    metrics: MetricsType;
}

export interface IRankingAttribute {
    name: rankingAttributeType;
    weight: number;
    normanormalizer(input: number[]): number[];
}

export class RankingAttribute implements IRankingAttribute {
    name: rankingAttributeType
    weight: number
    normanormalizer(input: number[]): number[] {
        throw new Error("Method not implemented.")
    }

}


