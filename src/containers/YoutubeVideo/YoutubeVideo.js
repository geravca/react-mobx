import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './YoutubeVideo.scss';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@withRouter
@inject('youTubeStore')
@observer
export default class YoutubeVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null
    };
  }

  componentDidMount() {
    const video = this.props.youTubeStore.getVideo(this.props.id);
    console.log(video);
    if (video) {
      this.setState({video: video});
    } else {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <div className={styles.youtubeVideo}>
        VIDEO
      </div>
    );
  }
}

YoutubeVideo.propTypes = {
  id: PropTypes.string.isRequired,
  youTubeStore: PropTypes.shape({
    getVideo: PropTypes.func
  })
};
