import { Button, Collapse, Form, Space } from 'antd';
import { Link } from 'react-router-dom';

import { About } from '../builder/About';
import { Contacts } from '../builder/Contacts';
import { Cover } from '../builder/Cover';
import { Examples } from '../builder/Examples';
import { Feedback } from '../builder/Feedback';
import { Header } from '../builder/Header';
import { Portfolio } from '../builder/Portfolio';
import { Pricelist } from '../builder/Pricelist';
import { WorkStages } from '../builder/WorkStages';
import { PREVIEW } from '../constants';

// const { Panel } = Collapse;

export const Builder = () => {
  const [form] = Form.useForm();
  /* TODO: сделать что-то с передачей инфы туда-сюда
  const { state } = useLocation();

  if (state) {
    form.setFieldsValue(state);
  }
  */

  const title = Form.useWatch('title', form);
  const subtitle = Form.useWatch('subtitle', form);
  const telegram = Form.useWatch('tg', form);

  const collapseItems = [
    { key: '1', label: 'Шапка', children: <Header /> },
    { key: '2', label: 'Обложка', children: <Cover /> },
    { key: '3', label: 'Услуги, стоимость', children: <Pricelist /> },
    { key: '4', label: 'Портфолио', children: <Portfolio /> },
    { key: '5', label: 'Примеры проектов', children: <Examples /> },
    { key: '6', label: 'Этапы работ с клиентами', children: <WorkStages /> },
    { key: '7', label: 'Обо мне', children: <About /> },
    { key: '8', label: 'Отзывы', children: <Feedback /> },
    { key: '9', label: 'Контакты', children: <Contacts /> },
    // { key: '10', label: 'Блог/Статьи', children: <Pricelist /> },
  ];

  return (
    <Form form={form} style={{ padding: '20px' }}>
      <Space
        direction='horizontal'
        style={{ width: '100%', justifyContent: 'space-between' }}
      >
        <h1>Конструктор</h1>
        <Link
          to={{ pathname: PREVIEW }}
          state={{ title: title, telegram: telegram, subtitle: subtitle }}
        >
          <Button type='primary'>Просмотр</Button>
        </Link>
      </Space>
      <Collapse items={collapseItems} />
    </Form>
  );
};
