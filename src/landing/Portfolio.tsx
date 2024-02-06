import { Carousel, Image } from 'antd';
import styled from 'styled-components';

import { colors, Container } from '../ui';

const WIDTH = '100%';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${WIDTH};
  background-color: ${colors.teal.light};
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
`;

/*const MOCK = [
  {
    image:
      'https://i.ytimg.com/vi/fLHbOmD75iI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmfkJEBoPU277ta-pn-ES_bOFQVg',
    title: 'Проектик 1',
    subtitle: 'Очень клёвый проектик!!!',
  },
  {
    image:
      'https://avatars.mds.yandex.net/get-mpic/5233631/img_id4485389181271017259.jpeg/600x800',
    title: 'Проектик 2',
    subtitle: 'Невероятно клёвый проект!',
  },
  {
    image:
      'https://i.ytimg.com/vi/NDdJIYpgcMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNewXCxfHL_eH1WBC96oMchMO12g',
    title: 'Проектик 3',
    subtitle: 'Проект послабее, но тоже круто',
  },
  {
    image:
      'https://i.ytimg.com/vi/FbhypcvlorU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlrETlJB7BAG4hHIMsS3ciwYRQcw',
    title: 'Проектик 4',
    subtitle: 'Ну чёрт его знает',
  },
  {
    image:
      'https://i.ytimg.com/vi/WBne1JaH0nI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2Xn3tguHvOc_pKw3mkB6yLsrTtw',
    title: 'Проектик 5',
    subtitle: 'Полная хренота',
  },
];*/

export const Portfolio = ({ data }) => {
  const Card = ({ card }) => {
    return (
      <CardContainer>
        <Image height={400} src={card.image} />
        {card.title && <h3>{card.title}</h3>}
        {card.subtitle && <div>{card.subtitle}</div>}
      </CardContainer>
    );
  };

  return (
    <Container>
      <h2>Портфолио</h2>
      <Carousel style={{ margin: '0 auto', width: WIDTH }}>
        {data.portfolio?.map((card, index) => {
          return <Card card={card} key={index} />;
        })}
      </Carousel>
    </Container>
  );
};
