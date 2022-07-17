import { isEmptyArray } from "../../helpers";
import { All_Variants } from "../constants";
import { ApplicationType, FilterType } from "../programs/types";



export function LandTransferTaxeCalculator(price:number, address: any, isFisrtTimeHomeBuyer: boolean): number{
    let ProvinceTaxe = 0;
    let provinceRefund = 0;
    
    const city = address.value.terms[0].value;
    const province = address.value.terms[1].value;

    if(province === "ON"){
        if(price>55000){
            ProvinceTaxe += 275;
            if(price>250000){
                ProvinceTaxe += 1950;
                if(price>400000){
                    ProvinceTaxe += 2250;
                    if(price>2000000){
                        ProvinceTaxe += 32000;
                        ProvinceTaxe += (price - 2000000) * 0.025;
                    }   
                    else{
                        ProvinceTaxe += (price - 400000) * 0.02;
                    }
                }   
                else{
                    ProvinceTaxe += (price - 250000) * 0.015;
                }
            }   
            else{
                ProvinceTaxe += (price - 55000) * 0.01;
            }
        }
        else{
            ProvinceTaxe += price * 0.005;
        }
        
        if(isFisrtTimeHomeBuyer){
            provinceRefund = ProvinceTaxe> 4000? 4000 : ProvinceTaxe;
        }
    }

    let MunicipalTaxe = 0;
    let MunicipalRefund = 0;

    if(city === "Toronto"){
        if(price>55000){
            MunicipalTaxe += 275;
            if(price>250000){
                MunicipalTaxe += 1950;
                if(price>400000){
                    MunicipalTaxe += 2250;
                    if(price>2000000){
                        MunicipalTaxe += 32000;
                        MunicipalTaxe += (price - 2000000) * 0.025;
                    }   
                    else{
                        MunicipalTaxe += (price - 400000) * 0.02;
                    }
                }   
                else{
                    MunicipalTaxe += (price - 250000) * 0.015;
                }
            }   
            else{
                MunicipalTaxe += (price - 55000) * 0.01;
            }
        }
        else{
            MunicipalTaxe += price * 0.005;
        }
        
        if(isFisrtTimeHomeBuyer){
            MunicipalRefund = MunicipalTaxe> 4750? 4750 : MunicipalTaxe;
        }
    }

    if(ProvinceTaxe == 0) return 0
    return ProvinceTaxe + MunicipalTaxe - provinceRefund - MunicipalRefund;
}