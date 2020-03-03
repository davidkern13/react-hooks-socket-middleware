import { call, put, takeEvery } from 'redux-saga/effects'

import { MESSAGE_LISTENER } from './action-types';
import { putCryptoListData, putCryptoListDataError } from './actions';

export default function* watcherSaga() {
    yield takeEvery(MESSAGE_LISTENER, createCryptoList);
}

function* createCryptoList({ payload }) {

    let { msgdata  } = payload;

    if(msgdata.type !== "subscriptions"){
        try {
            const data = yield call(() => {
                return {...payload.store.crypto.data, [msgdata.product_id] : msgdata};
            }
        );

        yield put(putCryptoListData(data));
        } catch (err) {
            yield put(putCryptoListDataError(err));
        }
    }
}
