import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import AboutTheCompany from './AboutTheCompany';
import WaveBorder from './WaveBorder';

const StyledButton = styled.button`
  margin-top: 16px;
  width: 100%;
  background: black !important;
  border-radius: 4px;
  color: white;
  border: 2px solid white;
  text-align: center;
  padding: 4px;
  cursor: pointer;
`;

const StyledCol = styled(Col)`
  padding: 40px;
`;

const Container = styled.div`
  background: black;
`;

const QuickLinksTitle = styled.div`
  color: white;
  font-weight: 500;
  margin-bottom: 12px;
  font-size: 1.1rem;
`;

const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 8px;
  }
  a {
    color: rgb(143, 146, 150);
    text-decoration: none;
  }
  a:hover {
    color: white;
    text-decoration: underline;
  }
`;

const FooterNote = styled.div`
  color: rgb(143, 146, 150);
`;

interface State {
  message: string;
}

class Footer extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ message: e.target.value });
  };

  sendMessage = () => {
    /**
     * To send message here
     */
  };

  render() {
    return (
      <Container>
        <WaveBorder upperColor="#FFFFFF" lowerColor="#000000" animationNegativeDelay={4} />
        <Row>
          <StyledCol span={12}>
            <a href="mailto:admin@fresalabs.com">
              <StyledButton>Email us!</StyledButton>
            </a>
          </StyledCol>
          <StyledCol span={12}>
            <AboutTheCompany />
          </StyledCol>
        </Row>
        <Row>
          <StyledCol span={12}>
            <QuickLinksTitle>Quick Links</QuickLinksTitle>
            <LinksList>
              <li>
                <a href="#/apps">Android Apps</a>
              </li>
              <li>
                <a href="#/support">Support</a>
              </li>
              <li>
                <a href="#/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#/terms">Terms of Service</a>
              </li>
            </LinksList>
          </StyledCol>
          <StyledCol span={12}>
            <FooterNote>© {new Date().getFullYear()} FresaLabs. All rights reserved.</FooterNote>
          </StyledCol>
        </Row>
      </Container>
    );
  }
}

export default Footer;
