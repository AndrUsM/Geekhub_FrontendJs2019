import React from 'react';
import { Header, Body, Wrapper, ListWrapper, Image } from '../../../universal_templates/cards/partials';
import Card from '../../../universal_templates/cards';
import { PostType } from '../../professional_blog/article_block/types';
import { Link } from 'react-router-dom';


export function ArticleCards(props: {
    data: PostType,
    className?: string,
    children?: any,
    image?: boolean,
    row?: boolean,
    image_side?: boolean,
    description?: boolean,
    limit?: number
}) {
    return (
        <>
            {
                props.data.docs.map((article, index) => {
                    if (index > 0) {
                        return (
                            <Wrapper
                                className={
                                    props.className ? `${props.className} card_popular__article` : "card_popular__article"
                                }
                                key={index}>
                                <ListWrapper
                                    className="card_reading_lists"
                                    key={article._id}>
                                    {
                                        props.image && article.featuredImage ? (
                                            <Image
                                                className="card_reading_lists__image"
                                                src={article.featuredImage}
                                                alt={article.description}
                                            />
                                        ) : null
                                    }
                                    <Card className="card_shadow">
                                        <Header>
                                            <Link
                                                to="#"
                                                className="button_element button_element_color-gray">
                                                {article.tags[0]}
                                            </Link>
                                        </Header>
                                        <Body className="button_element button_element_color-black button_element_hover">{article.description}</Body>
                                    </Card>
                                </ListWrapper>
                            </Wrapper>
                        )
                    } else {
                        return null
                    }
                })
            }
        </>
    )
}