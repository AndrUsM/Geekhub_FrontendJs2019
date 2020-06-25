import React, { Component } from 'react';
import { AllThreadStructure } from '../types';
import AddThreadComponent from './create_thead_component';
import Fetcher from '../../../Fetcher';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserFriends} from "@fortawesome/free-solid-svg-icons";
import typy from 'typy';
import moment from 'moment';
import { connect } from 'react-redux';

type ThreadProps = {
    thread: Array<any>
}

type UsersListState = {
    users_amount: number,
    users: Array<any>,
    users_name: Array<string | undefined>,

    thread: Array<any>,
    thread_messages: Array<any>,
    thread_amount: number
}

class UsersList extends Component <ThreadProps, UsersListState> {
    constructor(props:any){
        super(props)
        
        this.get_threads();
        this.get_users_server_data();
        this.state = {
            users: [],
            users_name: [],
            users_amount: 0,

            thread: [],
            thread_messages: [],
            thread_amount: 0
        }
    }

    async test(id:string){
        const test:any = await new Fetcher().get(`api/threads/messages/${id}`, "access")
        .then(response => { return response })
        if(test.status > 199 && test.status < 400){
            return (test.data[0].user.name)
        }
    }

    async get_users_server_data(){
        const users_response: any = await new Fetcher().get(`api/users/all`, 'access')
        .then(response => { return response })
        if(users_response.status > 199 && users_response.status < 400){
            this.setState({
                users: users_response.data,
                users_amount: users_response.data.length
            })
        }
    }

    async get_threads(){
        const thread_messages_response:any = await new Fetcher().get('api/threads?sort=desc', 'access')
            .then(response => { return response; })
            if(thread_messages_response.status > 199 && thread_messages_response.status < 400){
                this.setState({
                    thread: thread_messages_response.data,
                    thread_amount: thread_messages_response.data.length
                })
            }
    }

    async get_messages_thread(id:string){
        let response = await new Fetcher().get(`api/threads/messages/${id}?sort=desc`, 'access')
            .then(response => { return response.data })
        if(response.status > 199 && response.status < 400){
            this.setState({
                thread_messages: response.data
            })
        }
    }

    name_field(value:AllThreadStructure, index:number){
        return (
            <span className="main_content__item__header">
                { value.users[0].name }
            </span>
        )
    }

    user_field(value:AllThreadStructure){
        return (
            <li id = { value._id } key = { value._id } className = "main_content__item__wrapper main_content__list_item main_content__list__border"
                onClick = {
                    () => {
                        this.get_messages_thread(value._id);
                        
                    }
                }>
                <article className = "main_content__item__wrapper">
                    <div className = "main_content__flex_container main_content__flex_container_justify-content">
                        <div className="main_contnet__wrapper">
                            <span className = "main_content__item__photo">
                                <FontAwesomeIcon
                                    icon = { faUserFriends }
                                    size = "2x"
                                    className = "main_content__item__img_tag"
                                />
                            </span>
                            { 
                                value.users.map((users,index) => {
                                    if(index === 0){
                                        return this.name_field(value, index)
                                    }
                                }) 
                            }
                        </div>
                        <div className="main_contnet__wrapper">
                            <span className = "main_content__item__subheader color_blue text_base">{ moment(value.updated_at).fromNow() }</span>
                        </div>
                    </div>
                    <div className="main_content__item__flex_block main_content__indent">
                        <span className="main_content__item__base text_base">{ typy(value, "message.body").safeObject }</span>
                        <span></span>
                    </div>
                </article>
            </li>
        )
    }

    render(){
        if(this.state.users.length){
            return (
                <article className = "main_content__item box_shadow">
                    <AddThreadComponent/>
                    <ul className = "main_content__list__item">
                        { 
                            this.state.thread.map((value: AllThreadStructure) => {
                                return this.user_field(value)
                            }) 
                        }
                    </ul>
                </article>
            )
        }else{
            return (
                <div></div>
            )
        }
    }
}

function mapStateToProps (state:any) {
    return {
      messages: state
    }
}

export default connect(mapStateToProps)(UsersList);