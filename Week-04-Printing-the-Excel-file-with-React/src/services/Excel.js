import * as XLSX from 'xlsx'
import { useState } from 'react'
import Table from '../components/Table'

export default function Result () {
  const [items, setItems] = useState([])

  const readExcel = (file) => {

    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (e) => {
        const bufferArray = e.target.result

        const wb = XLSX.read(bufferArray, { type: 'buffer' })

        const wsname = wb.SheetNames[0]

        const ws = wb.Sheets[wsname]

        const data = XLSX.utils.sheet_to_json(ws)

        resolve(data)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })

    promise.then((d) => {
      setItems(d)
    })
  }

  return (

    <div>
      <input type='file' onChange={function(e){
                                   const file = e.target.files[0]
                                   readExcel(file)
                                   }} />
      <Table items={items} />
    </div>


  )
}
