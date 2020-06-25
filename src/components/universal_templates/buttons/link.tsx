import React from 'react';
import { Link } from 'react-router-dom';

export default function GeneralLinkElement (
    props: {
        href: string,
        className?: string,
        style?: React.CSSProperties,
        children?: any
    }) {
    return (
        <div className = "center-vertical">
            <Link
                to={props.href}
                style={props.style}
                className={props.className}>
                {props.children}
            </Link>
        </div>
    )
}