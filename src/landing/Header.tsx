import { Space } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #2b5e5e;
  color: white;

  z-index: 100;
  position: fixed;
  top: 70px;
`;

const Container = styled(Space)`
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <h6>ВАШЕ НАЗВАНИЕ</h6>
        <div>Раздел 1</div>
        <div>Раздел 2</div>
        <div>Раздел 3</div>
        {/*{state.telegram && <Button type={'link'}>В телегу</Button>}*/}
      </Container>
    </Wrapper>
  );
};
