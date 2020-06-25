import React from 'react';
import NavHeader from '../components/pages_components/header/NavHeader';
import Footer from '../components/pages_components/footer/Footer';
import Body from '../components/universal_templates/blocks/body';
import Topics from '../components/pages_components/topics/topics_list';
import TopicsListData from '../components/pages_components/topics/data/topics_list';
import Section from '../components/universal_templates/blocks/section';
import ArticleListLinks from '../components/pages_components/popular/articles_list/header';
import links from '../components/pages_components/topics/data/links';
import PageDescription from '../components/pages_components/new_page/PageDescription';

export default function () {
    return (
        <>
            <NavHeader />
            <Body>
                <Section>
                    <PageDescription
                        className="block__element_indent-dual"
                        title="Topics"
                        desription="Find everything from design inspiration to best practices, freelancing tips to tools."
                    />
                    <ArticleListLinks links={links} />
                </Section>
                <Section className="block__element_indent-bottom">
                    <Topics data={TopicsListData}/>
                </Section>
            </Body>
            <Footer />
        </>
    )
}