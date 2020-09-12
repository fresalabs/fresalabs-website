import React from 'react';
import styled from 'styled-components';
import FreesaLabsToolBar from './FreesaLabsToolBar';
import Footer from './Footer';

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  margin-bottom: 200px;
  width: 100%;
  min-height: 45vh;
`;

class PrimarySearchAppBar extends React.Component<any> {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <FreesaLabsToolBar />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </Container>
    );
  }
}

export default PrimarySearchAppBar;
