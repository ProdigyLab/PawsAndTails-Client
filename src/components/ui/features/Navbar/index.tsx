"use client"
import React from "react";
import { Layout, Menu, Switch } from 'antd';
import Link from 'next/link';
import { useTheme } from '../../theme';  // Adjust this import path as needed
import SearchBarComponent from "./searchBar";
import { Image } from 'antd';
import { signOut } from "next-auth/react";
import { Button } from "antd/es/radio";

const { Header } = Layout;

const NavBarComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogOut = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  }

  const headerStyle = {
    background: isDarkMode ? '#001529' : '#fff',
    padding: 0,
    transition: 'all 0.3s',
  };

  const textStyle = {
    color: isDarkMode ? '#fff' : '#001529',
  };

  return (
    <Header className="fixed w-full z-50" style={headerStyle}>
      <div className="grid grid-cols-3 items-center h-full">
        <div className="flex justify-center">
          <Image
            preview={false}
            src={`https://i.ibb.co/wCFf0kW/pet-shop-with-home-animals-petshop-supermarket-vector-25837276.jpg`}
            alt="Logo"
            width={90}
            height={65}
          />
        </div>
        <Menu
          theme={isDarkMode ? 'dark' : 'light'}
          mode="horizontal"
          style={{ 
            justifyContent: 'center', 
            background: 'transparent',
            borderBottom: 'none',
          }}
        >
          <Menu.Item key="1">
            <Link href="/about" style={textStyle}>About Us</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/services" style={textStyle}>Services</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/contact" style={textStyle}>Contact Us</Link>
          </Menu.Item>
        </Menu>
        <div className="flex justify-center items-center space-x-4">
          <SearchBarComponent isDarkMode={isDarkMode} />
          <Switch
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
        </div>
        <div>
          <Button onClick={handleLogOut}>
            LogOut
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default NavBarComponent;