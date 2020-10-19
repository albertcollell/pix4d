import React from "react";
import { mount, ShallowWrapper, ReactWrapper, shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import CollapsableRow from "../collapsable-row.component";
import { IFlightPlan } from "../../../../core/models/path";

let TestComp: ReactWrapper;

configure({ adapter: new Adapter() })

const setSelectedPath = jest.fn()

const flightPlanMockData: IFlightPlan = 
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
            }
          
          ]
        }
      
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
      <CollapsableRow 
          flightPlan={flightPlanMockData} 
          setSelectedPath = {setSelectedPath}
          selectedPath={selectedPathMock}

      />);
  });
  
  afterEach(() => {
    TestComp.unmount();
  });

  describe("Table unit test", () => {
    it("has initial div", () => {
      const divElement = TestComp.find('.button');
      expect(divElement).toBeTruthy();
    }); 
    it('Renders Buttons', () => {
      const buttonElement = TestComp.find(IconButton);
      expect(buttonElement).toHaveLength(2)
    });
  });

  describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
      const TestIconButton = shallow(<IconButton onClick={mockCallBack}/>)
      const buttonExpand = TestIconButton.find('[data-test="expand-button"]');
      buttonExpand.forEach(c => {c.simulate('click')
      expect(mockCallBack).toHaveBeenCalled()});
      
    });
  });