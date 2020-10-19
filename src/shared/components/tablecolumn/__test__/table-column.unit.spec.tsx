import React from "react";
import { mount, ReactWrapper, shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import TablePaths from "../table-column.component";
import CollapsableRow from "../../collapsablerow/collapsable-row.component";
import { IFlightPlans } from "../../../../core/models/path";

let TestComp: ReactWrapper;

configure({ adapter: new Adapter() })

const setSelectedPath = jest.fn()

const flightPlansMockData: IFlightPlans = [
        {
          planId: 1,
          planName: "Optical scanning",
          description: "1st test using the new optical camera sensor",
          timeStamp: "string",
          category: "scan",
          path: [
            {
                lat: 46.5301342361002,
                lng: 6.597793862404786
            },
             {
                lat: 46.52756553541531,
                lng: 6.605143115105592
              }
          ]
        },
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
              
            },
             {
                lat: 46.5301342361002,
                lng: 6.587793862404786
              
            }
          ]
        }
      ]
const selectedPathMock = 
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
            
          },
           {
              lat: 46.5301342361002,
              lng: 6.587793862404786
            
          }
        ]
      }

      

beforeEach(() => {
    TestComp = mount(
      <TablePaths 
          flightPlans={flightPlansMockData} 
          setSelectedPath = {setSelectedPath}
          selectedPath={selectedPathMock}

      />);
  });
  
  afterEach(() => {
    TestComp.unmount();
  });

  describe("Table unit test", () => {
    it("has initial div", () => {
      const divElement = TestComp.find("sticky table");
      expect(divElement).toBeTruthy();
    });
    it("has two Collapsable rows ", () => {
        expect(TestComp.find(CollapsableRow)).toHaveLength(flightPlansMockData.length);
      });
});