import React from 'react';
import PropTypes from "prop-types";

import "./style.scss";

const Deposit = ({ total = '' }) => {
   return (
        <div className={'deposit__container'}>
             <p>{total}</p>
        </div>
   );
};

Deposit.propTypes = {

};

export default Deposit;