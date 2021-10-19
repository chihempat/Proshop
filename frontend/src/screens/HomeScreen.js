import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
import {listProducts} from '../actions/productActions';



const HomeScreen = () => {

  //mapDispatchToProps
  const dispatch = useDispatch();

  //mapStateToProps
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> :
        <Row>
          {products.map(product => (
            <Col key={product._id} xs={15} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      }
    </>

  )
}

export default HomeScreen
