import { type ReactNode } from "react"

type HintmodePropTypes = {
    mode:  `hint`,
    children: ReactNode
}

type WarningpropTypes = {
    mode: `warning`,
    children: ReactNode,
    seviarity: `low` | `medium` | `high`
    
}

type InfoBoxtypes = HintmodePropTypes | WarningpropTypes

export default function InfoBox(props: InfoBoxtypes){
    const {children} = props

    if(props.mode === 'hint'){

        
        return(
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
           
        )
    }
const {seviarity} = props

    return(
        <aside className= {`infovox infobox-warning warning--${props.seviarity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
       
    )
}