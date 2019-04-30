import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Register extends Component {
    render(){
  return <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formGridName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control placeholder="Full Name" />
  </Form.Group>
  </Form.Row>

<Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  

  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  

  <Button variant="primary" type="submit">
    Register
  </Button>
  <Link to="/">Return to Login </Link>  
    </Form>
     
}
    };

export default Register;

