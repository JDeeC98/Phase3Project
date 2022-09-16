import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img style={{borderWidth:5, height: 100}}src={require('/home/johnd/code/Projects/phase-3-sinatra-react-project/my-app-frontend/src/images/free-game-controller-icon-1436-thumb.png')} alt='logo'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/Publishers' activeStyle>
            Publishers
          </NavLink>
          <NavLink to='/Games' activeStyle>
            Games
          </NavLink>
          <NavLink to='/Genres' activeStyle>
            Genres
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;