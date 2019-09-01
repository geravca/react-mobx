import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import YouTubeSearch from '../../containers/YouTubeSearch/YouTubeSearch';
import Results from '../../containers/Results/Results';

@withRouter
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <YouTubeSearch/>
        <Results/>
      </Fragment>
    );
  }
}
