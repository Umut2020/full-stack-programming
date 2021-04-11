import Child from './Child'
import { CardGroup, Card } from 'react-bootstrap'

export default function ChildrenListView (props) {
  const allChild = props.children.map(child => <Child child={child}></Child>)
  return (
    <CardGroup>
      <Card.Body>
        <Card.Title data-testid='my-card-title'>
          CHILDREN
        </Card.Title>
      </Card.Body>
      {allChild}
    </CardGroup>
  )
}
