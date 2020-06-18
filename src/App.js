import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"><h1><img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/6301/GA_Cog_Large_Red_RGB.png" /> <span>B2B for Good</span></h1></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ float: 'right' }}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4" style={{ background: '#fa4542', color: '#fff' }}>Sponsor a Student</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title="subnav 4">
                <Menu.Item key="13">option13</Menu.Item>
                <Menu.Item key="14">option14</Menu.Item>
                <Menu.Item key="15">option15</Menu.Item>
                <Menu.Item key="16">option16</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 General Assembly. All rights reserved.</Footer>
    </Layout>
  );
}

export default App;
