import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "gray"
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" className='bg-gradient'>
                <Container>
                    <Navbar.Brand href="/home">FoodBar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink
                            activeStyle={activeStyle}
                            className='link' to="/foods">Foods</NavLink>
                        <NavLink
                            activeStyle={activeStyle}
                            activeClassName='selected'
                            className='link' to="/offers">Offers</NavLink>
                        <NavLink
                            activeStyle={activeStyle}
                            className='link' to="/about">about</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
