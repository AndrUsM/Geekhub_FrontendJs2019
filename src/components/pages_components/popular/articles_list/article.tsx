import { Header, Body, Wrapper, ListWrapper } from '../../../universal_templates/cards/partials';
import React from 'react';
import { Link } from 'react-router-dom';
import {BaseCard} from '../../../universal_templates/cards';
import { PostType } from '../../professional_blog/article_block/types'

export default function ArticleCards(props: {
    data: PostType,
    className?: string,
    children?: any
}) {
    return (
        <>
            {
                props.data.docs.map((article, index) => {
                    if (index > 0) {
                        return (
                            <div key = {index} className = "card__grid-wrapper card__grid-wrapper card__grid-wrapper_two card_popular__wrapper">
                                <Wrapper
                                    className={
                                        props.className ? `${props.className} card_popular__article` : "card_popular__article"
                                    }
                                    key={index}>
                                    <ListWrapper key={article._id}>
                                        <BaseCard className="card_shadow card_popular">
                                            <Header>
                                                <Link
                                                    to="#"
                                                    className="button_element button_element_color-gray">
                                                    {article.tags[0]}
                                                </Link>
                                            </Header>
                                            <Body className="button_element button_element_color-black button_element_hover">{article.description}</Body>
                                        </BaseCard>
                                    </ListWrapper>
                                </Wrapper>
                                <Wrapper className = "block__empty"></Wrapper>
                            </div>
                        )
                    } else {
                        return null
                    }
                })
            }
        </>
    )
}