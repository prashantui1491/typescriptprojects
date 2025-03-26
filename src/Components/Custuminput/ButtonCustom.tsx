import { type ComponentPropsWithoutRef } from "react"

type anchorPropType = ComponentPropsWithoutRef< `a`> & {
    href?: never
} // built in props



type buttonPropType = ComponentPropsWithoutRef <`button`> & {
    href:string
}

function isAnchorProps(props:anchorPropType | buttonPropType): props is anchorPropType{
    return `href` in props
}



export default function ButtonCustom(props: anchorPropType | buttonPropType ) {

    if(isAnchorProps(props)){
        return <a className="button" {...props}></a>

    }

    return <button className="button" {...props}></button>
}