import React from 'react';

export enum FormMethod {
    "POST",
    "GET",
    "PUT",
    "DELETE"
}

export function SumbitForm(props: {
    children?: React.ReactNode,
    action?: FormMethod,
    method?: string,
    center?: boolean
}) {
    return (
        <form
            className={
                props.center ?
                    "form_centered_horizontal form_submit" : "form_submit"
            }
            action={
                props.action ? FormMethod[props.action] : ""
            }
            method={props.method ? props.method : ""}>
            {
                props.children ?
                    props.children : null
            }
        </form>
    )
}