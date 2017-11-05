import styled from 'styled-components';

const MainMargin = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export default MainMargin;
