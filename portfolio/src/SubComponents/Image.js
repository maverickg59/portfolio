import React from 'react'

export const Image = props => {
  return (
    <img className={props.imgClassName} id={props.imgId} src={props.src} alt={props.alt} />
  );
}