import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';


const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={15} sm={12} md={6} lg={4} xl={3}>
            {/* <div className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-name">{product.name}</div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
            </div> */}
              <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
