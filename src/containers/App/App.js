import React, {Component} from 'react';
import styles from './App.scss';
import {inject, observer} from 'mobx-react';
import {Container} from 'reactstrap';
import Header from '../../components/Header/Header';
import YouTubeSearch from '../YouTubeSearch/YouTubeSearch';

@inject('appStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.app}>
        <Container className={styles.appContainer}>
          <Header/>
          <Container fluid className={styles.appContents}>
            <YouTubeSearch/>
            <div>SOME CONTENT</div>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
