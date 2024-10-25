import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  zIndex: -10;
  background-color: rgba(0,0,0,1);
  background-image: url('/backgrounds/home-background.png');
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center;
  background-repeat: no-repeat;
`;

const TheBackground: React.FC = () => {
  return <BackgroundContainer />;
};

export default TheBackground;
