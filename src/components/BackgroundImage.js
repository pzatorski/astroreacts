import styled from 'styled-components';

import AstroImage from '../assets/images/diego-ph-222506.jpg';

const BackgroundImage = styled.div`
  display: flex;
  position: relative;
  height: 60rem;
  background-image: url(${AstroImage});
  background-position: bottom;
  background-size: cover;
`;

export default BackgroundImage;
