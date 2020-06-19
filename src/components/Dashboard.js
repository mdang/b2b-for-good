import React, { Component } from 'react';
import { PageHeader, Table, Tag, Divider } from 'antd';

import { Link } from 'react-router-dom';

import './Dashboard.css';

const { Column } = Table;

class Dashboard extends Component {

  render() {
    const cohorts = [
      {
        combo: {
          id: '6',
          name: 'Code for Good (June 2020)'
        },
        status: ['In Progress'],
        start: '6/24/2020',
        end: '9/25/2020'
      },
      {
        combo: {
          id: '24',
          name: 'Code for Good (October 2020)'
        },
        status: ['Admissions'],
        start: '10/12/2020',
        end: '12/19/2020'
      }
    ]

    const newsColumns = [
      {
        title: 'Event',
        dataIndex: 'eventName',
      },
      {
        title: 'Cohort',
        dataIndex: 'cohort',
        render: cohort => <Link to={ `/b2b-for-good/cohorts/${cohort.id}` }>{ cohort.name }</Link>
      },
      {
        title: 'Date',
        dataIndex: 'date',
      }
    ];

    const news = [
      {
        eventName: 'Unit 3 Group Project Presentations',
        cohort: {
          id: '6',
          name: 'Code for Good (June 2020)'
        },
        date: '8/12'
      },
      {
        eventName: 'Web Readiness Assessment',
        cohort: {
          id: '24',
          name: 'Code for Good (October 2020)'
        },
        date: '9/1'
      },
      {
        eventName: 'Lunch and Learn: A Day in the Life',
        cohort: {
          id: '6',
          name: 'Code for Good (June 2020)'
        },
        date: '9/3'
      },
      {
        eventName: 'Student interviews',
        cohort: {
          id: '24',
          name: 'Code for Good (October 2020)'
        },
        date: '9/7-9/15'
      },
      {
        eventName: 'Student Happy Hour',
        cohort: {
          id: '6',
          name: 'Code for Good (June 2020)'
        },
        date: '9/17'
      },
      {
        eventName: 'Class starts',
        cohort: {
          id: '24',
          name: 'Code for Good (October 2020)'
        },
        date: '10/12'
      },
      {
        eventName: 'Installfest',
        cohort: {
          id: '24',
          name: 'Code for Good (October 2020)'
        },
        date: '10/12'
      }
    ]
  
    return (
      <div>
        <PageHeader
          className="details-page-header"
          title="Overview" />
        <Divider orientation="left">My Cohorts</Divider>
        <Table pagination={ false } dataSource={ cohorts } size="middle">
          <Column title="Cohort" dataIndex="combo" key="combo"
          render={combo => (
            <>
              <Link to={ `/b2b-for-good/cohorts/${combo.id}` }>{ combo.name }</Link>
            </>
          )}  
          />
          <Column 
            title="Status" 
            dataIndex="status" 
            key="status"
            render={status => (
              <>
                {status.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}  
            />
          <Column title="Start Date" dataIndex="start" key="start" />
          <Column title="End Date" dataIndex="end" key="end" />
        </Table>

        <Divider orientation="left" style={{ paddingTop: '24px' }}>Upcoming Events</Divider>
        <Table columns={newsColumns} pagination={false} dataSource={ news } size="middle" />
      </div>
    )
  }
}

export default Dashboard;