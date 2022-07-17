
const readXlsxFile = require('read-excel-file/node')

const terms = [
    { term: 1, contracts: 4 },// 4 is culumn index
    { term: 2, contracts: 8 },
    { term: 3, contracts: 12 },
    { term: 4, contracts: 16 },
    { term: 5, contracts: 23 },
    { term: 5, contracts: 30 },
    { term: 6, contracts: 34 },
    { term: 7, contracts: 38 },
    { term: 10, contracts: 42 },
    { term: "heloc", contracts: 43 },
]
// File path.

readXlsxFile('./feb2022.xlsx').then((rows) => {
    const lenders_rows = rows.filter(row => {
        return typeof (row[0]) === "string" && !row[0].includes(")")  && row[1] && row[1].split("-").length >= 2
    })
    const contracts = rows[1].slice(2, -1)
    const raw_result = lenders_rows.map((row, row_index) => {
        return {
            "name": row[0],
            "prime": 2.45,
            rates: row.slice(2, -1).map((cell, cell_index) => {

                for (let i = 0; i < terms.length; i++) {
                    if (cell_index < terms[i].contracts) {
                        return Object.assign({
                            term: terms[i].term,
                        }, getIntrestValue(cell), getContractDetailsFromString(contracts[cell_index]))
                    }
                    else continue
                }

            })
        }

    })
    const data=raw_result.map(result=> {
        result.rates=result.rates.filter(rate=>(rate.fixed || rate.prime_offset))
        return result
    })

    updateRatesFile(JSON.stringify(data))
})

function getIntrestValue(str) {

    if (typeof (str) === "number")
        return {
            fixed: parseFloat(str),
            prime_offset: undefined
        }
    if (str === "-")
        return null

    if (str.includes("P")) {
        if (str.includes("+"))
            return {
                fixed: undefined,
                prime_offset: parseFloat(str.split("+")[1]),
            }
        if (str.includes("-"))
            return {
                fixed: undefined,
                prime_offset: parseFloat(str.split("-")[1]) * -1
            }
        else return null
    }
    return {
        fixed: parseFloat(str),
        prime_offset: undefined
    }


}

function getContractDetailsFromString(str) {
    
        if( str.includes("Insured"))
            return {
                "LTV_U": 95,
                "LTV_L": 80,
                "refinance": false,
                "ensured": true
            }
        if( str.includes("Uninsurable"))
            return {
                "LTV_U": 80,
                "LTV_L": 0,
                "refinance": false,
                "ensured": false
            }
        if( str.includes("Refinance"))
            return {
                "LTV_U": 95,
                "LTV_L": 0,
                "refinance": true,
                "ensured": false
            }
        if( str.includes("75%-80%"))
            return {
                "LTV_U": 80,
                "LTV_L": 75,
                "refinance": false,
                "ensured": true
            }
        if( str.includes("70%-75%"))
            return {
                "LTV_U": 75,
                "LTV_L": 70,
                "refinance": false,
                "ensured": true
            }
        if( str.includes("65%-70%"))
            return {
                "LTV_U": 70,
                "LTV_L": 65,
                "refinance": false,
                "ensured": true
            }
        if( str.includes("≤65%"))
            return {
                "LTV_U": 65,
                "LTV_L": 0,
                "refinance": false,
                "ensured": true
            }
        
        return undefined
    
}

function updateRatesFile(data){
    var fs = require('fs');
    const today=getTodayStirng()
    fs.rename('./rates.json', `./rates${today}.json`, function(err) {
        
    });
    fs.writeFile('rates.json', data, 'utf8', function (err) {
        
    });
}
function getTodayStirng(){
    const date=new Date()
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}