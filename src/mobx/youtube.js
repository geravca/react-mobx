import {action, observable} from 'mobx';
import {apiCall} from '../utils/api';

export default class YouTube {
  @observable list = []; // list of the videos retrieved
  @observable isError = false;

  @action
  /**
   * @name searchVideos
   * @description search youtube videos from given keyword, if no keyword, empties the list
   */
  async searchVideos(keywords) {
    if (keywords.length > 0) {
      try {
        const data = await apiCall(keywords);
        this.isError = false;
        this.list = data.result.items;
      } catch (error) {
        this.isError = true;
      }
    } else {
      this.list = [];
    }
  }

  @action
  /**
   * @name getVideo
   * @description get video data from given id, if found, store it in session storage, else get data from the storage
   * @param videoId
   * @returns {(any | undefined)|*}
   */
  getVideo(videoId) {
    let video = null;
    if (this.list.length > 0) {
      // assing the video data to the variable to return
      video = this.list.find((video) => {
        return video.id.videoId === videoId;
      });
      // store the video in session, no matters if found
      this.storeVideo(true, video);
    } else {
      const videoFromSession = this.storeVideo();
      // check if the loaded video, if so, has the same given id
      if (videoFromSession && videoFromSession.id.videoId === videoId) {
        video = videoFromSession;
      }
    }

    console.log(video);
    return video;
  }

  storeVideo(set = false, data = null) {
    if (set) {
      // save the session data
      sessionStorage.setItem('ytVideo', JSON.stringify(data));
    } else {
      // retrieve the session data
      return JSON.parse(sessionStorage.getItem('ytVideo'));
    }
  }
}
