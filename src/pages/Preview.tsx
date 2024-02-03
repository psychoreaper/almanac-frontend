import { Button, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export const Preview = () => {
  const { state } = useLocation();

  return (
    <div>
      <Space
        direction='horizontal'
        style={{
          width: '100%',
          justifyContent: 'space-between',
          padding: '10px',
          borderBottom: '2px solid black',
        }}
      >
        Вы просматриваете черновую версию вашей страницы. Чтобы внести или
        сохранить изменения, вернитесь на страницу редактирования.
        <Link to={{ pathname: '/' }} state={state}>
          <Button type='primary'>К редактированию</Button>
        </Link>
      </Space>
      {/*ШАПкА*/}
      <Space
        direction='horizontal'
        style={{
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: '#badddd',
          padding: '0 10px',
        }}
      >
        <h6>ВАШЕ НАЗВАНИЕ</h6>
        <div>Раздел 1</div>
        <div>Раздел 2</div>
        <div>Раздел 3</div>
        {state.telegram && <Button type={'link'}>В телегу</Button>}
      </Space>
      {/*ЗАГОЛОВОК*/}
      {state.title && <h1>{state.title}</h1>}
      {state.subtitle && <p>{state.subtitle}</p>}
    </div>
  );
};
