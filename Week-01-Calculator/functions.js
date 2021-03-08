// eski modul sistem

// dort islem icin dort ayri fonksiyonu asagida olusturduk
function adding (pNum1, pNum2) {
  return pNum1 + pNum2
}
function subtracting (pNum1, pNum2) {
  return pNum1 - pNum2
}
function multiplication (pNum1, pNum2) {
  return pNum1 * pNum2
}
function division (pNum1, pNum2) {
  return pNum1 / pNum2
}

// birden fazla fonksiyon oldugu icin obje kullanarak fonksiyonlari ihrac islemini yaptik
module.exports = {
  adding: adding,
  subtracting: subtracting,
  multiplication: multiplication,
  division: division
}
