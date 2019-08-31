import {observable} from 'mobx';

export default class AppStore {
  @observable title = 'YouTube App';
  @observable searchTitle = 'Search in YouTube';
}
