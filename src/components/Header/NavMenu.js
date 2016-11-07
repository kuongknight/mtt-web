import React from 'react';
import Menu from 'material-ui/Menu';

const NavMenu = () => (
          <div className='sites-nav vertical-center'>
            <nav className="banner-section hidden-phone" >
               <ul className="block-container no-padding no-margin" >
                  <li className="nav-item" > <a href="/product" > <span>Product</span> </a> </li>
                  <li className="nav-item" > <a href="/solutions" > <span>Solutions</span> </a> </li>
                  <li className="nav-item" > <a href="/resources" > <span>Resources</span> </a> </li>
                  <li className="nav-item" > <a href="/contacts" > <span>Contacts</span> </a> </li>
                  <li className="nav-item" > <a href="/about" > <span>About</span> </a> </li>
               </ul>
            </nav>
          </div>
);

export default NavMenu;