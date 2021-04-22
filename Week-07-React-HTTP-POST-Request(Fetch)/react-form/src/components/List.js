import { Table } from 'react-bootstrap'

const TableList = (props) => {

  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            First Name
          </th>
          <th>
            Last Name
          </th>
          <th>
            Gender
          </th>
          <th>
            Birthday
          </th>
          <th>
            E-mail
          </th>
          <th>
            Password
          </th>
          <th>
            About Me
          </th>
        </tr>
      </thead>
      <tbody>
        {props.person.map((person, index) => {
           return (
             <tr key={index}>
               <td>
                 {person.firstName}
               </td>
               <td>
                 {person.lastName}
               </td>
               <td>
                 {person.gender}
               </td>
               <td>
                 {person.birthday}
               </td>
               <td>
                 {person.email}
               </td>
               <td>
                 {person.password}
               </td>
               <td>
                 {person.about}
               </td>
             </tr>
           )
         })}
      </tbody>
    </Table>

  )
}

export default TableList
