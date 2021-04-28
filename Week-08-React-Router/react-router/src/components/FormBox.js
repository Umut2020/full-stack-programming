import { Form, Button } from 'react-bootstrap'
import React, { useReducer } from 'react';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
}
   
export default function FormBox(props) {
    const [formData, setFormData] = useReducer(formReducer, {});
   
    const handleSubmit = event => {
      event.preventDefault();
      props.onSubmitForm(formData);
    }
   
    const handleChange = event => {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
}


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>
                First Name
                </Form.Label>
                <Form.Control
                onChange={handleChange}
                name='firstName'
                type='text'
                placeholder='firstName' />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                Last Name
                </Form.Label>
                <Form.Control
                onChange={handleChange}
                name='lastName'
                type='text'
                placeholder='lastName' />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                Gender
                </Form.Label>
                <Form.Control
                onChange={handleChange}
                type='text'
                name='gender'
                placeholder='gender' />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                Birth Day
                </Form.Label>
                <Form.Control
                onChange={handleChange}
                type='date'
                name='birthday'/>
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>
                Email address
                </Form.Label>
                <Form.Control
                onChange={handleChange}
                name='email'
                type='email'
                placeholder='email' />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                Password
                </Form.Label>
                <Form.Control
                onChange={handleChange}
                type='password'
                name='password'
                placeholder='password' />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>
                About Me
                </Form.Label>
                <Form.Control
                onChange={handleChange}
                name='about'
                as='textarea'
                rows={3}
                placeholder='about me' />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
  )
}


