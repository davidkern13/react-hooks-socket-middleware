import * as types from './action-types';

export const subscribeMessages = data => {
  return {
    type: types.WS_CONNECT,
    event: 'connect',
    payload: {
        leave: false,
        url: "wss://ws-feed.gdax.com",
//        url: "wss://ws.coincap.io/prices?assets=ALL",
        data
    }
  }
}

export const unsubscribeMessages = () => {
  return {
    type: types.WS_DISCONNECT,
    event: 'unsubscribe',
    payload: {
        leave: true,
    }
  }
}

export const putCryptoListData = data => ({
    type: types.PUT_CRYPTO_LIST,
    payload: data
})

export const putCryptoListDataError = data => ({
    type: types.PUT_CRYPTO_LIST_ERROR,
    payload: data
})