import React from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
import logo from '../assets/logo.png'


export const Header = () => {
    return (
        <div className="header">
          
        <a href="/" className="image__container">
        <img src={logo} alt="logo"/>
        </a>    
        <div className="myContact">
            <ul>
                <li><a>Mein Konto</a></li>
                <li><a>Kundenservice</a></li>
            </ul>
        </div>

       <div className="main__nav">
          <div className="menu__bar" className="menu__bar">
            <a></a>
            </div> 
                    <ul className="menu__container">
                        <li> <a>Mitmachen</a></li>
                        <li> <a>So funktioniert's</a></li>
                        <li> <a>Gewinne</a></li>
                        <li> <a>Ergebnisse</a></li>
                        <li> <a>Projekte</a></li>
                        <li> <a>Über uns</a></li>
                    </ul>
                    <div className="menu__bar"></div> 

        {/* <Link to="/">
         Home
        </Link>
        <div className="ml1">|</div>
        <Link to="/projects">
          Projects
        </Link>
        <div className="ml1">|</div>
        <Link to="/aboutus">
          About Us
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
        >
          Search
        </Link> */}

                </div>
       
        </div>
  );
};

