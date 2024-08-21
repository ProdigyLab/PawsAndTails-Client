"use client"
import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import { MenuOutlined, HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useTheme } from '../../theme';


const { Header } = Layout;

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="logo" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        My App
      </div>
      <Menu
        theme={isDarkMode ? 'dark' : 'light'}
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ flex: 1, minWidth: 0 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link href="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          <Link href="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
      <div style={{ marginLeft: '20px' }}>
        <Switch
          checkedChildren="🌙"
          unCheckedChildren="☀️"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
      </div>
    </Header>
  );
};

export default Navbar;