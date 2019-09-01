import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Button, Col, Container, Jumbotron, Row} from 'reactstrap';
import ClockTime from '../Clock/Clock';

import styles from './Header.scss';
import {inject, observer} from 'mobx-react';
import logo from '../../logo.svg';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('appStore')
@observer
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: (this.props.history.location.pathname === '/')
    };

    this.renderBackOption = this.renderBackOption.bind(this);
    this.backClickHandler = this.backClickHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const isHome = (this.props.history.location.pathname === '/');
    if (prevState.isHome !== isHome) {
      this.setState({isHome: isHome});
    }
  }

  backClickHandler() {
    this.props.history.replace('/');
  }

  renderBackOption() {
    if (this.state.isHome) {
      return this.props.appStore.title;
    } else {
      return <Button onClick={this.backClickHandler} color="secondary">Back to Search</Button>;
    }
  }

  render() {
    return (
      <Jumbotron fluid className={styles.header}>
        <img src={logo} className={styles.appLogo} alt="logo"/>
        <h4 className={styles.title}>{this.props.appStore.title}</h4>
        <div className={styles.headerContent}>
          <Container fluid>
            <Row>
              <Col xs="9" className="align-self-center">
                {this.renderBackOption()}
              </Col>
              <Col xs="3">
                <ClockTime/>
              </Col>
            </Row>
          </Container>
        </div>

      </Jumbotron>
    );
  }
}

Header.propTypes = {
  appStore: PropTypes.shape({
    title: PropTypes.string
  }),
};

