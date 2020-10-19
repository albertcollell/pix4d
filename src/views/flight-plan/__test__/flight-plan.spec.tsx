import { shallow } from 'enzyme';
import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FlightPlan from '../flight-plan';

enzyme.configure({ adapter: new Adapter() });

describe('FlightPlan', () => {
  it('renders FlightPlan without crashing', () => {
    const wrapper = shallow(<FlightPlan />);
    expect(wrapper).toMatchSnapshot();
  });
});
