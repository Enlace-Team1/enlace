
import React from 'react'

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                    {/* <img src="" alt=""> /> */}
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/profile" activeStyle>
                        Profile
                    </NavLink>
                    <NavLink to="/about-us" activeStyle>
                        About Us
                    </NavLink>
                </NavMenu>
            <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
            </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
