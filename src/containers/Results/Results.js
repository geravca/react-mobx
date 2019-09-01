import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import styles from './Results.scss';
import ResultItem from '../../components/ResultItem/ResultItem';

@inject('youTubeStore')
@observer
class Results extends Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
    this.videoClickHandler = this.videoClickHandler.bind(this);
  }

  videoClickHandler(id) {
    console.log('SELECTED ID', id);
  }

  renderResults() {
    let videoUi = <div className={styles.emptyResults}>Empty Results.</div>;
    const videoList = this.props.youTubeStore.list;
    if (videoList && videoList.length > 0) {
      videoUi = [];
      videoList.forEach((video, index) => {
        videoUi.push(
          <ResultItem key={index}
                      id={video.channelId}
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

export default Results;
