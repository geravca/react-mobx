import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class Search extends Component {
  constructor(props) {
    super(props);

    this.timer = null;
    this.delay = 400;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  onChangeHandler(event) {
    const value = event.target.value;
    if (this.timer) {
      this.clearTimer();
    }

    this.timer = setTimeout(() => {
      this.props.searchHandler(value);
    }, this.delay);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  render() {
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button>{this.props.placeholder}</Button>
        </InputGroupAddon>
        <Input onChange={this.onChangeHandler}
               placeholder="Search"/>
      </InputGroup>

    );
  }
}

Search.defaultProps = {
  placeholder: 'Search'
};

Search.propTypes = {
  placeholder: PropTypes.string,
  searchHandler: PropTypes.func.isRequired
};

export default Search;
