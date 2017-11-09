import styled from 'styled-components';

const BackgroundImage = styled.div`
  display: flex;
  position: relative;
  height: ${({ height }) => (height ? height : '100vh')};
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default BackgroundImage;
