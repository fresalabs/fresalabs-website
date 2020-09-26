import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Products from './Products';

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

class Home extends React.Component<{}> {
  render() {
    return (
      <div>
        <GitContainer>
          <IntroductionContainer>
            <Col>
              <Typography variant="h3">FresaLabs is open source software company</Typography>
            </Col>
          </IntroductionContainer>
        </GitContainer>
        <Products />
      </div>
    );
  }
}

export default Home;
