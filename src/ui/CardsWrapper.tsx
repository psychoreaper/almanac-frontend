import styled from 'styled-components';

import { colors } from '../ui';

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  div:nth-child(even) {
    background-color: ${colors.teal.dark};
    color: ${colors.teal.text.light};
  }
`;
