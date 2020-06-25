import React, { Component, RefObject } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./menu.scss";

type MenuPropsState = {
    className?: string,
    button_ref: RefObject<HTMLButtonElement>,
    children?: any
}

type MenuStateProps = {
    open: boolean,
    class_name: string,
}

export default class extends Component<MenuPropsState, MenuStateProps>{
    constructor(props: MenuPropsState) {
        super(props);

        this.state = {
            open: false,
            class_name: "menu_status-close"
        }
    }

    componentDidMount() {
        this.props.button_ref.current?.addEventListener("click", (e) => {
            e.preventDefault();

            this.toggleMenu();
        })
    }

    toggleMenu() {
        if (this.state.open) {
            this.setState({
                open: false,
                class_name: "menu_status-close"
            })
        } else {
            this.setState({
                open: true,
                class_name: "menu_status-open"
            })
        }
    }

    render() {
        let class_name = `menu animated slideIn ${this.state.class_name}`
        return (
            <article className={class_name}>
                <div className="menu__wrapper">
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="button_close"
                        onClick={
                            () => {
                                this.setState({
                                    open: false,
                                    class_name: "menu_status-close"
                                })
                            }
                        }
                    />
                    {this.props.children}
                </div>
            </article>
        )
    }
}