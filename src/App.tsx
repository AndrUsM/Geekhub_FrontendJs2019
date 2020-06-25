import React from 'react';
import Link from './components/universal_templates/buttons/link'
import SiteLogo, { }  from './components/universal_templates/buttons/site_logo'
import {SocialIconGray, SocialIconWhite} from './components/universal_templates/buttons/social_icons'

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
// https://www.npmjs.com/package/react-responsive-carousel
// for carousel

function App() {
    return (
        <div>
            <SiteLogo color = "gray"></SiteLogo>
            <SiteLogo color = "main"></SiteLogo>

            <Link href = "#">Link#1</Link>
            
            <SocialIconGray href = "" icon = { faFacebook }></SocialIconGray>
            <SocialIconGray icon = { faFacebook }></SocialIconGray>
        </div>
    )
}

export default App;
