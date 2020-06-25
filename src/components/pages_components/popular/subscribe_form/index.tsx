import React from 'react';
import Section from '../../../universal_templates/blocks/section';
import { Header, Body } from '../../../universal_templates/cards/partials';
import { SubmitInput, SubmitButton } from './partials/';
import { SumbitForm } from './partials/form';

export default function (props: {
    indent?: boolean
}) {
    return (
        <Section
            indent={
                props.indent? true: false
            }>
            <article className="form_submit_text">
                <Header>Get free web design insights...</Header>
                <Body>In your inbox, every other week. And unsubscribe in a click, if you want.</Body>
            </article>
            <SumbitForm center>
                <SubmitInput type="email" placeholder="Your email..." />
                <SubmitButton />
            </SumbitForm>
        </Section>
    )
}