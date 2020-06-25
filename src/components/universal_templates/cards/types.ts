export type CardComponentPropsType = {
    className?: string,
    style?: React.CSSProperties,
    children?: string | any
    center?: boolean
}

export interface ImageComponentPropsType extends CardComponentPropsType {
    src: string,
    alt: string
}