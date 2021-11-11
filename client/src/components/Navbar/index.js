
import React, {useState} from 'react';

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
                    <NavLink to="/profile" activeStyle>
                        Profile
                    </NavLink>
                    <NavLink to="/about-us" activeStyle>
                        About Us
                    </NavLink>
                </NavMenu>
            <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
            </NavBtn>
            <NavBtn>
            <NavBtnLink to="/log-in">Log In</NavBtnLink>
            </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
