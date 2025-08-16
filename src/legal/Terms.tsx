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

const Updated = styled.div`
  color: #666;
  margin: 12px 0 24px 0;
`;

class Terms extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <Typography.Title level={4}>Terms of Service</Typography.Title>
          <Updated>Last updated: August 16, 2025</Updated>

          <Section>
            <Typography.Title level={5}>Acceptance of Terms</Typography.Title>
            <div>By using FresaLabs apps or visiting our websites, you agree to these Terms.</div>
          </Section>

          <Section>
            <Typography.Title level={5}>Use of the Service</Typography.Title>
            <ul>
              <li>Do not abuse, reverse-engineer, or attempt to break our services.</li>
              <li>You are responsible for complying with applicable laws in your region.</li>
            </ul>
          </Section>

          <Section>
            <Typography.Title level={5}>Content</Typography.Title>
            <div>
              You retain rights to your content. You grant us permission to process it solely to provide the service.
            </div>
          </Section>

          <Section>
            <Typography.Title level={5}>Disclaimer</Typography.Title>
            <div>The services are provided "as is" without warranties of any kind.</div>
          </Section>

          <Section>
            <Typography.Title level={5}>Limitation of Liability</Typography.Title>
            <div>
              FresaLabs shall not be liable for any indirect or consequential damages to the maximum extent permitted by
              law.
            </div>
          </Section>

          <Section>
            <Typography.Title level={5}>Changes</Typography.Title>
            <div>
              We may update these Terms occasionally. Continued use constitutes acceptance of the revised Terms.
            </div>
          </Section>

          <Section>
            <Typography.Title level={5}>Contact</Typography.Title>
            <div>
              Questions about these Terms? Contact us at <a href="mailto:admin@fresalabs.com">admin@fresalabs.com</a>.
            </div>
          </Section>
        </Container>
      </Page>
    );
  }
}

export default Terms;
