import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      
      
      
      <div >




          
        <Container>
          <Row>
            <Col>
            
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>Klinik Harapan Kita</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Terletak di seberang pasar Cipta Puri Tiban,melayani pasien BPJS dan pasien umum.dapat melayani sunatan dan home visite.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          

            <Col>
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Header>Klinik Nira Medika Batam</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Berlokasi di Seberang Kimia farma SP Plaza,Batuaji. melayani pasien BPJS dan pasien umum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Row>
        </Container>
      </div>
    );
  }
}
