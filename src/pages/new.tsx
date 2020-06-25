import React from 'react';
import NavHeader from '../components/pages_components/header/NavHeader';
import Footer from '../components/pages_components/footer/Footer';
import SumbitComponent from '../components/pages_components/popular/subscribe_form';
import Body from '../components/universal_templates/blocks/body';
import Topics from '../components/pages_components/new_page/all_topics';
import ArticleList from '../components/pages_components/professional_blog/reading_list/article';
import Section from '../components/universal_templates/blocks/section';
import ArticleListLinks from '../components/pages_components/popular/articles_list/header';
import links from '../components/pages_components/new_page/data/article_list_header';
import PageDescription from '../components/pages_components/new_page/PageDescription';

export default function () {
    return (
        <>
            <NavHeader />
            <Body>
                <Section>
                    <PageDescription
                        className="block__element_indent-dual"
                        title="New"
                        desription="Our latest web design tips, tricks, insights, and resources, hot off the presses."
                    />
                    <ArticleListLinks links={links} />
                    <ArticleList row />
                </Section>
                <Section className="block__element_indent-bottom">
                    <Topics />
                </Section>
                <SumbitComponent />
            </Body>
            <Footer />
        </>
    )
}