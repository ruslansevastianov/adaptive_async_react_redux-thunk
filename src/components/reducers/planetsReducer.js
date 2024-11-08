export default (listPlanets = [], action) => {

    if(action.type === 'FETCH_PLANETS'){
        return action.payload.data.results;
    }
    return listPlanets;
}
