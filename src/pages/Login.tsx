import { Fragment } from 'react';

import { Button, Form, Input, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from './Main';
import { authUser } from '../api/auth';
import { REGISTRATION } from '../constants';
import { LoginContainer, LoginWrapper } from '../ui';

export const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = values => {
    authUser(values)
      .then(data => {
        document.cookie = `token=${data.refresh_token}`;
        navigate(-1);
      })
      .catch(() => alert('Что-то пошло не так'));
  };

  return (
    <Fragment>
      <Header isEntering />
      <LoginContainer>
        <LoginWrapper>
          <Form form={form} colon={false} onFinish={onFinish}>
            <h2>Авторизация</h2>
            <Form.Item
              label='Эл. почта'
              name='email'
              rules={[{ required: true, type: 'email' }]}
            >
              <Input placeholder={'Электронная почта'} />
            </Form.Item>
            <Form.Item
              label='Пароль'
              name='password'
              rules={[{ required: true }]}
            >
              <Input.Password placeholder={'Пароль'} />
            </Form.Item>
            <Space
              style={{ justifyContent: 'space-between', width: '100%' }}
              direction={'horizontal'}
            >
              <Button
                htmlType={'submit'}
                type='primary'
                style={{ width: '112px' }}
              >
                Войти
              </Button>
              <Link to={{ pathname: REGISTRATION }}>
                <Button>Регистрация</Button>
              </Link>
            </Space>
          </Form>
        </LoginWrapper>
      </LoginContainer>
    </Fragment>
  );
};
