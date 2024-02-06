import { Image } from 'antd';
import styled from 'styled-components';

import { colors, Container } from '../ui';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
  background-color: ${colors.teal.light};
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
`;

// const MOCK = {
//   text: [
//     'Судя по всему, ребята из The xx очень любят подолгу отмалчиваться, а потом внезапно врываться с чем-то очень цепляющим и запоминающимся. Так случилось и с новым синглом Jamie xx, который диджей выпустил сольно в рамках рекламной кампании Chanel. Здесь слушателя встречает достаточно умеренное начало, перетекающее в полнейший танцевальный разнос с кучей интересных сэмплов, вокальными вкраплениями, а под конец ещё и добавляются звуки перемотки плёнки.',
//     'На мой взгляд, получилось действительно соу гуд! А тем временем поговаривают, что сами The xx уже приступили к записи долгожданного нового альбома.',
//   ],
//   credits: 'Александров А.А.',
//   position: 'Руководитель студии',
//   image:
//     'https://static.wikia.nocookie.net/spiderman-films/images/f/fe/Spider-Man_%28Andrew_Garfield%29_Profile_Pic.png',
// };

export const About = ({ data }) => {
  return (
    <Container>
      <h2>Обо мне</h2>
      <Wrapper>
        <div style={{ width: '50%' }}>
          {data.about?.text.map((paragraph, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              {paragraph}
            </div>
          ))}
          <div>
            <b>{data.cover?.title}</b>
            <br />
            {data.about?.position}
          </div>
        </div>
        <Image width={'70%'} src={data.about?.image} />
      </Wrapper>
    </Container>
  );
};
