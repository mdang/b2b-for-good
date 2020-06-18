import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import './Main.css';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breadcrumbs: []
    }
  }

  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          { 
            this.state.breadcrumbs.map((crumb, index) => {
              return <Breadcrumb.Item>{ crumb }</Breadcrumb.Item>
            })
          }
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={275}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['sub1']}
              defaultOpenKeys={['sub2']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title="Overview">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Cohorts">
                <Menu.Item key="5">Code for Good (June 2020)</Menu.Item>
                <Menu.Item key="6">Code for Good (Oct 2020)</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </div>
    )
  }
}

export default Main;