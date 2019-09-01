import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './YoutubeVideo.scss';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Col, Row} from 'reactstrap';

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
    }
  }

  render() {
    if (this.state.video) {
      const video = this.state.video.snippet;
      return (
        <div className={classnames(styles.youtubeVideo, 'container')}>
          <Row>
            <Col lg="6">
              <div className={styles.youtubeContainer}>
                <iframe width="420"
                        height="315"
                        src={`https://www.youtube.com/embed/${this.props.id}`}>
                </iframe>
              </div>
            </Col>
            <Col lg="6">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </Col>

          </Row>
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
    getVideo: PropTypes.func,
    currentVideo: PropTypes.object
  })
};
