import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Card, Tooltip, Typography, Tag } from 'antd';
import { AndroidOutlined, ExportOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Meta } = Card;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled(Typography.Title)`
  text-align: center;
  margin: 60px 0 16px 0;
`;

const SubHeader = styled(Typography.Paragraph)`
  text-align: center;
  color: #666;
  margin-bottom: 32px;
`;

const AppsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  animation: ${fadeIn} 500ms ease both;
  .ant-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 8px;
  }
`;

const TrustRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px 0 24px 0;
  color: #4caf50;
  svg {
    margin-right: 6px;
  }
`;

interface AppItem {
  name: string;
  description: string;
  playStoreLink?: string;
  comingSoon?: boolean;
  features?: string[];
}

const apps: AppItem[] = [
  {
    name: 'PharmD Notes',
    description: 'Pharmacy notes and references at your fingertips.',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.fresalabs.pharmdnotes',
  },
  {
    name: 'Property Troop',
    description: 'Property management and organization made simple.',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.fresalabs.propertytroop',
  },
];

class Apps extends React.Component {
  render() {
    return (
      <Page>
        <Header level={3}>Android Apps</Header>
        <SubHeader>Reliable, privacy-respectful tools for everyday life</SubHeader>
        <TrustRow>
          <SafetyCertificateOutlined /> Trusted by the community • Privacy-first • No dark patterns
        </TrustRow>
        <AppsContainer>
          {apps.map((app) => (
            <Card
              key={app.name}
              style={{ width: 320 }}
              actions={[
                app.playStoreLink ? (
                  <Tooltip title="View on Google Play" key="play">
                    <a href={app.playStoreLink} target="_blank" rel="noopener noreferrer">
                      <ExportOutlined />
                    </a>
                  </Tooltip>
                ) : (
                  <Tooltip title="Coming soon" key="coming-soon">
                    <span style={{ color: '#888' }}>Coming soon</span>
                  </Tooltip>
                ),
              ]}
            >
              <Meta
                avatar={<AndroidOutlined />}
                title={app.name}
                description={
                  <div>
                    <div style={{ marginBottom: 8 }}>{app.description}</div>
                    <div>
                      {(app.features || []).map((f) => (
                        <Tag style={{ marginRight: 6, marginBottom: 6 }} key={f}>
                          {f}
                        </Tag>
                      ))}
                    </div>
                  </div>
                }
              />
            </Card>
          ))}
        </AppsContainer>
      </Page>
    );
  }
}

export default Apps;
