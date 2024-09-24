// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton'; 

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [cartCount, setCartCount] = useState(0); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <h2>Mascotienda</h2>
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        <CartWidget>
          🛒 <span>{cartCount}</span>
        </CartWidget> {}
      </Nav>
      <Container isOpen={isOpen}>
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Contacto</a>
        <a href="/">Blog</a>
      </Container>
    </>
  );
}

export default NavBar;

const Nav = styled.div`
  width: 100vw;
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  h2 {
    color: white;
    margin-left: 1rem;
    font-weight: 400;
  }
`;

const CartWidget = styled.div`
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  
  span {
    background-color: red;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    color: white;
  }
`;

const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; 
  background-color: #333;
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 100vw;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    display: block;
    padding: 0.5rem 0;
  }
`;
