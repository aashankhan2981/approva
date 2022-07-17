const readXlsxFile = require('read-excel-file/node')

data={}

readXlsxFile('./mar2022.xlsx').then((rows) => {
    const usfulRows = rows.filter(col => {
        return typeof (col[0]) === "string" && col[1].includes("%")
    })
    usfulRows.map(col=>{
        data[col[0]]= parseFloat(col[1].trim().replace('%', ''))
    })
    //save file
    updateTaxesFile(JSON.stringify(data))
})



function updateTaxesFile(data){
    var fs = require('fs');
    const today=getTodayStirng()
    fs.rename('./taxes.json', `./taxes${today}.json`, function(err) {
        
    });
    fs.writeFile('taxes.json', data, 'utf8', function (err) {
        
    });
}
function getTodayStirng(){
    const date=new Date()
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}