const initialFavoriteList = [];
const favoritePokemonsReducer = (state , action) => {


    switch (action.type) {
        case 'ADDED_TO_FAVORITE_LIST':
            console.log("action.payload => ", action.payload);
            const isItFavorite = initialFavoriteList.find(item => item.id === action.payload.id);
            if(isItFavorite === undefined) {
                initialFavoriteList.push(action.payload);

            }
            console.log("initialFavoriteList: ", initialFavoriteList);

            return initialFavoriteList;
        default:
            return initialFavoriteList;
    }
}
export default favoritePokemonsReducer;