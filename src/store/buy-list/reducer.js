import * as actions from './action-types';

const initialState = { buy_list: [], sale_list: [] };

export default (state = initialState, action) => {

    console.log('action',action);

    switch (action.type) {
        case actions.BUY_COIN:
            return {
                ...state,
                data: action.data,
            };
        case actions.SALE_COIN:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
}