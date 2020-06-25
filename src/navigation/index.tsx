import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// pages
import ProfessionalBlog from '../pages/professional_blog';
import Popular from '../pages/popular';
import BusinessBlog from '../pages/business_blog';
import PersonalBlog from '../pages/personal_blog';
import NewPage from '../pages/new';
import FreelanceBlog from '../pages/freelance_blog';
import ReadingLists from '../pages/reading_lists';
import Topics from '../pages/topics';
import Author from '../pages/author';

const blog_base_path: string = "/blog";
const lists_base_path: string = "/lists";

const path_config_data = {
    blog: {
        business: `${blog_base_path}/business`,
        freelance: `${blog_base_path}/freelance`,
        personal: `${blog_base_path}/personal`
    },
    lists: {
        reading: `${lists_base_path}/reading`
    }
}

export default function NavigationPreloadManager() {
    return (
        <BrowserRouter>
            <Switch key="switch">
                <Route exact path="/" component={ProfessionalBlog} />
                <Route path="/popular" component={Popular} />
                <Route path={path_config_data.blog.business} component={BusinessBlog} />
                <Route path={path_config_data.blog.personal} component={PersonalBlog} />
                <Route path="/new" component={NewPage} />
                <Route path={path_config_data.blog.freelance} component={FreelanceBlog} />
                <Route path={path_config_data.lists.reading} component={ReadingLists} />
                <Route path="/topics" component={Topics} />
                <Route path="/author" component={Author} />
            </Switch>
        </BrowserRouter>
    )
}