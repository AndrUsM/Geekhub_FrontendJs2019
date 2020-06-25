import React, { Component } from 'react';
import { MessagerState } from './types';
import { MessagesHeader } from '../headers/headers';

import Users from './users/users_list';
import Messages from './messages/messages';
import CurrentUser from './current_user/current_user';

import { Header, SideBar } from '../universal_templates/frame/universal_templates';

import Fetcher from '../../Fetcher';
import Preloader from '../universal_templates/preloader';

export default class Messager extends Component <{}, MessagerState> {
    constructor(props: any){
        super(props);
        this.get_thread_server_data();

        this.state = {
            thread: [],
            thread_amount: 0,
        }

        document.title = "Messages";
    }

    async get_thread_server_data(){
        const thread_response: any = await new Fetcher().get(`api/threads?sort=desc`, 'access')
            .then(response => { return response })
        if(thread_response.status > 199 && thread_response.status < 400){
            this.setState({
                thread: thread_response.data,
                thread_amount: thread_response.data.length
            })
        }
    }

    render(){
        let { thread } = this.state;
        if(this.state.thread.length){
            return [
                <Header/>,
                <div className="main_content__wrapper">
                    <SideBar/>
                    <main className="main_content">
                        <MessagesHeader inbox = {thread.length}/>
                        <section className = "main_content__section">
                            <Users thread = { this.state.thread }/>
                                <Messages/>
                            <CurrentUser/>
                        </section>
                    </main>
                </div>
            ]
        }else{
            return <Preloader/>
        }
    }
}