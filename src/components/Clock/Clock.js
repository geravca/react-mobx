import React, {Component} from 'react';
import Clock from 'react-live-clock';
import classnames from 'classnames';
import styles from './Clock.scss';

class ClockTime extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      date: new Date()
    };

    this.killClock = this.killClock.bind(this);
  }

  componentDidMount() {
    this.killClock();
    this.interval = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    this.killClock();
  }

  killClock() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    return (
      <Clock format={'hh:mm:ss:A'} ticking={true} className={classnames(styles.clock, 'float-sm-right')}/>
    );
  }
}

export default ClockTime;
