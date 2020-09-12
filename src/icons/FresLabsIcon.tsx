import React from 'react';
import styled from 'styled-components';
import FresaLabsImage from './FresaLabs.png';

const StyledTypography = styled.img`
  width: 126px;
  height: 36px;
  border-radius: 4px;
`;

class FresLabsIcon extends React.Component {
  render() {
    return (
      <div>
        <StyledTypography src={FresaLabsImage} />
      </div>
    );
  }
}

export default FresLabsIcon;
