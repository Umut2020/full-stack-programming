import { Card } from 'react-bootstrap'

export default function Friend (props) {
  return (
    <Card>
      <Card.Img variant='top' src={props.friend.avatar} />
      <Card.Body>
        <Card.Title>
          {props.friend.firstName}
          {props.friend.lastName}
        </Card.Title>
        <Card.Text>
          Gender:
          {props.friend.gender}
        </Card.Text>
        <Card.Text>
          Language:
          {props.friend.language}
        </Card.Text>
        <Card.Text>
          Profession:
          {props.friend.profession}
        </Card.Text>
        <Card.Text>
          Salary:
          {props.friend.salary}
        </Card.Text>
        <Card.Text>
          City:
          {props.friend.city}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Birthday:{props.friend.birthday}</small>
        <br/>
        <small className='text-muted'>Phone:{props.friend.phone}</small>
        <br/>
        <small className='text-muted'>Address:{props.friend.address}</small>
      </Card.Footer>
    </Card>
  )}
