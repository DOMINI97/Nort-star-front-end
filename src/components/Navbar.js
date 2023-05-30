/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../assets/img/logo.png";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header id='header' className='header d-flex align-items-center  fixed-top'>
      <div className='container-fluid  d-flex align-items-center justify-content-between '>
        <div>
          <a href='index.html' className='logo d-flex align-items-center'>
            <img src={logo} alt='' />
            <h1>North Star Company</h1>
          </a>
        </div>
        <div
          className={` menu-icon ${isOpen ? "open" : ""}`}
          onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav id='navbar' className='navbar'>
          <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
            <li className='navbar-item'>
              <a href='#hero' className='active' onClick={handleNavItemClick}>
                Home
              </a>
            </li>
            <li className='navbar-item'>
              <a href='#about' className='hov' onClick={handleNavItemClick}>
                About
              </a>
            </li>
            <li className='navbar-item'>
              <a href='#service' className='hov' onClick={handleNavItemClick}>
                Services
              </a>
            </li>
            <li className='navbar-item'>
              <a
                href='#call-to-action'
                className='hov'
                onClick={handleNavItemClick}>
                Contact
              </a>
            </li>
            <li className='navbar-item'>
              <a
                href='#testimonials'
                className='hov'
                onClick={handleNavItemClick}>
                Our Team
              </a>
            </li>
            <li className='navbar-item'>
              <a href='#faq' className='hov' onClick={handleNavItemClick}>
                FAQ's
              </a>
            </li>
            <li className='navbar-item'>
              <a className='get-a-quote' onClick={handleNavItemClick}>
                Employee login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
