import { Ivariant, Variant } from "../application";
import { ApplicationType, FilterType } from "./types";

class Variant1 extends Variant{
    /** First National */
    lender= "5"
    program= "4"
    name= ""

    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_Improvments(input){
            if (!input.improvments) return true
            if(input.improvments>40000)
            return false
            if ((input.improvments / input.price) * 100 > 20)
            return false
        },
        function check_LTV(input) {
            if (input.improvments){
                input.LTV += (input.improvments / input.price) * 100
            }
            if (!input.unitsNumber || input.unitsNumber <= 2){
                return input.LTV<95
            }
            else {
                return input.LTV<90
            }
        },
        function check_mortgageAmount(input) {

            return input.mortgage <= 1000000
        },

        function checkFICO(input) {
            return input.FICO >= 680
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
class Variant2 extends Variant{
    /** Merix */
    lender= "13"
    program= "4"
    name= ""

    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_Improvments(input){
            if (!input.improvments) return true
            if(input.improvments>40000)
            return false
            if ((input.improvments / input.price) * 100 > 20)
            return false
        },
        function check_LTV(input) {
            if (input.improvments){
                input.LTV += (input.improvments / input.price) * 100
            }
            if (!input.unitsNumber || input.unitsNumber <= 2){
                return input.LTV<95
            }
            else {
                return input.LTV<90
            }
        },
        function check_mortgageAmount(input) {

            return input.mortgage <= 1000000
        },

        function checkFICO(input) {
            return input.FICO >= 680
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
    /** Lendwise */
    lender="0"
    program ="4"
    name= ""

    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_Improvments(input){
            if (!input.improvments) return true
            if(input.improvments>40000)
            return false
            if ((input.improvments / input.price) * 100 > 20)
            return false
        },
        function check_LTV(input) {
            if (input.improvments){
                input.LTV += (input.improvments / input.price) * 100
            }
            if (!input.unitsNumber || input.unitsNumber <= 2){
                return input.LTV<95
            }
            else {
                return input.LTV<90
            }
        },
        function check_mortgageAmount(input) {

            return input.mortgage <= 1000000
        },

        function checkFICO(input) {
            return input.FICO >= 680
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
class Variant4 extends Variant{
    /** First National */
    lender= "11"
    program= "4"
    name= "Strive"

    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_Improvments(input){
            return true;
        },
        function check_LTV(input) {
            if (!input.unitsNumber || input.unitsNumber <= 2){
                return input.LTV<95
            }
            else if (input.unitsNumber >= 2 && input.unitsNumber <= 4) {
                return input.LTV<90
            }
        },
        function check_mortgageAmount(input) {

            return true;
        },

        function checkFICO(input) {
            return true
        },

        function checkGDS(input) {
            if (input.FICO < 680)
                return input.GDS <= 35
            return input.GDS <= 39
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
class Variant5 extends Variant{
    /** ICCI Purchase plus Improvments */
    lender= "7"
    program="4"
    name=""

    variant_checker=function(application:ApplicationType ,filter:FilterType){ 
        if (!filter) return true
        return filter.ensured
    }
    
    checkers= [
        function check_target_customer(input) {
            return true
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_Improvments(input){
            if (!input.improvments) return true
            if(input.improvments>40000)
            return false
            if ((input.improvments / input.price) * 100 > 20)
            return false
        },
        function check_LTV(input) {
            if (input.improvments){
                input.LTV += (input.improvments / input.price) * 100
            }
            if (!input.unitsNumber || input.unitsNumber <= 2){
                return input.LTV<95
            }
            else {
                return input.LTV<90
            }
        },
        function check_mortgageAmount(input) {
            return input.mortgage >= 50000
            return input.mortgage <= 1000000
        },

        function checkFICO(input) {
            return input.FICO >= 600
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
export const PPI_Variants:Ivariant[] = [
    new Variant1(),
    new Variant2(),
    new Variant3(),
    new Variant4(),
    new Variant5()
];