import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from 'react-bootstrap';

const Header = () => {

  const userLogin = useSelector(state => state.userLogin);
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
            <Route render={({ history }) => <SearchBox history={history} />} />
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
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu' >
                  <LinkContainer to='/admin/userList'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productList'>
                    <NavDropdown.Item>Product</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderList'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
