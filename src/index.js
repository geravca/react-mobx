import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';

import stores from './mobx';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

window._____APP_STATE_____ = stores;
ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
