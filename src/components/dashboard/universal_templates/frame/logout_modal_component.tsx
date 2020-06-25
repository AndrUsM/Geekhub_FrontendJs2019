import React, { Component } from 'react';
import { base_class } from './universal_templates';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout as reduxLogoutAction } from '../../../redux/auth/actions';

type LogoutWindowState = {
    open: boolean,
    id: string
}

class LogoutModalWindow extends Component<{}, LogoutWindowState>{
    constructor(props:{}){
        super(props);

        this.state = {
            open: false,
            id: localStorage.getItem("user_id") as string
        }
    }

    onOpenModal(){
        this.setState({
            open: true
        })
    }
    onCloseModal(){
        this.setState({
            open: false
        })
    }

    render(){
        const { open } = this.state;
        return (
            <div className="modal-window">
                <FontAwesomeIcon
                    icon = { faChevronDown }
                    className = { base_class }
                    onClick = { () => {
                        this.setState({
                            open: true
                        })
                    } }
                />
                <Modal center open = { open } onClose = { () =>  {
                    this.setState({
                        open: false
                    })
                } }>
                    <div className="modal-window__flex-container_column">
                        <div className="modal-window__flex-container">
                            <p className = "text_header color_base">You really want to logout?</p>
                        </div>
                        {/* <hr/> */}
                        <div className = "modal-window__flex-container text_center">
                            <Link to = "/"
                                className = "link_orange text_header"
                                onClick = { () => {
                                    reduxLogoutAction().clearLocalStorage();
                                } }
                            >Log out</Link>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps (state:any) {
    return {
      user: state
    }
}
export default connect(mapStateToProps)(LogoutModalWindow);