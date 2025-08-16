import React from 'react';
import styled from 'styled-components';
import FresLabsIcon from '../../icons/FresLabsIcon';
import RoutesBar from './RoutesBar';
import history from '../../history';

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: black;
  z-index: 1000;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 56px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
`;

class FreesaLabsToolBar extends React.Component {
  render() {
    return (
      <Bar>
        <Inner>
          <Left>
            <LogoWrapper onClick={() => history.push('/home')} aria-label="FresaLabs Home">
              <FresLabsIcon />
            </LogoWrapper>
          </Left>
          <Actions>
            <RoutesBar />
          </Actions>
        </Inner>
      </Bar>
    );
  }
}

export default FreesaLabsToolBar;
