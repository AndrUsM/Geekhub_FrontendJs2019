import React from 'react';
import { Link } from 'react-router-dom';

export type SiteLogoProps = {
    size?: string,
    color?: string // gray, main, black
}

function checkTextColor(color: string){
    switch(color){
        case "gray":
            return "button_logo-gray"
        case "main":
            return "button_logo-main"
        case "black":
            return "button_logo-black"
        default:
            return "button_logo-main"
    }
}

export default function SiteLogo(props: SiteLogoProps) {
    return (
        <Link
            className= { checkTextColor(props.color as string) }
            style={{
                fontSize: props.size || "",
                color: props.color || ""
            }}
            to="/">Bahram
        </Link>
    )
}