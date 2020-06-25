import React from 'react';
import { Wrapper } from '../../../universal_templates/cards/partials';
import BlockWrapper from '../../../universal_templates/blocks/section';
import { PostDocsType, PostType } from './types';
// partials
import { PopularCard, ArticlesTitle, ArticleCards } from './partials';

export default function (props: {
    data: PostType,
    title?: boolean,
    random?: boolean,
    wide?: boolean
}) {
    props.data.docs.sort((a: PostDocsType, b: PostDocsType) => {
        return a.viewsCount + b.viewsCount
    })
    return (
        <BlockWrapper indent>
            {
                props.title ? (
                    <ArticlesTitle
                        random={
                            props.random ? true : false
                        }
                        data={props.data} />
                ) : (
                        null
                    )
            }
            <Wrapper
                className={
                    props.wide ? "card__grid-wrapper_two_ratio_60-40" : "card__grid-wrapper_two"
                }
            >
                <PopularCard data={props.data} />
                <Wrapper
                    className={
                        props.wide ? "card__grid-wrapper_one" : "card__grid-wrapper_four"
                    }
                >
                    <ArticleCards data={props.data}></ArticleCards>
                </Wrapper>
            </Wrapper>
        </BlockWrapper>
    )
}
