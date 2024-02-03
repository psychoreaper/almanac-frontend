import { Fragment, useState } from 'react';

import { Checkbox, Form, Input } from 'antd';

export const Header = () => {
  const [contacts, setContacts] = useState<string[]>([]);

  const contactsOptions = [
    { label: 'Добавить кнопку Телефон', value: 'addPhone' },
    { label: 'Добавить телеграм', value: 'addTg' },
    { label: 'Добавить Whatsapp', value: 'addWA' },
  ];

  const onContactsChange = checkedValues => {
    setContacts(checkedValues);
  };

  return (
    <Fragment>
      {/*todo: загрузка логотипа */}
      <Checkbox.Group options={contactsOptions} onChange={onContactsChange} />
      <div style={{ marginTop: '20px' }}>
        {contacts.includes('addPhone') && (
          <Form.Item name={'phone'} label='Телефон'>
            <Input placeholder={'+79123456789'} />
          </Form.Item>
        )}
        {contacts.includes('addTg') && (
          <Form.Item name={'tg'} label='Telegram'>
            <Input addonBefore='https://t.me/' placeholder={'telegram'} />
          </Form.Item>
        )}
        {contacts.includes('addWA') && (
          <Form.Item name={'wa'} label='WhatsApp'>
            <Input addonBefore='https://wa.me/' placeholder={'whatsapp'} />
          </Form.Item>
        )}
      </div>
      {/*todo: добавить в хедер разделы из списка */}
      {/*todo: управление расположением (???????) */}
      {/*todo: выбор написания наименований разделов (капсом/с заглавной) */}
    </Fragment>
  );
};
