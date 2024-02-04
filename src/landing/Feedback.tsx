import { Avatar, Progress } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 150px;
  right: 15px;
  width: 320px;
  max-height: 600px;
  z-index: 400;
  background-color: #deebeb;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const MOCK = [
  { username: 'Олег Тинькоф', rate: 5, text: 'Круто! Да это ж круто!' },
  {
    username: 'Прасковья Константинова',
    rate: 1,
    text: 'Ужас!!!! необращайтесь к этому с позволения сказать мас...',
  },
  { username: 'Ицык Цыпер', rate: 3, text: 'С пивком потянет' },
];

const Review = ({ review }) => {
  const getDisplayName = name => {
    const words = name.split(' ');
    return `${words[0]} ${words[1][0]}.`;
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Avatar style={{ marginRight: '10px' }}>{review.username[0]}</Avatar>{' '}
      {getDisplayName(review.username)}
      <Progress size={'small'} percent={review.rate * 20} showInfo={false} />
      {review.text}
    </div>
  );
};

export const Feedback = () => {
  return (
    <Wrapper>
      <h2>Отзывы о дизайнере</h2>
      {MOCK.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </Wrapper>
  );
};
