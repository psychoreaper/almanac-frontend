import styled from 'styled-components';

import { colors } from '../ui';

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${colors.teal.dark};
  color: ${colors.teal.text.light};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return <Wrapper>Сделано на мощностях Almanac</Wrapper>;
};
