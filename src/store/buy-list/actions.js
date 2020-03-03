import * as actions from './action-types';

export const buyCoin = data => ({
    type: actions.BUY_COIN,
    payload: data
})

export const saleCoin = data => ({
    type: actions.SALE_COIN,
    payload: data
})
