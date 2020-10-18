export const FETCH__FLIGHTPLANS = 'FETCH__FLIGHTPLANS';
export const ADD__FLIGHTPLAN = 'ADD__FLIGHTPLAN';

export const fetchFlightPlans = (FlightPlans: any) => {
    return {
        type: FETCH__FLIGHTPLANS,
        payload: FlightPlans
    }
}


