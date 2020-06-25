import React from 'react';
import NavHeader from '../components/pages_components/header/NavHeader';
import Footer from '../components/pages_components/footer/Footer';
import Body from '../components/universal_templates/blocks/body';
import Section from '../components/universal_templates/blocks/section';
import ArticleListLinks from '../components/pages_components/popular/articles_list/header';
import links from '../components/pages_components/reading_lists/data/article_list_header';
import PageDescription from '../components/pages_components/new_page/PageDescription';
import ArticleList from '../components/pages_components/reading_lists/article_list';
import { ArticlesCategory } from '../utils/api_utils/articles';
import SubscribeForm from '../components/pages_components/popular/subscribe_form';

export default function () {
    let array_articles_category: ArticlesCategory[] = [
        ArticlesCategory.ESSENTIALS,
        ArticlesCategory.FREELANCE,
        ArticlesCategory.POPULAR
    ]
    return (
        <>
            <NavHeader />
            <Body>
                <Section>
                    <PageDescription
                        className="block__element_indent-dual"
                        title="All reading lists"
                        desription="Get in-depth insights on web design, freelancing, content management, and more with these series of related reads."
                    />
                    <ArticleListLinks links={links} />
                    {
                        array_articles_category.map((category, index) => {
                            return (
                                <ArticleList
                                    row
                                    className="block_reading_lists"
                                    category={category}
                                />
                            )
                        })
                    }
                </Section>
                <SubscribeForm />
            </Body>
            <Footer />
        </>
    )
}