import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import _ from 'lodash';


const MainContainer = () => {

    const { total } = useSelector(state => state.deposit, shallowEqual);

    return (
        <div className={'total-deposit_container'}>
            <p>Deposit: {total}$</p>
        </div>
    )
}
export default MainContainer;