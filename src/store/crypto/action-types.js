export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const WS_MESSAGE = 'WS_MESSAGE';
export const PUT_CRYPTO_LIST = 'PUT_CRYPTO_LIST';
export const PUT_CRYPTO_LIST_ERROR = 'PUT_CRYPTO_LIST_ERROR';
export const MESSAGE_LISTENER = 'MESSAGE_LISTENER';

export const subscribeMsg = {
  type: "subscribe",
  product_ids: ["BTC-USD", "ETH-USD", "DASH-USD", "LTC-USD", "XLM-USD", "ETC-USD", "ALGO-USD", "OXT-USD", "ATOM-USD", "EOS-USD", "ZRX-USD"],
  channels: [
    {
      name: "ticker",
      product_ids: ["BTC-USD", "ETH-USD", "DASH-USD", "LTC-USD", "XLM-USD", "ETC-USD", "ALGO-USD", "OXT-USD", "ATOM-USD", "EOS-USD", "ZRX-USD"]
    }
  ]
};