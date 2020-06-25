import React, { useEffect } from 'react';
import ReadingList from '../components/pages_components/professional_blog/reading_list/list';
import HeaderReadingList from '../components/pages_components/popular/reading_list';
import PopularArticles from '../components/pages_components/popular/articles_list';
import SubmitForm from "../components/pages_components/popular/subscribe_form";
import BlockBody from '../components/universal_templates/blocks/body';
import Footer from '../components/pages_components/footer/Footer';
import NavHeader from '../components/pages_components/header/NavHeader';

export default function () {
    useEffect(() => {
        document.title = "Popular"
    })

    return (
        <>
            <NavHeader />
            <HeaderReadingList className="header_indent" />
            <BlockBody>
                <div>
                    <PopularArticles />
                    <ReadingList />
                    <SubmitForm />
                </div>
                <Footer />
            </BlockBody>
        </>
    )
}