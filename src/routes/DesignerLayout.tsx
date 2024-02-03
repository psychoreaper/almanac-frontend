import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Builder } from '../pages/Builder.tsx';
import { Landing } from '../pages/Landing.tsx';

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
