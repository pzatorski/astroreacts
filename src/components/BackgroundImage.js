import styled from 'styled-components';

import AstroImage from '../assets/images/diego-ph-222506.jpg';

const BackgroundImage = styled.div`
  display: flex;
  position: relative;
  height: 60rem;
  background-image: url(${AstroImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default BackgroundImage;
