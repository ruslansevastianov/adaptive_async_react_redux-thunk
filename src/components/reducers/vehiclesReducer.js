export default (listVehicles = [], action) => {

    if(action.type === 'FETCH_VEHICLES'){
        return action.payload.data.results;
    }
    return listVehicles;
}

