import React, {Component} from 'react';
import logo from '../../logo.svg';
import styles from './App.scss';
import {inject, observer} from 'mobx-react';

@inject('youTubeStore')
@observer
class App extends Component {
  constructor (props){
      super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>

          <img src={logo} className={styles.AppLogo} alt="logo"/>
          <p>
            Edit <code>"src/components/App/App.js"</code> and save to reload.
          </p>
          <a
            className={styles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
