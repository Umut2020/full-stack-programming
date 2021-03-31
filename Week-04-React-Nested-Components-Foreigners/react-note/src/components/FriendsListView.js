import Friend from './Friend'
import { CardGroup, Card } from 'react-bootstrap'

export default function FriendsListView (props) {
  const allFriends = props.friends.map(friend => <Friend friend={friend}></Friend>

  )

  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>
            FRIENDS
          </Card.Title>
        </Card.Body>
      </Card>
      {allFriends}
    </CardGroup>
  )
}
