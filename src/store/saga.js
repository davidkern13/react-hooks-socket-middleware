import { all, call  } from 'redux-saga/effects';

import crypto from './crypto/saga';

export default function* rootSaga() {

    yield all(
        [
            call(crypto),
        ]
    );
}