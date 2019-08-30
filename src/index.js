import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import {Provider} from 'mobx-react';
import {HashRouter} from 'react-router-dom';

import stores from './mobx';

window._____APP_STATE_____ = stores;
ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
