import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { EventList } from './event_list';

export type IconPropsType  ={
    icon: IconProp,
    color?: string,
    background?: string,
    className?: string,
    size?: string
}

export interface ActionItemInterface extends IconPropsType {
    eventName: EventList,
    eventHander: Function
}