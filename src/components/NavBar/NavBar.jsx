// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import { Link } from "react-router-dom";
import CartWidget from '../Cart/CartWidget.jsx';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => { setIsOpen(!isOpen); };

  return (
    <>
      <Nav>

      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

       
        <TiendaMascota>
          <h2>La Masconeta</h2>
        </TiendaMascota>

       
        <Cart>
          <Link className="cart" to="/cart">
            <span><CartWidget /></span>
          </Link>
        </Cart>
      </Nav>

      
      <SlideMenu isOpen={isOpen}>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/">Contacto</a>
        <a href="/">Blog</a>
      </SlideMenu>
    </>
  );
}

export default NavBar;

const Nav = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const TiendaMascota = styled.div`
  text-align: center;
  flex: 1;

  h2 {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;

  }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;

  .cart span {
    background-color: grey;
    border-radius: 25%;
    padding: 0.1rem 0.3rem;
    color: white;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SlideMenu = styled.div`
  background-color: #333;
  width: ${({ isOpen }) => (isOpen ? '25%' : '0')}; 
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0; 
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 999;

  a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 1rem;
    font-size: 1.2rem;
  }
`;
