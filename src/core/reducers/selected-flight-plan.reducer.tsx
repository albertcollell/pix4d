import { SELECTFLIGHTPLAN }from '../actions/selected-flight-plan.actions';

const initialState = 
    {response: {
      planId: 0,
      planName: "",
      description: "",
      timeStamp: "",
      category: "",
      path: [
        {
          pointId: 0,
          point: "",
          height: "",
          cordinates: {
            lat: 0,
            lng: 0
          }
        },
      ]
  }}


  const selectedFlightPlan = (state = initialState, action: {type:any, payload: any}) => {
      switch (action.type) {
          case SELECTFLIGHTPLAN:
              return { 
                  ...state, response: action.payload
              }
          default:
                return state;
      }
      
  }

  

  export default selectedFlightPlan;
