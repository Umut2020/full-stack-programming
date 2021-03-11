function miladiconverter (hicridate) {
  return (hicridate - (Math.floor(hicridate / 33))) + 622
}

module.exports = miladiconverter
