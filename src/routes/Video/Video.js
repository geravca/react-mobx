import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import YoutubeVideo from '../../containers/YoutubeVideo/YoutubeVideo';

@withRouter
export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: null
    };
  }

  componentDidMount() {
    this.setState({videoId: this.props.match.params.id});
  }

  render() {
    if (this.state.videoId) {
      return (
        <Fragment>
          <YoutubeVideo id={this.state.videoId}/>
        </Fragment>
      );
    }

    return null;
  }
}
