// Polymorphic component: we can resuse this component just by passing as eleemnt whoch will be built in html element. its like wrapper component.

import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react"

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode
} & ComponentPropsWithoutRef<T>

export default function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>){

    const Component = as || 'div'
    return(
        <Component {...props}>
            {children}
        </Component>
    )
}