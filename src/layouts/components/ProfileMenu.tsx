import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

interface ProfileMenuState {
  isMenuOpen: boolean;
  anchorEl: null | HTMLElement;
}

class ProfileMenu extends React.Component<{}, ProfileMenuState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpen: false,
      anchorEl: null,
    };
  }
  handleMenuClose = () => {
    this.setState({ anchorEl: null, isMenuOpen: false });
  };

  handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget, isMenuOpen: true });
  };

  renderMenu = () => {
    const { isMenuOpen, anchorEl } = this.state;
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted={false}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  };
  render() {
    return (
      <React.Fragment>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={this.handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {this.renderMenu()}
      </React.Fragment>
    );
  }
}

export default ProfileMenu;
