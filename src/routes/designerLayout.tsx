import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Builder } from '../components/Builder.tsx';
import { Preview } from '../components/Preview.tsx';

export const DesignerLayout = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Builder />}></Route>
        <Route path={'/preview'} element={<Preview />}></Route>
      </Routes>
    </Router>
  );
};
