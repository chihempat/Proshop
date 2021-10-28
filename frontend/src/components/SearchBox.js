import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({history}) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push(`/`);
    }
    setKeyword(e.target.value);
  };

  return (
      <Form onSubmit={submitHandler} className='d-flex' inline >
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 searchBox'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='search-btn'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
