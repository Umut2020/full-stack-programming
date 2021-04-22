import { Card, Col, Row, Container, Badge } from 'react-bootstrap'

const Movie = (props) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.movie.Poster} />
      <Card.Body>
        <Card.Title>
          {props.movie.Title}
        </Card.Title>
        <Card.Text>
          {props.movie.Plot}
        </Card.Text>
        <Container>
          <Row>
            <Col>
            <h2><Badge variant='secondary'> Director : {props.movie.Director} </Badge></h2>
            {' '}
            </Col>
            <Col>
            <h2><Badge variant='secondary'> Country : {props.movie.Country} </Badge></h2>
            {' '}
            </Col>
            <Col>
            <h2><Badge variant='secondary'> Runtime : {props.movie.Runtime} </Badge></h2>
            {' '}
            </Col>
            <Col>
            <h2><Badge variant='secondary'> Released : {props.movie.Released} </Badge></h2>
            {' '}
            </Col>
            <Col>
            <h2><Badge variant='secondary'> Genre : {props.movie.Genre} </Badge></h2>
            {' '}
            </Col>
            <Col>
            <h2><Badge variant='secondary'> Imdb Rating : {props.movie.imdbRating} </Badge></h2>
            {' '}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Movie
