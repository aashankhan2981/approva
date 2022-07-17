import { Ivariant, Variant } from "../application"




class Variant1 extends Variant{
    lender= "8"
    program= "5"
    name= "MCAP: "
    
    get_max_amorthization= function (application, filter) {
        return 30;
    }

    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return input.usage === "cottage";
        },
        function check_restrictions(input) {
            return input.usage === "cottage" || input.usage === "living_in";
        },
        function check_LTV(input) {
            return true;
        },
        function check_mortgageAmount(input) {
            /*if (input.address && (input.address.includes("Toronto") || input.address.includes("Vancouver") || input.address.includes("Calgary"))) {
                return input.mortgage <= 750000
            }*/
            return input.mortgage <= 600000
        },

        function checkFICO(input) {
            if (!input.FICO) return false
            if (input.price >= 1000000) return input.FICO >= 600
            return input.FICO >= 680
        },

        function checkGDS(input) {
            return true
        },
        function checkTDS(input) {
            return true
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

class Variant2 extends Variant{
    lender = "3"
    program="5"
    name= ""
    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return input.usage === "cottage";
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (input.purchacePrice < 500000) return input.LTV <= 95;
            else {
                const maxLTV = ((input.purchacePrice - ((input.price - 500000) * 0.1 + 25000)) / input.purchacePrice) * 100;
                return input.LTV <= maxLTV;
            }
        },
        function check_mortgageAmount(input) {
            if (input.mortgage < 150000) return false
            /*if (input.address && (input.address.includes("Toronto") || input.address.includes("Vancouver") || input.address.includes("Calgary"))) {
                return input.mortgage <= 750000
            }*/
            return input.mortgage <= 600000
        },

        function checkFICO(input) {
            if (!input.FICO) return false
            if (input.LTV >= 80 && input.LTV <= 95)
                return input.FICO >= 640
            return input.FICO >= 680
        },

        function checkGDS(input) {
            return input.GDS <= 39
        },
        function checkTDS(input) {
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 6
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

class Variant3 extends Variant{
    lender= "13"
    program= "5"
    name= ""
    
    get_max_amorthization= function (application, filter) {
        return 30;
    }

    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return input.usage === "cottage";
        },
        function check_restrictions(input) {
            return input.usage === "cottage" || input.usage === "living_in";
        },
        function check_LTV(input) {
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            /*if (input.address && (input.address.includes("Toronto") || input.address.includes("Vancouver") || input.address.includes("Calgary"))) {
                return input.mortgage <= 750000
            }*/
            return input.mortgage <= 600000
        },

        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 680
        },

        function checkGDS(input) {
            return input.GDS <= 39
        },
        function checkTDS(input) {
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

class Variant4 extends Variant{
    lender= "2"
    program= "5"
    name= ""
    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return input.usage === "cottage";
        },
        function check_restrictions(input) {
            return input.usage === "cottage" || input.usage === "living_in";
        },
        function check_LTV(input) {
            if (input.purpose === "purchase" || input.purpose === "pre_approval")
                return input.LTV <= 95;
            else {
                if (input.FICO > 660)
                    return input.LTV <= 80;
                return input.LTV <= 65;
            }

        },
        function check_mortgageAmount(input) {
            /*if (input.address && (input.address.includes("Toronto") || input.address.includes("Vancouver") || input.address.includes("Calgary"))) {
                return input.mortgage <= 750000
            }*/
            return input.mortgage <= 600000
        },

        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 660
        },

        function checkGDS(input) {
            if (input.FICO < 680)
                return input.GDS <= 35
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (input.FICO < 680)
                return input.TDS <= 42
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

export const VSH_Variants:Ivariant[] = [
    new Variant1(),
    new Variant2(),
    new Variant3(),
    new Variant4(),
];