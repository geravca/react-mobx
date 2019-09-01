import {observable} from 'mobx';

// App common strings/ data
export default class AppStore {
  @observable title = 'YouTube App';
  @observable searchTitle = 'Search in YouTube';
  @observable noResults = 'No Videos Found.'
}
