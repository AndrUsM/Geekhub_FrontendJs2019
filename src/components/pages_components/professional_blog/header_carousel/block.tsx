import React, {Component} from 'react';
import { PostType } from '../article_block/types';
import { PopularCard } from '../article_block/partials';
import { ArticlePropsType, ArticleType } from '../article_block/article_section';
import { get_articles_proffessional_blog, ArticlesCategory } from '../../../../utils/api_utils/articles';

export const defaultStateValue: PostType = {
    docs: [],
    limit: 0,
    page: 0,
    pages: 0,
    total: 0
}

export default class ArticleBlock extends Component<ArticlePropsType,ArticleType>{
    constructor(props: any) {
        super(props);
        this.state = {
            data: defaultStateValue
        }
        this.getArticles(this.props.category);
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
        const { data } = this.state;
        if (data) {
            return (
                <PopularCard className = "card_header-carousel" data = {data}/>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
