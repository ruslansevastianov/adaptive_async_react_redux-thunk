export default (listFilms = [], action) => {

    if(action.type === 'FETCH_FILMS'){
        return action.payload.data.results;
    }
    return listFilms;
}