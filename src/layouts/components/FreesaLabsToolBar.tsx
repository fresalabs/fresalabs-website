import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import FresLabsIcon from '../../icons/FresLabsIcon';
import RoutesBar from './RoutesBar';

const StyledToolBar = styled(Toolbar)`
  display: flex;
`;

const StyledAppBar = styled(AppBar)`
  height: 5%;
  width: 100%;
  .MuiToolbar-root {
    align-items: initial;
    background: black;
  }
  .MuiToolbar-regular {
    padding: 0 16px;
    .MuiGrid-align-items-xs-center {
      flex-direction: row;
    }
  }
`;

const StyledGrid = styled(Grid)``;

const Actions = styled(Grid)`
  flex-basis: 33%;
`;

class FreesaLabsToolBar extends React.Component {
  render() {
    return (
      <StyledAppBar position="fixed">
        <StyledToolBar>
          <StyledGrid container={true} justify="flex-start" alignItems="center">
            <FresLabsIcon />
          </StyledGrid>
          <Actions justify="flex-end" direction="row" alignItems="center" container={true}>
            <RoutesBar />
          </Actions>
        </StyledToolBar>
      </StyledAppBar>
    );
  }
}

export default FreesaLabsToolBar;
