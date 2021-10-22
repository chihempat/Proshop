import React from 'react'
import { connect } from 'react-redux'
import {Container, Row, Col } from 'reactstrap'

function FormContainer({children}) {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </div>
  )
}

export default FormContainer
