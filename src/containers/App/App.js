import React, {Component} from 'react';
import styles from './App.scss';
import {inject, observer} from 'mobx-react';
import {Container} from 'reactstrap';
import Header from '../../components/Header/Header';
import YouTubeSearch from '../YouTubeSearch/YouTubeSearch';
import Results from '../Results/Results';

@inject('appStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <Container className={styles.appContainer}>
          <Header/>
          <Container fluid className={styles.appContents}>
            <YouTubeSearch/>
            <Results/>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
