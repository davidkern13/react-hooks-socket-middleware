import * as types from '../../store/crypto/action-types';

var websocket,
    url;

const socket = store => next => action => {
    next(action);

    const onOpenSocket = (url) => {
        websocket = new WebSocket(url);

        console.log('WS_CONNECT', websocket);

        websocket.onopen = () => websocket.send(JSON.stringify(types.subscribeMsg)); //open callbacks
        websocket.onclose = (event) => store.dispatch({ type: types.WS_DISCONNECT, event }); //close callbacks
    }

    const onCloseSocket = () => {
        websocket.close();
    }

    const onMessageSocket = () => {
            onOpenSocket(url);

            websocket.onmessage = message => {
                let { data } = message; //get message
                let msgdata = JSON.parse(data) || null; //get data from message

                store.dispatch({
                type: types.MESSAGE_LISTENER,
                   payload : {
                     msgdata,
                     store:  store.getState()
                   }
                });
            };
    }

    switch (action.type) {
      case 'WS_CONNECT':
         url = action.payload.url;

         onOpenSocket(url);
        break;
      case 'WS_DISCONNECT':
         onCloseSocket();
        break;
      case 'WS_MESSAGE':
          onMessageSocket();
        break;
      default:
        return next(action);
    }

}

export default socket;