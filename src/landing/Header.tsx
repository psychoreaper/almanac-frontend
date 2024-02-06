import { Space } from 'antd';
import styled from 'styled-components';

import { colors } from '../ui';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${colors.teal.dark};
  color: ${colors.teal.text.light};

  z-index: 100;
  position: fixed;
  top: 70px;
`;

const Container = styled(Space)`
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 20px;
  }
`;

export const Header = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <h6>{data.cover?.title}</h6>
        {data.pricelist?.length && <div>Расценки</div>}
        {data.portfolio?.length && <div>Портфолио</div>}
        {data.workstages?.length && <div>Этапы работ</div>}
        {data.about?.id && <div>Обо мне</div>}
        {/*{state.telegram && <Button type={'link'}>В телегу</Button>}*/}
      </Container>
    </Wrapper>
  );
};
