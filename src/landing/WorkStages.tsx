import { useState } from 'react';

import { Steps } from 'antd';

import { Container } from '../ui';

const MOCK = [
  {
    title: 'step 1 step 1 step 1 step 1 step 1 ',
    description:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
  {
    title: 'step 2 step 2 step 2 step 2 step 2 ',
    description:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
  {
    title: 'step 33333333333 ',
    description:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
  {
    title: 'step 4 4 step ',
    description:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
  {
    title: 'step 5 (five) ',
    description:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
];

export const WorkStages = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  return (
    <Container>
      <h2>Этапы работы с клиентом</h2>
      <Steps
        current={current}
        onChange={onChange}
        direction={'vertical'}
        items={MOCK}
      />
    </Container>
  );
};
