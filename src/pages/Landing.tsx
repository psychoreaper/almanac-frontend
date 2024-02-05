import { Fragment } from 'react';

import { Button, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { BUILDER } from '../constants';
import { About } from '../landing/About';
import { Contacts } from '../landing/Contacts';
import { Cover } from '../landing/Cover';
import { Feedback } from '../landing/Feedback';
import { Footer } from '../landing/Footer';
import { Header } from '../landing/Header';
import { Portfolio } from '../landing/Portfolio';
import { Pricelist } from '../landing/Pricelist';
import { WorkStages } from '../landing/WorkStages';

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
        <Link to={{ pathname: BUILDER }} state={state}>
          <Button type='primary'>К редактированию</Button>
        </Link>
      </Space>
      <Header />
      <Cover />
      <div style={{ backgroundColor: 'white', padding: '20px 0' }}>
        <Feedback />
        <Pricelist />
        <Portfolio />
        <WorkStages />
        <About />
        <Contacts />
      </div>
      <Footer />
    </Fragment>
  );
};
