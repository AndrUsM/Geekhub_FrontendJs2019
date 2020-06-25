import React from 'react';
import { ActionItemInterface } from './types'
import Icon from './Icon';

export default function ActionIcon(props: ActionItemInterface) {
    return (
        React.createElement(
            "span",
            {
                [props.eventName]: props.eventHander
            },
            <Icon
                icon={props.icon}
            />
        )
    )
}