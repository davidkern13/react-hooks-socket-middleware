import * as actions from './action-types';

const initialState = { total: 0 };

export default (state = initialState, action) => {

    switch (action.type) {
        case actions.ADDITION_WINNING:
            return {
                ...state,
                data: action.data,
            };
        case actions.SUBTRACTION_WINNING:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
}