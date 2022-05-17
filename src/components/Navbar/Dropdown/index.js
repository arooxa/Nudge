import './NavbarElements.css';
import { ReactComponent as ProfileIcon } from '../../images/icons/profile.svg';
import { ReactComponent as RewindIcon } from '../../images/icons/rewind.svg';
import { ReactComponent as ResumeIcon } from '../../images/icons/resume.svg';
import { useAuth } from "../../../contexts/AuthContext"; 
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavText, NavButtonText } from '../../Calendar/common';
import { Navigate } from 'react-big-calendar';

function Navbar() {
  return (
    <Bar>
      <NavText>Weight Tracker</NavText>
      <NavItem icon={<ProfileIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Bar>
  );
}

function Bar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
      
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  
  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/');
    } catch {
      setError('Failed to log out')
    }
  }

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <NavButtonText onClick={navigate('/about')}>
            <DropdownItem
              leftIcon={<ResumeIcon/>}
            >
              My Profile
            </DropdownItem>
          </NavButtonText>
          <NavButtonText>
            <DropdownItem
              leftIcon={<RewindIcon/>}
            >
              Logout
            </DropdownItem>
          </NavButtonText>
          

        </div>
      </CSSTransition>
    </div>
  );
}


export default Navbar;