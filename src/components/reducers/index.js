import { combineReducers } from "redux";

import planetsReducer from './planetsReducer';
import vehiclesReducer from './vehiclesReducer';
import peopleReducer from './peopleReducer';
import filmsReducer from './filmsReducer';



export default combineReducers({
    planets: planetsReducer,
    vehicles: vehiclesReducer,
    people: peopleReducer,
    films: filmsReducer,
})