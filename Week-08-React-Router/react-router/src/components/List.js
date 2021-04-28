import { Table } from 'react-bootstrap'
import PersonRow from './PersonRow'
import PersonHeader from './PersonHeader'

export default function List (props) {
  return (
    <Table striped bordered hover>
      <thead>
        <PersonHeader/>
      </thead>
      <tbody>
        {props.list.map((p , index) => <PersonRow person={p} key={index} />)}
      </tbody>
    </Table>
  )
}
