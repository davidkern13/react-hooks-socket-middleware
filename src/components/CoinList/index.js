import React from 'react';
import PropTypes from "prop-types";
import _ from 'lodash';
import "./style.scss";

const CoinList = ({ cryptoData = {} }) => {
   return (
        <>
            <ul className={'coin-list'} data-columns="4">
                 {!_.isEmpty(cryptoData.crypto_data) && Object.keys(cryptoData.crypto_data).map((item, i) => (
                         <li className="coin-item" key={i}>
                            <p>{cryptoData.crypto_data[item].product_id}</p>
                            <p>{cryptoData.crypto_data[item].price}</p>
                         </li>
                     ))
                 }
             </ul>
        </>
   );
};

CoinList.propTypes = {
    cryptoData: PropTypes.object
};

export default CoinList;