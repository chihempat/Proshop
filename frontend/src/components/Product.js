import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Rating from './Rating';

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <CardImg src={product.image} variant='top'/>
      </a>

      <CardBody>
        <a href={`/product/${product._id}`}>
          <CardTitle as='div'><strong>{product.name}</strong></CardTitle>
        </a>
        <CardText as='div'><Rating value={product.rating} text={`${product.numReviews} reviews`} /></CardText>
        <CardText as='h3'>${product.price}</CardText>
      </CardBody>
    </Card>
  )
}

export default Product
