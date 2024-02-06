import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1200em) {
    max-width: 600px;
    padding: 20px;
    box-sizing: border-box;
  }
`;
