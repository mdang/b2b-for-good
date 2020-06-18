import React, { Component } from 'react';
import { PageHeader, Steps, Descriptions, Tag, Card, Col, Row, Divider, Table } from 'antd';

import './CohortDetail.css';

const { Step } = Steps;
const { Meta } = Card;

const cohort6 = {
  name: 'Code for Good',
  instance: 'June 2020',
  currentStep: 4,
  studentCount: 25,
  stage: 'In Progress',
  start: 'June 24, 2020',
  end: 'September 25, 2020',
  currentTopic: 32,
  students: [
    {
      name: 'Tucker Wieland',
      pic: 'https://ca.slack-edge.com/T024JRAUL-UCHNJCX4P-e1fc22a6af1c-512'
    },
    {
      name: 'Tara Abaring',
      pic: 'https://ca.slack-edge.com/T024JRAUL-U0DKSPFEJ-043fdae6025f-512'
    }
  ],
  news: [
    {
      eventName: 'Unit 3 Group Project Presentations',
      date: '8/12'
    },
    {
      eventName: 'Lunch and Learn: A Day in the Life',
      date: '9/3'
    },
    {
      eventName: 'Student Happy Hour',
      date: '9/17'
    }
  ]
}

const cohort24 = {
  name: 'Code for Good',
  instance: 'October 2020',
  currentStep: 1,
  studentCount: 'Pending',
  stage: 'Admissions',
  start: 'October 12, 2020',
  end: 'December 19, 2020',
  currentTopic: 0, 
  students: [
    {
      name: 'William Alexander',
      pic: 'https://ca.slack-edge.com/T024JRAUL-UTHPWB883-fa28037061c5-512'
    },
    {
      name: 'Mike Dang',
      pic: 'https://ca.slack-edge.com/T024JRAUL-U04DA5A9E-cbb0ada50e25-512'
    },
    {
      name: 'Ali Levitan',
      pic: 'https://ca.slack-edge.com/T024JRAUL-U0DLW3D47-14a425ff7b5e-512'
    }
  ],
  news: [
    {
      eventName: 'Web Readiness Assessment',
      date: '9/1'
    },
    {
      eventName: 'Student interviews',
      date: '9/7-9/15'
    },
    {
      eventName: 'Class starts',
      date: '10/12'
    },
    {
      eventName: 'Installfest',
      date: '10/12'
    }
  ]
}

class CohortDetail extends Component {
  state = {
    cohort: {}
  }

  render() {
    let cohort = {};
    let routes = [
      {
        path: '/b2b-for-good/',
        breadcrumbName: 'Cohorts',
      }
    ];

    if (this.props.match.params.cohortId === '6') {
      cohort = cohort6;
    } else {
      cohort = cohort24;
    }

    routes.push({
      path: `/b2b-for-good/${ this.props.match.params.cohortId }`,
      breadcrumbName: `${cohort.name} (${cohort.instance})`,
    });

    const renderContent = (column = 2) => (
      <Descriptions size="small" column={column}>
        <Descriptions.Item label="Start">{ cohort.start }</Descriptions.Item>
        <Descriptions.Item label="End">{ cohort.end }</Descriptions.Item>
        <Descriptions.Item label="Duration">12 weeks, full-time</Descriptions.Item>
        <Descriptions.Item label="Location">Remote</Descriptions.Item>
        <Descriptions.Item label="Client Success Manager"><a href="/b2b-for-good/">Amy Almeida</a></Descriptions.Item>
        <Descriptions.Item label="Instructors"><a href="/b2b-for-good/">Marc Wright</a>, <a href="/b2b-for-good/">Isha Arora</a>, <a href="/b2b-for-good/">Casey Harding</a></Descriptions.Item>
        <Descriptions.Item label="Students"><a href="/b2b-for-good/">{ cohort.studentCount }</a></Descriptions.Item>
      </Descriptions>
    );

    const columns = [
      {
        title: 'Event',
        dataIndex: 'eventName',
      },
      {
        title: 'Date',
        dataIndex: 'date',
      }
    ];

    return (
      <div>
        <div style={{  padding: '20px' }}>
          <Steps progressDot size="small" current={ cohort.currentStep }>
            <Step title="Applications" />
            <Step title="Pre-work" />
            <Step title="Assessment" />
            <Step title="Interviews" />
            <Step title="Training" />
            <Step title="Onboarding" />
          </Steps>
        </div>
        <PageHeader
          className="details-page-header"
          title={ cohort.name }
          subTitle={ cohort.instance }
          tags={<Tag color="blue">{ cohort.stage }</Tag>}
          footer={
            <div>
              <Divider orientation="left" style={{ paddingTop: '24px' }}>Upcoming Events</Divider>
              <Table columns={columns} pagination={false} dataSource={ cohort.news } size="middle" />

              <Divider orientation="left" style={{ paddingTop: '24px' }}>Sponsoring</Divider>
              <section style={{ paddingTop: '22px' }}>
                <Row gutter={16}>
                  {
                    cohort.students.map(student => {
                      return (
                        <Col span={8}>
                          <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={ student.name } src={ student.pic } />}
                          >
                            <Meta title={ student.name } description="" />
                          </Card>
                        </Col>
                      )
                    })
                  }
                  
                  
                  
                </Row>
              </section>

              <Divider orientation="left" style={{ paddingTop: '24px' }}>Progress Tracker</Divider>
              <section style={{ paddingTop: '22px' }}>
                <Row gutter={16}>
                  <Col span={6}>
                    <h4>Front-end Development</h4>
                    <Steps direction="vertical" current={cohort.currentTopic} style={{ marginTop: '22px' }}>
                      <Step title="Installfest" description="" />
                      <Step title="Working w/ the Command Line" description="" />
                      <Step title="Git &amp; GitHub" description="" />
                      <Step title="HTML5 and Web Accessibility" description="" />
                      <Step title="CSS Selectors and Styling" description="" />
                      <Step title="Responsive Design" description="" />
                      <Step title="CSS Positioning and Layout (Flexbox)" description="" />
                      <Step title="JavaScript Data Types, Variables &amp; Control Flow" description="" />
                      <Step title="Arrays &amp; Loops" description="" />
                      <Step title="Objects" description="" />
                      <Step title="Functions and Scope" description="" />
                      <Step title="Asynchronous Callbacks and Closures" description="" />
                      <Step title="Events and Event Handling" description="" />
                      <Step title="DOM Manipulation" description="" />
                      <Step title="OOP JS, Constructors and Prototypal Inheritance" description="" />
                      <Step title="Unit 1 Project" description="Spend a few days building a front-end game using HTML, CSS and JavaScript." />
                    </Steps>
                  </Col>
                  <Col span={6}>
                    <h4>Back-end Development</h4>
                    <Steps direction="vertical" current={cohort.currentTopic} initial={16} style={{ marginTop: '22px' }}>
                      <Step title="How the Internet Works" description="" />
                      <Step title="Intro to Node.js,  NPM and Modules" description="" />
                      <Step title="Express Framework" description="" />
                      <Step title="Routing" description="" />
                      <Step title="Views (EJS)" description="" />
                      <Step title="Forms and Query Parameters" description="" />
                      <Step title="Entity Relationship Diagrams" description="" />
                      <Step title="SQL Fundamentals" description="" />
                      <Step title="SQL Joins" description="" />
                      <Step title="Object Relational Mappers (Sequelize)" description="" />
                      <Step title="Deployment (Azure)" description="" />
                      <Step title="Unit 2 Group Project" description="Leverage Node.js, Express and Postgres to create a data driven web application that is capable of creating, updating and deleting user data. Projects will be deployed on Azure App Service." />
                    </Steps>
                  </Col>
                  <Col span={6}>
                    <h4>Front-end Frameworks</h4>
                    <Steps direction="vertical" current={cohort.currentTopic} initial={28} style={{ marginTop: '22px' }}>
                      <Step title="ES6" description="" />
                      <Step title="Components &amp; JSX" description="" />
                      <Step title="State &amp; Props" description="" />
                      <Step title="Unidirectional Data Flow" description="" />
                      <Step title="Component Lifecycle" description="" />
                      <Step title="Styling Components" description="" />
                      <Step title="React Router" description="" />
                      <Step title="Ajax" description="" />
                      <Step title="Working with React &amp; APIs (Fetch)" description="" />
                      <Step title="Testing Components (Jest and Enzyme)" description="" />
                      <Step title="Deploying React Applications" description="" />
                      <Step title="Unit 3 Group Project" description="Develop a data driven React application that consumes a Node.js and Postgres REST API." />
                    </Steps>
                  </Col>
                  <Col span={6}>
                    <h4>Advanced Exploration</h4>
                    <Steps direction="vertical" current={cohort.currentTopic} initial={40} style={{ marginTop: '22px' }}>
                      <Step title="Docker &amp; Docker Compose" description="" />
                      <Step title="SQL vs NoSQL" description="" />
                      <Step title="MongoDB - Collections &amp; Data Modeling" description="" />
                      <Step title="MongoDB - Mongoose" description="" />
                      <Step title="Intro to CI/CD (Azure Automated Deployments)" description="" />
                      <Step title="Intro to Computer Science Topics" description="" />
                      <Step title="Big O Notation" description="" />
                      <Step title="Data Structures" description="" />
                      <Step title="Algorithms" description="" />
                      <Step title="Capstone Project" description="Apply the topics you’ve learned throughout the course, while exercising creativity in choosing the technologies and skills on which you want to focus." />
                    </Steps>
                  </Col>
                </Row>
              </section>
              </div>
          }>
            {renderContent()}
        </PageHeader>
      </div>
    )
  }
}

export default CohortDetail;