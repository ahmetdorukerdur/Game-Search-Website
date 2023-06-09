import React, { Fragment, useContext } from 'react';
import '../styles/NavBar.css'
import { ToggleWrapper } from '../App';
import GamingLogo from '../photos/gaming-logo.png'

const NavBar = () => {
  const {themeChange, setThemeChange} = useContext(ToggleWrapper);
  return (
    <Fragment>
      <nav style={themeChange ? {backgroundColor: '#fffff'} : undefined}>
        <div className='Container'>
          <span id='erdur'>Erdur</span><img id='logo-image' src={GamingLogo}/><span id='gaming'>Gaming</span>
        </div>
        <div className='End'>
          <div className='Toggle-Container' onClick={() => setThemeChange(!themeChange)}>
            <div className={themeChange ? 'Toggle-Switcher-Moved' : 'Toggle-Switcher'}></div> 
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;