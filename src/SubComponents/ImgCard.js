import React from 'react';
import { Image } from './Image';

export const ImgCard = props => {
    return (
        <div 
        className={props.containerClassName} 
        id={props.containerId}
        >
            <Image 
            imgClassName={props.imgClassName} 
            imgId={props.imgId} 
            src={props.src} 
            alt={props.alt}
            />
            <div className={props.cardContentClass} id={props.cardContentId}>{props.icon}{props.cardContent}</div>
        </div>
    );
}