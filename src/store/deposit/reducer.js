import * as actions from './action-types';

const initialState = { total: 100000 };

export default (state = initialState, action) => {

    switch (action.type) {
        case actions.ADDITION_DEPOSIT:
            return {
                ...state,
                data: action.data,
            };
        case actions.SUBTRACTION_DEPOSIT:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
}