import styled from 'styled-components';

const BackgroundImage = styled.div`
  display: flex;
  position: relative;
  height: ${({ height }) => (height ? height : '100vh')};
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  /* Fade in animation when page loads */

  opacity: 0;
  -webkit-animation: fadein ease-in 0.5s; /* Safari, Chrome */
  -moz-animation: fadein ease-in 0.5s; /* Firefox */
  -ms-animation: fadein ease-in 0.5s; /* Internet Explorer */
  -o-animation: fadein ease-in 0.5s; /* Opera */
  animation: fadein ease-in 0.5s;

  animation-fill-mode: forwards;
  animation-duration: 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default BackgroundImage;
