import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <BrowserRouter>
      <AddLogModal/>
      <AddBtn/>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
