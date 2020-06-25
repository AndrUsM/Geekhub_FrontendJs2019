import React from 'react';
import { BaseTextType } from './types';

export enum TextType {
    Large,
    Header,
    Subheader,
    Base
}

export default function (props: BaseTextType) {
    let base_class:string = "";
    switch(props.type){
        case TextType.Base:
            base_class = "text_size-base";
            break;
        case TextType.Subheader:
            base_class = "text_size-subheader";
            break;
        case TextType.Header:
            base_class = "text_size-header";
            break;
        case TextType.Large:
            base_class = "text_size-large";
            break;
        default: 
            base_class = "text_size-base";
            break;
    }
    return (
        <p
            style={props.style}
            className={
                props.className ?
                `${props.className} ${base_class}`:
                base_class
            }>
            {props.children}
        </p>
    )
}