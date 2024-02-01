import { useState } from 'react';

import { Button, Checkbox, Collapse, Form, Input, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;

export const Builder = () => {
  const [form] = Form.useForm();
  const [contacts, setContacts] = useState([]);
  /* TODO: сделать что-то с передачей инфы туда-сюда
  const { state } = useLocation();

  if (state) {
    form.setFieldsValue(state);
  }
  */

  const title = Form.useWatch('title', form);
  const subtitle = Form.useWatch('subtitle', form);
  const telegram = Form.useWatch('tg', form);

  const contactsOptions = [
    { label: 'Добавить телеграм', value: 'addTg' },
    { label: 'Добавить ВКонтакте', value: 'addVk' },
    { label: 'Добавить электронную почту', value: 'addEmail' },
    { label: 'Добавить Behance', value: 'addBehance' },
  ];

  const onContactsChange = checkedValues => {
    setContacts(checkedValues);
  };

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
      <Collapse>
        <Panel key={1} header='Шапка'>
          <Checkbox.Group
            options={contactsOptions}
            onChange={onContactsChange}
          ></Checkbox.Group>
          {contacts.includes('addTg') && (
            <Form.Item name={'tg'} label='Telegram'>
              <Input
                addonBefore='https://t.me/'
                placeholder={'telegram'}
              ></Input>
            </Form.Item>
          )}
        </Panel>
        <Panel key={2} header='Заголовок'>
          <Form.Item name='title' label='Заголовок'>
            <Input placeholder='Введите заголовок'></Input>
          </Form.Item>
          <Form.Item name='subtitle' label='Подзаголовок'>
            <Input.TextArea placeholder='Введите подзаголовок'></Input.TextArea>
          </Form.Item>
        </Panel>
        <Panel key={3} header='Расценки'>
          <Form.Item name='cost1' label='Расценка 1'>
            <Input placeholder='Введите расценку'></Input>
          </Form.Item>
        </Panel>
      </Collapse>
    </Form>
  );
};
