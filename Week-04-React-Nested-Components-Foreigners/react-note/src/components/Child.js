import { Card } from 'react-bootstrap'

export default function Child (props) {
  return (
    <Card>
      <Card.Img variant='top' src={props.child.avatar} />
      <Card.Body>
        <Card.Title>
          {props.child.firstName}
          <br/>
          {props.child.lastName}
        </Card.Title>
        <Card.Text>
        </Card.Text>
        <Card.Text>
          Gender:
          {props.child.gender}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted' data-testid='myfooter'>Birthday: {props.child.birthday}</small>
      </Card.Footer>
    </Card>
  )}
