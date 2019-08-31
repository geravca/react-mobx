import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Col, Container, Jumbotron, Row} from 'reactstrap';
import ClockTime from '../Clock/Clock';

import styles from './Header.scss';
import {inject, observer} from 'mobx-react';
import logo from '../../logo.svg';


@inject('appStore')
@observer
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron fluid className={styles.header}>
        <img src={logo} className={styles.appLogo} alt="logo"/>
        <h4 className={styles.title}>{this.props.appStore.title}</h4>
        <div className={styles.headerContent}>
          <Container fluid>
            <Row>
              <Col xs="9">
                {this.props.appStore.title}
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

export default Header;
