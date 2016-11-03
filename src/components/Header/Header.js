import React from 'react'
import { IndexLink, Link } from 'react-router'
import DrawerMenu from  './DrawerMenu'
import NavMenu from  './NavMenu'
import FontIcon from 'material-ui/FontIcon';
import './Header.scss'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {openDrawer: false };
    this.drawerChange = this.drawerChange.bind(this);
  }

  drawerChange = (open) =>{
    this.setState({openDrawer: open});
  }

  render() {
      const style = { right:"300px", paddingRight: "0" };
      return (
      <div className='header'>

        <div className='header-nav' style={this.state.openDrawer? style : null} >
          <IndexLink to='/' className='home-logo'>
           <FontIcon className="material-icons font-icon-logo" >home</FontIcon>
          </IndexLink>
          <div className='sites-nav'>
            <nav className="banner-section hidden-phone" >
               <ul className="block-container no-padding" >
                  <li className="nav-item" > <a href="/product" > <span>Product</span> </a> </li>
                  <li className="nav-item" > <a href="/solutions" > <span>Solutions</span> </a> </li>
                  <li className="nav-item" > <a href="/resources" > <span>Resources</span> </a> </li>
                  <li className="nav-item" > <a href="/services" > <span>Services</span> </a> </li>
                  <li className="nav-item" > <a href="/company" > <span>Company</span> </a> </li>
               </ul>
            </nav>
          </div>
        </div>

        <div className='header-drawer'>
            <DrawerMenu onDrawerChange={this.drawerChange} open={this.state.openDrawer} />
        </div>
      </div>
    );
  }

}
