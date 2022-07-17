import { getFICO, isMajorUrban, Ivariant, Variant } from "../application";
import { CheckerInputType, ApplicationType, FilterType, RATE } from "./types";

class Variant1 extends Variant {
    lender = "0"
    program = "0"
    name = "Traditional"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            if (!input.applicant_type) return false
            return (input.applicant_type === "self_employed")
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
            /*if (input.address && (input.address.includes("Toronto") || input.address.includes("Vancouver") || input.address.includes("Calgary"))) {
                return input.mortgage <= 750000
            }*/
            return input.mortgage <= 600000
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650
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
                return input.TDS <= 42
            return input.TDS <= 42
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
        function checkAmortization(input) {
            return input.amortization <= 30;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant2 extends Variant {
    lender = "0"
    program = "0"
    name = "Merix BFS - Alternative Non-Trad"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            if (!input.applicant_type) return false
            return (input.applicant_type === "self_employed")
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
            /*if (input.address && (input.address.includes("Toronto") || input.address.includes("Vancouver") || input.address.includes("Calgary"))) {
                return input.mortgage <= 750000
            }*/
            return input.mortgage <= 600000
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650
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
                return input.TDS <= 42
            return input.TDS <= 42
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
        function checkAmortization(input) {
            return input.amortization <= 30;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant3 extends Variant {
    lender = "1"
    program = "0"
    name = "More than 2 years BFS, Bank Statements"

    get_max_amorthization = function (application, filter) {
        const fico = getFICO(application);
        switch (application.purpose) {
            case "living_in":
                if (fico >= 680) return 30;
                else return 25;
            case "living_and_rent":
                if (fico >= 680) return 30;
                else return 25;
            case "investment":
                return 25;
            case "cottage":
                return 30;
            default:
                return 30;

        }
    }

    checkers = [
        function check_target_customer(input) {
            if (!input.applicant_type) return false
            return (input.applicant_type === "self_employed")
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            //Owner Occupied < 680 up to 75%, ≥ 680 up to 80% Second homes up to 65% Rentals up to 75%
            if (!input.LTV) return false
            switch (input.usage) {

                case "living_in":
                    if (input.FICO < 680) return input.LTV <= 75
                    else return input.LTV <= 80
                case "living_and_rent":
                    if (input.FICO < 680) return input.LTV <= 75
                    else return input.LTV <= 80

                case "investment":
                    return input.LTV <= 75
                case "cottage":
                    return input.LTV <= 65

                default:
                    return input.LTV <= 65

            }
        },
        function check_mortgageAmount(input) {
            //Owner occupied $50,000 - $1,000,000, second homes/vacation homes $50,000 - $300,000, Rentals $75,000 - $500,000
            switch (input.usage) {
                case "living_in":
                    return input.mortgage <= 1000000 && input.mortgage >= 50000
                case "living_and_rent":
                    return input.mortgage <= 1000000 && input.mortgage >= 50000

                case "investment":
                    return input.mortgage <= 500000 && input.mortgage >= 75000


                case "cottage":
                    return input.mortgage <= 300000 && input.mortgage >= 50000
                default:
                    return input.mortgage <= 300000 && input.mortgage >= 50000
            }

        },
        function checkFICO(input) {
            //"580 owner occupied, 680 min. second homes/vacation homes and rentals"
            switch (input.usage) {
                case "living_in":
                    return input.FICO >= 580
                case "living_and_rent":
                    return input.FICO >= 580
                case "investment":
                    return input.FICO >= 680

                case "cottage":
                    return input.FICO >= 680
                default:
                    return input.FICO >= 680
            }
        },
        function checkGDS(input) {
            //Owner Occupied, second homes/vacation homes - < 680 - 45%/50%, ≥ 680 - 45%/50% Rentals - 39%/44%
            switch (input.usage) {
                case "living_in":
                    return input.GDS <= 45

                case "living_and_rent":
                    return input.GDS <= 45

                case "investment":
                    return input.GDS <= 39

                case "cottage":
                    return input.GDS <= 45

                default:
                    return input.GDS <= 39
            }

        },
        function checkTDS(input) {
            //Owner Occupied, second homes/vacation homes - < 680 - 45%/50%, ≥ 680 - 45%/50% Rentals - 39%/44%
            switch (input.usage) {
                case "living_in":
                    return input.TDS <= 50

                case "living_and_rent":
                    return input.TDS <= 50

                case "investment":
                    return input.TDS <= 44

                case "cottage":
                    return input.TDS <= 50

                default:
                    return input.TDS <= 44
            }
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
        function checkAmortization(input) {
            const fico = input.FICO;
            let maxAmorthization = 30;
            switch (input.usage) {
                case "living_in":
                    if (fico >= 680) maxAmorthization = 30;
                    else maxAmorthization = 25;
                case "living_and_rent":
                    if (fico >= 680) maxAmorthization = 30;
                    else maxAmorthization = 25;
                case "investment":
                    maxAmorthization = 25;
                case "cottage":
                    maxAmorthization = 30;
                default:
                    maxAmorthization = 30;
            }
            return input.amortization <= maxAmorthization;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },

    ]
}
class Variant4 extends Variant {
    lender = "1"
    program = "0"
    name = "More than 2 years Income Conventional"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            if (!input.applicant_type) return false
            return (input.applicant_type === "self_employed")
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
            if (!input.mortgage) return false
            return input.mortgage <= 1250000 && input.mortgage >= 50000
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 600
        },
        function checkGDS(input) {
            if (!input.FICO || !input.GDS) return false;
            if (input.FICO >= 600 && input.FICO <= 680) {
                return input.GDS <= 35;
            } else {
                if (input.FICO > 680) {
                    return input.GDS <= 39;
                }
                else {
                    return false;
                }
            }
        },
        function checkTDS(input) {
            if (!input.FICO || !input.TDS) return false;
            if (input.FICO >= 600 && input.FICO <= 680) {
                return input.TDS <= 42;
            } else {
                if (input.FICO > 680) {
                    return input.TDS <= 44;
                }
                else {
                    return false;
                }
            }
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
        function checkAmortization(input) {
            return input.amortization <= 30;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant5 extends Variant {
    lender = "1"
    program = "0"
    name = "BFS ALT A: Genworth"


    checkers = [
        function check_target_customer(input) {
            if (!input.applicant_type) return false
            return (input.applicant_type === "self_employed")
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 90;
        },
        function check_mortgageAmount(input) {
            if (!input.mortgage) return false;

            if (input.address && (input.address.includes("GTA") || input.address.includes("GVA") || input.address.includes("Calgary"))) {
                return input.mortgage <= 750000
            }
            return input.mortgage <= 600000
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            if (input.LTV > 80) return input.FICO >= 650;
            return input.FICO >= 680
        },
        function checkGDS(input) {
            if (!input.GDS) return false;
            return input.GDS <= 39;
        },
        function checkTDS(input) {
            if (!input.TDS) return false;
            return input.TDS <= 44;
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
        function checkAmortization(input) {
            return input.amortization <= 25;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant6 extends Variant {
    lender = "1"
    program = "0"
    name = "BFS ALT A: More than 2 years Income"


    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 65;
        },
        function check_mortgageAmount(input) {
            return input.mortgage >= 50000 && input.mortgage <= 750000;
        },
        function checkFICO(input) {
            return input.FICO >= 500;
        },
        function checkGDS(input) {
            return input.GDS <= 55;
        },
        function checkTDS(input) {
            return input.TDS <= 55;
        },
        function checkBunckrepcy(input) {
            return true;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 25;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant7 extends Variant {
    lender = "2"
    program = "0"
    name = "BFS (CANADA GUARANTY INSURANCE CRITERIA)"

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 90;
        },
        function check_mortgageAmount(input) {
            /*if (input.address && (input.address.includes("Vancouver,") || input.address.includes("Calgary") || input.address.includes("Toronto"))) {
                return input.mortgage <= 750000;
            }*/
            
            return input.mortgage <= 600000;
            
        },
        function checkFICO(input) {
            if (input.LTV <= 80) {
                return input.FICO >= 680;
            }
            else {
                return input.FICO >= 650;
            }
        },
        function checkGDS(input) {
            return input.GDS <= 39;
        },
        function checkTDS(input) {
            return input.TDS <= 44;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 25;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant8 extends Variant {
    lender = "5"
    program = "0"
    name = "non traditional income"


    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 90;
        },
        function check_mortgageAmount(input) {
            /*if (input.address && (input.address.includes("Vancouver,") || input.address.includes("Calgary") || input.address.includes("Toronto"))) {
                return input.mortgage <= 750000;
            }*/
            
            return input.mortgage <= 600000;
            
        },
        function checkFICO(input) {
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
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 25;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant9 extends Variant {
    lender = "5"
    program = "0"
    name = "non traditional income 2"

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            if (input.usage === "investment" || input.usage === "cottage") return false;
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 65;
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
            return input.GDS <= 39;
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 44;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 25;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant10 extends Variant {
    lender = "6"
    program = "0"
    name = ""

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            if (input.purpose === "refinance" || input.purpose === "purchase" || input.purpose === "pre_approval") return true;
            return false;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            switch (input.usage) {
                case "investment":
                    return input.LTV <= 75;
                default:
                    return input.LTV <= 80;
            }
        },
        function check_mortgageAmount(input) {
            if (!input.mortgage) return false;
            if (input.mortgage < 75000) {
                return false;
            }
            if (input.mortgage > 750000) {
                return false;
            }
            return true;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 550;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 45;
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 50;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 30;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant11 extends Variant {
    lender = "0"
    program = "0"
    name = "MIN 2 YEARS, with non traditional income verification"

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },

        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 90;
        },
        function check_mortgageAmount(input) {
            if (input.mortgage < 150000) {
                return false;
            }

            /*if (input.address && (input.address.includes("Metro Vancouver,") || input.address.includes("Metro Calgary") || input.address.includes("Metro Toronto"))) {
                return input.mortgage <= 750000;
            }*/
            
            return input.mortgage <= 600000;
            
        },
        function checkFICO(input) {
            if (input.LTV <= 70) {
                return input.FICO >= 680;
            }
            else {
                return input.FICO >= 650;
            }
        },
        function checkGDS(input) {
            return input.GDS <= 39;
        },
        function checkTDS(input) {
            return input.TDS <= 44;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 25;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant12 extends Variant {
    lender = "7"
    program = "0"
    name = "BFS 18"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            if (input.purpose === "refinance" || input.purpose === "purchase" || input.purpose === "pre_approval") return true;
            return false;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 80;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            return input.FICO >= 620;
        },
        function checkGDS(input) {
            if (!input.GDS) return false;
            return input.GDS <= 42;
        },
        function checkTDS(input) {
            if (!input.TDS) return false;
            return input.TDS <= 47;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 30;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant13 extends Variant {
    lender = "8"
    program = "0"
    name = "BFS Non-traditional income verification but stable credit, MAX PROPERTY VALUE UNDER $1MILLION"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    postProcessing(input:CheckerInputType, application: ApplicationType, filter: FilterType){
        input.FICO = application.applicants.map(applicant => applicant.FICO);
    }

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            if (input.purpose === "purchase") return false;
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 90;
        },
        function check_mortgageAmount(input) {
            if (input.mortgage < 50000) return false;
            /*if (input.address && (input.address.includes("Toronto") || input.address.includes("Vancouver") || input.address.includes("Calgary"))) {
                return input.mortgage <= 750000
            }*/
            return input.mortgage <= 600000
        },
        function checkFICO(input) {
            if (input.LTV > 80) {
                return Math.min(...input.FICO) >= 650;
            }
            else {
                return Math.max(...input.FICO) >= 680;
            }
        },
        function checkGDS(input) {
            if (!input.GDS) return false;
            return input.GDS <= 39;

        },
        function checkTDS(input) {
            if (!input.TDS) return false;
            return input.TDS <= 44;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 30;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant14 extends Variant {
    lender = "4"
    program = "0"
    name = "BFS up to 80% LTV with Limited Documentation/verification"

    get_max_amorthization = function (application, filter) {
        if (filter.rate && filter.rate !== RATE.fixed) {
            return 25;
        }
        return 30;
    }
    
    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            if (input.address && input.address.includes("Atlantic Canada")) {
                return input.mortgage >= 75000;
            }
            else {
                return input.mortgage >= 100000;
            }
        },
        function checkFICO(input) {
            return input.FICO >= 550;
        },
        function checkGDS(input) {
            if (input.FICO >= 550 && input.FICO < 600) {
                return input.GDS <= 50;
            }
            else {
                if (input.FICO >= 600) {
                    return input.GDS <= 50;
                }
            }
            return false;
        },
        function checkTDS(input) {
            if (input.FICO >= 550 && input.FICO < 600) {
                return input.TDS <= 55;
            }
            else {
                if (input.FICO >= 600) {
                    return input.TDS <= 55;
                }
            }
            return false;
        },
        function checkBunckrepcy(input) {
            return true;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            let maxAmorthization = 30;
            if (input.rate != null && input.rate !== "fixed") {
                maxAmorthization = 25;
            }
            return input.amortization <= maxAmorthization;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant15 extends Variant {
    lender = "9"
    program = "0"
    name = "BFS"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            return input.FICO >= 650;
        },
        function checkGDS(input) {
            if (!input.GDS) return false;
            return input.GDS <= 39;
        },
        function checkTDS(input) {
            if (!input.TDS) return false;
            return input.TDS <= 44;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 30;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant16 extends Variant {
    lender = "10"
    program = "0"
    name = "BFS - Less than 2 years"

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 95;
        },
        function check_mortgageAmount(input) {
            return true;
        },
        function checkFICO(input) {
            return input.FICO >= 650;
        },
        function checkGDS(input) {
            if (!input.GDS) return false;
            return input.GDS <= 39;
        },
        function checkTDS(input) {
            if (!input.TDS) return false;
            return input.TDS <= 44;
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 25;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}
class Variant17 extends Variant {
    lender = "11"
    program = "0"
    name = "Self-declared Income, non-traditional"

    get_max_amorthization = function (application, filter) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return input.applicant_type == "self_employed";
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {

            return true;
        },
        function check_LTV(input) {
            return input.LTV <= 90;
        },
        function check_mortgageAmount(input) {

            if (isMajorUrban(input.address)) {
                return input.mortgage <= 750000;
            }
            return input.mortgage <= 600000;;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650
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
                return input.TDS <= 42
            return input.TDS <= 42
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true;
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            return input.amortization <= 30;
        },
        function checkTerm(input) {
            return true
        },
        function checkIntrestRate(input) {
            if (input.fixedRateMonthlyPayment == null && input.variableRateMonthlyPayment == null) return false
            else return true
        },
    ]
}



export const BFS_Variants: Ivariant[] = [
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
    new Variant17()
];