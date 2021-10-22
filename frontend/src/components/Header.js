import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGOUT } from '../constants/userConstants';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from 'react-bootstrap';

const Header = () => {

  const userLogin = useSelector(state => state.userLogin);
  console.log('userLogin', userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();


  const logoutHandler = () => {
    dispatch(logout());
  }
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to='/cart'>
                <Nav.Link ><i className='fas fa-shopping-cart'></i> CART</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username" >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>My Account</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ):(
                <LinkContainer to='/login'>
                <Nav.Link ><i className='fas fa-user'></i> SIGN IN</Nav.Link>
               </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
