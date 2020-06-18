import React from 'react';
import { Layout, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import Main from './Main';

import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"><h1><a href="/b2b-for-good"><img alt="GA Logo" src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/6301/GA_Cog_Large_Red_RGB.png" /> <span>B2B for Good</span></a></h1></div>
        <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
          <Menu.Item key="1">Upcoming Cohorts</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3" style={{ background: '#fa4542', color: '#fff' }}>Sponsor a Student</Menu.Item>
          <Menu.Item key="4">My Dashboard</Menu.Item>
          <Menu.Item key="5">
            Account <CaretDownOutlined />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Main />
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 General Assembly. All rights reserved.</Footer>
    </Layout>
  );
}

export default App;
