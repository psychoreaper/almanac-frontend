import { Fragment } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Upload } from 'antd';

export const About = () => {
  const [form] = Form.useForm();
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Загрузить аватар</div>
    </button>
  );

  return (
    <Fragment>
      <Upload
        name='avatar'
        listType='picture-card'
        className='avatar-uploader'
        showUploadList={false}
        action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
        // beforeUpload={beforeUpload}
        // onChange={handleChange}
      >
        {uploadButton}
      </Upload>
      <Form form={form} colon={false}>
        <Form.Item label='Текст' name='email'>
          <Input.TextArea
            placeholder={'Небольшой текст о вас и вашей компании'}
          />
        </Form.Item>
        <Form.Item label='Подпись' name='username'>
          <Input placeholder={'Как бы вы хотели подписаться?'}></Input>
        </Form.Item>
        <Form.Item label='Должность' name='password'>
          <Input placeholder={'Ваша должность в компании'} />
        </Form.Item>
      </Form>
    </Fragment>
  );
};
