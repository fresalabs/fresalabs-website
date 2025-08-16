import React from 'react';
import { Button } from 'antd';
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
  &.ant-btn-link {
    color: yellow;
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
            <Selected
              key={item.id}
              selected={history.location.pathname === item.path()}
              onClick={() => history.push(item.path())}
            >
              <StyledButton type="link">{item.name}</StyledButton>
            </Selected>
          ),
          menuItems
        )}
      </Container>
    );
  }
}

export default RoutesBar;
