import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveForever = keyframes`
  from { transform: translate3d(-90px, 0, 0); }
  to { transform: translate3d(85px, 0, 0); }
`;

const Waves = styled.svg<{ $animNegDelay?: number }>`
  position: relative;
  width: 100%;
  margin-bottom: -7px;
  height: 7vw;
  min-height: 7vw;

  & .parallax > use {
    animation: ${moveForever} 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite;
    animation-delay: ${({ $animNegDelay }) => ($animNegDelay ? `-${$animNegDelay}s` : '0s')};
  }
`;

class WaveBorder extends React.Component<any> {
  render() {
    const id = String(Math.random());
    const { className, lowerColor, upperColor, animationNegativeDelay, ...rest } = this.props;

    return (
      <div className={className} style={{ background: upperColor }} {...rest}>
        <Waves
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
          $animNegDelay={animationNegativeDelay}
        >
          <defs>
            <path id={id} d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href={`#${id}`} x="48" y="0" fill={lowerColor} />
          </g>
        </Waves>
      </div>
    );
  }
}

export default WaveBorder;
