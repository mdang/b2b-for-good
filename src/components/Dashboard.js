import React, { Component } from 'react';
import { PageHeader, Tabs } from 'antd';

import { Link } from 'react-router-dom';

import './Dashboard.css';

const { TabPane } = Tabs;

class Dashboard extends Component {
  render() {
    return (
      <div>
        <PageHeader
          className="details-page-header"
          title="Overview">
            Fancy dashboard doing fancy dashboard things. There's nothing here yet, why don't you <Link to="/b2b-for-good/cohorts/6">view an example cohort</Link> instead? 
        </PageHeader>
      </div>
    )
  }
}

export default Dashboard;