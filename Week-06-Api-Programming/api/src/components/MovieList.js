import { Card, Button, Col, Row, Container, Badge } from 'react-bootstrap'

const Movie = (props) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.movie.Poster} />
      <Card.Body>
        <Card.Title>
          {props.movie.Title}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Container>
          <Row>
            <Col>
            <Button variant='danger'>
              Delete
            </Button>
            </Col>
            <Col>
            <h2><Badge variant='secondary'> New </Badge></h2>
            {' '}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Movie
