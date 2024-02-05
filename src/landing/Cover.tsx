import { Fragment } from 'react';

import styled from 'styled-components';

import { colors, Container } from '../ui';

const Wrapper = styled.div`
  height: 100vh;
  //background-color: ;
  background: linear-gradient(
    0deg,
    ${colors.teal.light} 0%,
    ${colors.teal.dark} 100%
  );
  position: sticky;
  top: 70px;
  z-index: -1;
`;

const HeadingWrapper = styled.h1`
  position: relative;
  top: 45vh;
`;

export const Cover = () => {
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <HeadingWrapper>
            <h1>Александр Александрович Александров</h1>
            <div>дизайнер интерьеров и т.д.?</div>
          </HeadingWrapper>
        </Container>
      </Wrapper>
    </Fragment>
  );
};
