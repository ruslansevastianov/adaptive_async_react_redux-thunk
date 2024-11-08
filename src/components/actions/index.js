import swapi from '../apis/swapi';

export const fetchPlanets = () => {
    return async (dispatch) => {
        const response = await swapi.get('/planets');

        dispatch({type: 'FETCH_PLANETS', payload: response})        
    }
}

export const fetchVehicles = () => {
    return async (dispatch) => {
        const response = await swapi.get('/vehicles');

        dispatch({type: 'FETCH_VEHICLES', payload: response})        
    }
}

export const fetchPeople = () => {
    return async (dispatch) => {
        const response = await swapi.get('/people');

        dispatch({type: 'FETCH_PEOPLE', payload: response})        
    }
}

export const fetchFilms = () => {
    return async (dispatch) => {
        const response = await swapi.get('/films');

        dispatch({type: 'FETCH_FILMS', payload: response})        
    }
}



