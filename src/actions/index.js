const fetchData = () => {
    return {
        type: 'FETCH_DATA'
    }
}

const removeData = (pokemon) => {
    console.log("action => ", pokemon);
    return {
        type: 'REMOVE_DATA',
        payload: pokemon
    };
};
const addData = (name, desc, imgUrl) => {
    return {
        type: 'ADD_NEW_DATA',
        payload: [name, desc, imgUrl]

    }
}
const addedToFavoriteList = (pokemon) => {
    return {
        type: 'ADDED_TO_FAVORITE_LIST',
        payload: pokemon
    }

}
export {
    fetchData,
    removeData, 
    addData, 
    addedToFavoriteList
};