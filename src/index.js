import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {Provider} from 'mobx-react';
import {HashRouter} from 'react-router-dom';

import stores from './mobx';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

window._____APP_STATE_____ = stores;
ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
