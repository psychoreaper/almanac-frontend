import styled from 'styled-components';

import { colors, CardsWrapper, Container } from '../ui';

const Wrapper = styled.div`
  height: 500px;
  width: 300px;
  background-color: ${colors.teal.light};
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
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
  const Card = ({ card }) => {
    return (
      <Wrapper>
        <h3>{card.title}</h3>
        <ul>
          {card.services.map((service, index) => (
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
      <CardsWrapper>
        {data.pricelist?.map((card, index) => {
          {
            card.title && card.price && <Card key={index} card={card} />;
          }
        })}
      </CardsWrapper>
    </Container>
  );
};
