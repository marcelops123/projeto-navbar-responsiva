import { Header } from "antd/lib/layout/layout";
import { Menu } from "antd";
import React from "react"
import { DarkTheme } from "./DarkTheme";
import { useNavigate } from "react-router-dom";
import { AnimationPage } from "./AnimationPage";
export const NavBarDesktop = () => {

  const navigate = useNavigate();

  return (
    <AnimationPage>
    <Header style={{ boxShadow: '0px 3px 10px rgba(50, 50, 50, 0.77)' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['5']}>
        <Menu.Item onClick={() => { navigate('/') }} key="1">nav 1</Menu.Item>
        <Menu.Item onClick={() => { navigate('/nav2') }} key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">nav 4</Menu.Item>
        <Menu.Item id='icondarktheme' style={{ backgroundColor: 'transparent', background: 'none', justifyItems: 'center', left: '75%' }} key="5">
          <DarkTheme />
          </Menu.Item>
      </Menu>
    </Header>
    </AnimationPage>
  )
}