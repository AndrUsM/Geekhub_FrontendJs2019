import React, { useEffect } from 'react';
import Section from '../components/universal_templates/blocks/section';
import BlockBody from '../components/universal_templates/blocks/body';
import NavHeader from '../components/pages_components/header/NavHeader';
import Footer from '../components/pages_components/footer/Footer';
import ArticleList from '../components/pages_components/professional_blog/reading_list/article';
import InstaStories from '../components/pages_components/professional_blog/reading_list/list';
import { ArticlesCategory } from '../utils/api_utils/articles';

export default function () {
    useEffect(() => {
        document.title = "Personal blog"
    })
    return (
        <>
            <NavHeader />
            <BlockBody>
                <Section indent>
                    <ArticleList 
                        category={ArticlesCategory.FREELANCE} 
                        row 
                    />
                </Section>
                <InstaStories/>
            </BlockBody>
            <Footer />
        </>
    )
}