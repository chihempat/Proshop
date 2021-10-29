import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-start py-3">
            Copyright &copy; 2021 - ProShop
          </Col>
          <Col className="text-end py-3">
           Made by <a href="https://github.com/chihempat">Chintan Patel</a>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer
