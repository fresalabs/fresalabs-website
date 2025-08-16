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

class Privacy extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <Typography.Title level={4}>Privacy Policy</Typography.Title>
          <Updated>Last updated: August 16, 2025</Updated>

          <Section>
            <Typography.Title level={5}>Overview</Typography.Title>
            <div>
              FresaLabs builds simple, reliable software for everyone. We collect the minimum information required to
              deliver and improve our apps. We never sell your data.
            </div>
          </Section>

          <Section>
            <Typography.Title level={5}>Information We Collect</Typography.Title>
            <ul>
              <li>Directly provided data (e.g., feedback you email to us).</li>
              <li>Optional analytics that help us understand app performance (disabled by default where possible).</li>
              <li>No sensitive personal data is collected without your explicit action.</li>
            </ul>
          </Section>

          <Section>
            <Typography.Title level={5}>How We Use Information</Typography.Title>
            <ul>
              <li>To operate and improve our apps and services.</li>
              <li>To communicate updates, respond to support, and fix issues.</li>
            </ul>
          </Section>

          <Section>
            <Typography.Title level={5}>Data Retention</Typography.Title>
            <div>
              We keep information only as long as necessary to provide the service. You can request deletion of your
              data at any time by emailing <a href="mailto:admin@fresalabs.com">admin@fresalabs.com</a>.
            </div>
          </Section>

          <Section>
            <Typography.Title level={5}>Third-Party Services</Typography.Title>
            <div>
              Some apps may link to or integrate third‑party services (e.g., Google Play for distribution). Their
              respective privacy policies apply when you use those services.
            </div>
          </Section>

          <Section>
            <Typography.Title level={5}>Children's Privacy</Typography.Title>
            <div>Our apps are not directed to children under 13. We do not knowingly collect data from children.</div>
          </Section>

          <Section>
            <Typography.Title level={5}>Changes</Typography.Title>
            <div>We may update this policy from time to time. We will update the date above when changes are made.</div>
          </Section>

          <Section>
            <Typography.Title level={5}>Contact</Typography.Title>
            <div>
              If you have any questions or requests (including data deletion requests), contact us at{' '}
              <a href="mailto:admin@fresalabs.com">admin@fresalabs.com</a>.
            </div>
          </Section>
        </Container>
      </Page>
    );
  }
}

export default Privacy;
