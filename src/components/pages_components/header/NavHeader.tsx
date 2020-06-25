import React, { createRef, RefObject } from 'react';
import SiteLogo from '../../universal_templates/buttons/site_logo';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SocialIconGray } from '../../universal_templates/buttons/social_icons';
import { nav_links_data } from '../data';
import NavLink from '../../universal_templates/buttons/link';
import './Header.scss';
import SideMenu from "../../universal_templates/menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
    const nav_button_ref: RefObject<HTMLButtonElement> = createRef();
    return (
        <header className="header header_background-white">
            <div className="header-logo">
                <SiteLogo color="black" />
            </div>
            <div className="header-social-block header_nav">
                <ul className="list_inline">
                    {
                        nav_links_data.map((value, index) => {
                            return (
                                <NavLink
                                    className="font_size-base list__element_header"
                                    key={index}
                                    href={value.href}
                                >{value.text}</NavLink>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="header-menu-block">
                <div className="menu-block list__element_header-responsive">
                    <button
                        className="button_social-gray"
                        ref={nav_button_ref}>
                        <FontAwesomeIcon
                            icon={faBars}
                        />
                    </button>

                </div>
                <div className="search-block">
                    <SocialIconGray icon={faSearch}/>
                </div>
            </div>
            <SideMenu button_ref={nav_button_ref}>
                {
                    nav_links_data.map((value, index) => {
                        return (
                            <NavLink
                                key={index}
                                className="list__element list__element-base"
                                href={value.href}>
                                {value.text}
                            </NavLink>
                        )
                    })
                }
            </SideMenu>
        </header>
    )
}