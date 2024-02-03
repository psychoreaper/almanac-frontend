import { Button, Collapse, Form, Space } from 'antd';
import { Link } from 'react-router-dom';

import { About } from '../features/About.tsx';
import { Contacts } from '../features/Contacts.tsx';
import { Cover } from '../features/Cover.tsx';
import { Examples } from '../features/Examples.tsx';
import { Feedback } from '../features/Feedback.tsx';
import { Header } from '../features/Header.tsx';
import { Portfolio } from '../features/Portfolio.tsx';
import { Pricelist } from '../features/Pricelist.tsx';
import { WorkStages } from '../features/WorkStages.tsx';

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
          to={{ pathname: '/preview' }}
          state={{ title: title, telegram: telegram, subtitle: subtitle }}
        >
          <Button type='primary'>Просмотр</Button>
        </Link>
      </Space>
      <Collapse items={collapseItems} />
    </Form>
  );
};