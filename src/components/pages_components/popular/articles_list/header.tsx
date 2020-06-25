import React from 'react';
import ButtonLink from '../../../universal_templates/buttons/link';

export type ArticleListType = Array<{
    text: string,
    href: string
}>

export const links: ArticleListType = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "Reading list",
        href: "/"
    },
    {
        text: "Popular",
        href: "/popular"
    },
]

export default function (props: {
    links: ArticleListType
}) {
    return (
        <ul className="display_flex display_flex_row display_flex_justify-content-start">
            {
                props.links.map((value, index) => {
                    return (
                        <ButtonLink
                            className={
                                index === (props.links.length - 1) ? "link_section" : "link_section link_section_dash"
                            }
                            key={index}
                            href={value.href}>
                            {value.text}
                        </ButtonLink>
                    )
                })
            }
        </ul>
    )
}