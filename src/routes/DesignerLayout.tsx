import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {
  BUILDER,
  LOGIN,
  PREVIEW,
  REGISTRATION,
  ROOT,
  SETTINGS,
} from '../constants';
import { Builder } from '../pages/Builder';
import { Landing } from '../pages/Landing';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Registration } from '../pages/Registration';
import { Settings } from '../pages/Settings';

export const DesignerLayout = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROOT} element={<Main />}></Route>
        <Route path={LOGIN} element={<Login />}></Route>
        <Route path={REGISTRATION} element={<Registration />}></Route>
        <Route path={BUILDER} element={<Builder />}></Route>
        <Route path={PREVIEW} element={<Landing />}></Route>
        <Route path={SETTINGS} element={<Settings />}></Route>
      </Routes>
    </Router>
  );
};
