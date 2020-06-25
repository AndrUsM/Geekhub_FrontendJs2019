import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function GeneralLinkElement(
    props: {
        className?: string,
        style?: React.CSSProperties,
        children?: any,
        icon: IconProp
    }) {
    return (
        <div className="center-vertical">
            <FontAwesomeIcon
                icon={props.icon}
                style={props.style}
                className={`${props.className}`}
            />
        </div>
    )
}