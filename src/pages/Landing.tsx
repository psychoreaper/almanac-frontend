import { Fragment } from 'react';

import { Button, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { Cover } from '../landing/Cover.tsx';
import { Header } from '../landing/Header.tsx';
import { Pricelist } from '../landing/Pricelist.tsx';

export const Landing = () => {
  const { state } = useLocation();

  return (
    <Fragment>
      <Space
        direction='horizontal'
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          padding: '10px',
          borderBottom: '2px solid black',
          boxSizing: 'border-box',
          position: 'fixed',
          top: 0,
          zIndex: 100,
          backgroundColor: 'white',
        }}
      >
        Вы просматриваете черновую версию вашей страницы. Чтобы внести или
        сохранить изменения, вернитесь на страницу редактирования.
        <Link to={{ pathname: '/' }} state={state}>
          <Button type='primary'>К редактированию</Button>
        </Link>
      </Space>
      <Header />
      <Cover />
      {/*{state.title && <h1>{state.title}</h1>}*/}
      {/*{state.subtitle && <p>{state.subtitle}</p>}*/}
      <Pricelist />
    </Fragment>
  );
};
