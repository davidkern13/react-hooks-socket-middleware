import React, { useState, useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import Image from '../../components/Image';
import CoinListComponent from '../../components/CoinList';

import '../../style/data-column.scss';

const CoinListContainer = () => {

    const crypto_data = useSelector(state => state.crypto, shallowEqual);

    const [cryptoData, setCryptoData] = useState({});

    useEffect( () => {
        setCryptoData(prevState => ({...prevState, crypto_data }));
     }, [crypto_data]);

    return (
        <div className={'coin_list__container'}>
            <CoinListComponent cryptoData = { cryptoData } />
        </div>
    )
}
export default CoinListContainer;