import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import styled from 'styled-components';
import Products from './Products';
import history from '../history';

const GitContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`;

const IntroductionContainer = styled(Row)`
  border-radius: 4px;
  padding: 48px;
  margin-top: 48px;
  margin-bottom: 96px;
  max-width: 70%;
  background-color: white;
`;

class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <GitContainer>
          <IntroductionContainer>
            <Col>
              <Typography.Title level={3}>FresaLabs is software for everyone</Typography.Title>
              <Typography.Paragraph style={{ marginTop: 12, color: '#666' }}>
                We listen to real-world problems and build reliable, privacy‑respectful apps that help people every day.
              </Typography.Paragraph>
              <div style={{ marginTop: 20 }}>
                <Button type="primary" onClick={() => history.push('/apps')}>
                  Explore Android Apps
                </Button>
              </div>
            </Col>
          </IntroductionContainer>
        </GitContainer>
        <Products />
      </div>
    );
  }
}

export default Home;
