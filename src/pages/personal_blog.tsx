import React, { useEffect } from 'react';
import Section from '../components/universal_templates/blocks/section';
import BlockBody from '../components/universal_templates/blocks/body';
import NavHeader from '../components/pages_components/header/NavHeader';
import Footer from '../components/pages_components/footer/Footer';
import SubmitForm from '../components/pages_components/popular/subscribe_form';
import ArticleList from '../components/pages_components/professional_blog/reading_list/article';

export default function () {
    useEffect(() => {
        document.title = "Personal blog"
    })
    return (
        <>
            <NavHeader />
            <BlockBody>
                <Section indent>
                    <ArticleList row />
                </Section>
                <SubmitForm />
            </BlockBody>
            <Footer />
        </>
    )
}