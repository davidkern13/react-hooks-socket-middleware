import React, { useState, useEffect, Suspense, lazy } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import LayoutContent from '../../layout';
import _ from 'lodash';
import { unsubscribeMessages } from '../../store/crypto/actions';

const DepositContainer = lazy(() => import('../Deposit'));
const CoinListContainer = lazy(() => import('../CoinList'));

const MainContainer = () => {

    const crypto_data = useSelector(state => state.crypto, shallowEqual);
    const dispatch = useDispatch();

    const [cryptoData, setCryptoData] = useState({});

    useEffect( () => {
        setCryptoData(prevState => ({...prevState, crypto_data }));
     }, [crypto_data]);

    const disconnect = () => {
    console.log('disconnect');
        dispatch({ type: 'WS_DISCONNECT' });
    }

    const message = () => {
    console.log('message');
        dispatch({ type: 'WS_MESSAGE' });
    }

    return (
        <LayoutContent>

        <div>
            <button onClick={() => disconnect()} className={'red'}> Stop </button>
            <button onClick={() => message()} className={'green'}> Start </button>
        </div>

        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* <DepositContainer /> */}
        {/* </Suspense> */}

        <Suspense fallback={<div>Loading...</div>}>
            <CoinListContainer />
        </Suspense>

        </LayoutContent>
    )
}
export default MainContainer;