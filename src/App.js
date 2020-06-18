import React from 'react';
import { Layout, Menu } from 'antd';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="logo">
        <h1>B2B for Good</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          nav 1
        </Menu.Item>
        <Menu.Item key="2">
          nav 2
        </Menu.Item>
        <Menu.Item key="3">
          nav 3
        </Menu.Item>
        <Menu.Item key="4">
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      
      <Content style={{ margin: '0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 B2B for Good</Footer>
    </Layout>
    </Layout>
  );
}

export default App;
