import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import { Provider } from 'react-redux';
import store from './store'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
    </Provider>
  );
}

export default App;
