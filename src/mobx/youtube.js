import {action, observable} from 'mobx';
import {apiCall} from '../utils/api';

export default class YouTube {
  @observable currentVideo = null;
  @observable list = [];
  @observable isError = false;
  @observable loading = false;

  @action
  async searchVideos(keywords) {
    if (keywords.length > 0) {
      this.loading = true;
      try {
        const data = await apiCall(keywords);
        this.isError = false;
        this.loading = false;
        this.list = data.result.items.map((video) => {
          return {...video.snippet};
        });
      } catch (error) {
        this.isError = true;
        this.loading = false;
      }
    } else {
      this.list = [];
    }
  }
}
