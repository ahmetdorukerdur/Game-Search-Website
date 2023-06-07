import React, { Fragment } from 'react';

const NavBar = () => {
  return (
    <Fragment>
      <nav>
        <div className='nav-logo'>
          <span>Quick</span><span>Games</span>
        </div>
        <div className='End'>
          <div className='Toggle-Container'>
            <div className='Toggle-Switcher'></div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;