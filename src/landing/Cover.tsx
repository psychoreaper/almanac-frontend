import { Fragment } from 'react';

import styled from 'styled-components';

import { colors, Container } from '../ui';

const Wrapper = styled.div`
  height: 100vh;
  //background-color: ${colors.teal.light};
  background: linear-gradient(
    0deg,
    rgba(186, 221, 221, 1) 0%,
    rgba(43, 94, 94, 1) 100%
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
