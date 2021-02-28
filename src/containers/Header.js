import React from 'react';
import logo from '../assets/logo.png'


export const Header = () => {
    return (
      <main className="header">
            <a href="/" className="image__container"><img src={logo} alt="logo"/></a>    
        <div className="header__contact">
          <ul>
            <li><a>Kundenservice</a></li>
            <li><i className="far fa-user"></i><a>Mein Kontakt</a></li>
          </ul>
        </div>
        <div className="main__nav">
          <div className="menu__bar"></div> 
          <ul className="menu__container">
            <li><span><a>Mitmachen</a></span> </li>
            <li><span> <a>So funktioniert's</a></span> </li>
            <li><span> <a>Gewinne</a></span> </li>
            <li><span> <a>Ergebnisse</a></span> </li>
            <li><span> <a>Projekte</a></span> </li>
            <li><span> <a>Über uns</a></span> </li>
           </ul>
          <div className="menu__bar"></div> 
        </div>
      </main>
  );
};

