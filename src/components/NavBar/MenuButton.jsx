// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function MenuButton({ isOpen, toggleMenu }) {
  return (
    <Menu onClick={toggleMenu}>
      <div className={`nav-icon-3 ${isOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Menu>
  );
}

export default MenuButton;

const Menu = styled.div`
cursor: pointer;
margin-right: auto;  /* Botón alineado a la izquierda */
display: flex;
align-items: center;

.nav-icon-3 {
  width: 30px;
  height: 24px;
  position: relative;
  margin: 10px;
}

.nav-icon-3 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 9px;
  transition: 0.25s ease-in-out;
}

.nav-icon-3 span:nth-child(1) { top: 0; }
.nav-icon-3 span:nth-child(2),
.nav-icon-3 span:nth-child(3) { top: 9px; }
.nav-icon-3 span:nth-child(4) { top: 18px; }

.nav-icon-3.open span:nth-child(1) {
  top: 9px;
  width: 0;
  left: 50%;
}
.nav-icon-3.open span:nth-child(2) {
  transform: rotate(45deg);
}
.nav-icon-3.open span:nth-child(3) {
  transform: rotate(-45deg);
}
.nav-icon-3.open span:nth-child(4) {
  top: 9px;
  width: 0;
  left: 50%;
}
`;