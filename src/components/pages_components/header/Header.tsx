import React, { createRef, RefObject } from 'react';
import SiteLogo from '../../universal_templates/buttons/site_logo';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SocialIconWhite } from '../../universal_templates/buttons/social_icons';
import { social_links_data, nav_links_data } from '../data';
import './Header.scss';
import SideMenu from "../../universal_templates/menu";
import NavLink from '../../universal_templates/buttons/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
    const nav_button_ref: RefObject<HTMLButtonElement> = createRef();
    return (
        <header className="header header_background-violet">
            <div className="header-social-block">
                {
                    social_links_data.map((value, index) => {
                        return (
                            <SocialIconWhite
                                key={index}
                                href={value.href}
                                icon={value.icon}
                            />
                        )
                    })
                }
            </div>
            <div className="header-logo">
                <SiteLogo color="main"></SiteLogo>
            </div>
            <div className="header-menu-block">
                <div className="menu-block">
                    <button
                        className="button_social-white"
                        ref={nav_button_ref}>
                        <FontAwesomeIcon
                            icon={faBars}
                        />
                    </button>

                </div>
                <div className="search-block">
                    <SocialIconWhite icon={faSearch}></SocialIconWhite>
                </div>
            </div>
            <SideMenu button_ref={nav_button_ref}>
                {
                    nav_links_data.map((value, index) => {
                        return (
                            <NavLink 
                                key = {index}
                                className = "list__element list__element-base"
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