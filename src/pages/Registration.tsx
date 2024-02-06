import { Fragment } from 'react';

import { Button, Form, Input } from 'antd';

import { Header } from './Main';
import { createUser } from '../api/auth';
import { LoginContainer, LoginWrapper } from '../ui';

export const Registration = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
    createUser(values).then(data => console.log(data));
  };

  return (
    <Fragment>
      <Header />
      <LoginContainer>
        <LoginWrapper>
          <Form form={form} colon={false} onFinish={onFinish}>
            <h2>Регистрация </h2>
            <Form.Item
              label='Эл. почта'
              name='email'
              rules={[{ required: true, type: 'email' }]}
            >
              <Input placeholder={'Электронная почта'} />
            </Form.Item>
            <Form.Item label='Имя, фамилия' name='username'>
              <Input placeholder={'Отображаемое имя'}></Input>
            </Form.Item>
            <Form.Item
              label='Пароль'
              name='password'
              rules={[{ required: true }]}
            >
              <Input.Password placeholder={'Пароль'} />
            </Form.Item>
            <Button htmlType='submit' type='primary'>
              Регистрация
            </Button>
          </Form>
        </LoginWrapper>
      </LoginContainer>
    </Fragment>
  );
};
