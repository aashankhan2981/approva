
import { isEmptyArray } from "../helpers";
import { rankingAttributeType } from "./programs/types";
import { IRankingAttribute, RankingAttribute, DecisionOutputType, FiltredOuputType, RankedOutputType } from "./types";


class Attribute1 extends  RankingAttribute{
    name:rankingAttributeType = "monthlyPayment"
    weight = 20

    normanormalizer = function (input) {
        const minPyment = Math.min(...input);
        let outPut = input.map(value =>{
            return minPyment/value;
        });
        return outPut;
    }
}
class Attribute2 extends  RankingAttribute{
    name:rankingAttributeType = "cashback"
    weight = 1

    normanormalizer = function (input) {
        const maxCashBack = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxCashBack;
        });
        return outPut;
    }
}
class Attribute3 extends  RankingAttribute{
    name:rankingAttributeType = "prePaymentAbility"
    weight = 5

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute4 extends  RankingAttribute{
    name:rankingAttributeType = "bankSize"
    weight = 10

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute5 extends  RankingAttribute{
    name:rankingAttributeType = "paymentFlexibilityFirstMonth"
    weight = 3

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute6 extends  RankingAttribute{
    name:rankingAttributeType = "paymentFlexibilityMissOne"
    weight = 5

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute7 extends  RankingAttribute{
    name:rankingAttributeType = "onlineBanking"
    weight = 3

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute8 extends  RankingAttribute{
    name:rankingAttributeType = "HELOC"
    weight = 1

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute9 extends  RankingAttribute{
    name:rankingAttributeType = "creditCard"
    weight = 3

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute10 extends  RankingAttribute{
    name:rankingAttributeType = "bundlePricing"
    weight = 5

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute11 extends  RankingAttribute{
    name:rankingAttributeType = "overdraftProtection"
    weight = 3

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute12 extends  RankingAttribute{
    name:rankingAttributeType = "multipleBranch"
    weight = 5

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute13 extends  RankingAttribute{
    name:rankingAttributeType = "responsivity"
    weight = 8

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute14 extends  RankingAttribute{
    name:rankingAttributeType = "hasCashBack"
    weight = 10

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}
class Attribute15 extends  RankingAttribute{
    name:rankingAttributeType = "documentationRequirement"
    weight = 7

    normanormalizer = function (input) {
        const maxValue = Math.max(...input);
        let outPut = input.map(value =>{
            return value/maxValue;
        });
        return outPut;
    }
}


const rankingAttributes: IRankingAttribute[] = [
    new Attribute1(),
    new Attribute2(),
    new Attribute3(),
    new Attribute4(),
    new Attribute5(),
    new Attribute6(),
    new Attribute7(),
    new Attribute8(),
    new Attribute9(),
    new Attribute10(),
    new Attribute11(),
    new Attribute12(),
    new Attribute13(),
    new Attribute14(),
    new Attribute15()
];



export function FilterEngine(validationResults: DecisionOutputType[]|null, rankingAttributeList: string[]| undefined) : FiltredOuputType|null{
    if(validationResults===null) return null
    let filtredData = {
        filtredVariants : null,
        metrics: {
            fico: null,
            gds: null,
            tds: null,
        },
    }

    filtredData.filtredVariants = validationResults.filter(variant => {
        const validVariant=isEmptyArray(variant.results.filter(item => !item.checkerValue))
        if(!rankingAttributeList) return validVariant
        if(isEmptyArray(rankingAttributeList)) return validVariant
        let excludedFromRanking = false;
        if(
            (rankingAttributeList.includes("paymentFlexibilityFirstMonth") && variant.attributes.paymentFlexibilityFirstMonth == 0) ||
            (rankingAttributeList.includes("paymentFlexibilityMissOne") && variant.attributes.paymentFlexibilityMissOne == 0) ||
            (rankingAttributeList.includes("hasCashBack") && variant.attributes.hasCashBack == 0) ||
            (rankingAttributeList.includes("creditCard") && variant.attributes.creditCard == 0) ||
            (rankingAttributeList.includes("onlineBanking") && variant.attributes.onlineBanking == 0) ||
            (rankingAttributeList.includes("overdraftProtection") && variant.attributes.overdraftProtection == 0) ||
            (rankingAttributeList.includes("prePaymentAbility") && variant.attributes.prePaymentAbility == 0) ||
            (rankingAttributeList.includes("onlineBanking") && variant.attributes.onlineBanking == 0) ||
            (rankingAttributeList.includes("HELOC") && variant.attributes.HELOC == 0) ||
            (rankingAttributeList.includes("bundlePricing") && variant.attributes.bundlePricing == 0) ||
            (rankingAttributeList.includes("overdraftProtection") && variant.attributes.overdraftProtection ==0) ||
            (rankingAttributeList.includes("multipleBranch") && variant.attributes.multipleBranch ==0)
        ) excludedFromRanking = true;


        return validVariant && !excludedFromRanking;
     });

    filtredData.metrics.fico = validationResults[0].outputData.fico;
    filtredData.metrics.gds = validationResults[0].outputData.gds;
    filtredData.metrics.tds = validationResults[0].outputData.tds;

    return filtredData;
}

function getUsedRankingAttributes(rankingAttributeList: string[]){
    return rankingAttributes.filter(attribute => {
        return rankingAttributeList.includes(attribute.name)
    })
}

export  function RankingEngine(filtredResults : FiltredOuputType|null, rankingAttributeList: string[]| undefined) : RankedOutputType|null{
    if (filtredResults===null) return null
    const validationResults = filtredResults.filtredVariants;
    const metricsResults = filtredResults.metrics;

    const initialRankingAttributesList = ['monthlyPayment', 'cashback']
    let usedRankingAttributes = rankingAttributeList? getUsedRankingAttributes(rankingAttributeList): getUsedRankingAttributes(initialRankingAttributesList);
    let weightVector = usedRankingAttributes.map(attribute => {return attribute.weight;});

    let scoreTable = usedRankingAttributes.map(attribute =>{
        const attributeValues = validationResults.map(result =>{
            return result.attributes[attribute.name];
        });
        return attribute.normanormalizer(attributeValues);
    });

    let scoreVector = validationResults.map((currentVariant,index) => {
        const currentVariantScoreVector = scoreTable.map(currentAttributeScoreVector => currentAttributeScoreVector[index]);
        return {
            variant: currentVariant,
            variantScore: weightVector.map((x,index) => weightVector[index]*currentVariantScoreVector[index]).reduce((m,n) => m+n,0),
        };
    });
    
    const finalRanking = scoreVector.sort(function(variant1, variant2){
        return variant2.variantScore - variant1.variantScore;
    });

    const rankingResults = {
        rankedResults : finalRanking,
        metrics : metricsResults,
    }

    return rankingResults;
}


