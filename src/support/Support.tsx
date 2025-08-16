import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const Page = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 32px 24px 80px 24px;
  background: #fff;
  border-radius: 8px;
  margin-top: 48px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const List = styled.ul`
  padding-left: 18px;
`;

class Support extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <Typography.Title level={4}>Support</Typography.Title>
          <div style={{ color: '#666', margin: '12px 0 24px 0' }}>
            We're here to help. Find answers below or reach us directly.
          </div>

          <Section>
            <Typography.Title level={5}>Contact</Typography.Title>
            <List>
              <li>
                Email: <a href="mailto:admin@fresalabs.com">admin@fresalabs.com</a>
              </li>
              <li>
                Bug report: <a href="mailto:admin@fresalabs.com?subject=Bug%20Report">Send details and screenshots</a>
              </li>
              <li>
                Feature request: <a href="mailto:admin@fresalabs.com?subject=Feature%20Request">Share your idea</a>
              </li>
            </List>
          </Section>

          <Section>
            <Typography.Title level={5}>FAQs</Typography.Title>
            <List>
              <li>
                How do I delete my data?
                <div>
                  Email us at <a href="mailto:admin@fresalabs.com">admin@fresalabs.com</a> with the subject "Data
                  deletion request".
                </div>
              </li>
              <li>
                Do your apps work offline?
                <div>Yes, many of our apps are designed to work offline-first.</div>
              </li>
              <li>
                Do you sell data or show ads?
                <div>No. We are privacy-first and do not sell your data.</div>
              </li>
            </List>
          </Section>

          <Section>
            <Typography.Title level={5}>Policies</Typography.Title>
            <List>
              <li>
                <a href="#/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#/terms">Terms of Service</a>
              </li>
            </List>
          </Section>
        </Container>
      </Page>
    );
  }
}

export default Support;
