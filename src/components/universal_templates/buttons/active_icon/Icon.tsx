import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPropsType,  } from './types';

export default function Icon(props: IconPropsType) {
    return (
        <FontAwesomeIcon
            icon={props.icon}
            className={props.className || ""}
            style={{
                color: props.color || "",
                background: props.background || "",
                fontSize: props.size || ""
            }}
        />
    )
}