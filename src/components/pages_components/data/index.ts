import { faFacebook, faTwitter, faInstagram, faVk, faPinterest, IconDefinition } from '@fortawesome/free-brands-svg-icons';

export const social_links_data: Array<{
    icon: IconDefinition,
    href: string
}> = [
    {
        icon: faVk,
        href: "https:/vk.com"
    },
    {
        icon: faPinterest,
        href: "https://www.pinterest.com"
    },
    {
        icon: faInstagram,
        href: "https://www.instagram.com"
    },
    {
        icon: faTwitter,
        href: "https://twitter.com"
    },
    {
        icon: faFacebook,
        href: "https://www.facebook.com"
    },
]

export const nav_links_data: Array<{
    text: string,
    href: string
}> = [
    {
        text: "Popular",
        href: "/popular"
    },
    {
        text: "New",
        href: "/new"
    },
    {
        text: "Reading list",
        href: "/list"
    },
    {
        text: "Topics",
        href: "/topics"
    },
    {
        text: "Subscribe",
        href: "/subscribe"
    },
]
