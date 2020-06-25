import React, { Component } from 'react';
import { PostType } from '../../article_block/types';
import { get_articles_proffessional_blog, ArticlesCategory } from '../../../../../utils/api_utils/articles';
import { defaultStateValue } from '../../article_block/article_section';
import ArticleLayoutPhoto from './article';
import { randomInteger } from '../../../../../utils/number';

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
        props.category? 
            this.getArticles(props.category): 
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
                    <ArticleLayoutPhoto
                        row={
                            this.props.row ? true : false
                        }
                        limit={this.props.limit}
                        data={data}
                        description={
                            this.props.description ? true : false
                        }
                    />
                </article>
            )
        } else {
            return <div></div>
        }
    }
}