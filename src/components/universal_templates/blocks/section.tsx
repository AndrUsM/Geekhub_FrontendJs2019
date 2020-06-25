import React from 'react';

export default function (props: {
    children?: any
    className?: string,
    indent?: boolean
}) {
    let base_class: string = "block__element";
    let class_name = ""
    if (props.indent) {
        class_name = `${base_class}_indent`
    }
    else {
        class_name = `${base_class}`
    }

    return (
        <section className={
            props.className ?
                `${class_name} ${props.className}` :
                class_name
        }>
            {props.children}
        </section>
    )
}