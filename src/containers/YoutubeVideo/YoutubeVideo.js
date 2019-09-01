import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './YoutubeVideo.scss';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import CommentList from '../../components/CommentList/CommentList';
import VideoDetails from '../../components/VideoDetails/VideoDetails';

@withRouter
@inject('youTubeStore')
@observer
export default class YoutubeVideo extends Component {

  componentDidMount() {
    this.props.youTubeStore.getVideoDetails(this.props.id);
    this.props.youTubeStore.getComments(this.props.id);
  }

  render() {
    if (this.props.youTubeStore.currentVideo) {
      return (
        <div className="container">
          <VideoDetails id={this.props.id} video={this.props.youTubeStore.currentVideo.snippet}/>
          <CommentList list={this.props.youTubeStore.videoComments}/>
        </div>

      );
    }
    return (
      <div className={styles.emptyResult}>Sorry, this video was not found.</div>
    );
  }
}

YoutubeVideo.propTypes = {
  id: PropTypes.string.isRequired,
  youTubeStore: PropTypes.shape({
    getVideoDetails: PropTypes.func,
    getComments: PropTypes.func,

    videoComments: PropTypes.array,
    currentVideo: PropTypes.object
  })
};
