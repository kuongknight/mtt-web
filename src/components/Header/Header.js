import React from 'react'
import { IndexLink, Link } from 'react-router'
import DrawerMenu from  './DrawerMenu'
import NavMenu from  './NavMenu'
import FontIcon from 'material-ui/FontIcon'
import './Header.scss'
import $ from 'jquery'

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
      if(this.state.openDrawer){
        $('body').css({ right: '300px' });
      }else{
         $('body').css({ right: '0' });
      }
      return (
      <div className='header'>

        <div className='header-nav' style={this.state.openDrawer? style : null} >
          <IndexLink to='/' className='home-logo'>
           <FontIcon className="material-icons big-fonticon" >home</FontIcon>
          </IndexLink>

          <NavMenu />
        </div>

        <div className='header-drawer'>
            <DrawerMenu onDrawerChange={this.drawerChange} open={this.state.openDrawer} />
        </div>
      </div>
    );
  }

}
