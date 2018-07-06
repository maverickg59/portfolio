import React from 'react';

export const Label = props => {
    return (
        <div className={props.labelClassName} id={props.labelId}>
            <p>{props.text}</p>
        </div>
    );
}