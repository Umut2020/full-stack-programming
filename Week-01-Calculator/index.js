/**
 * Dort islem yapabilen bir program hazirlanmasi gerekiyor
 * Islem fonksiyonlarini  functions.js hazirlayip ihrac ederek
 * index.js dosyamizdan fonksiyolari ithal edip atadigimmiz degisken 
 * uzerinden ulasip ekrana islem sonucu yazdiracagiz
 */

// ihtiyac duyulan fonksiyon dosyalarini require ile index dosyamiza ithal ettik
const basicCalculator = require('./functions')

// degiskenden uzerinden fonksiyonlara ulasarak sonucu ekrana yazdirdik
console.log(basicCalculator.adding(12, 32))
console.log(basicCalculator.subtracting(12, 32))
console.log(basicCalculator.multiplication(12, 32))
console.log(basicCalculator.division(12, 32))

/**Destructuring ile 2. yontem
 *  const {adding, subtracting, multiplication, division} = require('./functions')
 *  console.log(division(12, 6))
 *  console.log(adding(12, 6))
 *  console.log(subtracting(12, 6))
 *  console.log(multiplication(12, 6)) 
 */
