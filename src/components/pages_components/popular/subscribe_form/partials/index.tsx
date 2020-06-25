import React from 'react';

export function SubmitInput(props: {
    type?: string,
    className?: string,
    placeholder?: string
}) {
    return (
        <input
            placeholder = {
                props.placeholder? 
                    props.placeholder : ""
            }
            className={
                props.className ? `${props.className} input_submit` : 'input_submit'
            }
            type={
                props.type ? props.type : "text"
            } />
    )
}

export function SubmitButton(props: {
    className?: string,
    text?: string
}) {
    return (
        <button className="button_sumbit">
            {props.text ? props.text : "Subscribe"}
        </button>
    )
}