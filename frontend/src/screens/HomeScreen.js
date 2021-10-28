import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';



const HomeScreen = ({match}) => {

  const keyword = match.params.keyword;

  //mapDispatchToProps
  const dispatch = useDispatch();

  //mapStateToProps
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch,keyword]);


  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <Loader />: error ? <Message variant='danger'>{error}</Message> :
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
