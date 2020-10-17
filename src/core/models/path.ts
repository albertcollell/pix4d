
export interface IFlightPlan {
    planId: number;
    planName: string;
    description: string;
    timeStamp: string;
    category: string;
    path: [
        {
            pointId: number;
            point: string;
            height: string;
            cordinates: {
                latitude: number;
                longitude: number;
              }
            },
    ];
}

export interface IFlightPlans extends Array<IFlightPlan> {}