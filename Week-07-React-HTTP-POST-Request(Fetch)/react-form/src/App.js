import FormData from './components/Form'
import { Container, Row, Col } from 'react-bootstrap'
import TableList from './components/List'
import { useState, useEffect} from 'react'

const App = () => {

const [person, setPerson] = useState([])

const APP_URL = `http://174.138.103.233/api/employees`

useEffect(() => {
  loadData()
})

const loadData = async () => {
  const response = await fetch(APP_URL)
  const data = await response.json()
  setPerson(data)
}
  return (
    <div className='App'>
      <Container fluid>
        <Row>
          <Col>
          <FormData/>
          </Col>
          <Col>
          <TableList person= {person}/>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default App

// import { useState, useEffect } from 'react'

// const [employees, setEmployee] = useState({})

// const APP_URL = `http://174.138.103.233/api/employees`

// useEffect(() => {
//   loadData()
// },)

// const loadData = async () => {
//   const response = await fetch(APP_URL)
//   const data = await response.json()
//   setEmployee(data)
// }

// console.log(employees)

{
  /* const handleForm = (e) => {
    if (e.target.name = 'firstName') {
      setFirstName(e)
    }else if (e.target.name = 'firstName') {
      setLastName(e)
    }else if (e.target.name = 'lastName') {
      setGender(e)
    }else if (e.target.name = 'birthDay') {
      setBirthDay(e)
    }else if (e.target.name = 'email') {
      setEmail(e)
    }else if (e.target.name = 'password') {
      setPassword(e)
    }else if (e.target.name = 'aboutMe') {
      setAboutMe(e)
    }
  }
  */
}
