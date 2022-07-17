import {  isMajorUrban, getLTV, Variant, Ivariant } from "../application";
import { ApplicationType, FilterType } from "./types";

class Variant1 extends Variant {
    lender = "1"
    program = "3"
    name = "Rental: Insured"

    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.usage !== "living_in" && input.usage !== "living_and_rent" && input.usage !== "investment") return false;
            if (input.unitsNumber && input.unitsNumber > 4) return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.targetTenant && input.targetTenant !== "student_rentals" && input.targetTenant !== "time_share_properties" && input.targetTenant !== "condo_hotel") return false;
            if (input.rentalDuration && input.rentalDuration < 12) return false;
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 80;
        },
        function check_mortgageAmount(input) {
            let minAmount = 75000;
            if (input.rate === "fixed") minAmount = 50000;
            return input.mortgage >= minAmount && input.mortgage <= 500000;
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

class Variant2 extends Variant {
    lender = "1"
    program = "3"
    name = "Conventional"
    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.usage !== "living_in" && input.usage !== "living_and_rent" && input.usage !== "investment") return false;
            if (input.unitsNumber && input.unitsNumber > 4) return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.targetTenant && input.targetTenant !== "student_rentals" && input.targetTenant !== "time_share_properties" && input.targetTenant !== "condo_hotel") return false;
            if (input.rentalDuration && input.rentalDuration < 12) return false;
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            if (input.purpose === "purchase") return input.LTV <= 80;
            if (input.purpose === "refinance") return input.LTV <= 75;
            return false;
        },
        function check_mortgageAmount(input) {
            let minAmount = 50000;
            if (input.rate !== "fixed") minAmount = 75000;
            if (input.unitsNumber) {
                if (input.unitsNumber <= 2) minAmount = 50000;
                else if (input.unitsNumber <= 4) minAmount = 75000;
                else return false
            }
            return input.mortgage >= minAmount && input.mortgage <= 500000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 620;
        },
        function checkGDS(input) {
            if (!input.FICO) return false
            if (!input.GDS) return false
            if (input.FICO < 620) return false
            if (input.FICO > 680)
                return input.GDS <= 39
            return input.GDS <= 35
        },
        function checkTDS(input) {
            if (!input.FICO) return false
            if (!input.TDS) return false
            if (input.FICO < 620) return false
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

class Variant3 extends Variant {
    lender = "1"
    program = "3"
    name = "ALT. Conforming"

    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.usage !== "living_in" && input.usage !== "living_and_rent" && input.usage !== "investment") return false;
            if (input.unitsNumber && input.unitsNumber > 4) return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.targetTenant && input.targetTenant !== "student_rentals" && input.targetTenant !== "time_share_properties" && input.targetTenant !== "condo_hotel") return false;
            if (input.rentalDuration && input.rentalDuration < 12) return false;
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 75;
        },
        function check_mortgageAmount(input) {
            return input.mortgage >= 75000 && input.mortgage <= 500000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 600;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.TDS <= 39
        },
        function checkTDS(input) {
            if (!input.TDS) return false
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

class Variant4 extends Variant {
    lender = "1"
    program = "3"
    name = "ALT. Non-Conforming"

    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.usage !== "living_in" && input.usage !== "living_and_rent" && input.usage !== "investment") return false;
            if (input.unitsNumber && input.unitsNumber > 4) return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.targetTenant && input.targetTenant !== "student_rentals" && input.targetTenant !== "time_share_properties" && input.targetTenant !== "condo_hotel") return false;
            if (input.rentalDuration && input.rentalDuration < 12) return false;
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 65;
        },
        function check_mortgageAmount(input) {
            return input.mortgage >= 75000 && input.mortgage <= 500000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 540;
        },
        function checkGDS(input) {
            return true;
        },
        function checkTDS(input) {
            if (!input.TDS) return false
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

class Variant5 extends Variant {
    lender = "2"
    program = "3"
    name = "Rental"

    get_max_amorthization = function (application:ApplicationType, filter:FilterType) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return isMajorUrban(input.address);
        },
        function check_purpose(input) {
            if (input.purpose !== "purchase" && input.purpose !== "refinance") return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.applicantTotalProperties && input.applicantTotalProperties > 4) return false;
            if (input.applicantsNumber > 1) return false;
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
            return true;
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 40
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

class Variant6 extends Variant {
    lender = "6"
    program = "3"
    name = "First National - Rental"



    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.purpose !== "purchase" && input.purpose !== "refinance" && input.purpose !== "transfer") return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.applicantTotalProperties && input.applicantTotalProperties > 4) return false;
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

class Variant7 extends Variant {
    lender = "6"
    program = "3"
    name = "RPM 85%"
    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.purpose !== "purchase" && input.purpose !== "refinance") return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.applicantTotalProperties && input.applicantTotalProperties > 4) return false;
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 75;
        },
        function check_mortgageAmount(input) {
            let maxAmount = 1500000;
            if (input.propretyType === "condo" && input.condoFloor && input.condoFloor >= 6) maxAmount = 750000;
            return input.mortgage >= 100000 && input.mortgage <= maxAmount;
        },
        function checkFICO(input) {
            if (input.propretyType === "condo" && input.condoFloor && input.condoFloor >= 6) {
                if (!input.FICO) return false
                return input.FICO >= 650;
            }
            return true;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return input.GDS <= 45
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 45
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return input.population >= 50000;
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
    lender = "6"
    program = "3"
    name = "RPM 100%"

    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.purpose !== "purchase" && input.purpose !== "refinance") return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.applicantTotalProperties && input.applicantTotalProperties > 11) return false;
            return true;
        },
        function check_LTV(input) {
            if (!input.LTV) return false
            return input.LTV <= 75;
        },
        function check_mortgageAmount(input) {
            let maxAmount = 1500000;
            if (input.propretyType === "condo" && input.condoFloor && input.condoFloor >= 6) maxAmount = 750000;
            return input.mortgage >= 100000 && input.mortgage <= maxAmount;
        },
        function checkFICO(input) {
            if (input.propretyType === "condo" && input.condoFloor && input.condoFloor >= 6) return true;
            if (!input.FICO) return false
            return input.FICO >= 650;
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
            return input.population >= 50000;
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
    lender = "14"
    program = "3"
    name = "Rental"

    get_max_amorthization = function (application: ApplicationType, filter: FilterType) {
        const ltv = getLTV(application);
        if (ltv <= 80) return 30;
        else return 25;
    }
    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.usage !== "living_and_rent" && input.usage !== "investment") return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.applicantTotalProperties && input.applicantTotalProperties > 5) return false;
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
            return input.bunkrupcy >= 7;
        },
        function checkPopulation(input) {
            return true
        },
        function checkSquarfeet(input) {
            return true;
        },
        function checkAmortization(input) {
            let maxAmortization = 30;
            if (input.LTV >= 80) maxAmortization = 25;
            return input.amortization <= maxAmortization;
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
    lender = "12"
    program = "3"
    name = "Rental"

    get_max_amorthization = function (application: ApplicationType, filter: FilterType) {
        return 30;
    }

    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.usage !== "living_and_rent" && input.usage !== "investment") return false;
            if (input.unitsNumber && input.unitsNumber > 4) return false;
            return true;
        },
        function check_restrictions(input) {
            const downPaiment = input.price - input.mortgage;
            let minDownPayment = 50000;
            if (input.price < 500000) minDownPayment = input.price * 0.1
            return downPaiment >= minDownPayment;
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
            return input.FICO >= 621;
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

class Variant11 extends Variant {
    lender = "3"
    program = "3"
    name = "HomeTrust Rental"



    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            if (input.purpose !== "investment") return false;
            return true;
        },
        function check_restrictions(input) {
            if (input.applicantTotalProperties && input.applicantTotalProperties > 4) return false;
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
            if (input.ensured) return input.FICO >= 650
            if (!input.ensured) return input.FICO >= 680
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

class Variant12 extends Variant {
    lender = "3"
    program = "3"
    name = "ICICI: Investment Property Program"



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
    lender = "0"
    program = "3"
    name = "Lendwise"



    checkers = [
        function check_target_customer(input) {
            return true;
        },
        function check_purpose(input) {
            return true;
        },
        function check_restrictions(input) {
            if (input.applicantTotalProperties && input.applicantTotalProperties > 4) return false;
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
            return input.FICO >= 680;
        },
        function checkGDS(input) {
            if (!input.GDS) return false
            return true
        },
        function checkTDS(input) {
            if (!input.TDS) return false
            return input.TDS <= 44
        },
        function checkBunckrepcy(input) {
            return input.bunkrupcy <= 0;
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

class Variant14 extends Variant {
    lender = "9"
    program = "3"
    name = "RFA - Small Rental"



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
            if (input.ensured) return input.mortgage >= 50000 && input.mortgage <= 799999.9;
            if (!input.ensured) return input.mortgage >= 50000 && input.mortgage <= 500000;
        },
        function checkFICO(input) {
            if (!input.FICO) return false
            return input.FICO >= 650;
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
            return input.bunkrupcy <= 0;
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


export const RP_Variants:Ivariant[] = [
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
];