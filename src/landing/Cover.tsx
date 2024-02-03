import { Fragment } from 'react';

import styled from 'styled-components';

import { Container } from '../ui/Container.tsx';

const Wrapper = styled.div`
  height: 900px;
  background-color: #badddd;
`;

const HeadingWrapper = styled.h1`
  position: relative;
  top: 400px;
`;

export const Cover = () => {
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <HeadingWrapper>
            <h1>Александр Александрович Александров</h1>
            <div>дизайнер интерьеров и т.д.</div>
          </HeadingWrapper>
        </Container>
      </Wrapper>
    </Fragment>
  );
};
