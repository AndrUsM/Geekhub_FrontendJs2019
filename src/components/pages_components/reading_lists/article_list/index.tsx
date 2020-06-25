import React, { Component } from 'react';
import { PostType } from '../../professional_blog/article_block/types';
import { defaultStateValue } from '../../professional_blog/article_block/article_section';
import { ArticleCards } from './article';
import { randomInteger } from '../../../../utils/number';
import { ArticlesCategory, get_articles_proffessional_blog } from '../../../../utils/api_utils/articles';

export function randomCategory(): ArticlesCategory {
    let random_number: number = randomInteger(0, Object.keys(ArticlesCategory).length / 3);
    switch (random_number) {
        case 0:
            return ArticlesCategory.FREELANCE;
        case 1:
            return ArticlesCategory.ESSENTIALS;
        case 2:
            return ArticlesCategory.POPULAR
        default:
            return ArticlesCategory.FREELANCE
    }
}

type ArticleListPropsType = {
    className?: string,
    limit?: number,
    description?: boolean,
    row?: boolean,
    category?: ArticlesCategory
}

export default class extends Component<ArticleListPropsType, {
    data: PostType
}> {
    constructor(props: ArticleListPropsType) {
        super(props);

        this.state = {
            data: defaultStateValue
        };
        props.category ?
            this.getArticles(props.category) :
            this.getArticles(randomCategory())
    }



    getArticles(category: ArticlesCategory) {
        get_articles_proffessional_blog(category).then((articles) => {
            if (articles) {
                this.setState({
                    data: articles.data
                })
            }
        })
    }

    render() {
        let { data } = this.state;
        if (data) {
            return (
                <article className={this.props.className || ""}>
                    <ArticleCards
                        image
                        row={
                            this.props.row ? true : false
                        }
                        data={data}
                        limit={this.props.limit}
                        description={this.props.description}
                    />
                </article>
            )
        } else {
            return <div></div>
        }
    }
}