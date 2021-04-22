import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Container } from 'react-bootstrap'
import Movie from './components/MovieList'
import SearchBox from './components/SearchBox'
import { useState, useEffect } from 'react'

const App =  () => {
 
  const [movie, setMovie] = useState({})
  const [search, setSearch] = useState("Kommen")

  const APP_SEARCH = search
  const APP_KEY = '66ee2200'
  const APP_URL = `http://www.omdbapi.com/?t=${APP_SEARCH}&apikey=${APP_KEY}`


  useEffect(() => {
    loadData()
  }, [search] )

  const loadData = async () => {
    const response = await fetch(APP_URL)
    const data = await response.json()
    setMovie(data)
  }

  console.log(movie)

  const searchMovie = (event) => {
     setSearch(event.target.value)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
          <SearchBox searchMovieProp={searchMovie}/>
          </Col>
        </Row>
        <Row>
          <Col >
          <Movie movie={movie} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
