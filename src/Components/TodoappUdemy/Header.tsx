import { type ReactNode } from "react"

interface HeaderPropsTyeps{
   image: {
    src: string,
    alt: string
   }
    children: ReactNode


}
export default function Header({image, children}: HeaderPropsTyeps ){

    return(
        <header>
            <img src= {image.src} alt= {image.alt}/>
            {/* alternative to above line <img {...image}/> */}
            {children}
        </header>
    )

}