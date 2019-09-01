import React, {Component} from 'react';
import styles from './App.scss';
import {Container} from 'reactstrap';
import Header from '../../components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Video from '../../routes/Video/Video';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <Container className={styles.appContainer}>
          <Header/>
          <Container fluid className={styles.appContents}>
            <Switch>
              <Route exact name="Home" path="/" component={Home}/>
              <Route exact name="Video" path="/:id" component={Video}/>
            </Switch>
          </Container>
        </Container>
      </div>
    );
  }
}

