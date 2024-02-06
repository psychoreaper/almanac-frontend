import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  width: 500px;
  padding: 20px;
  height: 300px;
  border-radius: 8px;
  background-color: #b596d2;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    margin: 0 20px;
    height: fit-content;
  }
`;
