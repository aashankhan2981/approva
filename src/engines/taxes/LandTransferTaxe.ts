

export function LandTransferTaxeCalculator(price:number, address: string, isFisrtTimeHomeBuyer: boolean): number{
    let PrivinceTaxe = 0;
    let provinceRefund = 0;
    if(address.includes("ON")){
        if(price>55000){
            PrivinceTaxe += 275;
            if(price>250000){
                PrivinceTaxe += 1950;
                if(price>400000){
                    PrivinceTaxe += 2250;
                    if(price>2000000){
                        PrivinceTaxe += 32000;
                        PrivinceTaxe += (price - 2000000) * 0.025;
                    }   
                    else{
                        PrivinceTaxe += (price - 400000) * 0.02;
                    }
                }   
                else{
                    PrivinceTaxe += (price - 250000) * 0.015;
                }
            }   
            else{
                PrivinceTaxe += (price - 55000) * 0.01;
            }
        }
        else{
            PrivinceTaxe += price * 0.005;
        }
        
        if(isFisrtTimeHomeBuyer){
            provinceRefund = PrivinceTaxe> 4000? 4000 : PrivinceTaxe;
        }
    }

    let MunicipalTaxe = 0;
    let MunicipalRefund = 0;

    if(address.includes("Toronto")){
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

    return PrivinceTaxe + MunicipalTaxe - provinceRefund - MunicipalRefund;
}