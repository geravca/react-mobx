import React from 'react';
import styles from './VideoDetails.scss';
import {Col, Row} from 'reactstrap';
import PropTypes from 'prop-types';

const VideoDetails = (props) => {
  const video = props.currentVideo.snippet;
  const statistics = props.currentVideo.statistics;

  return (
    <Row className={styles.videoDetails}>
      <Col lg="6">
        <div className={styles.youtubeContainer}>
          <iframe width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/${props.id}`}>
          </iframe>
        </div>
        <div className={styles.statistics}>
          <Row>
            <Col>
              <span>Views:</span> {statistics.viewCount}
            </Col>
            <Col>
              <span>Likes:</span> {statistics.likeCount}
            </Col>
            <Col>
              <span>Dislikes:</span> {statistics.dislikeCount}
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg="6">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </Col>
    </Row>
  );
};

VideoDetails.propTypes = {
  id: PropTypes.string.isRequired,
  currentVideo: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }),
    statistics: PropTypes.shape({
      viewCount: PropTypes.string,
      likeCount: PropTypes.string,
      dislikeCount: PropTypes.string
    })
  })
};


export default VideoDetails;
