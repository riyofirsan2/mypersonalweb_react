import React, { Component } from 'react'
import {Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap'

export default class navbar extends Component {
    render() {
        return (
            <div>
               <Navbar bg="dark" variant="dark">
    
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
            </div>
        )
    }
}
