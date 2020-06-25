import React from 'react';
import { TopicsCardType } from '../data/topics_list';
import TopicsCard from './card';

export default function (props: {
    data: TopicsCardType[]
}) {
    return (
        <div className="block_topics">
            {
                props.data.map((card, index) => {
                    return (
                        <TopicsCard key={index} data={card} />
                    )
                })
            }
        </div>
    )
}