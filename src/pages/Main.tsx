import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { LOGIN, PREVIEW } from '../constants';

export const Main = () => {
  return (
    <div>
      <div>
        header
        <Link to={{ pathname: LOGIN }}>
          <Button type='primary'>Войти</Button>
        </Link>
        <Link to={{ pathname: PREVIEW }}>
          Ссылка на единственную доступную сейчас превьюху
        </Link>
      </div>
      Almanac
    </div>
  );
};
