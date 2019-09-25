import React from 'react';
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import {tabs} from './../../constants'
import  {Navbar, Nav, Container} from 'react-bootstrap'


export default function ScrollableTabsButtonAuto() {
  return (
    
        <Navbar bg="light" expand="lg" className={'center'}>
      <Container>
        <Navbar.Brand className={styles.brand}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className='ml-auto'>
          {tabs.map(link => 
            <Nav.Link className={styles.button}>
             <Link to={`/${link.to}`}> {link.name} </Link>
            </Nav.Link>
          )}
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  
  
  );
}
