import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            console.log("\n user reducer :- ", action.payload);
            return {
                loading: false,
                users: action.payload,
                errro: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                errro: action.payload
            }
        default:
            return state
    }
}

export default userReducer