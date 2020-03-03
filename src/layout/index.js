import React from 'react';
import './style.scss';

function LayoutContent(props){

    return (
        <div className={'layout_container'}>
            <div className={'component_content'}>
                {props.children}
            </div>
        </div>
    )
}

export default LayoutContent;