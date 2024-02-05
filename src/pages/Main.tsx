import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { LOGIN } from '../constants';

export const Main = () => {
  return (
    <div>
      <div>
        header
        <Link to={{ pathname: LOGIN }}>
          <Button type='primary'>Войти</Button>
        </Link>
      </div>
      Almanac
    </div>
  );
};
