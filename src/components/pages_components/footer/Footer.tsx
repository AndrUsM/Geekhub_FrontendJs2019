import React from 'react';
import SiteLogo, { } from '../../universal_templates/buttons/site_logo';
// import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SocialIconGray } from '../../universal_templates/buttons/social_icons';
import './Footer.scss';
import { social_links_data } from '../data';



export default () => (
    <footer className="footer">
        <SiteLogo color="gray"></SiteLogo>
        <div className="footer-social-block">
            {
                social_links_data.map((value, index) => {
                    return (
                        <SocialIconGray
                            key={index}
                            icon={value.icon}
                            href={value.href}
                        />
                    )
                })
            }
        </div>
        <div className="footer-copyright">
            <p className="footer-copyright__text">All Rights Reserved 2018 BehindMars</p>
        </div>
    </footer>
)
