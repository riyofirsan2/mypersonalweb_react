import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import Logo from './APD.jpeg'
export default class content extends Component {
    render() {
        return (
            <div>
               <Card>
  <Card.Body>THIS IS MY PERSONAL WEBSITE</Card.Body>
</Card> 
<img src={Logo} alt="gambar" width="250px"/>
            </div>
        )
    }
}
