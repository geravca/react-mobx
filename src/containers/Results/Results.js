import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

@inject('youTubeStore')
@observer
class Results extends Component {
  constructor(props) {
    super(props);
    this.renderVideos = this.renderVideos.bind(this);
  }

  componentDidMount() {
  }

  renderVideos() {
    let videoUi = null;
    const videoList = this.props.youTubeStore.list;
    if (videoList && videoList.length > 0) {
      if (!videoUi) {
        videoUi = [];
      }
      videoList.forEach((video, index)=>{
        console.log(JSON.parse(JSON.stringify(video)));
        videoUi.push(<div key={index}>video</div>);
      });
    }
    return videoUi;
  }

  render() {
    return (
      <div>
        {this.renderVideos()}
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
