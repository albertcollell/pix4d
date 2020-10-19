import React from "react";
import { mount, ReactWrapper, shallow, configure} from "enzyme";
import Fab from "@material-ui/core/Fab";
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../menu.component'
import { Dialog } from "@material-ui/core";

let TestComp: ReactWrapper;

configure({ adapter: new Adapter() })

const setRecordMock = jest.fn()
const setCursorMock = jest.fn()
const setNewPathMock = jest.fn() 
const setFlightPlansMock = jest.fn()

interface ICoordinate {
  lat: number;
  lng: number;
}

interface ICoordinates extends Array<ICoordinate> {}

const newPathMock: ICoordinates = []


beforeEach(() => {
    TestComp = mount(
      <Menu 
      setRecord={setRecordMock} 
      setCursor = {setCursorMock}
      setNewPath={setNewPathMock}
      setFlightPlans= {setFlightPlansMock} 
      newPath = {newPathMock}

      />);
  });
  
  afterEach(() => {
    TestComp.unmount();
  });

  describe("Menu renders", () => {
    it("has initial div", () => {
      const divElement = TestComp.find('.menu');
      expect(divElement).toBeTruthy();
    }); 
    it('Renders FAB', () => {
      const buttonElements = TestComp.find(Fab);
      expect(buttonElements).toHaveLength(4)
    });
    
  });

      
   