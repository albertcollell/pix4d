
export interface IFlightPlan {
    planId: number;
    planName: string;
    description: string;
    timeStamp: string;
    category: string;
    path: [
         {
                lat: number;
                lng: number;      
        }
    ];
}

export interface IFlightPlans extends Array<IFlightPlan> {}