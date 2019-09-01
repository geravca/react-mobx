import {action, observable} from 'mobx';
import {getList, getCurrentVideo, getVideoComments} from '../utils/api';

export default class YouTube {
  @observable list = []; // list of the videos retrieved
  @observable isError = false; // erros while searching
  @observable currentVideo = null; // current video object
  @observable videoComments = []; // comments from current video

  @action
  /**
   * @name searchVideos
   * @description search youtube videos from given keyword, if no keyword, empties the list
   */
  async searchVideos(keywords) {
    if (keywords.length > 0) {
      try {
        const data = await getList(keywords);
        this.isError = false;
        this.list = data.items;
      } catch (error) {
        this.isError = true;
      }
    } else {
      this.list = [];
    }
  }

  @action
  /**
   * @description get video details per given video ID. The video ID is extracted from url params
   * @param   {string} videoId
   */
  async getVideoDetails(videoId) {
    try {
      const data = await getCurrentVideo(videoId);
      this.currentVideo = data.items[0];
    } catch (e) {
      this.currentVideo = null;
      console.log('CURRENT_VIDEO', e);
    }
  }

  /**
   * @description get comments from a particular video (VideoId)
   * @param   {string} videoId
   * @returns {Promise<void>}
   */
  @action async getComments(videoId){
    try {
      const data = await getVideoComments(videoId);
      this.videoComments = data.items;
    } catch (e) {
      this.videoComments = [];
      console.log('COMMENTS', e);
    }
  }
}
