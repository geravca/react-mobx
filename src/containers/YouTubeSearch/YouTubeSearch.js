import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search';

import {inject, observer} from 'mobx-react';

@inject('appStore')
@observer
class YouTubeSearch extends Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(value){
    console.log('SEARCH FOR::', value);
  }

  render() {
    return (
      <Search searchHandler={this.searchHandler} placeholder={this.props.appStore.searchTitle}/>
    );
  }
}

YouTubeSearch.propTypes = {
  appStore: PropTypes.shape({
    searchTitle: PropTypes.string
  })
};

export default YouTubeSearch;
