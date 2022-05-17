import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../contexts/AuthContext"; 
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { logout } = useAuth();
    async function handleLogout(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await logout();
            navigate('/');
        } catch {
            setError('Failed to log out')
        }
        setLoading(false);
    }
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
            <NavLink to='/home' >
                Home
            </NavLink>
            <NavLink to='/calendar' >
                Calendar
            </NavLink>
            <NavLink to='/contact' >
                Contact
            </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink type="submit" onClick={handleLogout}>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;