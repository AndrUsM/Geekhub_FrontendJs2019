import React from 'react';
import { Title, Wrapper } from '../../../../universal_templates/cards/partials';
import ViewAllButton from '../../article_block/view_all_button';

export default function (props: {
    title: string
}) {
    return (
        <Wrapper className="card__flex-wrapper_row card__flex-wrapper">
            <Title>{props.title}</Title>
            <ViewAllButton href="#" />
        </Wrapper>
    )
}