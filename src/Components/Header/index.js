import React from 'react';
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import {tabs} from './../../constants'
import {Navbar, Nav, Container,Form, FormControl, Button} from 'react-bootstrap'

export default function ScrollableTabsButtonAuto() {
  return (

    <Navbar bg="light" expand="lg" className={`${styles.nav} p-0`}>
      <Container>
        <Navbar.Brand className={styles.brand}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ml-auto'>
            {tabs.map(link => <Link className={styles.link} to={`/${link.to}`}>
              {link.name}
            </Link>)}
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
