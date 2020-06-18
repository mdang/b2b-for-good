import React, { Component } from 'react';
import { PageHeader, Steps, Descriptions, Tabs, Tag, Card, Col, Row } from 'antd';

import './CohortDetail.css';

const { Step } = Steps;
const { TabPane } = Tabs;
const { Meta } = Card;

const cohort6 = {
  name: 'Code for Good',
  instance: 'June 2020',
  currentStep: 4,
  studentCount: 24,
  stage: 'In Progress',
  start: 'June 24, 2020',
  end: 'September 25, 2020'
}

const cohort24 = {
  name: 'Code for Good',
  instance: 'October 2020',
  currentStep: 1,
  studentCount: 11,
  stage: 'Admissions',
  start: 'October 12, 2020',
  end: 'December 19, 2020'
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

    if (this.props.match.params.cohortId == 6) {
      cohort = cohort6;
    } else {
      cohort = cohort24;
    }

    routes.push({
      path: '/b2b-for-good/${ this.props.match.params.cohortId }',
      breadcrumbName: `${cohort.name} (${cohort.instance})`,
    });

    const renderContent = (column = 2) => (
      <Descriptions size="small" column={column}>
        <Descriptions.Item label="Start">{ cohort.start }</Descriptions.Item>
        <Descriptions.Item label="Completion">{ cohort.end }</Descriptions.Item>
        <Descriptions.Item label="Duration">12 weeks, full-time</Descriptions.Item>
        <Descriptions.Item label="Location">Remote</Descriptions.Item>
        <Descriptions.Item label="Client Success Manager"><a href="#">Amy Almeida</a></Descriptions.Item>
        <Descriptions.Item label="Instructors"><a href="#">Marc Wright</a>, <a href="#">Isha Arora</a>, <a href="#">Casey Harding</a></Descriptions.Item>
        <Descriptions.Item label="Students"><a href="#">{ cohort.studentCount }</a></Descriptions.Item>
      </Descriptions>
    );

    return (
      <div>
        <div style={{  padding: '20px' }}>
          <Steps size="small" current={ cohort.currentStep }>
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
            <Tabs defaultActiveKey="1">
              <TabPane tab="Sponsoring" key="1">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="student 1" src="https://ca.slack-edge.com/T024JRAUL-UCHNJCX4P-e1fc22a6af1c-512" />}
                    >
                      <Meta title="Tucker Wieland" description="" />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="student 2" src="https://ca.slack-edge.com/T024JRAUL-UCHNJCX4P-e1fc22a6af1c-512" />}
                    >
                      <Meta title="Tucker Wieland" description="" />
                    </Card>
                  </Col>
                  <Col span={8}></Col>
                </Row>
              </TabPane>
              <TabPane tab="Learning Journey" key="2">
                Two
              </TabPane>
            </Tabs>
          }>
            {renderContent()}
        </PageHeader>
      </div>
    )
  }
}

export default CohortDetail;