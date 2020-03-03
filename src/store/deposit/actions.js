import * as actions from './action-types';

export const additionDeposit = data => ({
    type: actions.ADDITION_DEPOSIT,
    payload: data
})

export const subtractionDeposit = data => ({
    type: actions.SUBTRACTION_DEPOSIT,
    payload: data
})
