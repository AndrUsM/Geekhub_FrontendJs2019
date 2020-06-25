import React from 'react';
import ButtonLink from '../../../universal_templates/buttons/link';

export default function (props:{
    href: string
}) {
    return (
        <ButtonLink
            href = { props.href }
            className="button_element button_element_color-gray button_element_hover">
            View All
        </ButtonLink>
    )
}