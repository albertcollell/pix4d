import { shallow } from 'enzyme';
import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders app without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
