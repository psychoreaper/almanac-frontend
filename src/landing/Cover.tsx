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

  @media (max-width: 1200px) {
    top: 25vh;
  }
`;

export const Cover = ({ data }) => {
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <HeadingWrapper>
            <h1>{data.cover?.title}</h1>
            <div>{data.cover?.subtitle}</div>
          </HeadingWrapper>
        </Container>
      </Wrapper>
    </Fragment>
  );
};
