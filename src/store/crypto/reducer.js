import * as actions from './action-types';

export default (state = {}, action) => {

    switch (action.type) {
        case actions.PUT_CRYPTO_LIST:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}