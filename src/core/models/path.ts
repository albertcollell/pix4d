export interface IPath 
    {
        lat: number;
        lng: number;      
}

export interface IFlightPlan {
    planId: number;
    planName: string;
    description: string;
    timeStamp: string;
    category: string;
    path: IPath[];
}

export interface IFlightPlans extends Array<IFlightPlan> {}
