import React from 'react';
import PropTypes from "prop-types";

import "./style.scss";

const Image = ({ src = '' }) => {
   return (
        <div className={'image__container'}>
             <Image source={require(src)} />
        </div>
   );
};

Image.propTypes = {
    src: PropTypes.string
};

export default Image;