import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import * as R from 'ramda';
import { menuItems } from '../contants';
import history from '../../history';

const Container = styled.div`
  flex-basis: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Selected = styled.div<{ selected: boolean } & React.HTMLProps<HTMLDivElement>>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  &.MuiButton-textPrimary {
    color: yellow;
  }
  .MuiButton-label {
    font-size: 16px;
    font-weight: 500;
  }
`;

class RoutesBar extends React.Component {
  render() {
    return (
      <Container>
        {R.map(
          (item) => (
            <Selected selected={history.location.pathname === item.path()} onClick={() => history.push(item.path())}>
              <StyledButton color="primary">{item.name}</StyledButton>
            </Selected>
          ),
          menuItems
        )}
      </Container>
    );
  }
}

export default RoutesBar;
