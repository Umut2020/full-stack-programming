import { Table, Image, Col } from 'react-bootstrap'

export default function Person (props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            Person
          </th>
          <th>
            Person Id
          </th>
          <th>
            First Name
          </th>
          <th>
            Last Name
          </th>
          <th>
            E mail
          </th>
          <th>
            Gender
          </th>
          <th>
            Address
          </th>
          <th>
            Salary
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Col xs={6} md={4}>
            <Image src={props.person.avatar} roundedCircle />
            </Col>
          </td>
          <td>
            {props.person.id}
          </td>
          <td>
            {props.person.first_name}
          </td>
          <td>
            {props.person.last_name}
          </td>
          <td>
            {props.person.email}
          </td>
          <td>
            {props.person.gender}
          </td>
          <td>
            {props.person.address}
          </td>
          <td>
            {props.person.salary}
          </td>
        </tr>
      </tbody>
    </Table>

  )}
