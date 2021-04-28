export default function pRow (props) {
  const p = props.person
  return (
    <tr key={props.index}>
      <td>
        {p.firstName}
      </td>
      <td>
        {p.lastName}
      </td>
      <td>
        {p.gender}
      </td>
      <td>
        {p.birthday}
      </td>
      <td>
        {p.email}
      </td>
      <td>
        {p.password}
      </td>
      <td>
        {p.about}
      </td>
    </tr>
  )
}
