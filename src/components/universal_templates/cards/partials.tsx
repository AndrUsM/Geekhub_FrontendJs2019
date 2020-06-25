import React from 'react';
import { class_center } from './constants';
import { CardComponentPropsType, ImageComponentPropsType } from './types';

export function Author(props: CardComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            style={props.style}
            className=
            {
                props.className ?
                    `${props.className} ${class_name_center} card__author` :
                    `${class_name_center} card__author`
            }>
            {props.children}
        </div>
    )
}

export function Body(props: CardComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            style={props.style}
            className=
            {
                props.className ?
                    `${props.className} ${class_name_center} card__body` :
                    `${class_name_center} card__body`
            }>
            {props.children}
        </div>
    )
}

export function Header(props: CardComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            style={props.style}
            className=
            {
                props.className ?
                    `${props.className} ${class_name_center} card__header` :
                    `${class_name_center} card__header`
            }>
            {props.children}
        </div>
    )
}

export function Image(props: ImageComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            className={
                props.className ?
                    `${props.className} ${class_name_center} card__image` :
                    `${class_name_center} card__image`}>
            <img
                src={props.src}
                alt={props.alt}
                className="card__image_tag"
            />
        </div>
    )
}

export function Title(props: CardComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            className={
                props.className ?
                    `${props.className} ${class_name_center} card__title` :
                    `${class_name_center} card__title`}
            style={props.style}>
            {props.children}
        </div>
    )
}

export function Wrapper(props: CardComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <article
            className={
                props.className ?
                    `${props.className} ${class_name_center} card__grid-wrapper` :
                    `${class_name_center} card__grid-wrapper`}>
            {props.children}
        </article>
    )
}

export function ListWrapper(props: {
    id?: string,
    children: any,
    className?: string
}) {
    return (
        <div
            className={props.className}
            key={props.id}
        >
            {props.children}
        </div>
    )
}