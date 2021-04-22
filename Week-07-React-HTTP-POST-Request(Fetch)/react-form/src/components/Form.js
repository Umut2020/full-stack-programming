import { Form, Button } from 'react-bootstrap'
import { useState} from 'react'

const FormData = () => {

  const [newPerson, setNewPerson] = useState([])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch('http://174.138.103.233/api/employees', {
      method: 'POST',
      body: JSON.stringify( newPerson ),
      headers: { 'Content-Type': 'application/json' },
    })
     
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          First Name
        </Form.Label>
        <Form.Control
          onChange={e => setNewPerson({...newPerson, firstName: e.target.value })}
          name='firstName'
          type='text'
          placeholder='Normal text' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Last Name
        </Form.Label>
        <Form.Control
          onChange={e => setNewPerson({ ...newPerson, lastName: e.target.value })}
          name='lastName'
          type='text'
          placeholder='Normal text' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Gender
        </Form.Label>
        <Form.Control
          onChange={e => setNewPerson({ ...newPerson, gender: e.target.value })}
          type='text'
          name='gender'
          placeholder='Normal text' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Birth Day
        </Form.Label>
        <Form.Control
          onChange={e => setNewPerson({ ...newPerson, birthday: e.target.value })}
          type='text'
          name='birthday'
          placeholder='Normal text' />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>
          Email address
        </Form.Label>
        <Form.Control
          onChange={e => setNewPerson({ ...newPerson, email: e.target.value })}
          name='email'
          type='email'
          placeholder='Enter email' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Password
        </Form.Label>
        <Form.Control
          onChange={e => setNewPerson({ ...newPerson, password: e.target.value })}
          type='text'
          name='password'
          placeholder='Normal text' />
      </Form.Group>
      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>
          About Me
        </Form.Label>
        <Form.Control
          onChange={e => setNewPerson({ ...newPerson, about: e.target.value })}
          name='about'
          as='textarea'
          rows={3}
          placeholder='Normal text' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default FormData
