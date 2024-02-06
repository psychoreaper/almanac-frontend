import { Fragment, useEffect, useState } from 'react';

import { Button, Spin } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { getUser } from '../api/auth';
import { ROOT } from '../constants';
import { Container } from '../ui';

export const Settings = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    getUser({ id: location.state.id })
      .then(resp => setData(resp))
      .catch(resp => console.error(resp));
    setLoading(false);
  }, []);

  //
  return (
    <Container>
      <Link to={{ pathname: ROOT }}>
        <Button>На главную</Button>
      </Link>
      <h2>Личный кабинет</h2>
      {loading && <Spin />}
      {!loading && (
        <Fragment>
          <h5>Электронная почта</h5>
          {/*@ts-ignore*/}
          <div>{data?.email}</div>
          <h5>Имя пользователя</h5>
          {/*@ts-ignore*/}
          <div>{data?.username}</div>
          <h5>Личный кабинет</h5>
          <div>
            Вы хотите выложить ваше портфолио? Свяжитесь с нами, мы напишем вам
            на e-mail!
          </div>
          <Button style={{ marginTop: '10px' }}>Отправить заявку!</Button>
        </Fragment>
      )}
    </Container>
  );
};
