import React from 'react';

export const LinksList = props => {
    return(
        <div id={props.divId}>
            <ul className={props.className} id={props.ulId}>{props.links}</ul>
        </div>
    );
};