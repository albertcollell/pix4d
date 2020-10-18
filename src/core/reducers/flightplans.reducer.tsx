import { FETCH__FLIGHTPLANS }from '../actions/flightplans.actions';

const initialState = 
    {response: [{
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
  }]}


  const flightPlans = (state = initialState, action: {type:any, payload: any}) => {
      switch (action.type) {
          case FETCH__FLIGHTPLANS:
              return { 
                  ...state, response: action.payload
              }
          default:
                return state.response;
      }
      
  }

  

  export default flightPlans;
