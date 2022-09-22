const UPDATE_GEOLOCATION = "geolocation/UPDATE_GEOLOCATION"


export const updateGeolocation = (payload) => ({
    type: UPDATE_GEOLOCATION,
    payload
})

const geolocationReducer = (state = {lat:null, lng:null}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case UPDATE_GEOLOCATION:
            return action.payload
        default:
            return nextState;
    }
}

export default geolocationReducer;