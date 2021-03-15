/**
 * Herhangi bir text dosyasinin console a yazdirilmasi isteniyor
 * Bunun icin nodejs de bulunan File System kutuphanesini kullanarak ekrana 
 * dosya icerigini yazdiracagim
 */

// dosya okumak icin gerekli kütüphane
import fs from 'fs'

// readFile methodu kullanilarak SampleFile dosyasindaki textin konsolo yazdirilmasi
fs.readFile('./SampleFile.txt', 'utf8' , (err, data) => {

  // bu bolum opsiyonel hata aliminda hata hatanin ekrana yazdirilmasi ile ilgili
  // if (err) {    
  //   console.error(err)
  //   return
  // }
  console.log(data)
})
