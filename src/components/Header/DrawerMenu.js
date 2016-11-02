import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ClickOutside from '../Utils/ClickOutside'
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class DrawerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: this.props.open };
  }

  handleToggle = () => {
    this.props.onDrawerChange(!this.state.open);
    this.setState({open: !this.state.open});
  }
  handleClose = () => {
    this.setState({open: false});
    this.props.onDrawerChange(false);
  }
  render() {
    return (
      <ClickOutside onClickOutside={::this.handleClose}>
        {
          !this.state.open
            ? <IconButton
                tooltip="Menu"
                onTouchTap={this.handleToggle}
              >
                <FontIcon className="material-icons" >menu</FontIcon>
              </IconButton>
            : null
        }
        <Drawer width={350}
                openSecondary={true} 
                open={this.state.open}
        >
          <AppBar
              className="app-bar-login"
              title={<span>Title</span>}
              onRightIconButtonTouchTap={this.handleClose}
              iconElementRight={<IconButton><NavigationClose /></IconButton>}
              showMenuIconButton={false}
          />
        </Drawer>
      </ClickOutside>
    );
  }
}