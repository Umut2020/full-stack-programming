import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Container } from 'react-bootstrap'
import Movie from './components/MovieList'
import SearchBox from './components/SearchBox'
import { useState, useEffect } from 'react'

const App =  () => {
  // const searchMovieProp = (e) => {
  //   return e.target.value
  // }


  const APP_KEY = '66ee2200'
  const APP_URL = `http://www.omdbapi.com/?t=Cars&apikey=${APP_KEY}`

  const [movie, setMovie] = useState({})


  useEffect(() => {
    loadData()

  }, [] )

  const loadData = async () => {
    const response = await fetch(APP_URL)
    const data = await response.json()
    setMovie(data)
  }

  

  return (
    <div>
      <Container>
        <Row>
          <Col>
          <SearchBox />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <Movie movie={movie} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
