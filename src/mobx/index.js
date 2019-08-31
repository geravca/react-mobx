import YouTube from './youtube';
import AppStore from './appStore';

const stores = {
  youTubeStore: new YouTube(),
  appStore: new AppStore()
};

export default stores;
