/**
 * Herhangi bir Excel dosyasinin okunarak console a yazdirilmasi isteniyor
 * Bunun icin npm de bulunan xlsx isimli kutuphaneyi kullanarak konsola 
 * Excel icerigini yazdiracagim
 */

// Requiring the module
import reader from 'xlsx'

// Reading test file 
const file = reader.readFile('./SampleFile.xlsx')

let data = []

const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(
    file.Sheets[file.SheetNames[i]])
  temp.forEach((res) => {
    data.push(res)
  })
}

// Printing data 
console.log(data)
