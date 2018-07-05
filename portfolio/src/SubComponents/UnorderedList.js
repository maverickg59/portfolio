import React from 'react';

export const UnorderedList = props => {
    return(
            <ul id={props.ulId}>{props.content}</ul>
    );
};