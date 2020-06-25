import React, { useEffect } from 'react';
import Header from '../components/pages_components/header/NavHeader';
import ReadingList from '../components/pages_components/professional_blog/reading_list/list';
import Section from '../components/universal_templates/blocks/section';
import { ArticleBlock } from '../components/pages_components/professional_blog/article_block/article_section';
import { ArticlesCategory } from '../utils/api_utils/articles';
import Footer from '../components/pages_components/footer/Footer';
import ArticlesList from '../components/pages_components/professional_blog/reading_list/article';
import BlockBody from '../components/universal_templates/blocks/body';

export default function () {
    useEffect(() => {
        document.title = "Business blog"
    })
    return (
        <>
            <Header />
            <BlockBody>
                <Section indent>
                    <ArticleBlock wide random category={ArticlesCategory.RANDOM} />
                </Section>
                <Section indent>
                    <ReadingList />
                </Section>
                <Section>
                    <ArticleBlock title category={ArticlesCategory.POPULAR} />
                </Section>
                <Section indent>
                    <ArticleBlock title random category={ArticlesCategory.RANDOM} />
                </Section>
                <Section>
                    <ArticleBlock title category={ArticlesCategory.ESSENTIALS} />
                </Section>
                <Section>
                    <ArticlesList description limit={2} className="block__element_indent-top" />
                </Section>
            </BlockBody>
            <Footer />
        </>
    )
}