import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitch from './LanguageSwitch';
import '../styles/Navbar.css';

import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <Link to="/" className="nav-brand">Portfolio</Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>         
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
           <Link to="/" >{t('nav.Home')}</Link>
            <Link to="/about" >{t('nav.about')}</Link>
            <Link to="/project" >{t('nav.project')}</Link>
            <Link to="/communicate" >{t('nav.communicate')}</Link>
            <LanguageSwitch />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
