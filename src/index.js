import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { initialStore } from "./store";
import { subscribeMessages } from "./store/crypto/actions";

import * as serviceWorker from './serviceWorker';

import App from "./App";

const store = initialStore();
store.dispatch(subscribeMessages());

//setTimeout(() => { store.dispatch({ type: 'WS_MESSAGE' }) },0);

// dispatch({ type: 'WS_DISCONNECT' });

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
