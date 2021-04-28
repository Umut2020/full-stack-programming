import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import FormBox from './components/FormBox'
import List from './components/List'

function App () {
  const [list, setList] = useState([])

  function readPersonListFromBackend () {
    fetch('http://174.138.103.233/api/employees')
      .then(response => response.json())
      .then(data => setList(data))
  }

  function handleFormSubmit (formData) {
    fetch('http://174.138.103.233/api/employees', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
      .then(() => readPersonListFromBackend())
      .catch(error => console.log(error))
  }

  useEffect(() => {
    readPersonListFromBackend()
  }, [])

  return (
    <Router>
      <div>
        <ul className='navbar'>
          <li>
            <Link className='link' to='/'> GET User
            </Link>
          </li>
          <li>
            <Link className='link' to='/userForm'> User Form
            </Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/userForm'>
            <FormBox onSubmitForm={handleFormSubmit} />
          </Route>
          <Route path='/'>
            <List list={list} />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App
