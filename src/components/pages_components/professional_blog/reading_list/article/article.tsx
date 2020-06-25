import React from 'react';
import BlockWrapper from '../../../../universal_templates/blocks/section';
import { Author, Body, Title, Wrapper, ListWrapper, Image } from '../../../../universal_templates/cards/partials';
import Card from '../../../../universal_templates/cards';
import { PostType, PostDocsType } from '../../article_block/types';

export function ArticleBlock(props: {
    data: PostDocsType,
    description?: boolean
}) {
    return (
        <Card className="card_shadow  card__flex-wrapper_column card__flex-wrapper">
            <ListWrapper key={props.data._id}>
                {
                    props.data.featuredImage? 
                        <Image 
                            src={props.data.featuredImage} 
                            alt={props.data.slug}
                        />:
                        null
                }
                {
                    props.data.author?
                        <Author>By {props.data.author.firstName} {props.data.author.lastName} in {props.data.tags[0]}</Author>:
                        null
                }
                {
                    props.data.title?
                        <Title>{props.data.title}</Title>:
                        null
                }
                {
                    props.description ?
                        <Body>{props.data.description}</Body> :
                        null
                }
            </ListWrapper>
        </Card>
    )
}

export default function (props: {
    data: PostType,
    limit?: number,
    description?: boolean,
    row?: boolean
}) {
    let wrapper_class_name:string = "";
    if(props.row) wrapper_class_name = "card__grid-wrapper_one_responsive"
    else wrapper_class_name = "card__grid-wrapper_two"
    return (
        <BlockWrapper className="block__element_indent-bottom">
            <Wrapper className={wrapper_class_name}>
                {
                    props.data.docs.map((article, index) => {
                        if (props.limit) {
                            if (index < props.limit) {
                                return <ArticleBlock key = {index} description={props.description} data={article} />
                            } else {
                                return null
                            }
                        } else {
                            return <ArticleBlock key = {index} description={props.description} data={article} />
                        }
                    })
                }
            </Wrapper>
        </BlockWrapper>
    )
}