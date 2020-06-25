import React from 'react';
import { TopicsCardType } from '../data/topics_list';
import Text, { TextType } from '../../../universal_templates/text';

export default function (props: {
    data: TopicsCardType
}) {
    return (
        <article >
            <div className="icon_topics">
                <div
                    className={`${props.data.icon_class} icon_general`} />
                <Text type={TextType.Header} className="text_align-left margin-y-auto text_weight-bold">{props.data.title}</Text>
            </div>
            <div className="block_topics__description">
                {props.data.description}
            </div>
        </article>
    )
}