import React from 'react';

export const LinksList = props => {
    return(
        <div className={props.divClassName} id={props.divId}>
            <ul className={props.className} id={props.ulId}>{props.links}</ul>
        </div>
    );
};