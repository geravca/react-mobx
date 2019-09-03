import React from 'react';
import styles from './CommentList.scss';
import {Col, Row} from 'reactstrap';
import PropTypes from 'prop-types';

const CommentList = (props) => {
  let comments = null;
  if (props.list && props.list.length > 0) {
    comments = [];
    props.list.forEach((item, index) => {
      const comment = item.snippet.topLevelComment.snippet;
      comments.push(
        <div key={index} className={styles.comments}>
          <Row>
            <Col>
              <img src={comment.authorProfileImageUrl} alt={comment.authorDisplayName}/>
              <span>{comment.authorDisplayName}</span>
            </Col>
          </Row>
          <Row>
            <Col className={styles.comment}>
              {comment.textDisplay}
            </Col>
          </Row>
        </div>
      );
    });
  }
  return comments;
};

CommentList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    snippet: PropTypes.shape({
      topLevelComment: PropTypes.shape({
        authorProfileImageUrl: PropTypes.string,
        authorDisplayName: PropTypes.string,
        textDisplay: PropTypes.string
      })
    })
  }))
};

export default CommentList;
