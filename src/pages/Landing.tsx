import { Fragment, useEffect, useState } from 'react';

import { /*Button,*/ Spin } from 'antd';
import { /*Link,*/ useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getLanding } from '../api/landing';
// import { BUILDER } from '../constants';
import { About } from '../landing/About';
import { Contacts } from '../landing/Contacts';
import { Cover } from '../landing/Cover';
import { Feedback } from '../landing/Feedback';
import { Footer } from '../landing/Footer';
import { Header } from '../landing/Header';
import { Portfolio } from '../landing/Portfolio';
import { Pricelist } from '../landing/Pricelist';
import { WorkStages } from '../landing/WorkStages';

const WarningWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid black;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: white;
  align-items: center;

  @media (max-width: 1200px) {
    height: fit-content;
  }
`;

export const Landing = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const id = state.id;

  useEffect(() => {
    getLanding({ id: id }).then(resp => setData(resp));
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <WarningWrapper>
        {/*Вы просматриваете черновую версию вашей страницы. Чтобы внести или
        сохранить изменения, вернитесь на страницу редактирования.
        <Link to={{ pathname: BUILDER }} state={state}>
          <Button type='primary'>К редактированию</Button>
        </Link>*/}
        Вы видите MVP-версию лендинга.
      </WarningWrapper>
      {loading && <Spin></Spin>}
      {!loading && (
        <Fragment>
          <Header data={data} />
          <Cover data={data} />
          <div style={{ backgroundColor: 'white', padding: '20px 0' }}>
            <Feedback data={data} />
            <Pricelist data={data} />
            <Portfolio data={data} />
            <WorkStages data={data} />
            <About data={data} />
            <Contacts data={data} />
          </div>
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
};
