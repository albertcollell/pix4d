import React from "react";
import { mount, ReactWrapper, shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { GoogleMap } from "@react-google-maps/api";
import Map from "../map.component";
import { IFlightPlan } from "../../../../core/models/path";

let TestComp: ReactWrapper;

configure({ adapter: new Adapter() })

const setFlightPlansMock = jest.fn()

const selectedPathMock: IFlightPlan = 
    {
        planId: 2,
        planName: "Thermal scanner",
        description: "Termal scanner done to identify hotspots in our construction site",
        timeStamp: "string",
        category: "thermal",
        path: [
          {
              lat: 46.52756553541531,
              lng: 6.615143115105592
            
          }
        ]
      }

      

beforeEach(() => {
    TestComp = mount(
      <Map 
        selectedPath={selectedPathMock}
        setFlightPlans= {setFlightPlansMock}
      />);
  });
  
  afterEach(() => {
    TestComp.unmount();
  });

  describe("Map unit test", () => {
    it("Map Render", () => {
      const divElement = TestComp.find(GoogleMap);
      expect(divElement).toBeTruthy();
    });
    /* it("has two Collapsable rows ", () => {
        expect(TestComp.find(CollapsableRow)).toHaveLength(flightPlansMockData.length);
      }); */
});