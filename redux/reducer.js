import { ADD_TO_CART, REMOVE_TO_CART, SET_USER_DATA } from "./constant";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_TO_CART:
            let result = state.filter(item => {
                return item.name != action.payload
            })
            return [...result]
        case SET_USER_DATA:
            return [
                action.payload
            ]
        default:
            return state

    }
}