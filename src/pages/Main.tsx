import { useEffect } from 'react';

import { Button, Form, Input, Tag, Image } from 'antd';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { getUser } from '../api/auth';
import { LOGIN, SETTINGS } from '../constants';
import { colors, Container } from '../ui';
import { getCookie } from '../utils/getCookie';
import { isAuthorized } from '../utils/isAuthorized';
import { useWidth } from '../utils/useWidth';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  color: white;
  background-color: rebeccapurple;
`;

const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-weight: bold;
  font-size: 32px;
`;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const CardWrapper = styled.div<{ theme: string }>(
  ({ theme }) => css`
    width: 300px;
    height: 150px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    color: white;

    background: linear-gradient(
      0deg,
      ${colors[theme].light} 0%,
      ${colors[theme].dark} 100%
    );
  `,
);

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MOCK = [
  {
    name: 'Барти Расстрелли',
    tags: ['дворец', 'гостиная', 'библиотека'],
    theme: 'teal',
    id: '3',
  },
  {
    name: 'Барти Расстрелли',
    tags: ['дворец', 'гостиная', 'библиотека'],
    theme: 'teal',
    image: 'https://i.ytimg.com/vi/CoXPUHOqWdE/hq720.jpg',
  },
  {
    name: 'Барти Расстрелли',
    tags: ['дворец', 'гостиная', 'библиотека'],
    theme: 'teal',
    image: 'https://i.ytimg.com/vi/CoXPUHOqWdE/hq720.jpg',
  },
  {
    name: 'Домми Трезини',
    tags: ['дворец', 'спальня'],
    theme: 'amber',
    image: 'https://i.ytimg.com/vi/CoXPUHOqWdE/hq720.jpg',
  },
  {
    name: 'Домми Трезини',
    tags: ['дворец', 'спальня'],
    theme: 'amber',
    image: 'https://i.ytimg.com/vi/CoXPUHOqWdE/hq720.jpg',
  },
  {
    name: 'Тед Мосби',
    tags: ['дом', 'лужайка'],
    theme: 'amethyst',
    image: 'https://i.ytimg.com/vi/CoXPUHOqWdE/hq720.jpg',
  },
  {
    name: 'Домми Трезини',
    tags: ['дворец', 'спальня'],
    theme: 'amber',
    image: 'https://i.ytimg.com/vi/CoXPUHOqWdE/hq720.jpg',
  },
  {
    name: 'Тед Мосби',
    tags: ['дом', 'лужайка'],
    theme: 'amethyst',
    image: 'https://i.ytimg.com/vi/CoXPUHOqWdE/hq720.jpg',
  },
  {
    name: 'Тед Мосби',
    tags: ['дом', 'лужайка'],
    theme: 'amethyst',
    image: 'https://i.ytimg.com/vi/CoXPUHOqWdE/hq720.jpg',
  },
];

const Card = ({ card }) => {
  return (
    <CardWrapper theme={card.theme}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {card.name}
          </div>
          {card.tags.map((tag, index) => (
            <Tag key={index} color={'volcano'}>
              {tag}
            </Tag>
          ))}
        </div>
        <Image width={100} src={card.image} />
      </div>
    </CardWrapper>
  );
};

export const Header = () => {
  const width = useWidth();
  const isAuthed = isAuthorized();
  const userId = getCookie('user_id');
  console.log(userId);

  return (
    <HeaderWrapper>
      <HeaderContainer>Almanac</HeaderContainer>
      {!isAuthed && (
        <Link
          style={{ position: 'fixed', top: '20px', right: '20px' }}
          to={{ pathname: LOGIN }}
        >
          <Button>Войти</Button>
        </Link>
      )}
      {isAuthed && (
        <Link
          style={{ position: 'fixed', top: '20px', right: '20px' }}
          to={{ pathname: SETTINGS }}
          state={{ id: userId }}
        >
          <Button>{width >= 1200 ? 'Личный кабинет' : 'ЛК'}</Button>
        </Link>
      )}
    </HeaderWrapper>
  );
};

export const Main = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    getUser({ id: '1' })
      .then(({ resp }) => console.log(resp))
      .catch(resp => console.error(resp));
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Form form={form} colon={false}>
          <Form.Item name={'search'}>
            <SearchWrapper>
              <Input placeholder={'Ищите дизайнера по тегам...'} />
              <Button htmlType={'submit'}>Искать</Button>
            </SearchWrapper>
          </Form.Item>
        </Form>
        <h2>Лучшие карточки за сегодня</h2>
        <CardsGrid>
          {MOCK.map((card, index) => (
            <Card key={index} card={card}></Card>
          ))}
        </CardsGrid>
      </Container>
    </div>
  );
};
