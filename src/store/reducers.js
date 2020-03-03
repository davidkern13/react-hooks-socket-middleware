import { combineReducers } from 'redux';

import crypto from './crypto/reducer';
import deposit from './deposit/reducer';
import winning from './winning/reducer';

const rootReducer = combineReducers({
    crypto,
    deposit,
    winning
});

export default rootReducer;