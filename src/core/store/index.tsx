import { combineReducers, createStore } from 'redux';
import flightPlans from '../reducers/flightplans.reducer';
import selectedFlightPlan from '../reducers/selected-flight-plan.reducer';

export const rootReducer = combineReducers({
    flightPlans,
    selectedFlightPlan
   /* creatingPath,
    selectingPath */
})

export const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
export default store;