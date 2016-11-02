import React from 'react'
import { IndexLink, Link } from 'react-router'
import DrawerMenu from  './DrawerMenu'
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
      const style = {right:"350px"};
      return (
      <div className='header' style={this.state.openDrawer? style : null} >
        <IndexLink to='/' className='home-logo'>
         <FontIcon className="material-icons" >home</FontIcon>
        </IndexLink>
        <div className='header-nav'>
          <DrawerMenu onDrawerChange={this.drawerChange} open={this.state.openDrawer}/>
        </div>
      </div>
    );
  }

}
