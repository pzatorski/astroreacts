import styled from 'styled-components';

const MainMargin = styled.div`
  margin: 0rem 4rem;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export default MainMargin;
