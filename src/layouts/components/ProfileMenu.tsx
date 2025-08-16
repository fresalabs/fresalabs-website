import React from 'react';
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class ProfileMenu extends React.Component {
  renderMenu = () => (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="account">My account</Menu.Item>
    </Menu>
  );
  render() {
    return (
      <React.Fragment>
        <Dropdown overlay={this.renderMenu()} trigger={['click']} placement="bottomRight">
          <a onClick={(e) => e.preventDefault()} aria-label="account of current user">
            <UserOutlined style={{ fontSize: 24, color: 'white' }} />
          </a>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default ProfileMenu;
