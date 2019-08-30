import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({adapter: new Adapter()});

describe('App Component', () => {
  let appMounted = null;

  beforeEach(() => {
    appMounted = mount(<App></App>);
  });

  it('should mount', () => {
    expect(appMounted).toBeTruthy();
  });

  it('should contain logo', () => {
    expect(appMounted.find('.App-logo')).toBeTruthy();
  });

  it('should contain Legend', () => {
    expect(appMounted.find('p').text()).toEqual('Edit "src/components/App/App.js" and save to reload.');
  });

  it('should contain anchor', () => {
    expect(appMounted.find('a').prop('href')).toEqual('https://reactjs.org');
  });

});
