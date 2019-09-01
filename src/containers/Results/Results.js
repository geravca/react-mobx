import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import styles from './Results.scss';
import ResultItem from '../../components/ResultItem/ResultItem';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('youTubeStore')
@observer
export default class Results extends Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
    this.videoClickHandler = this.videoClickHandler.bind(this);
  }

  videoClickHandler(id) {
    this.props.history.replace(`/${id}`)
  }

  renderResults() {
    let videoUi = <div className={styles.emptyResults}>Empty Results.</div>;
    const videoList = this.props.youTubeStore.list;

    if (videoList && videoList.length > 0) {
      videoUi = [];
      videoList.forEach((item, index) => {
        const video = item.snippet;
        //console.log(JSON.parse(JSON.stringify(video)));
        videoUi.push(
          <ResultItem key={index}
                      id={item.id.videoId}
                      img={video.thumbnails.medium.url}
                      title={video.title}
                      description={video.description}
                      clickHandler={this.videoClickHandler}/>
        );
      });
    }
    return videoUi;
  }

  render() {
    return (
      <div className={styles.results}>
        {this.renderResults()}
      </div>
    );
  }
}

Results.defaultProps = {
  list: [],
};

Results.propTypes = {
  youTubeStore: PropTypes.shape({
    list: PropTypes.array
  }),
};

