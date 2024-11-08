export default (listPeople = [], action) => {
    
    if(action.type === 'FETCH_PEOPLE'){
        return action.payload.data.results;
    }
    return listPeople;
}