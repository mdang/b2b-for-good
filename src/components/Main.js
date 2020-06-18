import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import CohortDetail from './CohortDetail';

import './Main.css';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Main extends Component {
  state = {
    breadcrumbs: []
  }

  render() {
    return (
      <Router>
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
                defaultSelectedKeys={['menu1']}
                defaultOpenKeys={['sub2']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="menu1"><Link to="/b2b-for-good/">Overview</Link></Menu.Item>
                <SubMenu key="sub2" title="Cohorts">
                  <Menu.Item key="5"><Link to="/b2b-for-good/cohorts/6">Code for Good (June 2020)</Link></Menu.Item>
                  <Menu.Item key="6"><Link to="/b2b-for-good/cohorts/24">Code for Good (October 2020)</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Route exact path="/b2b-for-good/" component={ Dashboard } />
              <Route path="/b2b-for-good/cohorts/:cohortId" render={props => <CohortDetail {...props} />} />
            </Content>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default Main;