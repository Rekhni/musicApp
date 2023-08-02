import { styled } from 'styled-components';

export const MainNav = styled.nav`
  margin-top: 30px;
  grid-column: 1 / 2;
  `;


export const BurgerSvg = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: white
  `;

export const NavListContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  `;

export const NavList = styled.ul`
  transition: top 0.5s;
  position: absolute;
  top: ${({$isVisible}) => ($isVisible ? '0' : '-150px')}; 
  list-style: none;
  margin: 0;
  padding: 18px 0 10px 0;
  `;

export const active = styled.div`
  top: 0;
  `;
