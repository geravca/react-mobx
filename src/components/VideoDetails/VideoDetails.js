import React from 'react';
import styles from './VideoDetails.scss';
import {Col, Row} from 'reactstrap';
import PropTypes from 'prop-types';

const VideoDetails = (props) => {
  return (
    <Row>
      <Col lg="6">
        <div className={styles.youtubeContainer}>
          <iframe width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/${props.id}`}>
          </iframe>
        </div>
      </Col>
      <Col lg="6">
        <h3>{props.video.title}</h3>
        <p>{props.video.description}</p>
      </Col>
    </Row>
  );
};

VideoDetails.propTypes = {
  id: PropTypes.string.isRequired,
  video: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};


export default VideoDetails;
