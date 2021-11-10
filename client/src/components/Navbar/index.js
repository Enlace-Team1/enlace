
import React from 'react'

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                    {/* <img src="" alt=""></img> */}
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
                    {/* Add more navlinks */}

                </NavMenu>
            <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
