
        <Row>
          <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && (<Message>There are no reviews</Message>)}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer review</h2>
                  {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                  {userInfo ?
                    (<h1>
                      <Form onSubmit={submitHandler}>
                        <Form.Group>
                          <Form.Control controlId='rating'>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                              <option value=''>Select...</option>
                              <option value='1'>1 - Poor</option>
                              <option value='2'>2 - Fair</option>
                              <option value='3'>3 - Good</option>
                              <option value='4'>4 - Very Good</option>
                              <option value='5'>5 - Excellent</option>
                            </Form.Control>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='comment'>
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                            as='textarea'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}>
                          </Form.Control>
                        </Form.Group>
                        <Button type='submit' variant='primary'>
                          Submit
                        </Button>
                      </Form>
                  </h1>):
                  (<Message variant = 'danger'>Please <Link to='/login'>sign in</Link> to write a review</Message>)}
                </ListGroup.Item>
              </ListGroup>
          </Col>
        </Row>