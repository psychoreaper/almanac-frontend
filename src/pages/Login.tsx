import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { REGISTRATION } from '../constants';
import { LoginContainer, LoginWrapper } from '../ui';

export const Login = () => {
  const [form] = Form.useForm();

  return (
    <LoginContainer>
      <LoginWrapper>
        <Form form={form}>
          <h2>Авторизация</h2>
          <Input placeholder={'Логин'} />
          <Input.Password placeholder={'Пароль'} />
          <Button type='primary'>Войти</Button>
          <Link to={{ pathname: REGISTRATION }}>
            <Button>Регистрация</Button>
          </Link>
        </Form>
      </LoginWrapper>
    </LoginContainer>
  );
};
