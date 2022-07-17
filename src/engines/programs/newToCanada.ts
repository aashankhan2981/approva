import { Variant,Ivariant } from "../application";
import { CheckerInputType, ApplicationType, FilterType } from "./types";


class Variant1 extends Variant {
    lender = "13"
    program = "1"
    name = ""

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return (!input.isCanadian)
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            let returnValue = true;
            if (input.applicant_type && input.applicant_type === "self_employed") returnValue = false;
            if (input.usage && (input.usage === "investment" || input.usage === "cottage")) returnValue = false;
            if (input.purpose && (input.purpose === "refinance" )) returnValue = false;

            return returnValue;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 620;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 680)
                return input.GDS <= 35
            return input.GDS <= 42
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 680)
                return input.TDS <= 39
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 30;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}
class Variant2 extends Variant {
    lender = "0"
    program = "1"
    name = ""

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return (!input.isCanadian)
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            let returnValue = true;
            if (input.applicant_type && input.applicant_type === "self_employed") returnValue = false;
            if (input.usage && (input.usage === "investment" || input.usage === "cottage")) returnValue = false;
            if (input.purpose && (input.purpose === "refinance" )) returnValue = false;

            return returnValue;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 620;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 680)
                return input.GDS <= 35
            return input.GDS <= 42
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 680)
                return input.TDS <= 39
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 30;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}
class Variant3 extends Variant {
    lender = "3"
    program = "1"
    name = ""

    postProcessing(input:CheckerInputType, application: ApplicationType, filter: FilterType){
        input.FICO = application.applicants.map(applicant=> applicant.FICO)
    }

    checkers = [
        function check_target_customer(input) {
            return !input.isCanadian && input.isFistTimeBuyer;
        },
        function check_purpose(input) {
            if (input.purpose && !(input.purpose === "purchase")) return false;
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95
        },
        function check_mortgageAmount(input) {
            if (!input.mortgage) return false;
            if (input.mortgage < 150000) {
                return false;
            }
            if (input.mortgage > 950000) {
                return false;
            }
            return true;
        },
        function checkFICO(input) {
            if(input.LTV > 80){
                return Math.min(...input.FICO)>=640;
            }
            else{
                return Math.min(...input.FICO)>=680;
            }
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 30;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },


    ]
}
class Variant4 extends Variant {
    lender = "11"
    program = "1"
    name = ""

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return (!input.isCanadian)
        },
        function check_purpose(input) {
            if (input.usage && !(input.usage === "living_in") && !(input.usage === "living_and_rent")) return false;
            if (input.purpose && !(input.purpose === "purchase")) return false;
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if(input.purchacePrice < 500000) return input.LTV <= 95;
            else{
                const maxLTV = ((input.purchacePrice - ((input.price - 500000) * 0.1 + 25000))/input.purchacePrice) * 100;
                return input.LTV <= maxLTV;
            }
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 0;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 30;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}
class Variant5 extends Variant {
    lender = "5"
    program = "1"
    name = ""


    checkers = [
        function check_target_customer(input) {
            return (!input.isCanadian)
        },
        function check_purpose(input) {
            if (input.purpose && !(input.purpose === "purchase")) return false;
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 680;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 25;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}
class Variant6 extends Variant {
    lender = "2"
    program = "1"
    name = "CMLS A"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return (!input.isCanadian)
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            let returnValue = true;
            if (input.applicant_type && input.applicant_type === "self_employed") returnValue = false;
            if (input.usage && (input.usage === "investment" || input.usage === "cottage")) returnValue = false;
            if (input.purpose && (input.purpose === "refinance" )) returnValue = false;

            return returnValue;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 90
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            return true;
        },
        function checkGDS(input) {
            return true;
        },
        function checkTDS(input) {
            return true;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 30;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}
class Variant7 extends Variant {
    lender = "0"
    program = "1"
    name = "Simplii"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return (!input.isCanadian)
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            let returnValue = true;
            if (input.applicant_type && input.applicant_type === "self_employed") returnValue = false;
            if (input.usage && (input.usage === "investment" || input.usage === "cottage")) returnValue = false;
            if (input.purpose && (input.purpose === "refinance" )) returnValue = false;

            return returnValue;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 80
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 680;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 680) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 680) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 30;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}
class Variant8 extends Variant {
    lender = "7"
    program = "1"
    name = "ICICI"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return (!input.isCanadian)
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 90
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            return true;
        },
        function checkGDS(input) {
            return true;
        },
        function checkTDS(input) {
            return true;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 30;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}
class Variant9 extends Variant {
    lender = "10"
    program = "1"
    name = "RMG Mortgages"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return (!input.isCanadian)
        },
        function check_purpose(input) {
            if (input.purpose && !(input.purpose === "purchase")) return false;
            if (input.purpose && !(input.purpose === "purchase plus")) return false;
            if (input.purpose && !(input.purpose === "imporovements")) return false;
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 80
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false;
            return input.FICO >= 600;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return input.amortization <= 30;
        },
        function checkTerm(input){
            return true
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}

export const NTC_Variants: Ivariant[] = [
    new Variant1(),
    new Variant2(),
    new Variant3(),
    new Variant4(),
    new Variant5(),
    new Variant6(),
    new Variant7(),
    new Variant8(),
    new Variant9(),
];