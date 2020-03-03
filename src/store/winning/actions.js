import * as actions from './action-types';

export const additionWinning = data => ({
    type: actions.ADDITION_WINNING,
    payload: data
})

export const subtractionWinning = data => ({
    type: actions.SUBTRACTION_WINNING,
    payload: data
})
