import React from 'react';
import PropTypes from 'prop-types';

import styles from './ResultItem.scss';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

function maxCharacters(text) {
  if (text.length > 125) {
    text = text.substring(0, 125) + '...';
  }
  return text;
}

const ResultItem = (props) => {
  return (
    <Card onClick={() => props.clickHandler(props.id)} className={styles.resultItem}>
      <div className={styles.resultContainer}>
        <div className={styles.imgContainer}>
          <CardImg src={props.img}
                   alt={props.title}/>
        </div>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{maxCharacters(props.description)}</CardText>
        </CardBody>
      </div>
    </Card>
  );
};

ResultItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default ResultItem;
