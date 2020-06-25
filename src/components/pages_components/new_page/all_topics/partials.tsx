import React from 'react';
import { IconTextType } from './data'

export function Block(props: IconTextType) {
    return (
        <article className = "icon_topics">
            <div
                className={`${props.icon_class} icon_general`} />
            <div className="text_align-left margin-y-auto">{props.text}</div>
        </article>
    )
}