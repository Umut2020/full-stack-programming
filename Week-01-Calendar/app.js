/**
 * Hicri ve Miladi tavkim yilini birbirine donusteren bir program olusturulacak
 * Onceden verilen dosya yapisina uygun olarak iki ayri fonksiyon dosyasi olusturulacak
 * 
 * Asagidaki formule gore ile takvim yilinin donusturulmasini saglayacagim
 * HİCRİ YILIN MİLADİ YILA ÇEVRİLMESİ
 * Hicri yılı 33'e bölünüz1420 : 33 = 43.03 (=43)
 * Çıkan sayıyı hicri yıldan çıkarınız1420 - 43 = 1377 (1.sayı)
 * 1.çıkan sayıyı 622 ile toplayınız.1377 + 622 = 1999
 * MİLADİ YILIN HİCRİ YILA ÇEVRİLMESİ
 * Miladi yıldan 621 rakamını çıkarınız1999 - 621 = 1378 (2.sayı)
 * (2.sayı) çıkan sayıyı 33'e bölünüz1378 : 33 = 41.75 (=42)
 * Bölümü 2.çıkan sayı ile toplayınız1378 + 42 = 1420
 */

const hicriconverter = require('./hicri-converter')
const miladiconverter = require('./miladi-converter')

console.log(hicriconverter(2021))
console.log(miladiconverter(1442))
