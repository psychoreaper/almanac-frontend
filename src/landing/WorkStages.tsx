import { Timeline } from 'antd';

import { Container } from '../ui';

const MOCK = [
  {
    label: 'step 1 step 1 step 1 step 1 step 1 ',
    children:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
  {
    label: 'step 2 step 2 step 2 step 2 step 2 ',
    children:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
  {
    label: 'step 33333333333 ',
    children:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
  {
    label: 'step 4 4 step ',
    children:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
  {
    label: 'step 5 (five) ',
    children:
      'sdfjsldkfjsldkfjsldkfjlsdkjf sdfjsldkfjlsdkjflskdjflskdjflsdkfj sdlkfjeiurowmoicmiwemewkfjwoem sdfjkljweorkwpflweop sfoisdpfwepopmigropelkm',
  },
];

export const WorkStages = () => {
  return (
    <Container>
      <h2>Этапы работы с клиентом</h2>
      <div style={{ width: '50%' }}>
        <Timeline mode={'left'} items={MOCK} />
      </div>
    </Container>
  );
};
