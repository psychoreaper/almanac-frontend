import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Builder } from '../pages/Builder';
import { Landing } from '../pages/Landing';

export const DesignerLayout = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Builder />}></Route>
        <Route path={'/preview'} element={<Landing />}></Route>
      </Routes>
    </Router>
  );
};
