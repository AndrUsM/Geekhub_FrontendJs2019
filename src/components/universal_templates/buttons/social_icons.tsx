import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import { Link } from 'react-router-dom';
// https://www.npmjs.com/package/@fortawesome/react-fontawesome

export type SocialIconProps = {
    background?: string,
    icon: IconProp,
    href?: string
    ulr?: string,
    className?: string
}

const defaultValue: {
    background: string,
    url: string,
    href: string
} = {
    background: "",
    url: "#",
    href: "#"
}

export function SocialIconGray(props: SocialIconProps) {
    return (
            // <Link
            //     to={props.href || defaultValue.href}
            //     style={{ background: props.background || defaultValue.background }}
            
            // >
            //     <FontAwesomeIcon className = { props.className || "button_social-gray" } icon={props.icon}></FontAwesomeIcon>
            // </Link>
        <a href={props.href || defaultValue.href}
        style={{ background: props.background || defaultValue.background }}
        >
            <FontAwesomeIcon className = { props.className || "button_social-gray" } icon={props.icon}></FontAwesomeIcon>
        </a>
    )
}
export function SocialIconWhite(props: SocialIconProps) {
    return (
        // <Link
        //     to={props.href || defaultValue.href}
        //     style={{ background: props.background || defaultValue.background }}
           
        // >
        //     <FontAwesomeIcon className = { props.className || "button_social-white" } icon={props.icon}></FontAwesomeIcon>
        // </Link>
        <a href={props.href || defaultValue.href}
        style={{ background: props.background || defaultValue.background }}
        >
            <FontAwesomeIcon className = { props.className || "button_social-white" } icon={props.icon}></FontAwesomeIcon>
        </a>
    )
}