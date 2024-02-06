import { Carousel } from 'antd';
import styled from 'styled-components';

import { colors, CardsWrapper, Container } from '../ui';
import { useWidth } from '../utils/useWidth';

const Wrapper = styled.div`
  height: 500px;
  width: 300px;
  background-color: ${colors.teal.light};
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  @media (max-width: 1200px) {
    width: 90%;
    margin: 0 20px;
  }
`;

const Price = styled.div`
  margin-top: auto;
  margin-left: auto;
`;

/*const MOCK = [
  {
    title: 'База',
    services: ['asas', 'sdsdsds', 'ssffffff'],
    price: '1000 руб/мес',
  },
  {
    title: 'Стандарт',
    services: ['asas', 'sdsdsds', 'ssffffff', 'asas', 'sdsdsds', 'ssffffff'],
    price: '10000 руб/мес',
  },
  {
    title: 'Топ',
    services: [
      'asas',
      'sdsdsds',
      'ssffffff',
      'asas',
      'sdsdsds',
      'ssffffff',
      'asas',
      'sdsdsds',
      'ssffffff',
    ],
    price: '100000 руб/мес',
  },
];*/

export const Pricelist = ({ data }) => {
  const width = useWidth();

  const Card = ({ card }) => {
    const services = card.services?.split('\n');
    return (
      <Wrapper>
        <h3>{card.title}</h3>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <Price>{card.price}</Price>
      </Wrapper>
    );
  };

  return (
    <Container>
      <h2>Расценки</h2>
      {width >= 1200 && (
        <CardsWrapper>
          {data.priceList?.map((card, index) => {
            return card.title && card.price && <Card key={index} card={card} />;
          })}
        </CardsWrapper>
      )}
      {width < 1200 && (
        <Carousel style={{ margin: '0 auto', width: '100%' }}>
          {data.priceList?.map((card, index) => {
            return card.title && card.price && <Card key={index} card={card} />;
          })}
        </Carousel>
      )}
    </Container>
  );
};
