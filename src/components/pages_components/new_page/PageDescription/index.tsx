import React from 'react';
import Section from '../../../universal_templates/blocks/section';
import Text, { TextType } from '../../../universal_templates/text';
import { Body, Title } from '../../../universal_templates/cards/partials';

export type PageDescription = {
    title: string,
    desription: string,
    indent?: boolean
    className?: string
}

export default function (props: PageDescription) {
    return (
        <Section
            indent={
                props.indent ? true : false
            }
            className={props.className}
        >
            <Title className="margin-bottom-2">{props.title}</Title>
            <Body>
                <Text type={TextType.Subheader}>{props.desription}</Text>
            </Body>
        </Section>
    )
}