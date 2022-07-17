
import { Ivariant, Variant } from "../application";
import { ApplicationType, FilterType } from "./types";


class Variant1 extends Variant{
    lender= "1"
    program= "2"
    name= "B2B ALT: Bruised credit"
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 75;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 500;
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
            return true;
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

class Variant2 extends Variant{
        lender ="1"
        program = "2"
        name= "B2B: Near Prime conforming"
       
        get_max_amorthization= function (application:ApplicationType, filter:FilterType) {
            return 30;
        }

        checkers= [
            function check_target_customer(input) {
                return true;
            },
            function check_purpose(input) {
                return true;
            },
            function check_restrictions(input) {
                return true;
            },
            function check_LTV(input) {
                if (!input.LTV) return false
                return input.LTV <= 75;
            },
            function check_mortgageAmount(input) {
                return true;
            },
            function checkFICO(input) {
                if (!input.FICO) return false
                return input.FICO >= 540;
            },
            function checkGDS(input) {
                if (!input.FICO) return false
                if (!input.GDS) return false
                if (input.FICO < 540) return false
                if (input.FICO > 680)
                    return input.GDS <= 39
                return input.GDS <= 35
            },
            function checkTDS(input) {
                if (!input.FICO) return false
                if (!input.TDS) return false
                if (input.FICO < 540) return false
                if (input.FICO > 680)
                    return input.TDS <= 44
                return input.TDS <= 42
            },
            function checkBunckrepcy(input) {
                return input.bunkrupcy >= 7;
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

class Variant3 extends Variant{
    lender= "1"
    program= "2"
    name= "B2B: Non-conforming up to 65% LTV"
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 75;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 500;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 55
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 55
        },
        function checkBunckrepcy(input) {
            return true;
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

class Variant4 extends Variant{
    lender= "1"
    program="2"
    name= "Conforming up to 80% LTV"
    
    get_max_amorthization= function (application, filter) {
        return 30;
    }
    
    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 80;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 540;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 55
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 55
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant5 extends Variant{
    lender= "1"
    program= "2"
    name= "B2B: Equity 50% LTV (PRIMARY RESIDENCE)"
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 50;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 680;
        },
        function checkGDS(input) {
            return true;
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 65
        },
        function checkBunckrepcy(input) {
            return true;
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

class Variant6 extends Variant{
    lender= "1"
    program= "2"
    name= "B2B: Equity 65% LTV (PRIMARY RESIDENCE)"
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 65;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 720;
        },
        function checkGDS(input) {
            return true;
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 60
        },
        function checkBunckrepcy(input) {
            return true;
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

class Variant7 extends Variant{
    lender= "1"
    program= "2"
    name= "Standard Residential: Insured"
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            let minAmount = 75000;
            if(input.rate === "fixed") minAmount = 50000;
            return input.mortgage >= minAmount && input.mortgage <= 1000000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 600;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 600) return false
            if (input.FICO > 680)
                return input.GDS <= 39
            return input.GDS <= 35
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 600) return false
            if (input.FICO > 680)
                return input.TDS <= 44
            return input.TDS <= 42
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant8 extends Variant{
    lender= "1"
    program= "2"
    name= "B2B: Standard Residential: Conventional "
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 80;
        },
        function check_mortgageAmount(input) {
            let minAmount = 75000;
            if(input.rate === "fixed") minAmount = 50000;
            return input.mortgage >= minAmount && input.mortgage <= 1000000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 600;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 600) return false
            if (input.FICO > 680)
                return input.GDS <= 39
            return input.GDS <= 35
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 600) return false
            if (input.FICO > 680)
                return input.TDS <= 44
            return input.TDS <= 42
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return true;
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

class Variant9 extends Variant{
    lender= "3"
    program= "2"
    name= "HomeTrust"
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            let minAmount = 150000;
            return input.mortgage >= minAmount && input.mortgage <= 925000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            if (input.ensured) return input.FICO >= 640
            if (!input.ensured) return input.FICO >= 680
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.ensured && input.FICO >= 640) return true
            if (!input.ensured && input.FICO >= 680) return true
            if (input.FICO < 640) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 640) return false
            return input.TDS <= 34
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant10 extends Variant{
    lender= "12"
    program="2"
    name= "Scotia Bank"
    
    get_max_amorthization= function (application, filter) {
        return 30;
    }
    
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.GDS <= 39
            return input.GDS <= 35
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.TDS <= 44
            return input.TDS <= 42
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant11 extends Variant{
    lender="14"
    program="2"
    name="TD Bank"
    
    get_max_amorthization= function (application, filter) {
        return 30;
    }

    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.GDS <= 39
            return input.GDS <= 35
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.TDS <= 44
            return input.TDS <= 42
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant12 extends Variant{
    lender= "7"
    program= "2"
    name= "ICICI Bank: Conventional Purchase"
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 80;
        },
        function check_mortgageAmount(input) {
            let minAmount = 50000;
            return input.mortgage >= minAmount && input.mortgage <= 1000000;
        },
        function checkFICO(input) {
            return input.FICO >= 600;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 600) return false
            return input.GDS <= 50
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 600) return false
            return input.TDS <= 55
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant13 extends Variant{
    lender= "7"
    program= "2"
    name= "ICICI Bank: Insured Purchase"
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 80;
        },
        function check_mortgageAmount(input) {
            let minAmount = 50000;
            return input.mortgage >= minAmount && input.mortgage <= 925000;
        },
        function checkFICO(input) {
            return (input.FICO >= 700);
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 700) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 700) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant14 extends Variant{
    lender= "0"
    program= "2"
    name= "Lendwise: Fixed Rate + VRM"
    checkers=[
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            return true
        },
        function checkGDS(input) {
            return true
        },
        function checkTDS(input) {
            return true
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return (input.squarfeet >= 1 && input.squarfeet <= 4);
        },
        function checkAmortization(input){
            if (input.ensured) return input.amortization >= 15 && input.amortization <= 25;
            if (!input.ensured) return input.amortization <= 30;
        },
        function checkTerm(input){
            return input.term >= 1 && input.term <= 5;
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },
    ]
}

class Variant15 extends Variant{
    lender= "0"
    program="2"
    name= "Lendwise: Flexible Down Payment Program"
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV >= 90 && input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.GDS <= 39
            return input.GDS <= 35
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.TDS <= 44
            return input.TDS <= 42
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return true;
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

class Variant16 extends Variant{
    lender= "0"
    program="2"
    name= "Manulife - High ratio program"
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV >= 90 && input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.GDS <= 39
            return input.GDS <= 35
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.TDS <= 44
            return input.TDS <= 42
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant17 extends Variant{
    lender= "0"
    program="2"
    name= "Manulife - Standard Conventional Insurable Program"
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV >= 80
        },
        function check_mortgageAmount(input) {
            let minAmount = 100000;
            return input.mortgage >= minAmount && input.mortgage <= 800000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 700;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 700) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 700) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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
            return input.term <= 5;
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },

    ]
}

class Variant18 extends Variant{
    lender= "8"
    program="2"
    name= "MCAP: 1-10 YEAR CLOSED FIXED RATE"
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV >= 80
        },
        function check_mortgageAmount(input) {
            let minAmount = 100000;
            return input.mortgage >= minAmount && input.mortgage <= 800000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 600;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 600) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 600) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return true;
        },
        function checkTerm(input){
            return input.term <= 5;
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },

    ]
}

class Variant19 extends Variant{
    lender= "14"
    program= "2"
    name= ""
    
    get_max_amorthization= function (application, filter) {
        return 30;
    }

   
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.GDS <= 39
            return input.GDS <= 35
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 650) return false
            if (input.FICO > 680)
                return input.TDS <= 44
            return input.TDS <= 42
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant20 extends Variant{
    lender= "7"
    program="2"
    name= "Conventional Purchase"
    
    get_max_amorthization=function (application, filter) {
        return 30;
    }
  
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 80;
        },
        function check_mortgageAmount(input) {
            return input.mortgage >= 50000 && input.mortgage <= 1000000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 600;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 50
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 55
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant21 extends Variant{
    lender ="6"
    program= "2"
    name= "Conventional Purchase"
    
    get_max_amorthization= function (application, filter) {
        return 30;
    }
   
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.purpose && (input.purpose === "purchase" || input.purpose === "refinance")) return true;
            return false
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false

            if(input.purpose === "living_in"){
                if(input.propretyType === "condo") return input.LTV <= 75;
                else return input.LTV <= 80;
            }

            if(input.purpose === "living_and_rent" || input.purpose === "investment") return input.LTV <= 75;
            
            return input.LTV <= 80;
        },
        function check_mortgageAmount(input) {
            return input.mortgage >= 75000 && input.mortgage <= 1500000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 550;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 45
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 50
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
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

class Variant22 extends Variant{
    lender= "8"
    program="2"
    name= "MCAP: FUSION MTG WITH LOC"
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false

            if(input.purpose === "living_in"){
                if(input.propretyType === "condo") return input.LTV <= 75;
                else return input.LTV <= 80;
            }

            if(input.purpose === "living_and_rent" || input.purpose === "investment") return input.LTV <= 75;
            
            return input.LTV <= 80;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV >= 80
        },
        function check_mortgageAmount(input) {
            let minAmount = 100000;
            return input.mortgage >= minAmount && input.mortgage <= 800000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650 && input.FICO <= 680;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 650) return false
            return input.GDS <= 39
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 650) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return true;
        },
        function checkTerm(input){
            return true;
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },

    ]
}

class Variant23 extends Variant{
    lender= "8"
    program="2"
    name= "MCAP: Peace of Mind Cashback 5 YEAR FIXED"
    checkers= [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV >= 95
        },
        function check_mortgageAmount(input) {
            let minAmount = 50000;
            return input.mortgage >= minAmount && input.mortgage <= 924999;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 680;
        },
        function checkGDS(input) {
            return true;
        },
        function checkTDS(input) {
            return true;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input){
            return true;
        },
        function checkTerm(input){
            return input.term <= 5;
        },
        function checkIntrestRate(input){
            if(input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null ) return false
            else return true
        },

    ]
}

export const SP_Variants:Ivariant[] = [
    new Variant1(),
    new Variant2(),
    new Variant3(),
    new Variant4(),
    new Variant5(),
    new Variant6(),
    new Variant7(),
    new Variant8(),
    new Variant9(),  
    new Variant10(), 
    new Variant11(), 
    new Variant12(), 
    new Variant13(),
    new Variant14(),
    new Variant15(),
    new Variant16(),
    new Variant17(),
    new Variant18(),
    new Variant19(),
    new Variant20(),
    new Variant21(),
    new Variant22(),
    new Variant23(),
];