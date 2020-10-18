export const SELECTFLIGHTPLAN = 'SELECTFLIGHTPLAN';

export const selectFlightPlan = (FlightPlan: any) => {
    return {
        type: SELECTFLIGHTPLAN,
        payload: FlightPlan
    }
}


