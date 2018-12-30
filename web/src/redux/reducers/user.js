import { ADD_TODO } from '../actions/user.js';

const initialState = {};

export function reducerTest(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state);
        default:
            return state;
    }
}
