import { Table } from 'react-bootstrap'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import { useState } from 'react'

export default function TableList (props) {
  const [allFish] = useState(props.list)

  const allFishList = allFish.map((fish, index) => {
    return (
      <TableBody key={index} fish={fish} />
    )
  })

  return (
    <Table
      striped
      bordered
      hover
      variant='dark'>
      <TableHeader/>
      {allFishList}
    </Table>
  )}
