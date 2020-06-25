import React from 'react';
import data from './data';
import { Block } from './partials';

export default function () {
    return (
        <div className = "block_topics ">
            {
                data.map((value, index) => {
                    return (
                        <Block
                            icon_class={value.icon_class}
                            text={value.text}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}