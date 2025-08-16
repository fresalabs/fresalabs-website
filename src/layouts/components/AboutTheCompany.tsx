import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  color: white;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin-bottom: 16px;
  font-size: 1.25rem;
`;

const Description = styled.div`
  color: rgb(143, 146, 150);
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

class AboutTheCompany extends React.Component {
  render() {
    return (
      <div>
        <Header>About the Company</Header>
        <Description>
          FresaLabs builds simple, reliable software for everyone. We listen to real problems from the public and create
          privacy‑respectful apps that help large groups in their everyday life.
        </Description>
      </div>
    );
  }
}

export default AboutTheCompany;
