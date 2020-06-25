import React, { Component } from 'react';
import { ArticleType, defaultStateValue } from '../../professional_blog/article_block/article_section';
import { get_articles_proffessional_blog, ArticlesCategory } from '../../../../utils/api_utils/articles';
import Section from '../../../universal_templates/blocks/section';
import ArticleBlockPopularPage from '../../popular/articles_list/article';

export default class extends Component<{}, ArticleType>{
    constructor(props: {}) {
        super(props);
        this.state = {
            data: defaultStateValue
        }
        this.getPopularArticles();
    }

    getPopularArticles() {
        get_articles_proffessional_blog(ArticlesCategory.FREELANCE).then((articles) => {
            if (articles) {
                this.setState({
                    data: articles.data
                })
            }
        })
    }

    render() {
        return (
            <Section indent>
                <div className="card__grid-wrapper_two card__grid">
                    <ArticleBlockPopularPage data={this.state.data} />
                </div>
            </Section>
        )
    }
}